import "./App.css";

import { useState } from "react";
import { Card, CardTitle, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { AddCityButton } from "./components/ui/addcitybutton";

function App() {
  const [location, setLocation] = useState("Tumbaco");
  const [temperature, setTemperature] = useState(null);
  const [unit, setUnit] = useState("metric");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      return data;
      // console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
      return null;
    }
  };

  const toggleUnit = () => {
    console.log("changed");
  };

  const addCity = () => {
    console.log("city added");
  };

  return (
    <>
      <div className="flex flex-col m-10 gap-5">
        <div className="flex flex-col place-items-center gap-8">
          <h1 className="font-bold text-4xl ">Simple Weather</h1>
          <p>Add up to 3 cities</p>
        </div>

        <div id="card" className="flex flex-row justify-evenly gap-1">
          <Card>
            <CardTitle>City</CardTitle>
            <CardContent>Weather animation</CardContent>
            <CardContent>Temperature</CardContent>
            <CardContent>
              <Button onClick={toggleUnit}>C°</Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <AddCityButton onClick={addCity}>Add city</AddCityButton>
        </div>
      </div>
    </>
  );
}

export default App;
