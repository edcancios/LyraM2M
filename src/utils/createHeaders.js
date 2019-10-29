import { loadItem } from "./localStorage";
const createHeaders = () => {
  const token = loadItem("token");

  let headers = {
    Authorization: `Bearer ${token}`
  };
  return headers;
};

export default createHeaders;
