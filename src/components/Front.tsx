import React, { useEffect, useState } from "react";
import { Moment } from "moment";
import "./card.css";
import { getWeatherByLocation } from "../api";
import cities from "../cities.json";
import { Weather } from "../models/Weather";

type FrontProps = {
  date: Moment;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Front: React.FC<FrontProps> = ({ date, onClick: onFlip }) => {
  const [currWeather, setCurrWeather] = useState<Weather | null>(null);

  useEffect(() => {
    getWeatherByLocation(cities[0]).then((weather: Weather) =>
      setCurrWeather(weather)
    );
  }, []);

  if (!currWeather) {
    return null;
  }

  const { 
    name, 
    temperature, 
    apparentTemperature, 
    icon, 
    summary 
  } = currWeather;

  return (
    <div className="card is-clear-day">
      <div className="card-row">
        <div className="card-day">{date.format("dddd")}</div>
        <div className="card-day">{date.format("MMM Do")}</div>
      </div>

      <img src={`/icons/${icon}.svg`} width={120} alt={icon} />

      <div className="card-row">
        <div className="card-temperature">
          {`${temperature}`}°
          <span className="small">/ {`${apparentTemperature}`}°</span>
        </div>
        <div className="card-weather">{summary}</div>
      </div>

      <div className="card-line" />

      <div className="card-row">
        <div className="card-city">{name}</div>
        <button className="card-options" onClick={onFlip}>
          <img src="/icons/options.svg" width={32} alt="options" />
        </button>
      </div>
    </div>
  );
};
