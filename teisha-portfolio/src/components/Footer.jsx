import Styled from "styled-components";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import tmMarkFooter from "../images/tm_mark_footer.png";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterBar>
      <Wordmark role="img" aria-label="Teisha McRae" />
      <Copyright>
        © {year} Teisha McRae. Designed &amp; built with care 💕
      </Copyright>
      <SocialRow>
        <a
          href="https://www.linkedin.com/in/teishamcrae/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/mcraeteisha"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </SocialRow>
    </FooterBar>
  );
}

const FooterBar = Styled.footer`
  background: var(--panel-burgundy);
  color: var(--on-panel);
  padding: var(--space-6) clamp(1.5rem, 5vw, 4rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--space-4);
`;

/* The source PNG is still the old pre-rebrand breeze blue, so it is used as
   a mask rather than an image — the colour comes from --on-panel and stays
   bone in both themes, matching the footer's always-burgundy ground. */
const Wordmark = Styled.span`
  display: block;
  height: 30px;
  aspect-ratio: 300 / 190;
  background-color: var(--on-panel);
  -webkit-mask: url(${tmMarkFooter}) no-repeat center / contain;
  mask: url(${tmMarkFooter}) no-repeat center / contain;
`;

const Copyright = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-xs);
  color: var(--on-panel);
`;

const SocialRow = Styled.div`
  display: flex;
  gap: var(--space-4);
  font-size: 1.1rem;
  color: var(--on-panel);

  a:hover {
    color: var(--color-rose);
  }
`;

export default Footer;
