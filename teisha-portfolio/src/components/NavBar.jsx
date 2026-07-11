import { useEffect, useState } from "react";
import Styled from "styled-components";
import tmMark from "../images/tm_mark.png";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavStyle $scrolled={scrolled}>
      <Wordmark href="#hero" aria-label="Teisha McRae — back to top">
        <img src={tmMark} alt="" />
      </Wordmark>
      <NavCta href="#connect">Get in Touch</NavCta>
    </NavStyle>
  );
}

const NavStyle = Styled.nav`
  position: sticky;
  top: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem clamp(1.5rem, 5vw, 4rem);
  background: ${({ $scrolled }) => ($scrolled ? "rgba(251, 249, 247, 0.82)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(12px)" : "none")};
  box-shadow: ${({ $scrolled }) => ($scrolled ? "0 1px 0 var(--color-border)" : "none")};
  transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
`;

const Wordmark = Styled.a`
  display: flex;
  align-items: center;

  img {
    height: 34px;
    width: auto;
    display: block;
  }
`;

const NavCta = Styled.a`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--color-aubergine);
  padding: 0.5rem 1.1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: var(--color-aubergine);
    background: var(--color-breeze-soft);
    color: var(--color-aubergine);
  }
`;

export default NavBar;
