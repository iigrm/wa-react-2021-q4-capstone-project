import "./App.css";
import { Router } from "./components/Router/Router";
import { GlobalStyle } from "./globalStyles";
import { AppProviders } from "./AppProviders";

function App() {
  return (
    <AppProviders>
      <GlobalStyle />
      <Router />
    </AppProviders>
  );
}

export default App;
