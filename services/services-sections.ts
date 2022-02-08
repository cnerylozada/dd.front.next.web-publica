import axios from "axios";
import { url } from "./config";

const colors = ["green", "turquoise", "blue", "purple"];
const icons = [
  "accelerator-approach",
  "build-and-integrate",
  "make-it-live",
  "dynamic-culture",
];

export const getServicesSections = () => {
  return axios
    .get(`${url}/service-categories`)
    .then(({ data }) =>
      data.map((_: any, index: number) => ({
        ..._,
        color: colors[index],
        icon: icons[index],
      }))
    );
};

export const coverPage = {
  title_es: "Estamos aquí para ti",
  title_en: "We're here to help you",
  subTitle_es: "Soluciones tecnológicas, innovación y desarrollo de software",
  subTitle_en: "Tech solutions, innovation and software development",
};
