import React from 'react';
import LandingPage from './pages/LandingPage';
import BioPage from './pages/BioPage';
import WWMWork from './pages/WWMWork';
import CodedotlogWork from './pages/CodedotlogWork';

function PortfolioContainer() {
    return(
        <>
            <LandingPage />
            <BioPage />
            <WWMWork />
            <CodedotlogWork />
        </>
    )
};

export default PortfolioContainer;