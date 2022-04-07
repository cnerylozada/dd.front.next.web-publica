import axios from "axios";
import { url } from "./config";

export const getBlogBySlug = (slug: string) => {
  return axios.get(`${url}/blogs?slug=${slug}`).then(({ data }) => data[0]);
};
