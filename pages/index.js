import styled from "styled-components";
import BackgroundVideo from "../components/BackgroundVideo";
import TitleText from "../components/TitleText";

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2rem solid white;
  height: 100vh;
  width: 100vw;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  border: 0.8px solid black;
  z-index: 1;
  position: relative;
`;

export default function Splash() {
  return (
    <PageContainer>
      <BackgroundVideo />
      <Background>
        <TitleText />
      </Background>
    </PageContainer>
  );
}
