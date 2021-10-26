import "./App.css";
import { Router } from "./components/Router/Router";

import { useFeaturedBanners } from "./utils/hooks/useFeaturedBanners";

function App() {
  const { data, isLoading } = useFeaturedBanners();
  console.log(data, isLoading);

  return <Router />;
}

export default App;
