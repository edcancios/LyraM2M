import axios from "axios";
import intl from "react-intl-universal";

const event401 = new Event("error-401");

export const validateError = err => {
  console.error(err);

  try {
    if (axios.isCancel(err)) {
      return `cancelled`;
    }

    let errMessage = err.message;

    if (err.response && err.response.status === 401) {
      errMessage = intl.get(`errors.401`);
      window.dispatchEvent(event401);
    } else if (err.response && err.response.status === 404) {
      errMessage = intl.get(`errors.404`);
    } else if (err.response && err.response.status === 406) {
      errMessage = intl.get(`errors.406`);
    } else if (err.response) {
      errMessage = intl.get(`default.errors.500`);
    }

    return errMessage;
  } catch (err) {
    console.error(err);

    return intl.get(`errors.logout`);
  }
};

export default {
  validateError
};
