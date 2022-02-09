import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-elastic-carousel";

import { fetchRestaurantsByLocation } from "../../actions/restaurantActions";
import { demoRestaurantData } from "../../data/restaurants/index";
import SidebarRestaurants from "../../components/Sidebar/SidebarRestaurants";
import RestaurantCard from "../../components/Cards/RestaurantCard";

import waffle from "../../images/carousel/belgianWaffle.jpg";
import pizza from "../../images/carousel/pizzaHut.jpg";
import kfc from "../../images/carousel/kfc.jpg";
import noodles from "../../images/carousel/chineseFactory.jpg";
import biryani from "../../images/carousel/flavoursOfHyderabad.jpg";
import sizzler from "../../images/carousel/copaCabana.jpg";
import "./style.css";

/**
* @author
* @function Restaurants
**/

const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
];

const Restaurants = (props) => {
    const area = JSON.parse(localStorage.getItem('location'));
    const { restaurants } = useSelector(state => state.restaurant);
    const dispatch = useDispatch();

    const finalOffersForYou = restaurants.length === 0 ? demoRestaurantData : restaurants.slice(0, 5);
    const finalVeg = restaurants.length === 0 ? demoRestaurantData : restaurants.filter(rest => rest.category === 'veg');
    const finalEgg = restaurants.length === 0 ? demoRestaurantData : restaurants.filter(rest => rest.category === 'egg');
    const finalNonVeg = restaurants.length === 0 ? demoRestaurantData : restaurants.filter(rest => rest.category === 'nonveg');

    useEffect(() => {
        dispatch( fetchRestaurantsByLocation(area) );
    }, [dispatch, area]);

    return(
        <div className="container">
            <div className="header">
                {/* <h1 className="header-title"></h1> */}
                <Carousel className="carousel" breakPoints={breakPoints}>
                    <img className="carousel-img" src={waffle} alt="waffle" />
                    <img className="carousel-img" src={pizza} alt="pizza" />
                    <img className="carousel-img" src={kfc} alt="kfc" />
                    <img className="carousel-img" src={noodles} alt="noodles" />
                    <img className="carousel-img" src={biryani} alt="biryani" />
                    <img className="carousel-img" src={sizzler} alt="sizzler" />
                </Carousel>
            </div>
            <div className="main-content">
                <SidebarRestaurants />
                <div className="main-right">
                    <div id="offersforyou" className="right-content">
                        <h2 className="right-content-heading">Offers For You</h2>
                        <div className="card-container">
                            { finalOffersForYou.map((restaurant, key) => {
                                return (
                                    <RestaurantCard key={key} restaurant={restaurant} /> 
                                )
                            })}
                        </div>
                    </div>
                    <div id="veg" className="right-content">
                        <h2 className="right-content-heading">Vegetarian</h2>
                        <div className="card-container">
                            { finalVeg.map((restaurant, key) => {
                                return (
                                    <RestaurantCard key={key} restaurant={restaurant} /> 
                                )
                            })}
                        </div>
                    </div>
                    <div id="egg" className="right-content">
                        <h2 className="right-content-heading">Eggetarian</h2>
                        <div className="card-container">
                            { finalEgg.map((restaurant, key) => {
                                return (
                                    <RestaurantCard key={key} restaurant={restaurant} /> 
                                )
                            })}
                        </div>
                    </div>
                    <div id="nonveg" className="right-content">
                        <h2 className="right-content-heading">Non-Vegetarian</h2>
                        <div className="card-container">
                            { finalNonVeg.map((restaurant, key) => {
                                return (
                                    <RestaurantCard key={key} restaurant={restaurant} /> 
                                )
                            })}
                        </div>
                    </div>
                    <div id="premium" className="right-content">
                        <h2 className="right-content-heading">Premium</h2>
                        <div className="card-container">
                            { finalVeg.map((restaurant, key) => {
                                return (
                                    <RestaurantCard key={key} restaurant={restaurant} /> 
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Restaurants;