import WeatherCard from "./WeatherCard.jsx";
import ItemCard from "./ItemCard.jsx";
import "../blocks/ItemCard.css";

import "../blocks/Main.css";

export default function Main({
  currentFeel,
  currentTemp,
  initialCards,
  openItemModal,
}) {
  const filteredCards = initialCards.filter(
    (item) => item.tempType === currentFeel
  );

  return (
    <div className="main">
      <WeatherCard currentFeel={currentFeel} currentTemp={currentTemp} />
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
