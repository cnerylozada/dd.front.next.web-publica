import axios from "axios";
const url = "https://strapi.dynamicdevs.io";

export const getHomeSections = () => {
  return axios.get(`${url}/home`).then(({ data }) => data);
};
