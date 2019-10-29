import React, { useReducer } from "react";
import moment from "moment";
import { loadItem, removeItem, saveItem } from "../utils/localStorage";

const user = loadItem("user");
const token = loadItem("token");
const entity = loadItem("entity");
const country = loadItem("country");
const company = loadItem("company");
const timezone = loadItem("timezone");
const provider = loadItem("provider");
const systemRole = loadItem("systemRole");
const accessRoles = loadItem("accessRoles");
const companyMask = loadItem("companyMask");
const defaultScreen = loadItem("defaultScreen");
const theme = loadItem("theme");

const modelThemes = {
  type: "light",
  data: {
    typography: {
      useNextVariants: true,
      fontFamily: "'Titillium Web', sans-serif"
    },
    paletteDefaultLight: {
      type: "light",
      primary: "#001064",
      secondary: "#ffffff",
      tertiary: "#ffffff",
      fourth: "#f5f5f5",
      line: "#f5f5f5",
      text: {
        icon: "#d4a977",
        primary: "#ffffff",
        secondary: "#696969",
        tertiary: "#696969",
        fourth: "#696969"
      },
      graph: {
        text: "#000000",
        background: "#ffffff",
        axis: ["#001064", "#d4a977", "#228B22", "#DC7633  ", "#A52A2A"]
      },
      maps: "light"
    },
    paletteDefaultDark: {
      type: "dark",
      primary: "#3B3A39",
      secondary: "#201F1E",
      tertiary: "#292827",
      fourth: "#201F1E",
      line: "#525252",
      text: {
        icon: "#ffffff",
        primary: "#EBF6F6",
        secondary: "#F6F6F6",
        tertiary: "#F6F6F6",
        fourth: "#F6F6F6"
      },
      graph: {
        text: "#000000",
        background: "#ffffff",
        axis: ["#001064", "#d4a977", "#228B22", "#DC7633  ", "#A52A2A"]
      },
      maps: "dark"
    },
    palettePersonalizated: {
      type: "pers",
      primary: "#001064",
      secondary: "#ffffff",
      tertiary: "#ffffff",
      fourth: "#f5f5f5",
      line: "#f5f5f5",
      text: {
        icon: "#d4a977",
        primary: "#ffffff",
        secondary: "#696969",
        tertiary: "#696969",
        fourth: "#696969"
      },
      graph: {
        text: "#000000",
        background: "#ffffff",
        axis: ["#001064", "#d4a977", "#228B22", "#DC7633  ", "#A52A2A"]
      },
      maps: "light"
    },
    palette: {
      type: "light",
      primary: "#001064",
      secondary: "#ffffff",
      tertiary: "#ffffff",
      fourth: "#f5f5f5",
      line: "#f5f5f5",
      text: {
        icon: "#d4a977",
        primary: "#ffffff",
        secondary: "#696969",
        tertiary: "#696969",
        fourth: "#696969"
      },
      graph: {
        text: "#000000",
        background: "#ffffff",
        axis: ["#001064", "#d4a977", "#228B22", "#DC7633  ", "#A52A2A"]
      },
      maps: "light"
    }
  }
};

