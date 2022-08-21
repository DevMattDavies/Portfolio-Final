import { useState } from "react";

import {
  PageContainer,
  Background,
  TitleAndMenuContainer,
} from "../components/Containers.styles";
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
      <BackgroundVideo />
      <Background>
        <TitleAndMenuContainer>
          <TitleText />
          <Menu menuState={menuState} />
        </TitleAndMenuContainer>
        {isAboutChecked && <About isAboutChecked={isAboutChecked} />}
        {isTechstackChecked && (
          <TechStack isTechstackChecked={isTechstackChecked} />
        )}
        {isProjectsChecked && <Projects />}
      </Background>
    </PageContainer>
  );
}
