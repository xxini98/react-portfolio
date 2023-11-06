import { CSSReset, ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages";
import Explore from "./components/pages/Explore";
import Shell from "./components/pages/Shell";
import Drops from "./components/pages/Drops";
import theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles.styles";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/shell" element={<Shell />} />
        <Route path="/drops" element={<Drops />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
