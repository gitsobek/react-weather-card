import React, { useState } from "react";
import moment from "moment";
import "./App.css";
import { Front } from "./components/Front";

function App() {
  const now = moment();

  const [flipped, setFlipped] = useState(false);

  const onFlip = (): void => {
    setFlipped((prevState: boolean) => !prevState);
  }

  return (
    <div className={`panel ${flipped ? 'flip' : ''}`}>
      <div className="panel-front">
        <Front
          date={now}
          onClick={onFlip}
        />
      </div>
      <div className="panel-back">Panel Back</div>
    </div>
  );
}

export default App;
