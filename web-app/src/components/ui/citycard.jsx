import * as React from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CityCard({ location }) {
  return (
    <>
      <Card>
        <CardTitle initialCityName={location} />
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
