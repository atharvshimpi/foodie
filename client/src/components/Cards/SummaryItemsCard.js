import React from "react";

import Food from "../../images/templates/foodTemplate2.jpg";
import { BiFoodTag } from "react-icons/bi";
import { CartItemsContainer, CartItemsContent, CartItemsSubContent, CartItemsSubContentLeft, CartItemsSubContentRestaurant, CartItemsSubContentIcon, CartItemsSubContentTitle, CartItemsSubContentP, CartItemsSubContentCost, CartItemsSubContentMiddle, CartItemsSubContentRight, CartItemsSubContentImageContainer, CartItemsSubContentImage, CartItemsSubContentButtonContainer, Rupee } from "./Elements";

/**
* @author
* @function SummaryItemsCard
**/

const SummaryItemsCard = ({ food }) => {

    return(
        <CartItemsContainer isDescription={food.description}>
            <CartItemsContent>
                <CartItemsSubContent>
                    <CartItemsSubContentLeft>
                        <CartItemsSubContentIcon veg={food.veg}><BiFoodTag /><CartItemsSubContentRestaurant>{food.parentRestaurant.title}</CartItemsSubContentRestaurant></CartItemsSubContentIcon>
                        <CartItemsSubContentP>( {food.parentRestaurant.address} - {food.parentRestaurant.location} )</CartItemsSubContentP>
                        <CartItemsSubContentTitle>{food.title}</CartItemsSubContentTitle>
                        <CartItemsSubContentCost><Rupee>&#8377;</Rupee>{" "}{food.cost} / item</CartItemsSubContentCost>
                        { /*<CartItemsSubContentDescription>{food.description.substring(0, 25) || 'polop'}{(food.description.length || ['aop', ['ap']] > 25) ? '...' : null}</CartItemsSubContentDescription> */ }
                    </CartItemsSubContentLeft>
                    <CartItemsSubContentMiddle>
                        <CartItemsSubContentImageContainer>
                            <CartItemsSubContentImage src={ (food.foodImage) ? 'http://localhost:5000/' +  food.foodImage : Food } alt={food.title} />
                        </CartItemsSubContentImageContainer>
                    </CartItemsSubContentMiddle>
                    <CartItemsSubContentRight>
                        <CartItemsSubContentButtonContainer>
                            <CartItemsSubContentTitle>Quantity  <CartItemsSubContentCost><Rupee>&#61; </Rupee>{food.quantity}</CartItemsSubContentCost></CartItemsSubContentTitle>
                        </CartItemsSubContentButtonContainer>
                        <CartItemsSubContentTitle>Cost  <CartItemsSubContentCost><Rupee>&#61; &#8377;</Rupee>{food.quantity*food.cost}</CartItemsSubContentCost></CartItemsSubContentTitle>
                    </CartItemsSubContentRight>
                </CartItemsSubContent>
            </CartItemsContent>
        </CartItemsContainer>
    );
}

export default SummaryItemsCard;