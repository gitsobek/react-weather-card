import React, { useState } from "react";
import moment from "moment";
import "./App.css";
import { Front } from "./components/Front";
import { Back } from "./components/Back";
import cities from "./cities.json";
import { Location } from "./models/Location";

function App() {
  const now = moment();

  const [currLocation, setCurrLocation] = useState<Location>(cities[0]);
  const [flipped, setFlipped] = useState(true);

  const onLocationSelection = (location: Location): void => {
    setCurrLocation(location);
  }

  const onFlip = (): void => {
    setFlipped((prevState: boolean) => !prevState);
  };

  return (
    <div className={`panel ${flipped ? "flip" : ""}`}>
      <div className="panel-front">
        <Front 
          date={now}
          currLocation={currLocation}
          onClick={onFlip} 
        />
      </div>
      <div className="panel-back">
        <Back 
          cities={cities}
          currLocation={currLocation}
          onSelect={onLocationSelection}
          onClick={onFlip}
        />
      </div>
    </div>
  );
}

export default App;
