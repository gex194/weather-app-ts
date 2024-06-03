import { observer } from "mobx-react";
import CitiesListItemComponent from "./CitiesListItemComponent";

const CitiesListComponent = observer(
  ({ cities }: { cities: CityWeather[] }) => {
    return (
      <div className="flex flex-auto flex-col gap-3 divide-y divide-dashed">
        {cities.length > 0 ? (
          cities.map((item: CityWeather, idx: number) => (
            <CitiesListItemComponent weatherData={item} key={idx} />
          ))
        ) : (
          <p className="text-3xl">Select cities above</p>
        )}
      </div>
    );
  }
);

export default CitiesListComponent;
