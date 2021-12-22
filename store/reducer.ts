import { languages } from "../utils";

const SET_LANGUAGE = "SET_LANGUAGE";
const SET_THEME = "SET_THEME";

export const initialState = {
  ddLanguage: languages.spanish,
  ddIsDarkMode: false,
};

export const setLanguage = (payload: any) => ({
  type: SET_LANGUAGE,
  payload,
});

export const setTheme = (payload: any) => ({
  type: SET_THEME,
  payload,
});

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        ddLanguage: action.payload,
      };
    case SET_THEME:
      return {
        ...state,
        ddIsDarkMode: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
