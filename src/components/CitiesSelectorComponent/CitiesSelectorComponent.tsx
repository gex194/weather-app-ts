import React, { MutableRefObject, useRef } from "react";

const CitiesSelectorComponent = ({ store }: { store: IObservableCityList }) => {
  const selectRef = useRef(null);
  const handleCitiesSelect = (e: MutableRefObject<HTMLSelectElement | null>) => {
    if (e.current) {
      const { selectedOptions } = e.current;
      const values = [...selectedOptions].map((opt) => opt.value);
      const cities = store.cities.filter((x: { id: string }) =>
        values.includes(x.id)
      );
      store.setSelectedCities(cities);
    }
  };
  return (
    <React.Fragment>
      <div className="container mt-2">
        <select multiple className="rounded mt-2 p-2" ref={selectRef}>
          {store.cities.map((item: CityListItem) => (
            <option className="text-xl" key={item.id} value={item.id}>
              {item.name} ({item.latitude}, {item.longitude})
            </option>
          ))}
        </select>
      </div>
      <div className="container mt-2">
        <button
          className="rounded border-spacing-1 text-slate-100 text-xl"
          value={"test"}
          title="Test"
          name="Test"
          onClick={() => handleCitiesSelect(selectRef)}
        >
          Check weather
        </button>
      </div>
    </React.Fragment>
  );
};

export default CitiesSelectorComponent;
