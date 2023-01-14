const storagePrefix = "3co_pref_";

const storage = {
  getToken: () => {
    let _token = window.localStorage.getItem(`${storagePrefix}token`);
    if (_token && _token !== "" && _token !== "undefined") {
      return JSON.parse(_token);
    } else {
      return null;
    }
  },
  setToken: (token) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify(token));
  },
  getItem: (name) => {
    let item = window.localStorage.getItem(`${storagePrefix}${name}`);
    if (item && item !== "undefined") {
      return JSON.parse(item);
    } else {
      return null;
    }
  },
  setItem: (name, value) => {
    window.localStorage.setItem(
      `${storagePrefix}${name}`,
      JSON.stringify(value)
    );
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};

export default storage;
