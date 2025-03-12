import * as React from "react";
import {
  Card,
  CardTitle,
  WeatherIcon,
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
        <WeatherIcon />
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
