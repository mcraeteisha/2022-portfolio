import { useEffect, useState } from "react";
import Styled from "styled-components";

const STORAGE_KEY = "theme";

function systemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function initialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : systemTheme();
}

function ThemeToggle() {
  const [theme, setTheme] = useState(initialTheme);
  const [chosen, setChosen] = useState(
    () =>
      typeof window !== "undefined" &&
      !!window.localStorage.getItem(STORAGE_KEY)
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  /* Keep following the OS until the visitor picks a side themselves. */
  useEffect(() => {
    if (chosen) return;
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => setTheme(query.matches ? "dark" : "light");
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [chosen]);

  const isDark = theme === "dark";

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    setTheme(next);
    setChosen(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch (error) {
      /* Private browsing can refuse storage; the toggle still works. */
    }
  };

  return (
    <Bar>
      <Label aria-hidden="true">{isDark ? "Lamplight" : "Daylight"}</Label>
      <Switch
        type="button"
        role="switch"
        aria-checked={isDark}
        aria-label="Lamplight — dark mode"
        onClick={toggle}
      >
        <Knob $dark={isDark} aria-hidden="true">
          *
        </Knob>
      </Switch>
    </Bar>
  );
}

const Bar = Styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--space-3);
  padding: var(--space-3) clamp(1.5rem, 5vw, 4rem) 0;
`;

const Label = Styled.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-ink-faint);
  user-select: none;

  &::before {
    content: "/* ";
  }

  &::after {
    content: " */";
  }
`;

const Switch = Styled.button`
  position: relative;
  width: 3.5rem;
  height: 1.5rem;
  flex: none;
  padding: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-sand);
  cursor: pointer;
  transition: border-color 0.3s ease, background 0.3s ease;

  &:hover {
    border-color: var(--color-burgundy);
  }

  &:focus-visible {
    outline: 2px solid var(--color-burgundy);
    outline-offset: 3px;
  }
`;

const Knob = Styled.span`
  position: absolute;
  top: 50%;
  left: 0.125rem;
  width: 1.125rem;
  height: 1.125rem;
  display: grid;
  place-items: center;
  border-radius: 1px;
  background: var(--color-burgundy);
  color: var(--color-bone);
  font-family: var(--font-display);
  font-size: 0.95rem;
  line-height: 1;
  transform: translateY(-50%)
    translateX(${({ $dark }) => ($dark ? "2rem" : "0")});
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1),
    background 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export default ThemeToggle;
