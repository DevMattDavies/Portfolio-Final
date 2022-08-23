import { useState } from "react";

import {
  PageContainer,
  InnerContainer,
  ContactContainer,
  Background,
  TitleAndMenuContainer,
} from "../components/Containers.styles";

import { ContactStyle } from "../components/TextStyles.styles";

import BackgroundVideo from "../components/BackgroundVideo";
import Menu from "../components/Menu";
import TitleText from "../components/TitleText";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";

export default function Splash() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutChecked, setIsAboutChecked] = useState(false);
  const [isTechstackChecked, setIsTechstackChecked] = useState(false);
  const [isProjectsChecked, setIsProjectsChecked] = useState(false);

  const menuState = {
    isMenuOpen,
    setIsMenuOpen,
    isAboutChecked,
    setIsAboutChecked,
    isTechstackChecked,
    setIsTechstackChecked,
    isProjectsChecked,
    setIsProjectsChecked,
  };

  return (
    <PageContainer>
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
      <BackgroundVideo />
      <Background>
        <InnerContainer>
          <TitleAndMenuContainer>
            <TitleText />
            <Menu menuState={menuState} />
          </TitleAndMenuContainer>
          {isAboutChecked && <About isAboutChecked={isAboutChecked} />}
          {isTechstackChecked && (
            <TechStack isTechstackChecked={isTechstackChecked} />
          )}
          {isProjectsChecked && <Projects />}
        </InnerContainer>
      </Background>
    </PageContainer>
  );
}
