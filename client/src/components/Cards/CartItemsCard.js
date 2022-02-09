import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DeviceUUID } from "device-uuid";

import { addToCart, deleteFromCart } from "../../actions/cartActions";

import Food from "../../images/templates/foodTemplate2.jpg";
import { BiFoodTag } from "react-icons/bi";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { CartItemsContainer, CartItemsContent, CartItemsSubContent, CartItemsSubContentLeft, CartItemsSubContentRestaurant, CartItemsSubContentIcon, CartItemsSubContentTitle, CartItemsSubContentCost, CartItemsSubContentDescription, CartItemsSubContentMiddle, CartItemsSubContentRight, CartItemsSubContentImageContainer, CartItemsSubContentImage, CartItemsSubContentButtonContainer, CartItemsSubContentRed, Rupee } from "./Elements";

/**
* @author
* @function CartItemsCard
**/

const CartItemsCard = ({ food }) => {
    // var deviceId = new DeviceUUID().get();
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteFromCartHandler = (foodId) => {
        dispatch( deleteFromCart(foodId) )
    }
    return(
        <CartItemsContainer isDescription={food.description}>
            <CartItemsContent>
                <CartItemsSubContent>
                    <CartItemsSubContentLeft>
                        <CartItemsSubContentIcon veg={food.veg}><BiFoodTag /><CartItemsSubContentRestaurant>{food.parentRestaurant.title}</CartItemsSubContentRestaurant></CartItemsSubContentIcon>
                        <CartItemsSubContentTitle>{food.title}</CartItemsSubContentTitle>
                        <CartItemsSubContentCost><Rupee>&#8377;</Rupee>{" "}{food.cost} / item</CartItemsSubContentCost>
                        <CartItemsSubContentDescription>{food.description.substring(0, 25)}{(food.description.length > 25) ? '...' : null}</CartItemsSubContentDescription>
                    </CartItemsSubContentLeft>
                    <CartItemsSubContentMiddle>
                        <CartItemsSubContentImageContainer>
                            <CartItemsSubContentImage src={ (food.foodImage) ? 'http://localhost:5000/' +  food.foodImage : Food } alt={food.title} />
                        </CartItemsSubContentImageContainer>
                    </CartItemsSubContentMiddle>
                    <CartItemsSubContentRight>
                        <CartItemsSubContentButtonContainer>
                            <FormControl>
                                <InputLabel >Quantity</InputLabel>
                                <Select
                                    value={food.quantity}
                                    onChange={ (e) => { dispatch( addToCart(food.parentRestaurant._id, food._id, Number(e.target.value), history) ) } }
                                >
                                    {
                                        [...Array(10).keys()].map(x => (
                                            <MenuItem value={x + 1}>{x + 1}</MenuItem>
                                        ))
                                    }
                                </Select>
                            </FormControl>
                        </CartItemsSubContentButtonContainer>
                        <CartItemsSubContentTitle>Cost  <CartItemsSubContentCost><Rupee>&#61; &#8377;</Rupee>{food.quantity*food.cost}</CartItemsSubContentCost></CartItemsSubContentTitle>
                        <IconButton onClick={ () => deleteFromCartHandler(food._id) }>
                            <CartItemsSubContentRed><DeleteIcon /></CartItemsSubContentRed>
                        </IconButton>
                    </CartItemsSubContentRight>
                </CartItemsSubContent>
            </CartItemsContent>
        </CartItemsContainer>
    );
}

export default CartItemsCard;