import TitleText from "./TitleText";
import Menu from "./Menu";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";

import {
  BackgroundMobile,
  InnerContainerMobile,
  TitleAndMenuContainerMobile,
} from "./Containers.styles";
import BackgroundVideo from "./BackgroundVideo";

export default function Mobile({ menuState }) {
  return (
    <>
      <BackgroundVideo />
      <BackgroundMobile>
        <InnerContainerMobile>
          <TitleAndMenuContainerMobile>
            <TitleText />
            <Menu menuState={menuState} />
          </TitleAndMenuContainerMobile>
          {menuState.isAboutChecked && (
            <About isAboutChecked={menuState.isAboutChecked} />
          )}
          {menuState.isTechstackChecked && (
            <TechStack isTechstackChecked={menuState.isTechstackChecked} />
          )}
          {menuState.isProjectsChecked && <Projects />}
        </InnerContainerMobile>
      </BackgroundMobile>
    </>
  );
}
