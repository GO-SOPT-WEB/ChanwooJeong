export const localStorageApi = {
  setItem: (key, value) => localStorage.setItem(key, value),
  getItem: (key) => localStorage.getItem(key),
  removeItem: (key) => localStorage.removeItem(key),
  clearAll: () => localStorage.clear(),
};

export const urlApi = {
  getUrl: () => {
    const currentURL = window.location.href;
    const segments = currentURL.split("/");
    const desiredValue = segments[segments.length - 1];
    return desiredValue
  },
};

