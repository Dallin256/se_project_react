import { JSONUrl } from "./constants";

const itemCards = JSONUrl.concat("items");

async function fetchCards() {
  return fetch(itemCards).then((res) =>
    res.ok ? res.json() : Promise.reject(`ERROR: ${res.status}`),
  );
}

function openOther(altOpen, closeAllModals) {
  closeAllModals();
  altOpen();
}

export { fetchCards, openOther };
