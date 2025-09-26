import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import Profile from "./Profile.jsx";
import ItemModal from "./ItemModal.jsx";
import DeleteConfirmModal from "./DeleteConfirmModal.jsx";
import AddItemModal from "./AddItemModal.jsx";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import {
  fetchCurrentFeel,
  fetchCurrentTemp,
  fetchCurrentLoc,
  fetchCards,
  api,
} from "../utils/constants.js";

export default function App() {
  const [isAddClothesOpen, setIsAddClothesOpen] = useState(false);
  const [isConfirmDeleteOpen, setIsConfimDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [currentFeel, setCurrentFeel] = useState(null);
  const [currentLoc, setLoc] = useState(null);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentCards, setCurrentCards] = useState([]);

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  useEffect(() => {
    fetchCurrentLoc().then(setLoc);
  }, []);

  useEffect(() => {
    fetchCurrentTemp().then(setCurrentTemp);
    fetchCurrentFeel().then(setCurrentFeel);
  }, []);

  useEffect(() => {
    fetchCards().then(setCurrentCards).catch(console.error);
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

  async function handleAddItem(newItem) {
    const savedItem = await api.addCard(newItem);
    if (savedItem) {
      setCurrentCards([savedItem, ...currentCards]);
    }
  }

  async function handleRemoveItem(targetItem) {
    const removedCard = await api.deleteCard(targetItem);
    if (removedCard) {
      setCurrentCards();
    }
  }

  function deleteConfirm() {
    setIsConfimDeleteOpen(true);
    console.log("clicky");
  }

  return (
    <BrowserRouter>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header currentLoc={currentLoc} openModal={openAddClothesModal} />

        <Routes>
          <Route path="/se_project_react/profile" element={<Profile />} />
          <Route
            path="/se_project_react/"
            element={
              <Main
                currentFeel={currentFeel}
                currentTemp={currentTemp || [null, null]}
                cards={currentCards}
                openItemModal={openItemModal}
              />
            }
          />
        </Routes>

        <Footer />

        <AddItemModal
          isOpen={isAddClothesOpen}
          onAddItem={handleAddItem}
          onCloseModal={null}
          closeAllModals={closeAllModals}
        ></AddItemModal>

        <ItemModal
          item={selectedItem}
          isOpen={!!selectedItem}
          closeAllModals={closeAllModals}
          deleteConfirm={deleteConfirm}
        />

        <DeleteConfirmModal
          isOpen={isConfirmDeleteOpen}
          closeAllModals={closeAllModals}
        ></DeleteConfirmModal>
      </CurrentTemperatureUnitContext.Provider>
    </BrowserRouter>
  );
}
