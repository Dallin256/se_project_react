import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
export default function Sidebar({ openLogOutModal }) {
  const { currentUser, isLoading } = useContext(CurrentUserContext);
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
      <button className="sidebar__button">Change Profile Data</button>
      <button
        onClick={() => {
          console.log("onClick Fired");
          openLogOutModal();
        }}
        className="sidebar__button"
      >
        Logout
      </button>
    </div>
  );
}
