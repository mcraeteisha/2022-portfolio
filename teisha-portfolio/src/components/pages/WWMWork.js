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
                <p>My current full-time role, where I manage internal QA testing processes; collaborate with developers and our VP of Product to reproduce, document, and test customer-reported bugs, and new system features; and communicate technical information to a non-technical audience via release notes.</p><br/>
                <p>In my 4+ years at Written Word, I've had the opportunity to utilize my coding skills to update landing pages and sign-up forms. I've also updated code for 50+ branded email templates using HTML, CSS, and Zephyr with a goal of increasing reader engagement by 2% each month.</p><br/>
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