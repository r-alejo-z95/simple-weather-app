import "./App.css";

import { useState, useEffect } from "react";
import { CityCard } from "./components/ui/citycard";

const units = {
  celsius: "°C",
  fahrenheit: "°F",
};

function App() {
  const [location, setLocation] = useState("Jerusalem");
  const [temperature, setTemperature] = useState(null);
  const [unit, setUnit] = useState(units.celsius);
  const [icon, setIcon] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState(null);

  // API fetch
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      // console.log(data);

      console.table([
        data.location.name,
        data.location.country,
        data.current.condition.text,
        data.current.temp_c,
        data.current.temp_f,
      ]);

      if (unit === units.celsius) {
        setTemperature(data.current.temp_c);
      } else if (unit === units.fahrenheit) {
        setTemperature(data.current.temp_f);
      }

      setWeatherCondition(data.current.condition.text);
      setIcon(`https:${data.current.condition.icon}`);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      return null;
    }
  };

  // Fetch data on location change
  useEffect(() => {
    fetchData();
  }, [location, unit]);

  return (
    <>
      <div className="flex flex-col m-10 gap-5">
        <div className="flex flex-col place-items-center gap-8">
          <h1 className="font-bold text-4xl text-center">
            Simple Weather Card
          </h1>
          <p className="text-center">Click on the location to change it</p>
        </div>

        <div id="card" className="flex flex-row justify-evenly gap-1">
          <CityCard
            location={location}
            onLocationChange={setLocation}
            onUnitChange={setUnit}
            temperature={temperature}
            unit={unit}
            units={units}
            icon={icon}
            weatherCondition={weatherCondition}
          />
        </div>
      </div>
    </>
  );
}

export default App;
