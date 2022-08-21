import styled from "styled-components";
import { MenuTextStyle } from "./TextStyles.styles";
import { useState } from "react";
import {
  MenuContainer,
  CheckboxContainer,
  CheckboxUnchecked,
  CheckboxChecked,
  NavFadeInContainer,
  NavFadeOutContainer,
} from "./Containers.styles";

import { motion, AnimatePresence } from "framer-motion";

export default function Menu({ menuState }) {
  const [navDidMount, setNavDidMount] = useState(false);

  function menuClickHandler() {
    menuState.setIsMenuOpen(true);
    // setNavDidMount(true);
  }

  function aboutClickHandler() {
    menuState.setIsAboutChecked(true);
    menuState.setIsTechstackChecked(false);
    menuState.setIsProjectsChecked(false);
  }

  function techstackClickHandler() {
    menuState.setIsTechstackChecked(true);
    menuState.setIsAboutChecked(false);
    menuState.setIsProjectsChecked(false);
  }

  function projectsClickHandler() {
    menuState.setIsProjectsChecked(true);
    menuState.setIsAboutChecked(false);
    menuState.setIsTechstackChecked(false);
  }

  return (
    <MenuContainer>
      {menuState.isMenuOpen && (
        <>
          <CheckboxContainer>
            {menuState.isAboutChecked ? (
              <CheckboxChecked />
            ) : (
              <CheckboxUnchecked />
            )}
            <MenuTextStyle onClick={aboutClickHandler}>About</MenuTextStyle>
          </CheckboxContainer>
          <CheckboxContainer>
            {menuState.isTechstackChecked ? (
              <CheckboxChecked />
            ) : (
              <CheckboxUnchecked />
            )}
            <MenuTextStyle onClick={techstackClickHandler}>
              Tech Stack
            </MenuTextStyle>
          </CheckboxContainer>
          <CheckboxContainer>
            {menuState.isProjectsChecked ? (
              <CheckboxChecked />
            ) : (
              <CheckboxUnchecked />
            )}
            <MenuTextStyle onClick={projectsClickHandler}>
              Projects
            </MenuTextStyle>
          </CheckboxContainer>
        </>
      )}

      <AnimatePresence>
        {menuState.isMenuOpen === false && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{
              x: { duration: 3 },
              opacity: { duration: 3 },
              default: { ease: "easeInOut" },
            }}
          >
            <NavFadeInContainer>
              <MenuTextStyle
                onClick={menuClickHandler}
                style={{ fontStyle: "italic" }}
              >
                Navigation
              </MenuTextStyle>
            </NavFadeInContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </MenuContainer>
  );
}
