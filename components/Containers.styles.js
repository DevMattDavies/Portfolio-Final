import styled from "styled-components";

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

export const TitleAndMenuContainer = styled.div`
  height: 100%;
  width: max-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const AboutInfoContainer = styled.div`
  height: auto;
  width: 400px;
`;

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

  animation: fadeInAnimation 2s ease-in;
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

export const TechIconRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;
