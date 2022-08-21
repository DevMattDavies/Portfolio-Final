import styled from "styled-components";
import BackgroundGraphic from "../public/assets/background.mp4";

const backgroundStyle = {
  minWidth: "100vw",
  minHeight: "100vh",
  maxWidth: "101vw",
  maxHeight: "101vh",
  width: "auto !important",
  height: "auto !important",
  position: "fixed",
  top: "0",
  right: "0",
  overflow: "hidden",
  objectFit: "fill",
  zIndex: "-10",
  backgroundSize: "cover",
};

const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
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
