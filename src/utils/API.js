export default class API {
  constructor(JSONUrl) {
    this.JSONUrl = JSONUrl;
  }

  async addCard(card) {
    return fetch(this.JSONUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(card),
    });
  }

  async deleteCard(targetCard) {
    fetch(`${this.JSONUrl}/${targetCard._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    });
    return null;
  }
}
