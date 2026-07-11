import Styled, { css } from "styled-components";

const base = css`
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
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    text-decoration: none;
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
