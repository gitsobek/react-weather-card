import { Location } from "./models/Location";
import { Weather } from "./models/Weather";

const summaries: string[] = [
  "Clear",
  "Cloudy",
  "Foggy",
  "Partly cloudy",
  "Rainy",
  "Snowy",
  "Windy",
];

const icons: string[] = [
  "clear-day",
  "clear-night",
  "cloudy",
  "fog",
  "partly-cloudy-day",
  "partly-cloudy-night",
  "rain",
  "sleet",
  "snow",
  "wind",
];

export const getWeatherByLocation = async (
  location: Location
): Promise<Weather> => {
  const { name } = location;

  const temp =
    name === "Cracow" ? getRandomNumber(0, 35) : getRandomNumber(0, 40);

  return {
    name,
    temperature: temp,
    apparentTemperature: getRandomNumber(temp - 2, temp + 2),
    summary: summaries[getRandomNumber(0, summaries.length - 1)],
    icon: icons[getRandomNumber(0, icons.length - 1)],
  };
};

const getRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;
