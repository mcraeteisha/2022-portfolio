import React from 'react';
import Styled from "styled-components";
import Teisha from '../../images/teisha_headshot.jpg';


function BioPage() {
    return(
        <>
        <div>
            <HeadShotContainer>
                <Image src={Teisha} alt="Teisha-Headshot" style={{display: "inline-block"}}></Image>
            </HeadShotContainer> 
            <BioContainer>
                <Bio>
                    <p>I'm a curious, detail-oriented, and thoughtful tinkerer with a passion for coding. Building beautiful websites with sleek, responsive designs is what fuels me. </p><br/>
                    <p>In July 2021, I graduated from the UNC-Chapel Hill Full Stack Coding Bootcamp with an A average. During the program, I collaborated with my classmates to build full-stack web applications using HTML, CSS, JavaScript, React, and more. </p><br/>
                    <p>Currently, I’m a QA Lead at Written Word Media, tackling all things technical. I thrive on using my coding skills to add creative enhancements to marketing emails and webpages. My thirst for knowledge drives my knack for software bug discovery and root cause analysis.</p> <br/>
                    <p>I'm always striving to take my skills further!</p><br/>
                </Bio>     
            </BioContainer>
            <ButtonDiv>
                <a href="mailto: mcraeteisha@gmail.com"><button>Let's Work Together</button></a>
            </ButtonDiv>    
        </div> 
        <WorkHeaderDiv>
            <h1>What I've Been Working On</h1>
        </WorkHeaderDiv>   
        </>
    )
};

const BioContainer = Styled.div
 `
    padding-left: 5em;
    padding-top: 8em;
 `

const Bio = Styled.h4
`
    line-height: 1.25;
` 

const HeadShotContainer = Styled.div
`
    float: right;
    padding-top: 6.5em;
    padding-left: 5em;
    width: 50%;
    display: flex;
    justify-content: center;
`

const Image = Styled.img
`
    height: 80vh;
    border-radius: 50px;
`

const ButtonDiv = Styled.div
`
    padding-left: 5em;
`

const WorkHeaderDiv = Styled.div
`
    padding-top: 10em;
    padding-left: 5em;
`

export default BioPage;