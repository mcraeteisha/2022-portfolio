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
  }

* {
    margin: 0;
    padding 0;
    box-sizing: border-box
}

body {
    background: var(--second-color);
    color: var(--primary-color);
    max-width: 80%
    display: flex;
    width: 100%;
    height: 100%;
    font-family: 'Luam-Light', Arial, sans-serif;
}

footer {
    flex-shrink: 0;
}

h1 {
    font-size: 5rem;
    font-family: 'Luam-Regular', Arial, sans-serif;
}

h2 {
    font-size: 3rem;
    font-family: 'Luam-Regular', Arial, sans-serif;
}

h3 {
    font-size: 2rem;
    font-family: 'Luam-Regular', Arial, sans-serif;
}

h4 {
    font-size: 2rem;
}

span {
    color: var(--emphasis-color);
}

button {
padding: 1rem 2rem;
background-color: var(--accent-color);
color: var(--primary-color);
border: none;
border-radius: 5px;
font-size: 1rem;
font-weight: bold;
text-decoration: none;
cursor: pointer;
text-transform: uppercase;
transition: all 0.5s ease;
&:hover{
    background:var(--emphasis-color);
    color: #ffffff;
}

`;
export default GlobalStyle;