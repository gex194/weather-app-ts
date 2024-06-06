import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./App.css";
import WeatherPage from "./pages/WeatherPage";
import { observableCityList } from "./store/ObservableCityList";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  return <WeatherPage store={observableCityList} />;
}

export default App;
