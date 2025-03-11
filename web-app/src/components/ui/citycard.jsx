import * as React from "react";
import {
  Card,
  CardTitle,
  WeatherAnimation,
  TempDisplay,
  UnitToggle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CityCard({ location, onLocationChange, temperature, unit }) {
  return (
    <>
      <Card>
        <CardTitle
          initialCityName={location}
          onCityNameChange={onLocationChange}
        />
        <WeatherAnimation>Weather animation</WeatherAnimation>
        <TempDisplay>
          {temperature} {unit}
        </TempDisplay>
        <UnitToggle>
          <Button>C°</Button>
        </UnitToggle>
      </Card>
    </>
  );
}

export { CityCard };