const initialState = {
  user: user || {},
  token: token || "",
  entity: entity || {},
  isSideMenuOpen: false,
  provider: provider || {},
  theme: { ...modelThemes },
  defaultScreen: defaultScreen || "",
  accessRoles: accessRoles || {},
  country: country || {},
  company: company || {},
  companyMask: companyMask || { label: "" },
  timezone: timezone || {},
  systemRole: systemRole || {},
  notifications: {
    alerts: 0
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setIsSideMenuOpen":
      return {
        ...state,
        isSideMenuOpen:
          action.isOpen !== undefined ? action.isOpen : !state.isSideMenuOpen
      };
    case "setUser":
      return {
        ...state,
        user: action.user
      };
    case "setEntity":
      return {
        ...state,
        entity: action.entity
      };
    case "setToken":
      return {
        ...state,
        token: action.token
      };
    case "setCompany":
      return {
        ...state,
        company: action.company
      };
    case "setCompanyMask":
      return {
        ...state,
        companyMask: action.companyMask
      };
    case "setCountry":
      return {
        ...state,
        country: action.country
      };
    case "setProvider":
      return {
        ...state,
        provider: action.provider
      };
    case "setTimeZone":
      return {
        ...state,
        timezone: action.timezone
      };
    case "setSystemRole":
      return {
        ...state,
        systemRole: action.systemRole
      };
    case "setDefaultScreen":
      return {
        ...state,
        defaultScreen: action.defaultScreen
      };
    case "setAccessRoles":
      return {
        ...state,
        accessRoles: action.accessRoles
      };
    case "update":
      saveItem(action.user, "user");
      saveItem(action.entity, "entity");
      saveItem(action.country, "country");
      saveItem(action.company, "company");
      saveItem(action.provider, "provider");
      saveItem(action.timezone, "timezone");
      saveItem(action.systemRole, "systemRole");

      return {
        ...state,
        user: action.user,
        entity: action.entity,
        country: action.country,
        company: action.company,
        provider: action.provider,
        timezone: action.timezone,
        systemRole: action.systemRole
      };
    case "login":
      removeItem("companyMask");
      saveItem(action.user, "user");
      saveItem(action.token, "token");
      saveItem(action.theme, "theme");
      saveItem(action.entity, "entity");
      saveItem(action.country, "country");
      saveItem(action.company, "company");
      saveItem(action.provider, "provider");
      saveItem(action.timezone, "timezone");
      saveItem(action.systemRole, "systemRole");
      saveItem(action.defaultScreen, "defaultScreen");
      saveItem(action.accessRoles, "accessRoles");

      return {
        ...state,
        user: action.user,
        token: action.token,
        entity: action.entity,
        provider: action.provider,
        defaultScreen: action.defaultScreen,
        accessRoles: action.accessRoles,
        country: action.country,
        company: action.company,
        timezone: action.timezone,
        systemRole: action.systemRole,
        theme: {
          type: action.theme.type ? action.theme.type : modelThemes.type,
          data: {
            typography: {
              useNextVariants: true,
              fontFamily: "'Titillium Web', sans-serif"
            },
            ...action.theme.data
          }
        }
      };

    case "logout":
      removeItem("user");
      removeItem("token");
      removeItem("theme");
      removeItem("entity");
      removeItem("country");
      removeItem("company");
      removeItem("companyMask");
      removeItem("provider");
      removeItem("timezone");
      removeItem("systemRole");
      removeItem("defaultScreen");
      removeItem("accessRoles");

      return {
        ...state,
        user: {},
        token: "",
        entity: {},
        isSideMenuOpen: false,
        provider: {},
        country: {},
        company: {},
        companyMask: { label: "" },
        timezone: {},
        systemRole: {},
        defaultScreen: {},
        accessRoles: {},
        theme: { ...modelThemes },
        notifications: {
          alerts: 0
        }
      };
    case "setUserSettings":
      saveItem(action.res.user, "user");
      saveItem(action.res.entity, "entity");
      return {
        ...state,
        ...action.res
      };
    case "setNewPassword":
      saveItem(action.res.user, "user");
      saveItem(action.res.entity, "entity");
      saveItem(action.res.token, "token");
      return {
        ...state,
        ...action.res
      };
    case "newTheme":
      let newPalette = {
        type: action.newTheme.type,
        data: {
          ...state.theme.data,
          palette: action.newTheme
        }
      };
      saveItem(newPalette, "theme");
      return {
        ...state,
        theme: newPalette
      };
    case "setAlert":
      return {
        ...state,
        notifications: {
          ...state.notifications,
          alerts: action.alerts
        }
      };
    default:
      throw new Error("Unexpected action");
  }
};

export const Context = React.createContext();

const Provider = ({ children }) => {
  const context = useReducer(reducer, initialState);
  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Provider;
