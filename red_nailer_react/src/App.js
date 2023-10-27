import './App.css';
import MyForm from "./MyComponent";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import AppBarer from "./AppBarer";
import Paper from "./Paper";
import ExampleComponent2 from "./ShampoerComponenter";

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
              <Paper>
                  <MyForm/>
              </Paper>
          </Box>
      </ThemeProvider>
  );
}

export default App;