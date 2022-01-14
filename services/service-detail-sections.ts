import axios from "axios";
import { url } from "./config";

export const getBusinessLineByName = (name: string) => {
  return axios.get(`${url}/${name}`).then(({ data }) => data);
};
