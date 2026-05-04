import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
export default function Sidebar({ openLogOutModal, openEditProfileModal }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <img
          alt="Profile Logo Image"
          className="sidebar__profile-logo"
          src={currentUser.avatar}
        />
        <p>{currentUser.name}</p>
      </div>
      <button
        onClick={() => {
          openEditProfileModal();
        }}
        className="sidebar__button"
      >
        Change Profile Data
      </button>
      <button
        onClick={() => {
          openLogOutModal();
        }}
        className="sidebar__button"
      >
        Logout
      </button>
    </div>
  );
}
