import NavBar from "./NavBar";
import Hero from "./sections/Hero";
import TableOfContents from "./sections/TableOfContents";
import Philosophy from "./sections/Philosophy";
import Journey from "./sections/Journey";
import Work from "./sections/Work";
import Horizon from "./sections/Horizon";
import Connect from "./sections/Connect";
import Footer from "./Footer";

function PortfolioContainer() {
  return (
    <>
      <NavBar />
      <Hero />
      <TableOfContents />
      <Philosophy />
      <Journey />
      <Work />
      <Horizon />
      <Connect />
      <Footer />
    </>
  );
}

export default PortfolioContainer;
