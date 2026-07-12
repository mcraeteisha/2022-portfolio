import Styled, { css } from "styled-components";

const base = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 0.9rem 2rem;
  border-radius: var(--radius-md);
  font-family: var(--font-body);
  font-size: var(--text-base);
  font-weight: 500;
  letter-spacing: 0.01em;
  text-decoration: none;
  border: 1px solid transparent;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -75%;
    width: 45%;
    height: 100%;
    background: linear-gradient(115deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%);
    transform: skewX(-20deg);
    transition: left 0.6s cubic-bezier(0.22, 1, 0.36, 1);
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }

  &:hover::after {
    left: 125%;
  }
`;

export const Button = Styled.a`
  ${base}
  background: var(--color-aubergine);
  color: var(--color-white);
  box-shadow: 0 1px 2px rgba(48, 23, 40, 0.15);

  &:hover {
    background: #43223a;
    box-shadow: 0 10px 24px -8px rgba(48, 23, 40, 0.45), 0 0 0 1px rgba(183, 209, 234, 0.3);
    color: var(--color-white);
  }
`;

export const ButtonOutline = Styled.a`
  ${base}
  background: transparent;
  color: var(--color-aubergine);
  border-color: var(--color-border);

  &:hover {
    border-color: var(--color-aubergine);
    background: var(--color-breeze-soft);
    color: var(--color-aubergine);
  }
`;

export default Button;
