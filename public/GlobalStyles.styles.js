import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
  --font-primary: "pp_neue_montrealthin";
  --primary: black;

 
}




html,
body {
  font-size: calc(60% + 0.8vmin);
  scroll-behavior: smooth;
  height: 100%;
  overflow: hidden;
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
