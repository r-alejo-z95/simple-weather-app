import "./App.css";

import { useState, useEffect } from "react";
import { Card, CardTitle, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { AddCityButton } from "./components/ui/addcitybutton";

function App() {
  const [city, setCity] = useState("Tumbaco");
  const [temperature, setTemperature] = useState(null);
  const [unit, setUnit] = useState("metric");

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(apiUrl);
      console.log(result);
    };
    fetchData();
  }, []);

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

        <div className="flex flex-row justify-evenly gap-1">
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
