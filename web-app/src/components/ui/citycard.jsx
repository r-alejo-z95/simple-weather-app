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
  icon,
  weatherCondition,
}) {
  return (
    <>
      <Card>
        <CardTitle
          initialCityName={location}
          onCityNameChange={onLocationChange}
        />
        <WeatherIcon>
          <img src={icon} alt="Weather icon" />
          <p>{weatherCondition}</p>
        </WeatherIcon>
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
