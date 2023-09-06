import styled from "styled-components";

export const FooterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    background: rgb(51, 51, 51);
    overflow: hidden;
`

export const FooterHeading = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 50px;
`

export const FooterHr = styled.hr`
    background: gray;
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-width: 1px 0px 0px;
    border-right-style: initial;
    border-bottom-style: initial;
    border-left-style: initial;
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    border-image: initial;
    border-top-style: solid;
    border-top-color: rgba(0, 0, 0, 0.1);
`

export const FooterBar = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
`

export const FooterCopyright = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
`

export const FooterLeft = styled.div`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    width: 50%;
    -webkit-box-align: center;
    align-items: center;
`

export const FooterRight = styled.form`
    color: rgb(249, 249, 249);
`

export const FooterA = styled.a`
    font-size: 2.5rem;
    color: rgb(249, 249, 249);
`

export const FooterImg = styled.img`
    font-size: 2.5rem;
    color: rgb(249, 249, 249);
`

export const FooterH1 = styled.h1`
    color: rgb(249, 249, 249);
`

export const FooterEmail = styled.div`
    width: 100%;
    margin: 10px 0px;
`