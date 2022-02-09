import React from "react";
import { useHistory } from "react-router-dom";

import { BiFoodTag } from "react-icons/bi";
import { FoodCardContainer, FoodCardContent, FoodCardBorderBottom, FoodCardSubContent, FoodCardSubContentLeft, FoodCardSubContentIcon, FoodCardSubContentTitle, FoodCardSubContentCost, FoodCardSubContentDescription, FoodCardSubContentRight, FoodCardSubContentImageContainer, FoodCardSubContentImage, FoodCardSubContentAddButton } from "./Elements";
import Food from "../../images/templates/foodTemplate2.jpg";

/**
* @author
* @function FoodCard
**/


const FoodCard = ({ food }) => {
    const history = useHistory();

    const toggleAddToCart = () => {
        history.push(`/cart/${ food.parentRestaurant._id }/${food._id}`)
    }

    return(
        <FoodCardContainer>
            <FoodCardContent>
                <FoodCardSubContent>
                    <FoodCardSubContentLeft>
                        <FoodCardSubContentIcon veg={food.veg}><BiFoodTag /></FoodCardSubContentIcon>
                        <FoodCardSubContentTitle>{food.title}</FoodCardSubContentTitle>
                        <FoodCardSubContentCost>{food.cost}</FoodCardSubContentCost>
                        <FoodCardSubContentDescription style={{ whiteSpace: 'break-spaces' }}>{food.description}</FoodCardSubContentDescription>
                    </FoodCardSubContentLeft>
                    <FoodCardSubContentRight>
                        <FoodCardSubContentImageContainer>
                            <FoodCardSubContentImage src={ (food.foodImage) ? 'http://localhost:5000/' +  food.foodImage : Food } alt="food1" />
                        </FoodCardSubContentImageContainer>
                        <FoodCardSubContentAddButton onClick={ toggleAddToCart } disabled={food.title === 'Demo Data'} >ADD</FoodCardSubContentAddButton>
                    </FoodCardSubContentRight>
                </FoodCardSubContent>
            </FoodCardContent>
            <FoodCardBorderBottom></FoodCardBorderBottom>
        </FoodCardContainer>
    );
}

export default FoodCard;