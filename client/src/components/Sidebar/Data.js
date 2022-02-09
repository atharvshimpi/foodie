import { AiOutlineFire } from "react-icons/ai";
import { FaLeaf } from "react-icons/fa";
import { BsEggFill } from "react-icons/bs";
import { BiBone } from "react-icons/bi";
import { AiFillCrown } from "react-icons/ai";
import { AiOutlineArrowDown } from "react-icons/ai"; 

export const SidebarRestaurantsData = [
    {
        title: 'Offers For You',
        id: 'offersforyou',
        icon: <AiOutlineFire />,
        link: 'offersforyou',
        offset: -60
    },
    {
        title: 'Vegetarian ',
        id: 'veg',
        icon: <FaLeaf />,
        link: 'veg',
        offset: -60
    },
    {
        title: 'Eggetarian ',
        id: 'egg',
        icon: <BsEggFill />,
        link: 'egg',
        offset: -58
    },
    {
        title: 'Non-Vegetarian ',
        id: 'nonveg',
        icon: <BiBone />,
        link: 'nonveg',
        offset: -58
    },
    {
        title: 'Premium ',
        id: 'premium',
        icon: <AiFillCrown />,
        link: 'premium',
        offset: -58
    },
    {
        title: 'See All ',
        id: 'seeall',
        icon: <AiOutlineArrowDown />,
        link: 'seeall',
        offset: -58
    },
];

export const SidebarRestaurantDetailsNavData = [
    {
        title: 'Recommended',
        link: 'recommended'
    },
    {
        title: 'Try New',
        link: 'trynew'
    },
    {
        title: 'Combo',
        link: 'combo'
    },
    {
        title: 'Veg Only',
        link: 'vegonly'
    },
    {
        title: 'Non Veg Only',
        link: 'nonvegonly'
    },
];