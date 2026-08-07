import Styled from "styled-components";
import Section from "../ui/Section";
import Container from "../ui/Container";

const MILESTONES = [
  {
    year: "2022 – Present",
    title: "Software Engineer",
    place: "Decisions",
    description:
      "Four years in, building tools that simplify complex workflows — and increasingly drawn to the space where engineering meets product and design.",
  },
  {
    year: "2021",
    title: "Full Stack Coding Bootcamp",
    place: "UNC-Chapel Hill",
    description:
      "Made it official. Learned to build the kinds of tools I'd been troubleshooting for years, and found the intersection of communication and logic I'd been looking for all along.",
  },
  {
    year: "2017 – 2022",
    title: "Content Specialist → Product & QA",
    place: "Written Word Media",
    description:
      "Five years across email marketing, operations, product, and QA. The technical work — debugging, testing, untangling how something actually functioned — was the part I looked forward to most.",
  },
  {
    year: "2015",
    title: "B.A. English Literature & Communication Studies",
    place: "UNC-Chapel Hill",
    description:
      "The start of a lifelong interest in how people communicate, and what gets lost when they don't.",
  },
];

function Journey() {
  return (
    <Section id="journey" tone="paper">
      <Container>
        <Eyebrow>Journey</Eyebrow>
        <Heading>The long way around</Heading>

        <Timeline>
          {MILESTONES.map((milestone) => (
            <Item key={milestone.title}>
              <Marker />
              <Year>{milestone.year}</Year>
              <Title>{milestone.title}</Title>
              <Place>{milestone.place}</Place>
              <Description>{milestone.description}</Description>
            </Item>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
}

const Eyebrow = Styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-green);
  margin-bottom: var(--space-5);

  &::before {
    content: "/* ";
  }

  &::after {
    content: " */";
  }
`;

const Heading = Styled.h2`
  font-size: var(--text-3xl);
  margin-bottom: var(--space-6);
  max-width: 16ch;
`;

const Timeline = Styled.div`
  position: relative;
  padding-left: var(--space-8);

  &::before {
    content: "";
    position: absolute;
    left: 5px;
    top: 6px;
    bottom: 6px;
    width: 2px;
    background: linear-gradient(180deg, var(--color-burgundy) 0%, var(--color-rose) 100%);
    opacity: 0.5;
  }
`;

const Item = Styled.div`
  position: relative;
  padding-bottom: var(--space-10);

  &:last-child {
    padding-bottom: 0;
  }
`;

const Marker = Styled.div`
  position: absolute;
  left: calc(-1 * var(--space-8) + 1px);
  top: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-burgundy);
  box-shadow: 0 0 0 4px var(--color-bone), 0 0 0 5px var(--color-border);
`;

const Year = Styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-green);
  margin-bottom: var(--space-2);
`;

const Title = Styled.h3`
  font-size: var(--text-xl);
  margin-bottom: var(--space-1);
`;

const Place = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-ink-soft);
  margin-bottom: var(--space-3);
`;

const Description = Styled.p`
  font-size: var(--text-base);
  color: var(--color-ink-soft);
  max-width: 55ch;
`;

export default Journey;
