import "./App.css";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { AddCityButton } from "./components/ui/addcitybutton";

function App() {
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
              <Button>C°</Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
          <AddCityButton>Add city</AddCityButton>
        </div>
      </div>
    </>
  );
}

export default App;
