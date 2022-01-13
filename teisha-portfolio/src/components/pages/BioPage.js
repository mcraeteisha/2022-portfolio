import React from 'react';
import Styled from "styled-components";
import Teisha from '../../images/teisha_headshot.jpg';


function BioPage() {
    return(
        <>
        <SectionContainer>
            <HeadShotContainer>
                <Image src={Teisha} alt="Teisha-Headshot" style={{display: "inline-block"}}></Image>
            </HeadShotContainer> 
            <BioContainer>
                <Bio>
                    <p>I’m a curious, detail-oriented, and resourceful problem-solver with a passion for coding. </p><br/>
                    <p>In 2015, I graduated from The University of North Carolina at Chapel Hill with a B.A. in English Literature and Communication Studies. Not long after I tossed my graduation cap, I joined the team at Written Word Media where I merged my love of books and helping people share their stories. I signed on for a Content Specialist role, but I’ve worn many hats at WWM, from email marketing and operations to product and QA. I’ve found that my technical hat fit the best. The skills I’ve honed and projects I’ve undertook at WWM have laid the foundation for my journey into tech. </p><br/>
                    <p>In July 2021, I graduated from the UNC-Chapel Hill Full Stack Coding Bootcamp with an A average. During the program, I collaborated with classmates to build beautiful full-stack web applications. It was during this time that my desire to leverage tech to solve real-world problems and make an impact was realized and cemented.</p> <br/>
                    <p>My strengths are in HTML, CSS, JavaScript, and React. But I’m confident that I can learn anything! I’ve come a long way, but my journey is just beginning and I’m hungry for more—more collaboration, more learning opportunities, more growth. My goal is to work with a company as a Junior Full Stack or Front End Developer. </p><br/>
                    <p>When I’m not coding, you can find me reading, binge-watching anime, playing video games that terrify me, taking dance fitness classes, or cuddling with my newly-adopted kitten.</p><br/>
                </Bio>     
            </BioContainer>
            <ButtonDiv>
                <a href="mailto: mcraeteisha@gmail.com"><button>Let's Work Together</button></a>
            </ButtonDiv>    
        </SectionContainer> 
        <WorkHeaderDiv>
            <h1>What I've Been Working On</h1>
        </WorkHeaderDiv>   
        </>
    )
};

const SectionContainer = Styled.div
`
`

const BioContainer = Styled.div
 `
    padding-top: 8em;
    padding-left: 5em;
    padding-right: 5em;
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
    padding-bottom: 5em;
`

export default BioPage;