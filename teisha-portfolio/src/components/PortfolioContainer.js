import React from 'react';
import LandingPage from './pages/LandingPage';
import BioPage from './pages/BioPage';
import WWMWork from './pages/WWMWork';
import CodedotlogWork from './pages/CodedotlogWork';
import BuildTogether from './pages/BuildTogether';

function PortfolioContainer() {
    return(
        <>
            <LandingPage />
            <BioPage />
            <WWMWork />
            <CodedotlogWork />
            <BuildTogether />
        </>
    )
};

export default PortfolioContainer;