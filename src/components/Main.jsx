import React, { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm.jsx";
import ItemModal from "./ItemModal.jsx";
import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";
import "../blocks/ItemCard.css";
import {
  fetchCurrentTemp,
  fetchCurrentFeel,
  initialCards,
} from "../utils/constants.js";
import "../blocks/Main.css";

export default function Main() {
  const [currentTemp, setCurrentTemp] = useState(null);
  const [currentFeel, setCurrentFeel] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

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

  function closeAllModals() {
    setSelectedItem(null);
  }

  return (
    <div className="main">
      <WeatherCard />
      <div className="main main__announce">
        Today is {currentTemp}°F / You may want to wear:
      </div>
      <div className="ItemCard__all">
        {filteredCards.map((item) => (
          <ItemCard key={item.id} item={item} onClick={openModal} />
        ))}
      </div>

      <ItemModal
        item={selectedItem}
        isOpen={!!selectedItem}
        closeAllModals={closeAllModals}
      />
    </div>
  );
}

