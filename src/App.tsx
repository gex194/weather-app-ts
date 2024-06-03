import "./App.css";
import WeatherPage from "./pages/WeatherPage";
import { observableCityList } from "./store/ObservableCityList";

function App() {
  return <WeatherPage store={observableCityList} />;
}

export default App;
