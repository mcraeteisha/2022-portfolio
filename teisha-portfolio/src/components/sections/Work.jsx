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

function Work() {
  return (
    <Section id="work" $tone="alt">
      <Container>
        <Eyebrow>Selected Work</Eyebrow>
        <Heading>A closer look at how I work</Heading>

        <FeaturedCard>
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
        </FeaturedCard>

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
  );
}

const Eyebrow = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-breeze-deep);
  margin-bottom: var(--space-5);
`;

const Heading = Styled.h2`
  font-size: var(--text-4xl);
  margin-bottom: var(--space-12);
  max-width: 18ch;
`;

const FeaturedCard = Styled.div`
  background: var(--color-paper);
  border-radius: var(--radius-lg);
  padding: var(--space-10) clamp(1.5rem, 5vw, var(--space-12));
  box-shadow: 0 32px 64px -32px rgba(48, 23, 40, 0.25);
  margin-bottom: var(--space-10);
`;

const CardMeta = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  font-weight: 500;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-breeze-deep);
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
  border-bottom: 1px solid var(--color-border);

  @media (max-width: 480px) {
    gap: var(--space-6);
  }
`;

const Stat = Styled.div``;

const StatNumber = Styled.p`
  font-family: var(--font-display);
  font-size: var(--text-4xl);
  font-weight: 600;
  color: var(--color-aubergine);
  line-height: 1;
  margin-bottom: var(--space-2);
`;

const StatLabel = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-sm);
  color: var(--color-ink-soft);
`;

const CaseBlock = Styled.div`
  margin-bottom: var(--space-6);
  max-width: 65ch;

  &:last-of-type {
    margin-bottom: var(--space-8);
  }

  p {
    color: var(--color-ink-soft);
  }
`;

const CaseLabel = Styled.p`
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-aubergine);
  margin-bottom: var(--space-2);
`;

const TagRow = Styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
`;

const Tag = Styled.span`
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-aubergine);
  background: var(--color-breeze-soft);
  padding: 0.4rem 0.85rem;
  border-radius: var(--radius-sm);
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
  font-family: var(--font-body);
  font-size: var(--text-xs);
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-breeze-deep);
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
  box-shadow: 0 16px 32px -16px rgba(48, 23, 40, 0.3);
`;

export default Work;
