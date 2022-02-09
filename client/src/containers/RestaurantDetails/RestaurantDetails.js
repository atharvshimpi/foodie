import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux"; 
import { useMediaQuery } from "react-responsive";

import { fetchRestaurant } from "../../actions/restaurantActions";
import { fetchFoodByRestaurant } from "../../actions/foodActions";
import { demoFoodData } from "../../data/food/index";
import FoodCard from "../../components/Cards/FoodCard";
import SidebarRestaurantDetailsNav from "../../components/Sidebar/SidebarRestaurantDetailsNav";

import Template from "../../images/templates/foodTemplate.jpg";
import { FiPercent } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";
import "./style.css";

/**
* @author
* @function RestaurantDetails
**/

const RestaurantDetails = (props) => {
    const { id } = useParams();
    const { restaurantDetails } = useSelector(state => state.restaurant);
    const { foodByRestaurant} = useSelector(state => state.food);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch( fetchRestaurant(id) );
        dispatch( fetchFoodByRestaurant(id) );
    }, [dispatch, id]);

    if(!restaurantDetails) return null;
    if(!foodByRestaurant) return null;

    const finalFoodByRestaurant = foodByRestaurant.length === 0 ? demoFoodData.slice(0, 5) : foodByRestaurant;
    
    return(
        <div className="restaurant-details-container">
            <div className="restaurant-details-header">
                <img className="restaurant-details-img" src={ (restaurantDetails.restaurantPoster) ? 'http://localhost:5000/' + restaurantDetails.restaurantPoster : Template } alt={restaurantDetails.title} />
                <div className="restaurant-details-info"> 
                    <h1 className="restaurant-details-title">{restaurantDetails.title || 'Demo Data'}</h1>
                    <div className="restaurant-details-subinfo1">
                        <div className="restaurant-details-tags">{restaurantDetails.tags || 'Alpha, Beta, Gamma, Delta'}</div>
                        <div className="restaurant-details-tags">{restaurantDetails.address}, {restaurantDetails.location}</div>
                    </div>
                    <div className="restaurant-details-subinfo2">
                        <div className="restaurant-details-subinfo2-container">
                            <div className="restaurant-details-subinfo2-content">
                                <span className="restaurant-details-subinfo2-title"><span className="restaurant-details-subinfo2-star"><AiFillStar /></span>{restaurantDetails.rating === 0 ? '--' : restaurantDetails.rating}</span>
                                <span className="restaurant-details-subinfo2-p">20+ Ratings</span>
                            </div>
                        </div>                        
                        <div className="restaurant-details-subinfo2-container">
                            <div className="restaurant-details-subinfo2-content">
                                <span className="restaurant-details-subinfo2-title">{restaurantDetails.eta} mins</span>
                                <span className="restaurant-details-subinfo2-p">Delivery Time</span>
                            </div>
                        </div>                        
                        <div className="restaurant-details-subinfo2-container">
                            <div className="restaurant-details-subinfo2-content">
                                <span className="restaurant-details-subinfo2-title">&#8377; {restaurantDetails.avgcost}</span>
                                <span className="restaurant-details-subinfo2-p">Cost for two</span>
                            </div>
                        </div>    
                    </div>
                </div>
                <div className="restaurant-details-offer">
                    <div className="restaurant-details-offer-border">
                        <div className="restaurant-details-offer-title">OFFER</div>
                        <div className="restaurant-details-offer-info">
                            <div className="restaurant-details-offer-info-body">
                                <span className="restaurant-details-offer-icon"><FiPercent /></span>
                                <div className="restaurant-details-offer-content">{restaurantDetails.offerPercentage}% off up to ₹{restaurantDetails.offerMaxBound} | Use code {restaurantDetails.offerCode}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="restaurant-details-main-content">
                { !isMobile && <SidebarRestaurantDetailsNav /> }
                <div className="restaurant-details-main-column"> 
                    <div id="recommended" className="food-items">
                        {
                            finalFoodByRestaurant.map((food, key) => { 
                                return (
                                    food.category === 'recommended' ? <FoodCard key={key} food={food} /> : null
                                )
                            })
                        }
                    </div>
                    <div id="trynew" className="food-items">
                        {
                            finalFoodByRestaurant.map((food, key) => { 
                                return (
                                    <FoodCard key={key} food={food} />
                                )
                            })
                        }
                    </div>
                </div>
                { !isMobile && <SidebarRestaurantDetailsNav /> }
            </div>
        </div>
    );
}

export default RestaurantDetails;