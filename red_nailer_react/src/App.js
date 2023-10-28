import './App.css';
import {Box, createTheme, ThemeProvider} from "@mui/material";
import AppBarer from "./AppBarer";
import Paperer from "./Paperer";
import CremerGenerier from "./CremerGenerier";
import LippenstifterGenerier from "./LippenstifterGenerier";
import ShampoerGenerier from "./ShampoerGenerier";
import ShampoerGenerierer from "./ShampoerGenerierer";
import CremerGenerierer from "./CremerGenerierer";
import LippenstifterGenerierer from "./LippenstifterGenerierer";
import NagellackerGenerierer from "./NagellackerGenerierer";

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#f62993",
    },
    secondary: {
      main: "rgb(101,101,103)",
    },
  },
});
function App() {
  return (
      <ThemeProvider theme={myTheme}>
        <AppBarer/>
          <Box>
              <Paperer>
                  <NagellackerGenerierer/>
              </Paperer>
          </Box>
      </ThemeProvider>
  );
}

export default App;