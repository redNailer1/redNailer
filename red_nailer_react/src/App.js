import './App.css';
import MyForm from "./MyComponent";
import {Box, createTheme, ThemeProvider} from "@mui/material";
import MyAppBar from "./MyAppBar";
import MyPaper from "./MyPaper";

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
        <MyAppBar/>
          <Box>
              <MyPaper>
                  <MyForm/>
              </MyPaper>
          </Box>
      </ThemeProvider>
  );
}

export default App;
