export const localStorageApi = {
  setItem: (key, value) => localStorage.setItem(key, value),
  getItem: (key) => localStorage.getItem(key),
  removeItem: (key) => localStorage.removeItem(key),
  clearAll: () => localStorage.clear(),
  getItemReturnParse : (key) => {
    const rawData = localStorage.getItem(key)
    const parsedData = JSON.parse(rawData);
    return parsedData
  }
};

