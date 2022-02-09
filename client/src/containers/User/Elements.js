import styled from 'styled-components';

export const UserContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    min-height: calc(100vh - 60px);
    background: #e9ecee;
    margin-top: 60px;
`

export const UserCardContainer = styled.div`
    width: 100%;
    height: auto;
`

export const UserCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: calc(100% - 20px);
    height: auto;
    background: #fff;
    margin: 10px;
`

export const UserCardHeading = styled.h1`
    color: #333;
    margin-left: 2px;
`

export const UserCardBackground = styled.span`
    background: rgba(252,128,25,0.22);
    padding: 3px 5px 5px 5px;
    border-radius: 5px;
`

export const UserCardPayment = styled.span`
    margin-left: 10px;
    color: gray;
    font-size: 20px;
    font-weight: 700;
`

export const UserCardSubContainer = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`