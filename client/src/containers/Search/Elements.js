import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    min-height: calc(100vh - 60px);
    background: #e9ecee;
    margin-top: 60px;
`

export const SearchBarContainer = styled.div`
    display: flex;    
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 10vh;
    margin: -100px 0 40px;
    width: 100%;
    position: sticky;
    top: 100px;
`

export const SearchBar = styled.input`
    width: 50%;
    height: 40px;
    outline: none;
    border: 0;
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Raleway';

    &:focus {
        box-shadow: 0 1px 8px rgba(252,128,25,0.92);
    }
`

export const SearchContent = styled.div`

`