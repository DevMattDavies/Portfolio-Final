import Desktop from "../components/Desktop";
import Contact from "../components/Contact";
import { useState, useEffect } from "react";

import { PageContainer } from "../components/Containers.styles";
import Mobile from "../components/Mobile";

export default function Splash() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutChecked, setIsAboutChecked] = useState(false);
  const [isTechstackChecked, setIsTechstackChecked] = useState(false);
  const [isProjectsChecked, setIsProjectsChecked] = useState(false);

  const menuState = {
    width,
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
      <Contact />
      {width >= 500 ? (
        <Desktop menuState={menuState} />
      ) : (
        <Mobile menuState={menuState} />
      )}
    </PageContainer>
  );
}
