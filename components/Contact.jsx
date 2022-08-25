import { ContactContainer } from "./Containers.styles";
import { ContactStyle } from "./TextStyles.styles";

export default function Contact() {
  return (
    <ContactContainer>
      <ContactStyle target="_blank" href="https://github.com/DevMattDavies">
        Github.
      </ContactStyle>
      <ContactStyle
        target="_blank"
        href="https://www.linkedin.com/in/devmattdavies/"
      >
        LinkedIn.
      </ContactStyle>
      <ContactStyle target="_blank" href="https://twitter.com/DevMattDavies">
        Twitter.
      </ContactStyle>
      <ContactStyle href="mailto:matt@mattdavies.dev">Email.</ContactStyle>
    </ContactContainer>
  );
}
