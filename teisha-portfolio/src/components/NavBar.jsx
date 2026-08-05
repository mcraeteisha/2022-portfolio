import { useEffect, useState } from "react";
import Styled from "styled-components";
import tmLogo from "../images/burgundy-logo-trimmed.png";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "Now", href: "#next" },
  { label: "Contact", href: "#connect" },
];

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
        <Mark>*</Mark>
        <LogoImg src={tmLogo} alt="Teisha McRae" />
      </Wordmark>
      <NavRight>
        <NavLinks>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </NavLinks>
        <NavCta href="#connect">Get in Touch</NavCta>
      </NavRight>
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
  background: ${({ $scrolled }) => ($scrolled ? "rgba(245, 240, 231, 0.82)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(12px)" : "none")};
  box-shadow: ${({ $scrolled }) => ($scrolled ? "0 1px 0 var(--color-border)" : "none")};
  transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
`;

const Wordmark = Styled.a`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  color: var(--color-wine-black);

  &:hover {
    color: var(--color-wine-black);
  }
`;

const Mark = Styled.span`
  font-family: var(--font-display);
  font-size: 1.75rem;
  line-height: 1;
  color: var(--color-burgundy);
  transition: transform 0.4s ease;

  ${Wordmark}:hover & {
    transform: rotate(90deg);
  }
`;

const LogoImg = Styled.img`
  height: 1.4rem;
  width: auto;
  display: block;
`;

const NavRight = Styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-8);
`;

const NavLinks = Styled.div`
  display: flex;
  align-items: center;
  gap: var(--space-6);
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  text-transform: uppercase;
  letter-spacing: 0.15em;

  a {
    color: var(--color-wine-black);
  }

  a:hover {
    color: var(--color-burgundy);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavCta = Styled.a`
  position: relative;
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--color-burgundy);
  padding: 0.5rem 1.1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: border-color 0.2s ease, background 0.2s ease;

  &:hover {
    border-color: var(--color-burgundy);
    background: rgba(123, 30, 60, 0.08);
    color: var(--color-burgundy);
  }
`;

export default NavBar;
