import Styled from "styled-components";

const Container = Styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 4rem);
`;

export default Container;
