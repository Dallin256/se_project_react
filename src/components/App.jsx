// react imports
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//component imports
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import Profile from "./Profile.jsx";
import ItemModal from "./ItemModal.jsx";
import DeleteConfirmModal from "./DeleteConfirmModal.jsx";
import AddItemModal from "./AddItemModal.jsx";

//context
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";

//constants
import {
  fetchCurrentFeel,
  fetchCurrentTemp,
  fetchCurrentLoc,
  fetchCards,
  api,
} from "../utils/constants.js";

//app function
export default function App() {
  const [isAddClothesOpen, setIsAddClothesOpen] = useState(false); //for the add clothes modal
  const [isConfirmDeleteOpen, setIsConfimDeleteOpen] = useState(false); //for the confirm delete modal
  const [selectedItem, setSelectedItem] = useState(null); //sends the item user selects to the item modal
  const [currentTemp, setCurrentTemp] = useState(null); //sets up the temperature varible
  const [currentFeel, setCurrentFeel] = useState(null); //initiates the current 'feel' varible is for example 'warm'
  const [currentLoc, setLoc] = useState(null); //initiantes the current location varible (uses coordinates)
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F"); //sets up logic to change the temperature unit
  const [currentCards, setCurrentCards] = useState([]); //sets logic for the cards

  //this checks the current temperature unit when it is fired; and then changes it to the other
  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  //obtains the location coordinates.. currently it refrences hard code, but is set in a way that it would be easy to switch it for user input or api.
  useEffect(() => {
    fetchCurrentLoc().then(setLoc);
  }, []);

  //finds and assigns the temperature from the api based on coordinates. then sets feel based on temperature
  useEffect(() => {
    fetchCurrentTemp().then(setCurrentTemp);
    fetchCurrentFeel().then(setCurrentFeel);
  }, []);

  //obtains item cards from the server and renders them
  useEffect(() => {
    fetchCards().then(setCurrentCards).catch(console.error);
  }, []);

  //opens the add clothes modal
  function openAddClothesModal() {
    setIsAddClothesOpen(true);
  }
  //opens the item modal based on what item is clicked
  function openItemModal(item) {
    setSelectedItem(item);
  }
  //all modals are set to close in one convenient function
  function closeAllModals() {
    setIsAddClothesOpen(false);
    setIsConfimDeleteOpen(false);
    setSelectedItem(null);
  }

  //sends a submitted card to the server and rerenders the cards
  async function handleAddItem(newItem) {
    const savedItem = await api.addCard(newItem);
    if (savedItem) {
      setCurrentCards([savedItem, ...currentCards]);
    }
  }
  //deletes the selected card from the server database and rerenders the cards
  async function handleRemoveItem(targetItem) {
    closeAllModals();
    await api.deleteCard(targetItem);
    setCurrentCards((prevCards) =>
      prevCards.filter((card) => card._id !== targetItem._id)
    );
  }
  //opens the delete confirm window with the data form the card that activated it loaded in
  function deleteConfirm(item) {
    setSelectedItem(item);
    setIsConfimDeleteOpen(true);
  }
  //closes the delete confirm window, and ONLY the delete confirm window
  function deleteCancel() {
    setIsConfimDeleteOpen(false);
  }

  return (
    <BrowserRouter>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header currentLoc={currentLoc} openModal={openAddClothesModal} />
        <Routes>
          <Route
            path="/profile"
            element={
              <Profile
                currentCards={currentCards}
                setCurrentCards={setCurrentCards}
                openItemModal={openItemModal}
                openAddClothesModal={openAddClothesModal}
                closeAllModals={closeAllModals}
                handleAddItem={handleAddItem}
                deleteFunction={deleteConfirm}
                selectedItem={selectedItem}
                isAddClothesOpen={isAddClothesOpen}
              />
            }
          />

          <Route
            path="/"
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
          deleteCancel={deleteCancel}
          requestDelete={handleRemoveItem}
          item={selectedItem}
        ></DeleteConfirmModal>
      </CurrentTemperatureUnitContext.Provider>
    </BrowserRouter>
  );
}
