// react imports
import { useState, useEffect, useContext, act } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//component imports
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import Profile from "./Profile.jsx";
import ItemModal from "./ItemModal.jsx";
import DeleteConfirmModal from "./DeleteConfirmModal.jsx";
import AddItemModal from "./AddItemModal.jsx";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";
import ConfirmLogOutModal from "./confirmLogOutModal.jsx";
import EditProfileModal from "./editProfileModal.jsx";

//context
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

//constants
import {
  fetchCurrentFeel,
  fetchCurrentTemp,
  fetchCurrentLoc,
  api,
  auth,
} from "../utils/constants.js";

import { fetchCards } from "../utils/globalFunctions.js";
import "../blocks/ItemCard.css";

//app function
export default function App() {
  const [activeModal, setActiveModal] = useState(""); //modal state set up

  const [selectedItem, setSelectedItem] = useState(null); //sends the item user selects to the item modal
  const [currentTemp, setCurrentTemp] = useState(null); //sets up the temperature varible
  const [currentFeel, setCurrentFeel] = useState(null); //initiates the current 'feel' varible is for example 'warm'
  const [currentLoc, setLoc] = useState(null); //initiantes the current location varible (uses coordinates)
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F"); //sets up logic to change the temperature unit

  const [currentUser, handleUserChange] = useState(null); //for setting current user to display user info
  const [isLoading, setIsLoading] = useState(true);
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

  useEffect(() => {
    const checkAuth = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("jwt");
        if (token) {
          const user = await auth.getUser(token);
          handleUserChange(user);
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("jwt");
        handleUserChange(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(id, token)
          .then((updatedCard) => {
            setCurrentCards((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item)),
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(id, token)
          .then((updatedCard) => {
            setCurrentCards((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item)),
            );
          })
          .catch((err) => console.log(err));
  };

  //modal opening functions

  function openSignUpModal() {
    setActiveModal("signUp");
  }

  function openSignInModal() {
    setActiveModal("signIn");
  }

  function openEditProfileModal() {
    setActiveModal("editProfile");
  }

  function openLogOutModal() {
    setActiveModal("logOut");
  }

  function openAddClothesModal() {
    setActiveModal("addItemModal");
  }

  //opens the item modal based on what item is clicked
  function openItemModal(item) {
    setSelectedItem(item);
    setActiveModal("itemModal");
  }

  //opens the delete confirm window with the data form the card that activated it loaded in
  function deleteConfirm(item) {
    setSelectedItem(item);
    setActiveModal("deleteConfirm");
  }

  //all modals are set to close in one convenient function
  function closeAllModals() {
    setActiveModal("");
  }

  function logOutUser() {
    handleUserChange(null);
  }

  //gets info from AddItemModal and uses API.js to post it to the server.
  async function handleAddItem(newItem) {
    const token = localStorage.getItem("jwt");
    const savedItem = await api.addCard(newItem, token);

    if (savedItem) {
      setCurrentCards([savedItem, ...currentCards]);
    }
  }

  async function handleProfilePatch(user) {
    try {
      const token = localStorage.getItem("jwt");
      const currentUser = await api.patchUser(user, token);
      handleUserChange(currentUser);
    } catch (err) {
      console.log(err);
    }
  }

  async function signInUser(user) {
    try {
      const res = await api.signInUser(user);
      localStorage.setItem("jwt", res.token);
      const currentUser = await auth.getUser(res.token);
      handleUserChange(currentUser);
    } catch (error) {
      console.log(error);
    }
  }

  async function registerNewUser(user) {
    const token = localStorage.getItem("jwt");
    api.addUser(user, token).catch(console.error);
    api.signInUser(user, token).catch(console.error);
  }

  //deletes the selected card from the server database and rerenders the cards
  async function handleRemoveItem(targetItem) {
    const token = localStorage.getItem("jwt");
    closeAllModals();
    await api.deleteCard(targetItem, token);
    setCurrentCards((prevCards) =>
      prevCards.filter((card) => card._id !== targetItem._id),
    );
    setSelectedItem(null);
  }

  function ProtectRoute({ children }) {
    const { currentUser, isLoading } = useContext(CurrentUserContext);
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!currentUser && !isLoading) {
      return <Navigate to="/" replace />;
    }
    return children;
  }

  return (
    <BrowserRouter>
      {/* <CurrentUserContext.Provider value={{ handleSignIn, currentProfile }}> */}
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <CurrentUserContext.Provider
          value={{ currentUser, handleUserChange, isLoading }}
        >
          <Header
            currentLoc={currentLoc}
            openSignUpModal={openSignUpModal}
            openSignInModal={openSignInModal}
            openItemModal={openAddClothesModal}
          />
          <Routes>
            {/* Wrap profile to secure it from unauthorized users */}
            <Route
              path="/profile"
              element={
                <ProtectRoute>
                  <Profile
                    currentCards={currentCards}
                    setCurrentCards={setCurrentCards}
                    openItemModal={openItemModal}
                    openAddClothesModal={openAddClothesModal}
                    openLogOutModal={openLogOutModal}
                    openEditProfileModal={openEditProfileModal}
                    handleAddItem={handleAddItem}
                    deleteFunction={deleteConfirm}
                    selectedItem={selectedItem}
                    isAddClothesOpen={activeModal === "addItemModal"}
                    isLogOutConfirmOpen={activeModal === "logOut"}
                    logOutUser={logOutUser}
                    closeAllModals={closeAllModals}
                    onCardLike={handleCardLike}
                  />
                </ProtectRoute>
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
                  onCardLike={handleCardLike}
                />
              }
            />
          </Routes>

          <Footer />

          <EditProfileModal
            isOpen={activeModal === "editProfile"}
            closeAllModals={closeAllModals}
            submitForm={handleProfilePatch}
          />

          <ConfirmLogOutModal
            isOpen={activeModal === "logOut"}
            closeAllModals={closeAllModals}
            logOut={logOutUser}
          />

          <AddItemModal
            isOpen={activeModal === "addItemModal"}
            onAddItem={handleAddItem}
            closeAllModals={closeAllModals}
          />

          <ItemModal
            item={selectedItem}
            isOpen={activeModal === "itemModal"}
            closeAllModals={closeAllModals}
            deleteConfirm={deleteConfirm}
          />

          <DeleteConfirmModal
            isOpen={activeModal === "deleteConfirm"}
            closeAllModals={closeAllModals}
            requestDelete={handleRemoveItem}
            item={selectedItem}
          />

          <SignUpModal
            altOpen={activeModal === "signIn"}
            isOpen={activeModal === "signUp"}
            submitForm={registerNewUser}
            closeAllModals={closeAllModals}
          />

          <SignInModal
            altOpen={activeModal === "signUp"}
            isOpen={activeModal === "signIn"}
            closeAllModals={closeAllModals}
            submitForm={signInUser}
          />
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
      {/* </CurrentUserContext.Provider> */}
    </BrowserRouter>
  );
}
