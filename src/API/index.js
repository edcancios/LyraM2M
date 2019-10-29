import qs from "qs";
import { validateError } from "../utils/auth";
import { loadItem } from "../utils/localStorage";
import createHeaders from "../utils/createHeaders";

export const getSuggestion = (
  axios,
  cancelToken,
  defaultName,
  value,
  component,
  filtersReady
) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!axios) {
        throw new Error("Axios required");
      }
      const headers = createHeaders();

      filtersReady = {
        ...filtersReady,
        field: defaultName,
        value: value
      };

      const newQuery = qs.stringify(filtersReady, { addQueryPrefix: true });

      /* const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/private/suggestion/${component}${newQuery}`,
        { headers, cancelToken: cancelToken.token }
      ); */
      /* resolve({ data: result.data }); */
      resolve({ data: [] });
    } catch (err) {
      console.error(err);
      const errMessage = await validateError(err);

      reject(errMessage);
    }
  });
};

export const getFiltersSaved = (axios, cancelToken, component) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!axios) {
        throw new Error("Axios required");
      }

      const headers = createHeaders();

      /* const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/private/filter/${component}`,
        { headers, cancelToken: cancelToken.token }
      );

      resolve({ data: result.data }); */
      resolve({ data: [] });
    } catch (err) {
      console.error(err);
      const errMessage = await validateError(err);

      reject(errMessage);
    }
  });
};

export const postSaveFilter = (
  axios,
  cancelToken,
  name,
  filters,
  component,
  query
) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!axios) {
        throw new Error("Axios required");
      }

      const headers = createHeaders();

      const body = {
        name: name,
        data: filters,
        query: query
      };

      /*  const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/private/filter/${component}`,
        body,
        { headers, cancelToken: cancelToken.token }
      );

      resolve({ data: result.data }); */
      resolve({ data: [] });
    } catch (err) {
      console.error(err);
      const errMessage = await validateError(err);

      reject(errMessage);
    }
  });
};

export const getLoadFilterDetail = (axios, cancelToken, id, component) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!axios) {
        throw new Error("Axios required");
      }

      const headers = createHeaders();

      /* const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/private/filter/${component}/${id}`,
        { headers, cancelToken: cancelToken.token }
      );

      resolve({ data: result.data }); */
      resolve({ data: [] });
    } catch (err) {
      console.error(err);
      const errMessage = await validateError(err);

      reject(errMessage);
    }
  });
};

export const postEditFilter = (axios, cancelToken, item, component) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!axios) {
        throw new Error("Axios required");
      }

      const headers = createHeaders();

      const body = {
        name: item.name
      };
      /* const result = await axios.put(
        `${process.env.REACT_APP_API_URL}/private/filter/${component}/${
          item.data
        }`,
        body,
        { headers, cancelToken: cancelToken.token }
      );

      resolve({ data: result.data }); */
      resolve({ data: [] });
    } catch (err) {
      console.error(err);
      const errMessage = await validateError(err);

      reject(errMessage);
    }
  });
};

export const postDeleteFilter = (axios, cancelToken, item, component) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!axios) {
        throw new Error("Axios required");
      }

      const headers = createHeaders();

      /* const result = await axios.delete(
        `${process.env.REACT_APP_API_URL}/private/filter/${component}/${
          item.data
        }`,
        { headers, cancelToken: cancelToken.token }
      );

      resolve({ data: result.data }); */
      resolve({ data: [] });
    } catch (err) {
      console.error(err);
      const errMessage = await validateError(err);

      reject(errMessage);
    }
  });
};

export const postSaveGroup = (
  axios,
  cancelToken,
  name,
  filters,
  query,
  companyName
) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!axios) {
        throw new Error("Axios required");
      }

      const headers = createHeaders();

      const body = {
        name: name,
        companyName: companyName,
        data: filters,
        query: query
      };

      /* const result = await axios.post(
        `${process.env.REACT_APP_API_URL}/private/groups`,
        body,
        { headers, cancelToken: cancelToken.token }
      );

      resolve({ data: result.data }); */
      resolve({ data: [] });
    } catch (err) {
      console.error(err);
      const errMessage = await validateError(err);

      reject(errMessage);
    }
  });
};

export const getGroupsSaved = (axios, cancelToken) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!axios) {
        throw new Error("Axios required");
      }

      const headers = createHeaders();

      /* const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/private/groups`,
        { headers, cancelToken: cancelToken.token }
      );

      resolve({ data: result.data }); */
      resolve({ data: [] });
    } catch (err) {
      console.error(err);
      const errMessage = await validateError(err);

      reject(errMessage);
    }
  });
};

export default {
  getSuggestion,
  getFiltersSaved,
  getLoadFilterDetail,
  postSaveFilter,
  postEditFilter,
  postDeleteFilter,
  postSaveGroup,
  getGroupsSaved
};
