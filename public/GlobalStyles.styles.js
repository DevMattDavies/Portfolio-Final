import { useEffect } from "react";
import { createGlobalStyle } from "styled-components";

useEffect(() => {
  // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}, []);

useEffect(() => {
  // We listen to the resize event
  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
}, [vh]);

const GlobalStyle = createGlobalStyle`
    :root {
  --font-primary: "pp_neue_montrealthin";
  --primary: black;
}


html,
body {
  font-size: calc(60% + 0.8vmin);
  scroll-behavior: smooth;
  position: fixed;
  height: 100%;
  height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  ${"" /* overflow: hidden; */}
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  font-family: var(--font-primary);
  font-size: 1rem;
  padding: 0;
  margin: 0;
  ${"" /* cursor: default; */}
  cursor: none;
}

`;

export default GlobalStyle;
