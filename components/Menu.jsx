import styled from "styled-components";
import { MenuTextStyle } from "./TextStyles.styles";
import { useState } from "react";
import ExploreIcon from "@mui/icons-material/Explore";

import {
  MenuContainer,
  CheckboxContainer,
  CheckboxUnchecked,
  CheckboxChecked,
  NavFadeInContainer,
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
              x: { duration: 2 },
              opacity: { duration: 2 },
              default: { ease: "easeInOut" },
            }}
          >
            <NavFadeInContainer>
              <ExploreIcon onClick={menuClickHandler} />
              <MenuTextStyle
                onClick={menuClickHandler}
                style={{ fontStyle: "italic", paddingBottom: "0.15rem" }}
              >
                explore
              </MenuTextStyle>
            </NavFadeInContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </MenuContainer>
  );
}
