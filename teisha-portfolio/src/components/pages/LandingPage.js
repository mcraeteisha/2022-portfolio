import React from 'react';
import NavBar from "../../components/NavBar";
import Styled from "styled-components";


function LandingPage() {
    return(
        <>
            <NavBar />
            <LeadInContainer>
                <LeadIn>
                    <h1>I'm Teisha McRae—software developer, QA specialist, & curious tinkerer.</h1>
                </LeadIn>
            </LeadInContainer>
        </>
    )
};

const LeadInContainer = Styled.div
 `
 padding: 5em;
 `

const LeadIn = Styled.h1
 `
 letter-spacing: 0.15em;
 `

export default LandingPage;