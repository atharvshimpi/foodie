import styled from "styled-components";

// Restaurant Card
export const RestaurantCardContainer = styled.div`
    margin: 5px 20px;
    padding: 20px 20px 57px;
    border: 1px solid rgba(403, 44, 63, 0.1);
    contain: content;
    cursor: pointer;

    &:hover {
        border-color: #333;
        box-shadow: 0 4px 7px 0 rgb(218 220 230 / 60%);
    }
`

export const RestaurantCardImageContainer = styled.div`

`

export const RestaurantCardImage = styled.img`
    width: 254px;
    height: 160px;
`

export const RestaurantCardTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    word-break: break-word;
`

export const RestaurantCardTags = styled.h3`
    color: #686b78;
    font-size: 13px;
`

export const RestaurantCardInfo = styled.div`
    display: flex;
    align-items: center;
`

export const RestaurantCardRatingContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 20px;
    width: 43px;
    padding: 2px 5px;
    background-color: #48c479;
    box-sizing: inherit;
    margin: 0 5px;
`

export const RestaurantCardRating = styled.h3` 
    color: #fff;
    font-size: 15px;
`

export const RestaurantCardETA = styled.h3`
    color: #686b78;
    font-size: 14px;
    margin: 0 5px;
`

export const RestaurantCardAvgCost = styled.h3`
    color: #686b78;
    font-size: 14px;
    margin: 0 5px;
`

export const RestaurantCardHr = styled.hr`
    width: 100%;
`

export const RestaurantCardOffer = styled.h1`
    font-size: 20px;
    font-weight: 700;
    word-break: break-word;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #8a584b;
    border-top: 1px solid #333;
    padding-top: 14px;
    margin-top: 14px;
`

// Food Card
export const FoodCardContainer = styled.div`
    position: relative;
    padding: 32px 16px 0;
`

export const FoodCardContent  = styled.div`
    padding-bottom: 14px;
`

export const FoodCardSubContent = styled.div`
    display: flex;
    justify-content: space-between;
`

export const FoodCardSubContentLeft = styled.div`
    max-width: calc(100% - 144px);
`

export const FoodCardSubContentIcon = styled.div`
    font-size: 1rem;
    vertical-align: middle;
    margin-top: -2px;
    display: inline-block;
    color: ${({veg}) => (veg) ? '#008000' : '#ad4728'};
`

export const FoodCardSubContentTitle = styled.h3`
    margin-right: 4px;
    font-size: 1.22rem;
    font-weight: 700;
    color: #3e4152;
    word-break: break-word;
`

export const FoodCardSubContentCost = styled.span`
    margin-right: 8px;
    font-weight: 400;
    color: #3e4152;
`

export const FoodCardSubContentDescription = styled.div`
    margin-top: 14px;
    line-height: 1.3;
    color: rgba(40, 44, 63, 0.45);
    width: 100%;
    letter-spacing: -0.3px;
    font-size: 1rem;
    font-weight: 700;
`

export const FoodCardSubContentRight = styled.div`
    position: relative;
    margin-left: 16px;
    min-width: 118px;
    height: 120px;
    font-size: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const FoodCardSubContentImageContainer = styled.div`

`

export const FoodCardSubContentImage = styled.img`
    width: 118px;
    height: 96px;
    object-fit: cover;
    border-radius: 6px;
`

export const FoodCardSubContentAddButton = styled.button`
    padding: 12px 20px;
    color: #60b246;
    border: 1px solid #d4d5d9;
    width: 118px;
    height: 50px;
    margin-top: 10px;
    cursor: pointer;
    transition: transform .5s cubic-bezier(0.22, 0.61, 0.36, 1);

    &:hover {
        box-shadow: 0 2px 8px #d4d5d9;
    }

    &:active {
        transform: scale(0.9);
    }
`

export const FoodCardBorderBottom = styled.div`
    border-bottom: 0.5px solid #d4d5d9;
    height: 1px;
    padding: 0 12px;
    margin: 20px 0;
`

// Cart Items Card
export const CartItemsContainer = styled.div`
    position: relative;
    padding: 32px 16px 0;
    padding-bottom: ${({isDescription}) => (isDescription) ? '0' : '17px'};
    background: #fff;
    margin-bottom: 10px;
    height: auto;
`

export const CartItemsContent  = styled.div`
    padding-bottom: 14px;
`

export const CartItemsSubContent = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const CartItemsSubContentLeft = styled.div`
    max-width: calc(100% - 144px);
`

export const CartItemsSubContentRestaurant = styled.span`
    margin: 0 10px;
    font-size: 1.2rem;
    font-weight: bolder;
    color: #333;
`

export const CartItemsSubContentIcon = styled.div`
    font-size: 1rem;
    vertical-align: middle;
    margin-top: -2px;
    display: inline-block;
    color: ${({veg}) => (veg) ? '#008000' : '#ad4728'};
`

export const CartItemsSubContentTitle = styled.h3`
    margin-right: 4px;
    font-size: 1.22rem;
    font-weight: 700;
    color: #3e4152;
    word-break: break-word;
`

export const CartItemsSubContentP = styled.span`
    font-size: 1rem;
    font-weight: 700;
    color: gray;
`

export const CartItemsSubContentCost = styled.span`
    margin-right: 8px;
    font-weight: 700;
    color: #3e4152;
    letter-spacing: 1px;
    font-family: Arial;
`

export const Rupee = styled.span`
    position: relative;
    top: 0px;
`

export const CartItemsSubContentDescription = styled.div`
    margin-top: 14px;
    line-height: 1.3;
    color: rgba(40, 44, 63, 0.45);
    width: 100%;
    letter-spacing: -0.3px;
    font-size: 1rem;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        margin-bottom: 14px;
    }
`

export const CartItemsSubContentMiddle = styled.div`

`

export const CartItemsSubContentRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-left: 16px;
    min-width: 118px;
    height: 120px;
    font-size: 0;

    @media screen and (max-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
    }
`

export const CartItemsSubContentImageContainer = styled.div`

`

export const CartItemsSubContentImage = styled.img`
    width: 118px;
    height: 96px;
    object-fit: cover;
    border-radius: 6px;
`

export const CartItemsSubContentButtonContainer = styled.div`
    display: flex;
    margin-top: -15px;

    @media screen and (max-width: 768px) {
        margin-right: 10px;
    }
`

export const CartItemsSubContentButton = styled.button`
    padding: auto;
    color: red;
    border: 1px solid #d4d5d9;
    width: 100px;
    height: 40px;
    margin-top: 10px;
    font-size: 20px;
    cursor: pointer;
    transition: transform .5s cubic-bezier(0.22, 0.61, 0.36, 1);

    &:hover {
        background: red;
        color: #efefef;
        box-shadow: 0 2px 8px #d4d5d9;
    }

    &:active {
        transform: scale(0.9);
    }
`

export const CartItemsBorderBottom = styled.div`
    border-bottom: 0.5px solid #d4d5d9;
    height: 1px;
    padding: 0 12px;
    margin: 20px 0;
`

export const CartItemsSubContentRed = styled.span`
    &:hover {
        color: red;
    }
`