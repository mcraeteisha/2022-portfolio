import React from 'react';
import Styled from "styled-components";

function BioPage() {
    return(
        <>
            <BioContainer>
                <Bio>
                    I'm a curious, detail-oriented, and thoughtful tinkerer with a passion for coding. Building beautiful websites with sleek, responsive designs is what fuels me.
                    In July 2021, I graduated from the UNC-Chapel Hill Full Stack Coding Bootcamp with an A average. During the program, I collaborated with my classmates to build full-stack web applications using HTML, CSS, JavaScript, React, and more.
                    Currently, I’m a QA Lead at Written Word Media, tackling all things technical. I thrive on using my coding skills to add creative enhancements to marketing emails and webpages. My thirst for knowledge drives my knack for software bug discovery and root cause analysis. 
                    I'm always striving to take my skills further!
                </Bio>
            </BioContainer>             
        </>
    )
};

const BioContainer = Styled.div
 `
 padding-left: 5em;
 padding-top: 5em;
 `

const Bio = Styled.h4
`
    font-family: 'Luam-Light', Arial, sans-serif;

` 

export default BioPage;