import * as React from "react";
import {
  Card,
  CardTitle,
  WeatherAnimation,
  TempDisplay,
  UnitToggle,
} from "@/components/ui/card";

function CityCard({
  location,
  onLocationChange,
  temperature,
  unit,
  units,
  onUnitChange,
}) {
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
        <UnitToggle
          initialUnit={unit}
          onUnitChange={onUnitChange}
          units={units}
        />
      </Card>
    </>
  );
}

export { CityCard };
