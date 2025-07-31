import { useState } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import ItemModal from "./ItemModal.jsx";
import ModalWithForm from "./ModalWithForm.jsx";

export default function App() {
  const [isAddClothesOpen, setIsAddClothesOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
      <Header openModal={openAddClothesModal} />
      <Main closeAllModals={closeAllModals} openItemModal={openItemModal} />
      <Footer />

      <ModalWithForm
        isOpen={isAddClothesOpen}
        closeAllModals={closeAllModals}
      />

      <ItemModal
        item={selectedItem}
        isOpen={!!selectedItem}
        closeAllModals={closeAllModals}
      />
    </>
  );
}

// delete this message
