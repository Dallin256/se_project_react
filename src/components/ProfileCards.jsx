import { initialCards } from "../utils/constants";
import ItemCard from "./ItemCard";
export default function ProfileCards() {
  function openItemModal(item) {
    setSelectedItem(item);
  }
  return (
    <div className="ProfileItemCards">
      <div className="ProfileItemCards__header">
        <p className="ProfileItemCards__title">Your items</p>
        <button className="ProfileItemCards__button">+ Add new</button>
      </div>
      <div className="ProfileItemCards__box">
        {initialCards.map((item) => (
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
