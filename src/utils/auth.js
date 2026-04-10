export default class Auth {
  constructor(JSONUrl) {
    this.JSONUrl = JSONUrl;
  }

  async getUser(token) {
    const res = await fetch(`${this.JSONUrl}users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`SIGN IN ERROR! =>${res.status}`);
  }

  async SignUp() {
    await fetch(this.JSONUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  }
}
