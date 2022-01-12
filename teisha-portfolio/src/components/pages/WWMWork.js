import React from 'react';
import Styled from "styled-components";
import ATK from '../../images/wwm_email_templates_yellow.png';
import MultiEmail from '../../images/wwm_email_templates_green.png';


function WWMWork() {
    return(
        <>
        <div>
           <Heading>Written Word Media</Heading>
           <DescriptionDiv>
            <WWMDescription>
                <p>I'm a curious, detail-oriented, and thoughtful tinkerer with a passion for coding. Building beautiful websites with sleek, responsive designs is what fuels me.</p>
                <p>In July 2021, I graduated from the UNC-Chapel Hill Full Stack Coding Bootcamp with an A average. During the program, I collaborated with my classmates to build full-stack web applications using HTML, CSS, JavaScript, React, and more.</p>
            </WWMDescription>
                <a href="https://www.writtenwordmedia.com/" target="_blank" rel="noreferrer noopener"><h3>writtenwordmedia.com →</h3></a>
            </DescriptionDiv>
            <ImageDiv>
                <ATKImage src={ATK} alt="Audio-Thicket-Email" style={{display: "inline-block"}}></ATKImage>
                <MultiEmailImage src={MultiEmail} alt="Multiple-Emails" style={{display: "inline-block"}}></MultiEmailImage>   
            </ImageDiv>
        </div>    
        </>
    )
};


const Heading = Styled.h2
`
`

const DescriptionDiv = Styled.div
`
`

const WWMDescription = Styled.h4
`
`

const ImageDiv = Styled.div
`
`

const ATKImage = Styled.img
`
`

const MultiEmailImage = Styled.img
`
`

export default WWMWork;