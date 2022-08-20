import styled from "styled-components";
import { TitleStyle, SubtitleStyle } from "./TextStyles.styles";

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export default function TitleText() {
  return (
    <TextContainer>
      <TitleStyle>Matt Davies</TitleStyle>
      <SubtitleStyle>Front End & React Developer</SubtitleStyle>
    </TextContainer>
  );
}
