import { fetchCards } from "../utils/constants";
import AddItemModal from "./AddItemModal";
import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";
import ItemModal from "./ItemModal";
export default function ClothesSection() {
  const [selectedItem, setSelectedItem] = useState(null);
  function openItemModal(item) {
    setSelectedItem(item);
  }
  const [currentCards, setCurrentCards] = useState([]);

  const [isAddClothesOpen, setIsAddClothesOpen] = useState(false);
  function openAddClothesModal() {
    setIsAddClothesOpen(true);
  }

  function closeAllModals() {
    setIsAddClothesOpen(false);
    setSelectedItem(null);
  }

  function handleAddItem(newItem) {
    setCurrentCards((prevCards) => [newItem, ...prevCards]);
  }

  useEffect(() => {
    setCurrentCards(fetchCards());
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
              onClick={() => {
                openItemModal(item);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
