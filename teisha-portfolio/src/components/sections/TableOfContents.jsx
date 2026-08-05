import Styled from "styled-components";
import Section from "../ui/Section";
import Container from "../ui/Container";

const ENTRIES = [
  { num: "01", title: "Philosophy", href: "#philosophy" },
  { num: "02", title: "Journey", href: "#journey" },
  { num: "03", title: "Selected Work", href: "#work" },
  { num: "04", title: "Right Now", href: "#next" },
];

function TableOfContents() {
  return (
    <Section id="contents" tone="paper">
      <Container>
        <List>
          {ENTRIES.map((entry) => (
            <Row key={entry.href} href={entry.href}>
              <Num>{entry.num}</Num>
              <Title>{entry.title}</Title>
              <Dots />
            </Row>
          ))}
        </List>
      </Container>
    </Section>
  );
}

const List = Styled.nav`
  border-top: 1px solid var(--color-border);
`;

const Row = Styled.a`
  display: flex;
  align-items: baseline;
  gap: var(--space-4);
  padding: var(--space-5) 0;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-wine-black);

  &:hover {
    color: var(--color-burgundy);
  }

  &:hover span:last-child {
    border-color: var(--color-burgundy);
  }
`;

const Num = Styled.span`
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-green);
  min-width: 2ch;
`;

const Title = Styled.span`
  font-family: var(--font-display);
  font-size: var(--text-xl);
`;

const Dots = Styled.span`
  flex: 1;
  min-width: 1.5rem;
  border-bottom: 1px dotted var(--color-border);
  margin-bottom: 0.4em;
  transition: border-color 0.2s ease;
`;

export default TableOfContents;
