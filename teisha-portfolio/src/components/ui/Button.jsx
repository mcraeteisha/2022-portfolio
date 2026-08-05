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

  &:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }
`;

export const Button = Styled.a`
  ${base}
  background: var(--color-burgundy);
  color: var(--color-bone);
  box-shadow: 0 1px 2px rgba(123, 30, 60, 0.15);

  &:hover {
    background: #5A1730;
    box-shadow: 0 10px 24px -8px rgba(123, 30, 60, 0.45), 0 0 0 1px rgba(228, 96, 126, 0.3);
    color: var(--color-bone);
  }
`;

export const ButtonOutline = Styled.a`
  ${base}
  background: transparent;
  color: var(--color-burgundy);
  border-color: var(--color-border);

  &:hover {
    border-color: var(--color-burgundy);
    background: rgba(123, 30, 60, 0.08);
    color: var(--color-burgundy);
  }
`;

export const ButtonInverse = Styled.a`
  ${base}
  background: var(--color-bone);
  color: var(--color-burgundy);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);

  &:hover {
    background: #FFFFFF;
    color: var(--color-burgundy);
  }
`;

export const ButtonOutlineInverse = Styled.a`
  ${base}
  background: transparent;
  color: var(--color-bone);
  border-color: rgba(245, 240, 231, 0.4);

  &:hover {
    border-color: var(--color-bone);
    background: rgba(245, 240, 231, 0.1);
    color: var(--color-bone);
  }
`;

export default Button;
