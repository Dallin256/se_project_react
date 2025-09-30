import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";
import "../blocks/ProfileItemCards.css";
import "../blocks/Sidebar.css";

function Profile({
  currentCards,
  setCurrentCards,
  openItemModal,
  openAddClothesModal,
  closeAllModals,
  handleAddItem,
  deleteFunction,
  selectedItem,
  isAddClothesOpen,
}) {
  return (
    <div className="Profile">
      <Sidebar />
      <ClothesSection
        currentCards={currentCards}
        setCurrentCards={setCurrentCards}
        openAddClothesModal={openAddClothesModal}
        closeAllModals={closeAllModals}
        handleAddItem={handleAddItem}
        deleteConfirm={deleteFunction}
        openItemModal={openItemModal}
        selectedItem={selectedItem}
        isAddClothesOpen={isAddClothesOpen}
      />
    </div>
  );
}

export default Profile;
