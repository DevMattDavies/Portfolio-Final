import styled from "styled-components";

// Whole page
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.7rem solid white;
  height: 100vh;
  width: 100vw;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  border: 0.8px solid black;
  z-index: 1;
  position: relative;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

// Title and menu
export const TitleAndMenuContainer = styled.div`
  height: 100%;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NavFadeInContainer = styled.div`
  display: flex;
`;

export const NavFadeOutContainer = styled.div`
  display: flex;
  animation: navFadeOutAnimation 2s ease-in-out;
  -webkit-animation: navFadeOutAnimation 2s ease-in-out;
  @keyframes navFadeOutAnimation {
    0% {
      opacity: 1;
      transform: translateX(0px);
    }
    100% {
      opacity: 0;
      transform: translateX(-40px);
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;

  animation: menuFadeInAnimation 3s ease-in-out forwards;
  -webkit-animation: menuFadeInAnimation 3s ease-in-out forwards;
  animation-delay: 3s;
  -webkit-animation-delay: 3s;

  @keyframes menuFadeInAnimation {
    0% {
      opacity: 0;
      transform: translateX(-40px);
    }
    100% {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;

export const CheckboxUnchecked = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid black;
`;

export const CheckboxChecked = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid black;
  background-color: black;
`;

// About section
export const AboutInfoContainer = styled.div`
  height: auto;
  width: 400px;
`;

// Tech section
export const TechstackInfoContainer = styled.div`
  height: max-content;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  align-items: flex-end;
`;

export const TechIconContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const TechIconRow = styled.div`
  display: flex;
  gap: 3rem;

  animation: techFadeInAnimation 4s ease-in-out;
  -webkit-animation: techFadeInAnimation 4s ease-in-out;
  @keyframes techFadeInAnimation {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Project section
export const ProjectInfoContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  text-align: right;

  animation: fadeInAnimation 2s ease-in;
  -webkit-animation: fadeInAnimation 2s ease-in;
  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
      transform: translateY(30px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const ProjectRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ProjectLinksRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
`;
