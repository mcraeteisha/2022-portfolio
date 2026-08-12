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
        <LogoImg aria-hidden="true" />
      </Wordmark>
      <NavLinks>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </NavLinks>
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
  background: ${({ $scrolled }) => ($scrolled ? "var(--nav-bg)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(12px)" : "none")};
  box-shadow: ${({ $scrolled }) => ($scrolled ? "0 1px 0 var(--color-border)" : "none")};
  transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
`;

const Wordmark = Styled.a`
  display: flex;
  align-items: center;
  color: var(--color-wine-black);

  &:hover {
    color: var(--color-wine-black);
  }
`;

/* The PNG's baked-in burgundy is only 1.9:1 on the dark ground. Using it as
   a mask lets the colour come from --color-burgundy, which lightens in dark
   mode (4.98:1). The parent link carries the accessible name, so this
   element is decorative. Ratio matches the source: 215 x 135. */
const LogoImg = Styled.span`
  display: block;
  height: 1.4rem;
  aspect-ratio: 215 / 135;
  background-color: var(--color-burgundy);
  -webkit-mask: url(${tmLogo}) no-repeat center / contain;
  mask: url(${tmLogo}) no-repeat center / contain;
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

export default NavBar;
