import axios from "axios";
import { url } from "./config";

export const getBusinessLineByName = (name: string) => {
  return axios.get(`${url}/${name}`).then(({ data }) => data);
};

export const getBusinessLinePaths = [
  {
    params: {
      category: "accelerator-approach",
      name: "tech-accelerator-team",
    },
  },
  {
    params: {
      category: "accelerator-approach",
      name: "dev-ops",
    },
  },
  {
    params: {
      category: "accelerator-approach",
      name: "agile",
    },
  },
  {
    params: {
      category: "build-and-integrate",
      name: "software-development",
    },
  },
  {
    params: {
      category: "build-and-integrate",
      name: "design-as-a-service",
    },
  },
  {
    params: {
      category: "build-and-integrate",
      name: "tech-talent-as-a-service",
    },
  },
  {
    params: {
      category: "make-it-live",
      name: "cloud",
    },
  },
  {
    params: {
      category: "make-it-live",
      name: "automation-engineering-and-qa",
    },
  },
  {
    params: {
      category: "dynamic-culture",
      name: "interview-as-a-service",
    },
  },
  {
    params: {
      category: "dynamic-culture",
      name: "academy-and-learning",
    },
  },
];
