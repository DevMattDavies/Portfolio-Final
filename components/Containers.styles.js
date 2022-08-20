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
  height: max-content;
  width: 20%;
  /* border: 2px solid orange; */
`;
