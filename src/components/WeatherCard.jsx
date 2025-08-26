import "../blocks/weatherCard.css";
import cloud from "../assets/cloud.png";

export default function WeatherCard({ currentTemp, currentFeel, currentUnit }) {
  return (
    <div className="weatherCard">
      <div className="weatherCard__temp">
        {currentTemp}°{currentUnit}
      </div>
      <div className="weatherCard__sun"></div>
      <img className="weatherCard__cloud" src={cloud}></img>
    </div>
  );
}
