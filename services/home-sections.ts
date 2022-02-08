import axios from "axios";
import { url } from "./config";
import { getIconData } from "../utils";

export const getHomeSections = () => {
  return axios.get(`${url}/home`).then(({ data }) => data);
};

export const getClients = () => {
  return axios.get(`${url}/clients`).then(({ data }) => data);
};

export const sendMessage = (message: any) => {
  return axios.post(`${url}/contacts`, message);
};

export const staff = [
  {
    id: 1,
    name: "Jonathan González",
    jobPosition: "Chief Executive Officer",
    imageUrl:
      "https://assets.dynamicdevs.io/web/home/01-jon.png",
    link: "https://www.linkedin.com/in/jongon/",
  },
  {
    id: 2,
    name: "César Contreras",
    jobPosition: "Chief Technology Officer",
    imageUrl:
      "https://assets.dynamicdevs.io/web/home/02-cesar.png",
    link: "https://www.linkedin.com/in/c1sar/",
  },
  {
    id: 3,
    name: "Marlis Mejías",
    jobPosition: "Chief Marketing Officer test",
    imageUrl:
      "https://assets.dynamicdevs.io/web/home/03-marlis.png",
    link: "https://www.linkedin.com/in/marlismejias/",
  },
  {
    id: 4,
    name: "Rosario Zúñiga",
    jobPosition: "Chief Operation Officer",
    imageUrl:
      "https://assets.dynamicdevs.io/web/home/04-ros.png",
    link: "https://www.linkedin.com/in/rosario-zs/",
  },
  {
    id: 9,
    name: "Eric Contreras",
    jobPosition: "Technical Lead",
    imageUrl:
      "https://assets.dynamicdevs.io/web/home/09-eric.png",
    link: "https://www.linkedin.com/in/eric-contreras-bb46aa66/",
  },
  {
    id: 5,
    name: "Ami Ishisaka",
    jobPosition: "Visual UI/UX Designer",
    imageUrl:
      "https://assets.dynamicdevs.io/web/home/05-ami.png",
    link: "https://www.linkedin.com/in/ami-ishisaka/",
  },
  {
    id: 6,
    name: "Lucho Morales",
    jobPosition: "Software Engineer",
    imageUrl:
      "https://assets.dynamicdevs.io/web/home/06-lucho.png",
    link: "https://www.linkedin.com/in/lucho-morales-segobia-793577141/",
  },
  {
    id: 7,
    name: "Cristian Nery",
    jobPosition: "Software Engineer",
    imageUrl:
      "https://assets.dynamicdevs.io/web/home/07-cris.png",
    link: "https://www.linkedin.com/in/cristian-nery-027b70180/",
  },
  {
    id: 8,
    name: "Elmer León",
    jobPosition: "Software Engineer",
    imageUrl:
      "https://assets.dynamicdevs.io/web/home/08-leo.png",
    link: "https://www.linkedin.com/in/leobar37/",
  },
];

export const serviceCategories = [
  {
    id: 1,
    title: "Accelerator Approach",
    color: "green",
    animation: getIconData("1"),
    slug: "accelerator-approach",
    services: [
      {
        id: 1,
        slug: "tech-accelerator-team",
        name_es: "Tech Accelerator Team",
        name_en: "Tech Accelerator Team",
        description_es:
          "Un equipo de alto desempeño construye la solución para ti.",
        description_en: "A high-performance team builds the solution for you.",
      },
      {
        id: 2,
        slug: "dev-ops",
        name_es: "DevOps",
        name_en: "DevOps",
        description_es:
          "Aumenta tu capacidad de innovar y escalar con la tecnología.",
        description_en:
          "Increase your ability to innovate and scale with technology.",
      },
      {
        id: 3,
        slug: "agile",
        name_es: "Agile",
        name_en: "Agile",
        description_es:
          "Estrategias de implementación tecnológica y gestión del cambio.",
        description_en:
          "Technological implementation strategies and change management.",
      },
    ],
  },
  {
    id: 2,
    title: "Build & Integrate",
    color: "turquoise",
    animation: getIconData("2"),
    slug: "build-and-integrate",
    services: [
      {
        id: 1,
        slug: "software-development",
        name_es: "Development",
        name_en: "Development",
        description_es: "Desarrollo de software para escalar tu negocio.",
        description_en: "Software development to scale your business.",
      },
      {
        id: 2,
        slug: "design-as-a-service",
        name_es: "Experience UX/UI",
        name_en: "Design As A Service (UX/UI)",
        description_es:
          "Diseño de experiencias e interfaces de extremo a extremo.",
        description_en: "End-to-end interface and experience design.",
      },
      {
        id: 3,
        slug: "tech-talent-as-a-service",
        name_es: "Tech Talent as a Service",
        name_en: "Tech Talent as a Service",
        description_es:
          "Perfiles técnicos específicos, para desafíos específicos.",
        description_en: "Specialized professionals, for specific challenges",
      },
    ],
  },
  {
    id: 3,
    title: "Make It Live",
    color: "blue",
    animation: getIconData("3"),
    slug: "make-it-live",
    services: [
      {
        id: 1,
        slug: "cloud",
        name_es: "Cloud",
        name_en: "Cloud",
        description_es:
          "Hacemos la estrategia, implementación y migración cloud.",
        description_en:
          "We design, implement and migrate strategically to the cloud.",
      },
      {
        id: 2,
        slug: "automation-engineering-and-qa",
        name_es: "QA Automation",
        name_en: "QA Automation",
        description_es: "Nos comprometemos con la calidad de tu producto.",
        description_en:
          "We are committed to the quality and continuous delivery of your product.",
      },
    ],
  },
  {
    id: 4,
    title: "Dynamic Culture",
    color: "purple",
    animation: getIconData("4"),
    slug: "dynamic-culture",
    services: [
      {
        id: 1,
        slug: "academy-and-learning",
        name_es: "Academy & Learning",
        name_en: "Academy & Learning",
        description_es:
          "Recursos Educativos, metodológicos, técnicos e inspiracionales.",
        description_en:
          "Educational, methodological, technical and inspirational resources.",
      },
      {
        id: 2,
        slug: "interview-as-a-service",
        name_es: "Interview as a service",
        name_en: "Interview as a service",
        description_es: "Cultura y entendimiento de la adopción tecnológica.",
        description_en: "Culture and understanding of technology adoption.",
      },
    ],
  },
];
