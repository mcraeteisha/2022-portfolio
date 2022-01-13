import React, { useState } from "react";
import Styled from "styled-components";


function NavBar() {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        console.log(window.scrollY);
        if(window.scrollY >= 80) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
        <NavStyle className={navbar ? 'active' : 'navbar'}>
            <NameIconContainer>
                <h2>TEI</h2>
                <h2>SHA.</h2>
            </NameIconContainer>
        </NavStyle>
        
        </>
    )
}

const NavStyle = Styled.nav
`
    height: 80;
    position: sticky;
    display: flex;
    top: 0;
    &.active {
        background: rgba(1,51,40, 0.95);
        color: var(--accent-color);
        -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);

        transparency: 50%;
    }
`

const NameIconContainer = Styled.div
    `
    padding-left: 5em;
    padding-top: 1em;
    `

export default NavBar;