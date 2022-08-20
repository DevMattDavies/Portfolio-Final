import { useState } from "react";

import {
  PageContainer,
  Background,
  TitleAndMenuContainer,
  AboutInfoContainer,
  TechstackInfoContainer,
} from "../components/Containers.styles";
import BackgroundVideo from "../components/BackgroundVideo";
import Menu from "../components/Menu";
import TitleText from "../components/TitleText";
import About from "../components/About";
import TechStack from "../components/TechStack";

export default function Splash() {
  const [isAboutChecked, setIsAboutChecked] = useState(false);
  const [isTechstackChecked, setIsTechstackChecked] = useState(false);
  const [isProjectsChecked, setIsProjectsChecked] = useState(false);

  const menuState = {
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
        {isAboutChecked && (
          <AboutInfoContainer>
            <About isAboutChecked={isAboutChecked} />
          </AboutInfoContainer>
        )}
        {isTechstackChecked && (
          <TechstackInfoContainer>
            <TechStack isTechstackChecked={isTechstackChecked} />
          </TechstackInfoContainer>
        )}
      </Background>
    </PageContainer>
  );
}
