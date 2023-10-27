import './App.css';
import MyForm from "./MyComponent";
import {createTheme, ThemeProvider} from "@mui/material";
import MyAppBar from "./MyAppBar";

const myTheme = createTheme({
  palette: {
    primary: {
      main: "#29b6f6",
    },
    secondary: {
      main: "#ec407a",
    },
  },
});
function App() {
  return (
      <ThemeProvider theme={myTheme}>
        <MyAppBar/>
        <MyForm/>
      </ThemeProvider>
  );
}

export default App;
