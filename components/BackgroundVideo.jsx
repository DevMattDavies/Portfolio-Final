import styled from "styled-components";
import BackgroundGraphic from "../public/assets/background.mp4";

const BackgroundStyle = {
  width: "100%",
  height: "100%",
  // padding: "2rem",
  position: "absolute",
  top: "0",
  right: "0",
  // display: "block",
  overflow: "hidden",
  objectFit: "fill",
  zIndex: "-10",
  maxWidth: "-webkit-fill-available",
  maxHeight: "-webkit-fill-available",
};

export default function BackgroundVideo() {
  return (
    <>
      <video style={BackgroundStyle} autoPlay loop muted>
        <source src={BackgroundGraphic} type="video/mp4" />
      </video>
    </>
  );
}
