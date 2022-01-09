import React from "react";
import Styled from "styled-components";


function NavBar() {
    return (
        <>
        <NameIconContainer>
            <h2>TEI</h2>
            <h2>SHA.</h2>
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