import styled from "styled-components";

const TextContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2rem;
`;

const MattText = styled.h1`
  color: black;
  font-size: 2rem;
  font-family: var(--font-primary);
  font-weight: 300;
  letter-spacing: 0.01rem;
  background-color: white;
  border-radius: 15px;
  width: max-content;
  padding: 0 0.2rem 0 0;
`;

const JobText = styled.h1`
  color: black;
  font-size: 1.2rem;
  font-family: var(--font-primary);
  font-weight: 300;
  letter-spacing: 0.01rem;
  background-color: white;
  width: max-content;
  border-radius: 15px;
  padding: 0 0.2rem 0 0;
`;

export default function TitleText() {
  return (
    <TextContainer>
      <MattText>Matt Davies</MattText>
      <JobText>Software Developer</JobText>
    </TextContainer>
  );
}
