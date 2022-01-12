import React from 'react';
import Styled from "styled-components";
import ATK from '../../images/wwm_email_templates_yellow.png';
import MultiEmail from '../../images/wwm_email_templates_green.png';


function WWMWork() {
    return(
        <>
        <div>
            <HeadingDiv>
                <Heading>Written Word Media</Heading>
            </HeadingDiv>
           <DescriptionDiv>
            <WWMDescription>
                <p>I'm a curious, detail-oriented, and thoughtful tinkerer with a passion for coding. Building beautiful websites with sleek, responsive designs is what fuels me.</p><br/>
                <p>In July 2021, I graduated from the UNC-Chapel Hill Full Stack Coding Bootcamp with an A average. During the program, I collaborated with my classmates to build full-stack web applications using HTML, CSS, JavaScript, React, and more.</p><br/>
            </WWMDescription>
                <WWMLink href="https://www.writtenwordmedia.com/" target="_blank" rel="noreferrer noopener"><h3>writtenwordmedia.com →</h3></WWMLink>
            </DescriptionDiv>
            <ImageDiv>
                <a href="https://www.writtenwordmedia.com/" target="_blank" rel="noreferrer noopener"><ATKImage src={ATK} alt="Audio-Thicket-Email" style={{display: "inline-block"}}></ATKImage></a>
                <a href="https://www.writtenwordmedia.com/" target="_blank" rel="noreferrer noopener"><MultiEmailImage src={MultiEmail} alt="Multiple-Emails" style={{display: "inline-block"}}></MultiEmailImage></a>
            </ImageDiv>
        </div>    
        </>
    )
};


const HeadingDiv = Styled.div
`
    padding-left: 5em;
    padding-bottom: 2em;

`
const Heading = Styled.h2
`
`

const DescriptionDiv = Styled.div
`
    padding-left: 5em;
    padding-right: 5em;
    padding-bottom: 4em;
`

const WWMDescription = Styled.h4
`
`

const WWMLink = Styled.a
`
    text-decoration: none;
    color: var(--primary-color);
`

const ImageDiv = Styled.div
`
    padding-bottom: 5em;
    display: flex;
    justify-content: space-evenly;
`

const ATKImage = Styled.img
`
    border-radius: 50px;
    height: 55vh;
`

const MultiEmailImage = Styled.img
`
    border-radius: 50px;
    height: 55vh;
`

export default WWMWork;