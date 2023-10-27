import './App.css';
import MyForm from "./ExampleComponent";
import {createTheme, ThemeProvider} from "@mui/material";

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
        <MyForm/>
      </ThemeProvider>
  );
}

export default App;
