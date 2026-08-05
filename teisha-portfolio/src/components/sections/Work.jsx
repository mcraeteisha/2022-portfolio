import Styled from "styled-components";
import Section from "../ui/Section";
import Container from "../ui/Container";
import WWMEmail from "../../images/wwm_email_templates_green.png";

const TAGS = [
  "Laravel",
  "PHP",
  "REST APIs",
  "Postman",
  "AI-Assisted Code Analysis",
  "Authentication & Authorization",
  "Git",
];

const LORE_TAGS = [
  "Product Strategy",
  "Positioning",
  "Competitive Analysis",
  "UX/UI Design",
  "Next.js",
  "TypeScript",
  "AI Product Design",
];

function Work() {
  return (
    <>
      <Section id="work" tone="alt">
        <Container>
          <Eyebrow>Selected Work</Eyebrow>
          <Heading>A closer look at how I work</Heading>
        </Container>
      </Section>

      <Section tone="burgundy">
        <Container>
          <CardMeta>Personal Project · Product &amp; Engineering</CardMeta>
          <CardTitle>Lore — a home for a story before it&rsquo;s a draft</CardTitle>

          <CaseBlock>
            <CaseLabel>The Problem</CaseLabel>
            <p>
              As an aspiring romance author and Sims content creator, my own
              story ideas were scattered across notebooks, sticky notes,
              Notion, Pinterest, and Tumblr. None of it connected — a
              character sketch in one app, her inspiration board in another,
              the actual scene nowhere near either — so the thread between
              them slipped away every time.
            </p>
          </CaseBlock>

          <CaseBlock>
            <CaseLabel>My Approach</CaseLabel>
            <p>
              I defined the product from scratch — the persona, and where it
              sits against AI writing tools that write <em>for</em> you and
              worldbuilding wikis that feel like cold databases. At the
              center is Spark, an AI collaborator built around one rule: it
              asks questions and nudges creativity, but never writes the
              story for you. I then designed and built the brand site and
              product foundation in Next.js and TypeScript.
            </p>
          </CaseBlock>

          <CaseBlock>
            <CaseLabel>Where It&rsquo;s Headed</CaseLabel>
            <p>
              Right now I&rsquo;m doing user research — talking to
              storytellers about how they currently organize their ideas and
              where Lore could actually fit into that — while building out
              the inspiration boards, characters, and worlds that all link
              together, with the writing surface itself as the next
              fast-follow.
            </p>
          </CaseBlock>

          <TagRow>
            {LORE_TAGS.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagRow>

          <CardLink
            href="https://github.com/mcraeteisha/storyspace"
            target="_blank"
            rel="noreferrer noopener"
          >
            View the repo →
          </CardLink>
        </Container>
      </Section>

      <Section tone="green">
        <Container>
          <CardMeta>Decisions · Software Engineer</CardMeta>
          <CardTitle>Enterprise API Security Audit</CardTitle>

          <StatsRow>
            <Stat>
              <StatNumber>700+</StatNumber>
              <StatLabel>API endpoints audited</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>250</StatNumber>
              <StatLabel>Vulnerabilities identified</StatLabel>
            </Stat>
          </StatsRow>

          <CaseBlock>
            <CaseLabel>The Problem</CaseLabel>
            <p>
              Our platform had grown significantly, with hundreds of API
              endpoints built by different teams at different stages of the
              product&rsquo;s evolution. We needed confidence that every
              endpoint had proper authentication and authorization — but
              manually reviewing the entire API surface wasn&rsquo;t
              realistic.
            </p>
          </CaseBlock>

          <CaseBlock>
            <CaseLabel>My Approach</CaseLabel>
            <p>
              I led a comprehensive audit of more than 700 API endpoints,
              using AI to identify patterns and flag routes that appeared to
              be missing protection, then manually validating every finding
              through code review and Postman testing. Throughout, I
              documented findings, categorized vulnerabilities, and worked
              with the team to prioritize fixes.
            </p>
          </CaseBlock>

          <CaseBlock>
            <CaseLabel>The Outcome</CaseLabel>
            <p>
              The audit surfaced roughly 250 endpoints with security issues
              or missing protections — meaningfully improving the
              platform&rsquo;s security posture and establishing a clearer
              process for catching gaps like this earlier going forward.
            </p>
          </CaseBlock>

          <TagRow>
            {TAGS.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagRow>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <SecondaryEntry>
            <SecondaryText>
              <SecondaryLabel>Where I Started</SecondaryLabel>
              <SecondaryTitle>Written Word Media</SecondaryTitle>
              <p>
                Before engineering, I spent six years at Written Word Media —
                eventually finding my footing in QA and product, updating
                landing pages, sign-up forms, and 50+ email templates while
                managing internal testing processes.
              </p>
              <SecondaryLink
                href="https://www.writtenwordmedia.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                writtenwordmedia.com →
              </SecondaryLink>
            </SecondaryText>
            <SecondaryImage src={WWMEmail} alt="Written Word Media email template" />
          </SecondaryEntry>
        </Container>
      </Section>
    </>
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
  font-size: var(--text-4xl);
  max-width: 18ch;
`;

const CardMeta = Styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(245, 240, 231, 0.65);
  margin-bottom: var(--space-2);
`;

const CardTitle = Styled.h3`
  font-size: var(--text-3xl);
  margin-bottom: var(--space-8);
`;

const StatsRow = Styled.div`
  display: flex;
  gap: var(--space-10);
  padding-bottom: var(--space-8);
  margin-bottom: var(--space-8);
  border-bottom: 1px solid rgba(245, 240, 231, 0.2);

  @media (max-width: 480px) {
    gap: var(--space-6);
  }
`;

const Stat = Styled.div``;

const StatNumber = Styled.p`
  font-family: var(--font-display);
  font-size: clamp(4rem, 10vw, 8rem);
  font-weight: 600;
  line-height: 1;
  color: var(--color-bone);
  margin-bottom: var(--space-3);
`;

const StatLabel = Styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  letter-spacing: 0.05em;
  color: rgba(245, 240, 231, 0.65);
`;

const CaseBlock = Styled.div`
  margin-bottom: var(--space-6);
  max-width: 65ch;

  &:last-of-type {
    margin-bottom: var(--space-8);
  }

  p {
    color: rgba(245, 240, 231, 0.82);
  }
`;

const CaseLabel = Styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: rgba(245, 240, 231, 0.65);
  margin-bottom: var(--space-2);
`;

const TagRow = Styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const Tag = Styled.span`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-bone);
  background: rgba(245, 240, 231, 0.08);
  border: 1px solid rgba(245, 240, 231, 0.3);
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-sm);
`;

const CardLink = Styled.a`
  display: inline-block;
  margin-top: var(--space-6);
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--color-bone);

  &:hover {
    color: var(--color-rose);
  }
`;

const SecondaryEntry = Styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(180px, 260px);
  gap: var(--space-8);
  align-items: center;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SecondaryText = Styled.div`
  max-width: 55ch;

  p {
    color: var(--color-ink-soft);
    margin-bottom: var(--space-4);
  }
`;

const SecondaryLabel = Styled.p`
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-green);
  margin-bottom: var(--space-2);
`;

const SecondaryTitle = Styled.h3`
  font-size: var(--text-xl);
  margin-bottom: var(--space-3);
`;

const SecondaryLink = Styled.a`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
`;

const SecondaryImage = Styled.img`
  width: 100%;
  border-radius: var(--radius-md);
  box-shadow: 0 16px 32px -16px rgba(123, 30, 60, 0.3);
`;

export default Work;
