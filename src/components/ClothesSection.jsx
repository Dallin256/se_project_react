import AddItemModal from "./AddItemModal";
import ItemCard from "./ItemCard";

import ItemModal from "./ItemModal";

export default function ClothesSection({
  currentCards,
  openItemModal,
  openAddClothesModal,
}) {
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
          {currentCards.map((item) => (
            <ItemCard
              key={item._id}
              item={item}
              clickCard={() => {
                openItemModal(item);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
