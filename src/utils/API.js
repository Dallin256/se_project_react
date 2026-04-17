import { JSONUrl } from "./constants";

export default class API {
  constructor(JSONUrl) {
    this.JSONUrlItems = JSONUrl.concat("items");
    this.JSONUrlSignUp = JSONUrl.concat("signup");
    this.JSONUrlSignIn = JSONUrl.concat("signin");
    this.JSONUrlUsers = JSONUrl.concat("users");
  }

  async _checkResponse(resp) {
    if (resp.ok) {
      return resp.json();
    }
    throw new Error(`Error: ${resp.status}`);
  }

  async addCard(card, token) {
    console.log(card);
    const response = await fetch(this.JSONUrlItems, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
      mode: "cors",
      body: JSON.stringify(card),
    });
    console.log(JSON.stringify(card));
    return this._checkResponse(response);
  }

  async addUser(user) {
    const response = await fetch(this.JSONUrlSignUp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(user),
    });
    return this._checkResponse(response);
  }

  async signInUser(user) {
    const email = user.email;
    const password = user.password;
    const resp = await fetch(this.JSONUrlSignIn, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    return this._checkResponse(resp);
  }

  async deleteCard(targetCard, token) {
    const response = await fetch(`${this.JSONUrlItems}/${targetCard._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },

      mode: "cors",
    });
    return this._checkResponse(response);
  }
}
