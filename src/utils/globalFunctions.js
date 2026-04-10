import { JSONUrl } from "./constants";

async function fetchCards() {
  const resp = await fetch(JSONUrl);
  if (!resp.ok) {
    console.error("Card Fetching Error!!!!!");
  }
  return resp.json();
}

// async function closeModal(modal) {
//   modal(false);
// }

// function openModal(modal) {
//   modal(true);
// }

function openOther(altOpen, closeAllModals) {
  closeAllModals();
  altOpen();
}

export { fetchCards, openOther };
