import * as React from "react";
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function CityCard() {
  return (
    <>
      <div id="card" className="flex flex-row justify-evenly gap-1">
        <Card>
          <CardTitle>City</CardTitle>
          <CardContent>Weather animation</CardContent>
          <CardContent>Temperature</CardContent>
          <CardContent>
            <Button>C°</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export { CityCard };
