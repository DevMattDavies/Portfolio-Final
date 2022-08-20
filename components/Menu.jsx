import styled from "styled-components";
import { MenuTextStyle } from "./TextStyles.styles";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const CheckboxUnchecked = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid black;
`;

const CheckboxChecked = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background-color: black;
`;

export default function Menu({ menuState }) {
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
      <CheckboxContainer tabIndex={0}>
        {menuState.isAboutChecked ? <CheckboxChecked /> : <CheckboxUnchecked />}
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
        <MenuTextStyle onClick={projectsClickHandler}>Projects</MenuTextStyle>
      </CheckboxContainer>
    </MenuContainer>
  );
}
