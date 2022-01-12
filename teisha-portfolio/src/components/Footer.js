import React from "react";
import Styled from "styled-components";


function Footer() {
    return (
        <>
        <SectionContainer>
            <NameIconContainer>
                <h3>TEI</h3>
                <h3>SHA.</h3>
            </NameIconContainer>
            <MadeWithContainer>
                <h3>Made With 💚 by Teisha McRae</h3>
            </MadeWithContainer>
            <LinksContainer>
            <a href="https://www.linkedin.com/in/teishamcrae/" target="_blank" rel="noreferrer noopener"><h3>LinkedIn</h3></a><br/>
            <a href="https://github.com/mcraeteisha" target="_blank" rel="noreferrer noopener"><h3>GitHub</h3></a>
            </LinksContainer>
        </SectionContainer>
        </>
    )
}

const SectionContainer = Styled.div
`
    padding-left: 5em;
    padding-top: 3em;
    margin-bottom: 1em;
    display: flex;
    justify-content: space-around;
`

const NameIconContainer = Styled.div
`
    line-height: 2.5em;
`

const MadeWithContainer = Styled.div
`
    text-transform: uppercase;
    display: flex;
    align-items: flex-end;
`

const LinksContainer = Styled.div
`
    text-transform: uppercase;
`


export default Footer;