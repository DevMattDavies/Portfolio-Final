import { TextStyle } from "./TextStyles.styles";
import { aboutTextContent } from "../data/text-content";
import { AboutInfoContainer } from "./Containers.styles";

export default function About() {
  return (
    <AboutInfoContainer>
      <TextStyle>{aboutTextContent}</TextStyle>
    </AboutInfoContainer>
  );
}
