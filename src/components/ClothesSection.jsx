import ItemCard from "./ItemCard";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function ClothesSection({
  currentCards,
  openItemModal,
  openAddClothesModal,
  onCardLike,
}) {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <div className="ProfileItemCards">
        <div className="ProfileItemCards__header">
          <p className="ProfileItemCards__title">Your items</p>
          <button
            onClick={() => {
              openAddClothesModal();
            }}
            className="ProfileItemCards__button"
          >
            + Add new
          </button>
        </div>
        <div className="ProfileItemCards__box">
          {currentCards
            .filter((item) => item.owner === currentUser._id)
            .map((item) => (
              <ItemCard
                key={item._id}
                item={item}
                clickCard={() => {
                  openItemModal(item);
                }}
                onCardLike={onCardLike}
              />
            ))}
        </div>
      </div>
    </>
  );
}
