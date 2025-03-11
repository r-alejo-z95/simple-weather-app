import * as React from "react";
import {
  Card,
  CardTitle,
  WeatherAnimation,
  TempDisplay,
  UnitToggle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CityCard({ location, onLocationChange }) {
  return (
    <>
      <Card>
        <CardTitle
          initialCityName={location}
          onCityNameChange={onLocationChange}
        />
        <WeatherAnimation>Weather animation</WeatherAnimation>
        <TempDisplay>Temperature</TempDisplay>
        <UnitToggle>
          <Button>C°</Button>
        </UnitToggle>
      </Card>
    </>
  );
}

export { CityCard };
