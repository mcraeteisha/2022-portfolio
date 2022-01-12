import React from "react";
import Styled from "styled-components";
import TeishaResume from '../../assets/TeishaMcRae_Resume.pdf';



function BuildTogether() {
    return (
        <>
        <SectionContainer>
            <HeadingDiv>
                    <Heading>Let's Build Something Together</Heading>
            </HeadingDiv>
            <DescriptionDiv>
                <Description>
                    <p>Looking for a developer? Have a question? Just want to connect? Feel free to reach out!</p><br/>
                </Description>
            </DescriptionDiv>
            <ButtonDiv>
                <a href="mailto: mcraeteisha@gmail.com"><CtaButton>Email Me</CtaButton></a><br/>
                <a href={TeishaResume} download><CtaButton>Download My Resume</CtaButton></a>
            </ButtonDiv> 
        </SectionContainer>
        </>
    )
}

const SectionContainer = Styled.div
`
    background-color: var(--accent-color);
`

const HeadingDiv = Styled.div
`
    padding-top: 5em;
    padding-left: 5em;
    padding-bottom: 2em;

`

const Heading = Styled.h2
`
`

const Description = Styled.h4
`
`

const DescriptionDiv = Styled.div
`
    padding-left: 5em;
`

const ButtonDiv = Styled.div
`
    padding-left: 5em;
    padding-bottom: 2em;
`

const CtaButton = Styled.button
`
    background-color: var(--primary-color);
    color: var(--white);
    &:hover{
        background:var(--emphasis-color);
        color: var(--primary-color);
    }
    margin-bottom: 1em;
`

export default BuildTogether;