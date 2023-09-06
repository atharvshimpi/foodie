import { FooterContainer, FooterHeading, FooterHr, FooterBar, FooterCopyright, FooterLeft, FooterRight, FooterA, FooterImg, FooterH1, 
    FooterEmail, FooterSubmit, FooterP } from "./Elements"

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterHeading>
                    <FooterLeft>
                        <FooterA>
                            <FooterImg src="https://foodiey.netlify.app/static/media/foodie.0a0468c2.png" alt="Foodie" width="200px" />
                        </FooterA>
                    </FooterLeft>
                    <FooterRight>
                        <FooterH1></FooterH1>
                        <FooterEmail></FooterEmail>
                        <FooterSubmit></FooterSubmit>
                        <FooterP></FooterP>
                    </FooterRight>
                </FooterHeading>
                <FooterHr />
                <FooterBar></FooterBar>
                <FooterHr />
                <FooterCopyright></FooterCopyright>
            </FooterContainer>
        </>
    )
}

export default Footer;