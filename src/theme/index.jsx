import { extendTheme } from "@chakra-ui/react";
import { textTheme } from "./components/text";
import { tableTheme } from "./components/table";
import { progressTheme } from "./components/progress";
import { buttonTheme } from "./components/button";
// import { containerTheme } from './components/container';

const theme = extendTheme({
  components: {
    // Container: containerTheme,
    Text: textTheme,
    Table: tableTheme,
    Progress: progressTheme,
    Button: buttonTheme,
  },
  styles: {
    global: {
      html: {
        width: "100%",
        height: "100%",
      },
      body: {
        bg: "#191c1f",
        fontFamily: "Inter",
        fontSize: "16px",
        fontWeight: "400",
        color: "#fff",
      },
      // styles for the `a`
      a: {
        color: "#2B3674",
        _hover: {
          textDecoration: "none !important",
        },
      },
      li: {
        listStyle: "none",
      },
    },
  },
  space: {
    4: "25px",
  },
  colors: {
    primary: "#4318FF",
    secondary_grey_700: "#707EAE",
    Secondary_Grey_600: "#A3AED0",
  },
});

export default theme;
