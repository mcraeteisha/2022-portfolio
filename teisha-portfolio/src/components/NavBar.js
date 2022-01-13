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
        background: var(--primary-color);
        color: var(--accent-color);
    }
`

const NameIconContainer = Styled.div
    `
    padding-left: 5em;
    padding-top: 1em;
    `

export default NavBar;