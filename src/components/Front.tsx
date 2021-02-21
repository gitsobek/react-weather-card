import React, { useEffect, useState } from "react";
import { Moment } from "moment";
import "./card.css";
import { getWeatherByLocation } from "../api";
import { Weather } from "../models/Weather";
import { Location } from '../models/Location';
import { Icon } from './Icon';

interface FrontProps {
  date: Moment;
  currLocation: Location,
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Front: React.FC<FrontProps> = ({ date, currLocation, onClick: onFlip }) => {
  const [currWeather, setCurrWeather] = useState<Weather | null>(null);

  useEffect(() => {
    getWeatherByLocation(currLocation).then((weather: Weather) =>
      setCurrWeather(weather)
    );
  }, [currLocation?.id]);

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

      <Icon name={icon} width={120} height={120} alt={icon}/>

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
          <Icon name="options" width={32} height={32} alt="options"/>
        </button>
      </div>
    </div>
  );
};
