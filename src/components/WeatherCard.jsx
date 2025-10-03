import "../blocks/weatherCard.css";
import cloud from "../assets/cloud.png";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

export default function WeatherCard({ currentTemp }) {
  const { currentUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <div className="weatherCard">
      <div className="weatherCard__temp">
        {currentTemp}°{currentUnit}
      </div>
      <div className="weatherCard__sun"></div>
      <img alt="cloud image" className="weatherCard__cloud" src={cloud}></img>
    </div>
  );
}
