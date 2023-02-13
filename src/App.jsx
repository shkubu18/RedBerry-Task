import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home";
import Experience from "./components/Experience";
import PersonalInformation from "./components/PersonalInformation";
import Font1 from "./assets/font/HelveticaNeue-01.ttf";
import Font2 from "./assets/font/HelveticaNeue-Bold-02.ttf";
import Font3 from "./assets/font/HelveticaNeue-BoldItalic-04.ttf";
import Font4 from "./assets/font/HelveticaNeue-CondensedBlack-10.ttf";
import Font5 from "./assets/font/HelveticaNeue-CondensedBold-05.ttf";
import Font6 from "./assets/font/HelveticaNeue-Italic-03.ttf";
import Font7 from "./assets/font/HelveticaNeue-Light-08.ttf";
import Font8 from "./assets/font/HelveticaNeue-LightItalic-09.ttf";
import Font9 from "./assets/font/HelveticaNeue-Medium-11.ttf";
import Font10 from "./assets/font/HelveticaNeue-MediumItalic-12.ttf";
import Font11 from "./assets/font/HelveticaNeue-Thin-13.ttf";
import Font12 from "./assets/font/HelveticaNeue-ThinItalic-14.ttf";
import Font13 from "./assets/font/HelveticaNeue-UltraLight-06.ttf";
import Font14 from "./assets/font/HelveticaNeue-UltraLightItalic-07.ttf";
import Education from "./components/Education";
import GeneratedResume from "./components/GeneratedResume";

function App() {
  const goHomePage = () => {
    window.location.href = "/";
    localStorage.clear();
  };

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route
          path="/personal-info"
          element={<PersonalInformation goHomePage={goHomePage} />}
        />
        <Route
          path="/experience"
          element={<Experience goHomePage={goHomePage} />}
        />
        <Route
          path="/education"
          element={<Education goHomePage={goHomePage} />}
        />
        <Route
          path="/generated-resume"
          element={<GeneratedResume goHomePage={goHomePage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "HelveticaNeue";
  }

@font-face {
  font-family: "HelveticaNeue";
  src: url(${Font1}),
       url(${Font2}),
       url(${Font3}),
       url(${Font4}),
       url(${Font5}),
       url(${Font6}),
       url(${Font7}),
       url(${Font8}),
       url(${Font9}),
       url(${Font10}),
       url(${Font11}),
       url(${Font12}),
       url(${Font13}),
       url(${Font14});
}

  body {
    min-height: 100vh;
  }
`;
