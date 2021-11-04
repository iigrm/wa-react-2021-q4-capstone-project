import "./App.css";
import { Router } from "./components/Router/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./globalStyles";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
