import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { useHistory } from "react-router-dom"; 

import { fetchEntityBySearch } from "../../actions/foodActions";

import FoodCard from "../../components/Cards/FoodCard";
import RestaurantCard from "../../components/Cards/RestaurantCard";
import { SearchContainer, SearchBarContainer, SearchBar, SearchContent } from "./Elements";

import { RadioGroup, FormControlLabel, Radio, withStyles, makeStyles } from "@material-ui/core";

/**
* @author
* @function Search
**/

const useStyles = makeStyles({
    radioButtonGroup: {
        display: 'flex',
        flexDirection: 'row'
    }
});

const Search = (props) => {
    const [search, setSearch] = useState('');
    const [option, setOption] = useState('');
    const { searchEntity } = useSelector(state => state.food);
    const area = JSON.parse(localStorage.getItem('location'));
    // const searchEntity = JSON.parse(localStorage.getItem('searchEntity'));
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();

    const handleSearch = () => {
        if(search.trim()) {
            dispatch( fetchEntityBySearch({search, option, area}) )
            history.push(`/search?search=${search || 'none'}&option=${option || 'none'}`);
        } else {
            history.push('/search')
        }
    }

    const handleKeyPress = (e) => {
        if(e.keyCode === 13) {
            handleSearch();
        }
    }

    return(
        <SearchContainer>
            <SearchBarContainer>
                <SearchBar 
                    name="search"
                    onKeyDown={ handleKeyPress }
                    onChange={ (e) => { setSearch(e.target.value) } } 
                    value={ search }
                />
                <RadioGroup className={classes.radioButtonGroup}>
                        <FormControlLabel 
                            value="food" 
                            control={
                                <OrangeRadio 
                                    onChange={ (e) => { setOption(e.target.value) } }
                                    value="food"
                                    id="food"
                                />
                            } 
                            label="Search By Food" 
                        />
                        <FormControlLabel 
                            value="restaurant" 
                            control={
                                <OrangeRadio
                                    onChange={ (e) => { setOption(e.target.value) } }
                                    value="restaurant"
                                    id="restaurant"
                                />
                            } 
                            label="Search By Restuarant" 
                        />
                    </RadioGroup>
            </SearchBarContainer>
            <SearchContent>
                { (option === 'food') ? (
                    search && searchEntity.map((food, key) => {
                        return (
                            <FoodCard key={key} food={food} />
                        )
                    })
                ) : (
                    search && searchEntity.map((restaurant, key) => {
                        return (
                            <RestaurantCard key={key} restaurant={restaurant} />
                        )
                    })
                ) }
            </SearchContent>
        </SearchContainer>
    );
}

export default Search;

const OrangeRadio = withStyles({
    root: {
      color: 'rgba(252,128,25,0.92)',
      '&$checked': {
        color: 'rgba(252,128,25,0.92)',
      },
    },
    checked: {},
  })((props) => <Radio color="default" {...props} />);