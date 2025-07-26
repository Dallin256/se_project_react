import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";
import "../blocks/ItemCard.css";
import {
  fetchCurrentTemp,
  fetchCurrentFeel,
  initialCards,
} from "../utils/constants.js";
import "../blocks/Main.css";

export default function Main({ openItemModal }) {
  const [currentTemp, setCurrentTemp] = useState(null);
  const [currentFeel, setCurrentFeel] = useState(null);

  useEffect(() => {
    fetchCurrentTemp().then(setCurrentTemp);
    fetchCurrentFeel().then(setCurrentFeel);
  }, []);

  const filteredCards = initialCards.filter(
    (item) => item.tempType === currentFeel
  );

  function openModal(item) {
    setSelectedItem(item);
  }
  console.log("Fetched feel:", currentFeel);
  console.log("Initial cards:", initialCards);
  return (
    <div className="main">
      <WeatherCard />
      <div className="main main__announce">
        Today is {currentTemp}°F / You may want to wear:
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
