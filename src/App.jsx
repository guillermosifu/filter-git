import theme from "./theme";
import Router from "./router/index";
import { ThemeProvider } from "@mui/material";
ThemeProvider
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
