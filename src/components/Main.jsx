import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";
import "../blocks/ItemCard.css";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";
import "../blocks/Main.css";

export default function Main({
  currentFeel,
  currentTemp,
  initialCards,
  openItemModal,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const filteredCards = initialCards.filter(
    (item) => item.tempType === currentFeel
  );

  const [fahrenheit, celsius] = currentTemp;
  const unit = currentTemperatureUnit;

  const setTemp = () => {
    if (currentTemperatureUnit === "F") {
      return fahrenheit;
    } else if (currentTemperatureUnit === "C") {
      return celsius;
    } else {
      console.error();
    }
  };
  const temp = setTemp();
  return (
    <div className="main">
      <WeatherCard
        currentFeel={currentFeel}
        currentTemp={temp}
        currentUnit={currentTemperatureUnit}
      />
      <div className="main main__announce">
        Today is {temp}°{unit} / You may want to wear:
      </div>
      <div className="ItemCard__all">
        {filteredCards.map((item) => (
          <ItemCard
            key={item._id}
            item={item}
            onClick={() => {
              openItemModal(item);
            }}
          />
        ))}
      </div>
    </div>
  );
}
