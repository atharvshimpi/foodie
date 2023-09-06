import React from "react";
import { useHistory, useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { RestaurantCardContainer, RestaurantCardImageContainer, RestaurantCardImage, RestaurantCardTitle, RestaurantCardTags, RestaurantCardInfo, RestaurantCardRatingContainer, RestaurantCardRating, RestaurantCardETA, RestaurantCardAvgCost, RestaurantCardOffer } from "./Elements";
import restaurantTemplate from "../../images/templates/foodTemplate.jpg";

/**
* @author
* @function RestaurantCard
**/

const RestaurantCard = ({ restaurant }) => {
    const { area } = useParams();
    const history = useHistory();

    const openDetails = () => {
        history.push(`/${area}/restaurants/${restaurant.title.split(' ').filter(s => s).join('-')}/${restaurant._id}`);
    }

    return(
        <RestaurantCardContainer onClick={ openDetails }>
            <RestaurantCardImageContainer>
                <RestaurantCardImage src={ (restaurant.restaurantPoster) ? 'http://localhost:5000/' + restaurant.restaurantPoster : restaurantTemplate } alt={restaurant.title} />
            </RestaurantCardImageContainer>
            <RestaurantCardTitle>{restaurant.title.substring(0, 19)}{(restaurant.title.length > 19) ? '...' : null}</RestaurantCardTitle>
            <RestaurantCardTags>{restaurant.tags}</RestaurantCardTags>
            <RestaurantCardInfo>
                <RestaurantCardRatingContainer>
                    <FaStar style={{ color: '#fff', fontSize: '15px', marginRight: '4px', position: 'relative', top: '0px' }} />
                    <RestaurantCardRating>{restaurant.rating === 0 ? '--' : restaurant.rating}</RestaurantCardRating>
                </RestaurantCardRatingContainer>
                <RestaurantCardETA>{"- "}{restaurant.eta} MINS{" -"}</RestaurantCardETA>
                <RestaurantCardAvgCost>&#8377; {restaurant.avgcost} FOR TWO</RestaurantCardAvgCost>
            </RestaurantCardInfo>
            <RestaurantCardOffer>{restaurant.offerPercentage} % off | Use {restaurant.offerCode}</RestaurantCardOffer>
        </RestaurantCardContainer>
    );
}

export default RestaurantCard;