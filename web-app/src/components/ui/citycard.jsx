import * as React from "react";
import { useState } from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CityCard({ location }) {
  const [cityName, setCityName] = useState(location);
  const [isEditing, setIsEditing] = useState(false);

  const displayCityName = () => {
    setCityName("");
  };

  return (
    <>
      <Card>
        <CardTitle onClick={displayCityName}>{cityName}</CardTitle>
        <CardContent>Weather animation</CardContent>
        <CardContent>Temperature</CardContent>
        <CardContent>
          <Button>C°</Button>
        </CardContent>
      </Card>
    </>
  );
}

export { CityCard };
