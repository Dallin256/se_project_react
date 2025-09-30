import { fetchCards } from "../utils/constants";
import AddItemModal from "./AddItemModal";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import ItemModal from "./ItemModal";

export default function ClothesSection({
  openItemModal,
  openAddClothesModal,
  handleAddItem,
  closeAllModals,
  deleteConfirm,
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isAddClothesOpen, setIsAddClothesOpen] = useState(false);
  const [currentCards, setCurrentCards] = useState([]);

  function closeAllModals() {
    setIsAddClothesOpen(false);
    setSelectedItem(null);
  }

  function handleAddItem(newItem) {
    setCurrentCards((prevCards) => [newItem, ...prevCards]);
  }

  useEffect(() => {
    fetchCards().then(setCurrentCards).catch(console.error);
  }, []);

  return (
    <>
      <AddItemModal
        isOpen={isAddClothesOpen}
        onAddItem={handleAddItem}
        onCloseModal={null}
        closeAllModals={closeAllModals}
      />
      <ItemModal
        item={selectedItem}
        isOpen={!!selectedItem}
        closeAllModals={closeAllModals}
        deleteConfirm={deleteConfirm}
      />

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
