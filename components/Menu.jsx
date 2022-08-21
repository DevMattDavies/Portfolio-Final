import styled from "styled-components";
import { MenuTextStyle } from "./TextStyles.styles";
import {
  MenuContainer,
  CheckboxContainer,
  CheckboxUnchecked,
  CheckboxChecked,
  NavContainer,
} from "./Containers.styles";

export default function Menu({ menuState }) {
  function menuClickHandler() {
    menuState.setIsMenuOpen(true);
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
      {menuState.isMenuOpen ? (
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
      ) : (
        <NavContainer>
          <MenuTextStyle
            onClick={menuClickHandler}
            style={{ fontStyle: "italic" }}
          >
            Navigation
          </MenuTextStyle>
        </NavContainer>
      )}
    </MenuContainer>
  );
}
