import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

:root {
    // Dark-Green
    --primary-color: #013328; 
    //Light-Green
    --second-color: #E1EEDD;
    //Yellow
    --emphasis-color: #F6C453;
    //Pink
    --accent-color: #F8D2BE;
    //White
    --white: #FFFFFF;
  }

html {
    box-sizing: border-box;
}

*, *:before, *:after {
    margin: 0;
    padding 0;
    box-sizing: inherit;
}

body {
    background: var(--second-color);
    color: var(--primary-color);
    max-width: 80%
    display: flex;
    width: 100%;
    height: 100%;
    font-family: futura-pt, sans-serif;
}

footer {
    flex-shrink: 0;
}

h1 {
    font-size: 4rem;
    font-family: gopher, sans-serif;
    font-weight: 700;
    font-style: normal;
}

h2 {
    font-size: 3rem;
    font-family: gopher, sans-serif;
    font-weight: 500;
    font-style: normal;
}

h3 {
    font-size: 2rem;
    font-family: gopher, sans-serif;
    font-weight: 400;
    font-style: normal;
}

h4 {
    font-size: 1.6rem;
    font-family: 'Work Sans', sans-serif;    
    font-style: normal;
}

span {
    color: var(--emphasis-color);
}

a {
    text-decoration: none;
    color: var(--primary-color);
    &:hover{
        text-decoration: underline;
    }
}

button {
padding: 1rem 2rem;
background-color: var(--emphasis-color);
color: var(--white);
border: none;
border-radius: 50px;
font-family: gopher, sans-serif;
font-weight: 700;
font-style: normal;
font-size: 1.5em;
text-decoration: none;
cursor: pointer;
text-transform: uppercase;
transition: all 0.5s ease;
&:hover{
    background: var(--primary-color);
    color: var(--accent-color);
}

`;
export default GlobalStyle;