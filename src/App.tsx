import "./App.css";
import { Router } from "./components/Router/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalStyle } from "./globalStyles";
import { store } from "./AppStore";
import { Provider } from "react-redux";

function App() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <Router />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
