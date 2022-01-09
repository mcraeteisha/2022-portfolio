import React from "react";
import Styled from "styled-components";


function NavBar() {
    return (
        <>
        <NameIconContainer>
            <h1>TEI</h1>
            <h1>SHA.</h1>
        </NameIconContainer>
        </>
    )
}

const NameIconContainer = Styled.div
    `
    padding-left: 5em;
    padding-top: 1em;
    `

export default NavBar;