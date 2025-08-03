import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import ItemModal from "./ItemModal.jsx";
import ModalWithForm from "./ModalWithForm.jsx";
import {
  initialCards,
  fetchCurrentFeel,
  fetchCurrentTemp,
  fetchCurrentLoc,
} from "../utils/constants.js";

export default function App() {
  const [isAddClothesOpen, setIsAddClothesOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [currentFeel, setCurrentFeel] = useState(null);
  const [currentLoc, setLoc] = useState(null);

  useEffect(() => {
    fetchCurrentLoc().then(setLoc);
  });

  useEffect(() => {
    fetchCurrentTemp().then(setCurrentTemp);
    fetchCurrentFeel().then(setCurrentFeel);
  }, []);

  function openAddClothesModal() {
    setIsAddClothesOpen(true);
  }

  function openItemModal(item) {
    setSelectedItem(item);
  }

  function closeAllModals() {
    setIsAddClothesOpen(false);
    setSelectedItem(null);
  }

  return (
    <>
      <Header currentLoc={currentLoc} openModal={openAddClothesModal} />
      <Main
        currentFeel={currentFeel}
        currentTemp={currentTemp}
        initialCards={initialCards}
        openItemModal={openItemModal}
      />
      <Footer />

      <ModalWithForm
        isOpen={isAddClothesOpen}
        closeAllModals={closeAllModals}
        titleText={"New Garment"}
        buttonText={"Add Garment"}
      >
        <label className="popup__input-label">
          Name
          <input
            type="text"
            placeholder="Name"
            className="popup__input popup__input-text"
            required
          />
        </label>
        <label className="popup__input-label">
          Image
          <input
            type="url"
            placeholder="Image URL"
            className="popup__input popup__input-text"
            required
          />
        </label>
        <div className="popup__input-label popup__input-label_list">
          {["Blistering", "Hot", "Warm", "Chilly", "Cold", "Freezing"].map(
            (temp) => (
              <label key={temp} className="popup__list-label">
                <input
                  name="temperature"
                  type="radio"
                  value={temp.toLowerCase()}
                  className="popup__list"
                  required
                />
                <span className="popup__list_custom"></span>
                <div className="popup_label-name">{temp}</div>
              </label>
            )
          )}
        </div>
      </ModalWithForm>

      <ItemModal
        item={selectedItem}
        isOpen={!!selectedItem}
        closeAllModals={closeAllModals}
      />
    </>
  );
}
