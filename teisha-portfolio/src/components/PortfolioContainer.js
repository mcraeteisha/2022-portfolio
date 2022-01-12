import React from 'react';
import LandingPage from './pages/LandingPage';
import BioPage from './pages/BioPage';
import WWMWork from './pages/WWMWork';
import CodedotlogWork from './pages/CodedotlogWork';
import BuildTogether from './pages/BuildTogether';
import Footer from './Footer';

function PortfolioContainer() {
    return(
        <>
            <LandingPage />
            <BioPage />
            <WWMWork />
            <CodedotlogWork />
            <BuildTogether />
            <Footer />
        </>
    )
};

export default PortfolioContainer;