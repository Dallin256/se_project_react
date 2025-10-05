export default class API {
  constructor(JSONUrl) {
    this.JSONUrl = JSONUrl;
  }

  async _checkResponse(resp) {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error(`Error: ${resp.status}`);
  }

  async addCard(card) {
    const response = await fetch(this.JSONUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(card),
    });
    return this._checkResponse(response);
  }

  async deleteCard(targetCard) {
    const response = await fetch(`${this.JSONUrl}/${targetCard._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    });
    return this._checkResponse(response);
  }
}
