import { useNavigate } from "react-router-dom";
import "../blocks/confirmLogOut.css";

export default function ConfirmLogOutModal({ isOpen, closeAllModals, logOut }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        closeAllModals();
      }}
      className={`popup ${isOpen ? "popup_opened" : ""}`}
    >
      <div id="Log Out Modal" className="confirmLogOut">
        <p className="confirmLogOut__title">
          Are you sure you want to log out?
        </p>
        <div className="confirmLogOut__buttonBox">
          <button
            onClick={() => {
              logOut();
              navigate("/");
            }}
            className="confirmLogOut__button"
          >
            Log Out
          </button>
          <button
            onClick={() => {
              closeAllModals();
            }}
            className="confirmLogOut__button"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
