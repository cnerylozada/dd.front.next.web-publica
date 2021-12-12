import axios from "axios";
const url = "https://strapi.dynamicdevs.io";

export const getHomeSections = () => {
  return axios.get(`${url}/home`).then(({ data }) => data);
};

export const staff = [
  {
    id: 1,
    name: "Jonathan González",
    jobPosition: "Chief Executive Officer",
    imageUrl:
      "https://dynamicdevscommon.blob.core.windows.net/web/jonathan-gozales.png",
    link: "https://www.linkedin.com/in/jongon/",
  },
  {
    id: 2,
    name: "César Contreras",
    jobPosition: "Chief Technology Officer",
    imageUrl:
      "https://dynamicdevscommon.blob.core.windows.net/web/cesar-contreras.png",
    link: "https://www.linkedin.com/in/c1sar/",
  },
  {
    id: 3,
    name: "Marlis Mejías",
    jobPosition: "Chief Marketing Officer",
    imageUrl:
      "https://dynamicdevscommon.blob.core.windows.net/web/marlis-mejias.png",
    link: "https://www.linkedin.com/in/marlismejias/",
  },
];
