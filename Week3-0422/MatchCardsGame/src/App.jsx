import { useState } from "react";
import MatchCardsGame from "./Pages/MatchCardsGame";
import { createGlobalStyle } from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./assets/theme";

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video,input {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  box-sizing: border-box;
  text-decoration-line: none;
  font-size: 62.5%;
  font-smooth: always;

}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}

@font-face {
    font-family: 'NeoDunggeunmoPro-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

body {
  line-height: 1;
  font-family: "NeoDunggeunmoPro-Regular";
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
.App{
  width:100%;
  height:100vh;
}
`;
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        <MatchCardsGame setIsDark={setIsDark} />
      </ThemeProvider>
    </>
  );
}

export default App;
