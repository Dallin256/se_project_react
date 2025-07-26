import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemModal from "./ItemModal";
import ModalWithForm from "./ModalWithForm";

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
