import styled from "styled-components";
import BackgroundGraphic from "../public/assets/background.mp4";

const backgroundStyle = {
  width: "100vw",
  minHeight: "100vh",
  // padding: "2rem",
  position: "fixed",
  top: "0",
  right: "0",
  // display: "block",
  overflow: "hidden",
  objectFit: "fill",
  zIndex: "-10",
  backgroundSize: "cover",
};

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  overflow: hidden;
  object-fit: fill;
  z-index: -10;
`;

export default function BackgroundVideo() {
  return (
    <>
      {/* <BackgroundContainer> */}
      <video style={backgroundStyle} autoPlay loop muted playsInline>
        <source src={BackgroundGraphic} type="video/mp4" />
      </video>
      {/* </BackgroundContainer> */}
    </>
  );
}
