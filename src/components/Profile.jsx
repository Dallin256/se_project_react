import Sidebar from "./Sidebar";
import ClothesSection from "./ClothesSection";
import "../blocks/Profile.css";
import "../blocks/ProfileItemCards.css";
import "../blocks/Sidebar.css";

function Profile({
  openItemModal,
  openAddClothesModal,
  closeAllModals,
  handleAddItem,
  deleteFunction,
}) {
  return (
    <div className="Profile">
      <Sidebar />
      <ClothesSection
        openAddClothesModal={openAddClothesModal}
        closeAllModals={closeAllModals}
        handleAddItem={handleAddItem}
        deleteConfirm={deleteFunction}
        openItemModal={openItemModal}
      />
    </div>
  );
}

export default Profile;
