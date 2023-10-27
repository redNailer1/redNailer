import './App.css';
import MyForm from "./MyComponent";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import AppBarer from "./AppBarer";
import Paperer from "./Paperer";
import CremerComponenter from "./CremerComponenter";
import LippenstifterComponenter from "./LippenstifterComponenter";

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
                  <MyForm/>
              </Paperer>
          </Box>
      </ThemeProvider>
  );
}

export default App;