import React from "react";
import "./card.css";
import "./list.css"
import { Location } from "../models/Location";

interface BackProps {
  cities: Location[];
  currLocation: Location;
  onSelect: (location: Location) => void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const Back: React.FC<BackProps> = ({
  cities,
  currLocation,
  onSelect,
  onClick: onFlip,
}) => {
  return (
    <div className="card-back">
      <ul className="list">
        {cities.map((city: Location) => (
          <li
            key={city.id}
            className={`list-item ${
              currLocation.name === city.name ? "is-selected" : ""
            }`}
            onClick={() => onSelect(city)}
          >
            {city.name}
          </li>
        ))}
      </ul>
      <button className="card-back-btn" onClick={onFlip}>Flip back</button>
    </div>
  );
};
