import React from 'react';
import Styled from "styled-components";
import HomePage from '../../images/codedotlog_pink.png';
import About from '../../images/codedotlog_beige.png';


function codedotlogWork() {
    return(
        <>
        <div>
            <HeadingDiv>
                <Heading>Codedotlog</Heading>
            </HeadingDiv>
           <DescriptionDiv>
            <CodedotlogDescription>
                <p>Codedotlog is an app for developers to set learning goals and keep track of their progress towards completing their goals. Developers can log hours dedicated to their coding practice of a particular language or skill and monitor their progress.</p><br/>
                <p>Built using React, MongoDB, GraphQL with a Node.js and Express.js server, and Styled Components. My contributions were building out Front-End components and using DayJS to create a Weekly Report modal that presents to users once a week, displaying their goal progress.</p><br/>
            </CodedotlogDescription>
                <CodedotlogLink href="http://codedotlog.herokuapp.com/" target="_blank" rel="noreferrer noopener"><h3>codedotlog.herokuapp.com →</h3></CodedotlogLink>
            </DescriptionDiv>
            <ImageDiv>
                <a href="http://codedotlog.herokuapp.com/" target="_blank" rel="noreferrer noopener"><HomepageImage src={HomePage} alt="Audio-Thicket-Email" style={{display: "inline-block"}}></HomepageImage></a>
                <a href="http://codedotlog.herokuapp.com/" target="_blank" rel="noreferrer noopener"><AboutImage src={About} alt="Multiple-Emails" style={{display: "inline-block"}}></AboutImage></a>
            </ImageDiv>
        </div>    
        </>
    )
};


const HeadingDiv = Styled.div
`
    padding-top: 5em;
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

const CodedotlogDescription = Styled.h4
`
`

const CodedotlogLink = Styled.a
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

const HomepageImage = Styled.img
`
    border-radius: 50px;
    height: 55vh;
`

const AboutImage = Styled.img
`
    border-radius: 50px;
    height: 55vh;
`

export default codedotlogWork;