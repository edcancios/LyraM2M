export const loadItem = item => {
  try {
    const serializedItem = localStorage.getItem(item);

    if (serializedItem === null) {
      return undefined;
    }

    return JSON.parse(serializedItem);
  } catch (err) {
    return undefined;
  }
};

export const saveItem = (state, item) => {
  try {
    const serializedItem = JSON.stringify(state);

    localStorage.setItem(item, serializedItem);
  } catch (err) {
    console.error(err);
    // Ignore write errors
  }
};

export const removeItem = item => {
  try {
    localStorage.removeItem(item);
  } catch (err) {
    // Ignore write errors
  }
};

export const hasItem = item => {
  try {
    const serializedItem = localStorage.getItem(item);

    return serializedItem ? true : false;
  } catch (err) {
    return false;
  }
};
