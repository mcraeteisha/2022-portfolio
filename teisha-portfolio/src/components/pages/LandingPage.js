import React from 'react';
import NavBar from "../../components/NavBar";
import Styled from "styled-components";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconContext } from "react-icons";


function LandingPage() {
    return(
        <>
            <NavBar />
            <LeadInContainer>
                <LeadIn>
                    <h1>I'm Teisha McRae—software developer, QA specialist, & curious tinkerer.</h1>
                </LeadIn>
            </LeadInContainer>
            <IconsContainer>
                <IconContext.Provider value={{ color: "#013328", size: "4em", className: "global-class-name" }}>
                    <LinkedInIcon>
                        <a href="https://www.linkedin.com/in/teishamcrae/" target="_blank" rel="noreferrer noopener"><FaLinkedinIn /></a>
                    </LinkedInIcon>
                    <GithubIcon>
                        <a href="https://github.com/mcraeteisha" target="_blank" rel="noreferrer noopener"><FaGithub /></a>
                    </GithubIcon>
                </IconContext.Provider>    
            </IconsContainer>
        </>
    )
};

const LeadInContainer = Styled.div
 `
 padding-left: 5em;
 padding-top: 5em;
 padding-right: 5em;
 `

const LeadIn = Styled.h1
 `
 letter-spacing: 0.15em;
 `

const IconsContainer = Styled.div
 `
 padding-left: 5em;
 padding-top: 2em;
 `

const LinkedInIcon = Styled.div
 `
 padding-right: 2em;
 display: inline-block;
 ` 

const GithubIcon = Styled.div
 `
 display: inline-block;
 `  

export default LandingPage;