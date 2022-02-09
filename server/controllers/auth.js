const bcrypt = require("bcryptjs");
const User = require("../models/user.js");

const generateToken = require("../utils/generateToken.js");
const validateLoginInput = require("../validation/login.js");
const validateRegisterInput = require("../validation/register.js");

// register logic
exports.register = (req, res) => {
    // Form validation
    const { errors, isValid } = validateRegisterInput(req.body);
    // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user) return res.status(400).json({
            emailExists: 'Email already exists'
        });

        const {
            name, 
            email, 
            password,
            agreedTerms
        } = req.body;

        const newUser = new User({ 
            name, 
            email, 
            password,
            agreedTerms,
        })
        
        // Hash password before saving in database
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => res.json(newUser))
                .catch(err => console.log(err));
            });
          });
        
    });
}

// login logic
exports.login = (req, res) => {
    // Form validation
    const { errors, isValid } = validateLoginInput(req.body);
    // Check validation
        if (!isValid) {
            return res.status(400).json(errors);
        }
    const { rememberMe } = req.body;
    User.findOne({ email: req.body.email })
    .exec((error, user) => {
        if(user) {
            if(bcrypt.compareSync(req.body.password, user.password)) {
                const { 
                    _id, 
                    name, 
                    email,
                    role
                } = user;
                
                res.status(200).json({
                    _id, 
                    name, 
                    email,
                    role,
                    rememberMe,
                    token: generateToken(_id, rememberMe)
                })
            } else {
                return res.status(400).json({
                    passwordIncorrect: 'Password Incorrect!'
                })
            }
        } else {
            return res.status(400).json({
                emailNotFound: 'Email not found'
            })
        }
    });
}