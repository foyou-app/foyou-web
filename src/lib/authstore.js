export const PROFILE_KEY = 'profile';
export const ID_TOKEN_KEY = 'token';

export default class LocalSession {
  static isLogginIn() {
    const token = this.getIdToken();
    return !!token;
  }

  static logout() {
    localStorage.removeItem(PROFILE_KEY);
    localStorage.removeItem(ID_TOKEN_KEY);
  }

  static getProfile() {
    const profile = localStorage.getItem(PROFILE_KEY);
    return profile ? JSON.parse(profile) : {};
  }
  static setProfile(profile) {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
  }

  static getUserIDInfo() {
    var retrievedObject = JSON.parse(localStorage.getItem(PROFILE_KEY));
    var hereglegch_id = 0;
    if (retrievedObject) {
      hereglegch_id = retrievedObject.hereglegch_id;
    }
    return hereglegch_id;
  }
  static get_token() {
    return localStorage.getItem(ID_TOKEN_KEY) || false;
  }
  static setIdToken(idToken) {
    localStorage.setItem(ID_TOKEN_KEY, idToken);
  }
}
