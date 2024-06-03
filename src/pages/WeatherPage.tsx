import { observer } from "mobx-react";
import CitiesListComponent from "../components/CitiesList/CitiesListComponent";
import CitiesSelectorComponent from "../components/CitiesSelectorComponent/CitiesSelectorComponent";

const WeatherPage = observer(({ store }: { store: IObservableCityList }) => {
  return (
    <div>
      <div className="container">
        <CitiesSelectorComponent store={store} />
      </div>
      <div className="container mt-2">
        <CitiesListComponent cities={store.selectedCitiesWeatherData.slice()} />
      </div>
    </div>
  );
});

export default WeatherPage;
