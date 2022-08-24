import styled from "styled-components";

// Whole page
export const PageContainer = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* border: 1.5rem solid white; */
  /* height: 100%; */
  height: 100%;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  /* overflow: hidden; */
`;

export const ContactContainer = styled.div`
  position: fixed;
  top: 0;
  right: 1.5rem;
  width: 100px;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  z-index: 10;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
  border: 1.5rem solid white;
  /* border: 0.8px solid black; */
  z-index: 1;
  position: relative;
  /* padding: 2rem; */
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const InnerContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 0.8px solid black;
  padding: 2rem;
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
  align-items: center;
  gap: 0.2rem;
  width: max-content;
  backdrop-filter: blur(5px);
  border-radius: 2px;
  padding: 0 0.1rem;

  &:hover {
    cursor: pointer;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  backdrop-filter: blur(5px);
  border-radius: 2px;
  padding: 0 0.1rem;
  /* background-color: white; */
  width: max-content;

  animation: menuFadeInAnimation 2s ease-in-out forwards;
  -webkit-animation: menuFadeInAnimation 2s ease-in-out forwards;
  animation-delay: 2s;
  -webkit-animation-delay: 2s;

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
