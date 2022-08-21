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

export default function Menu({ menuState }) {
  const [navDidMount, setNavDidMount] = useState(false);

  function menuClickHandler() {
    // menuState.setIsMenuOpen(true);
    setNavDidMount(true);
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

      {menuState.isMenuOpen === false && navDidMount === false && (
        <NavFadeInContainer>
          <MenuTextStyle
            onClick={menuClickHandler}
            style={{ fontStyle: "italic" }}
          >
            Navigation
          </MenuTextStyle>
        </NavFadeInContainer>
      )}

      {menuState.isMenuOpen === false && navDidMount === true && (
        <NavFadeOutContainer
          onAnimationEnd={() => {
            menuState.setIsMenuOpen(true);
          }}
        >
          <MenuTextStyle
            onClick={menuClickHandler}
            style={{ fontStyle: "italic" }}
          >
            Navigation
          </MenuTextStyle>
        </NavFadeOutContainer>
      )}
    </MenuContainer>
  );
}
