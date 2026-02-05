export const setObject = (key: string, value: object) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Failed to set object in localStorage:", err);
  }
};

export const getObject = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? (JSON.parse(item) as T) : null;
  } catch (err) {
    console.error("Failed to get object from localStorage:", err);
    return null;
  }
};

export const removeObject = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Failed to remove object from localStorage:", err);
  }
};
