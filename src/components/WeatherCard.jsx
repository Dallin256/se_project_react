import "../blocks/weatherCard.css";
import cloud from "../assets/cloud.png";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

export default function WeatherCard({ currentTemp }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  return (
    <div className="weatherCard">
      <div className="weatherCard__temp">
        {currentTemp}°{currentTemperatureUnit}
      </div>
      <div className="weatherCard__sun"></div>
      <img alt="cloud image" className="weatherCard__cloud" src={cloud}></img>
    </div>
  );
}
