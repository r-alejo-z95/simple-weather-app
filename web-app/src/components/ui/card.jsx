import * as React from "react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Card({ className, ...props }) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm ",
        className
      )}
      {...props}
    />
  );
}

function CardTitle({ initialCityName, onCityNameChange }) {
  const [cityName, setCityName] = useState(initialCityName);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (event) => {
    setCityName(event.target.value);
  };

  const handleExitEditMode = () => {
    if (cityName.trim() === "" || !/^[a-zA-Z\s]*$/.test(cityName)) {
      setCityName(initialCityName);
      onCityNameChange(initialCityName);
    } else {
      setCityName(
        cityName
          .split(" ")
          .map(
            (word) =>
              word.trim().charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")
      );
      onCityNameChange(
        cityName
          .split(" ")
          .map(
            (word) =>
              word.trim().charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          )
          .join(" ")
      );
    }
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={cityName}
          onChange={handleChange}
          onBlur={handleExitEditMode}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === "Escape") {
              handleExitEditMode();
            }
          }}
          autoFocus
          className="font-semibold mx-auto text-center max-w-28"
        />
      ) : (
        <div
          data-slot="card-title"
          className={cn(
            "leading-none font-semibold flex justify-center cursor-pointer"
          )}
          onClick={handleClick}
        >
          {cityName}
        </div>
      )}
    </>
  );
}

function WeatherIcon({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 flex justify-center", className)}
      {...props}
    />
  );
}

function TempDisplay({ className, ...props }) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 flex justify-center", className)}
      {...props}
    />
  );
}

function UnitToggle({ initialUnit, onUnitChange, units }) {
  const [measureUnit, setMeasureUnit] = useState(initialUnit);

  const toggleUnit = () => {
    const newUnit =
      measureUnit === units.celsius ? units.fahrenheit : units.celsius;
    setMeasureUnit(newUnit);
    onUnitChange(newUnit);
  };

  return (
    <div data-slot="card-content" className={cn("px-6 flex justify-center")}>
      <Button onClick={toggleUnit}>
        Switch to{" "}
        {measureUnit === units.celsius ? units.fahrenheit : units.celsius}
      </Button>
    </div>
  );
}

export { Card, CardTitle, WeatherIcon, TempDisplay, UnitToggle };
