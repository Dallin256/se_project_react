import { JSONUrl } from "./constants";

const itemCards = JSONUrl.concat("items");

async function fetchCards() {
  console.log("fetchCards called!");
  const resp = await fetch(itemCards);
  if (!resp.ok) {
    console.error("Card Fetching Error!!!!!");
  }
  return resp.json();
}

function openOther(altOpen, closeAllModals) {
  closeAllModals();
  altOpen();
}

export { fetchCards, openOther };
