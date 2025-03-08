import "./App.css";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="flex flex-col m-8 justify-center content-center gap-6">
        <h1 className="font-bold text-4xl just text-center">Simple Weather</h1>

        <div className="flex flex-row justify-evenly">
          <Card className="flex flex-col ">
            <CardHeader>
              <CardTitle>City</CardTitle>
            </CardHeader>
            <CardContent>Weather animation</CardContent>
            <CardContent>Temperature</CardContent>
            <Button>C°</Button>
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
