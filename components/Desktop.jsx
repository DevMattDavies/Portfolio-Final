import {
  InnerContainerDesktop,
  BackgroundDesktop,
  TitleAndMenuContainerDesktop,
} from "./Containers.styles";

import BackgroundVideo from "./BackgroundVideo";
import Menu from "./Menu";
import TitleText from "./TitleText";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";

export default function Desktop({ menuState }) {
  return (
    <>
      <BackgroundVideo width={menuState.width} />
      <BackgroundDesktop>
        <InnerContainerDesktop>
          <TitleAndMenuContainerDesktop>
            <TitleText />
            <Menu menuState={menuState} />
          </TitleAndMenuContainerDesktop>
          {menuState.isAboutChecked && (
            <About isAboutChecked={menuState.isAboutChecked} />
          )}
          {menuState.isTechstackChecked && (
            <TechStack isTechstackChecked={menuState.isTechstackChecked} />
          )}
          {menuState.isProjectsChecked && <Projects />}
        </InnerContainerDesktop>
      </BackgroundDesktop>
    </>
  );
}
