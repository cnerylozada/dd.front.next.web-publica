import { languages } from "../utils";

export const SET_LANGUAGE = "SET_LANGUAGE";
export const SET_THEME = "SET_THEME";

export const initialState = {
  ddLanguage: languages.spanish,
};

export const setLanguage = (payload: any) => ({
  type: SET_LANGUAGE,
  payload,
});

export const seTheme = (payload: any) => ({
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

    default:
      return {
        ...state,
      };
  }
};
