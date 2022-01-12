import axios from "axios";
import { url } from "./config";
import { getIconData } from "../utils";

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
        slug: "tech-accelerator-team-service",
        name_es: "Tech Accelerator Team",
        name_en: "Tech Accelerator Team",
        description_es:
          "Un equipo de alto desempeño construye la solución para ti.",
        description_en: "A high-performance team builds the solution for you.",
      },
      {
        id: 2,
        slug: "devops-service",
        name_es: "DevOps",
        name_en: "DevOps",
        description_es:
          "Aumenta tu capacidad de innovar y escalar con la tecnología.",
        description_en:
          "Increase your ability to innovate and scale with technology.",
      },
      {
        id: 3,
        slug: "agile-service",
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
        slug: "development-service",
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
    title: "Make it live",
    color: "blue",
    animation: getIconData("3"),
    slug: "make-it-live",
    services: [
      {
        id: 1,
        slug: "cloud-engineering-service",
        name_es: "Cloud",
        name_en: "Cloud",
        description_es:
          "Hacemos la estrategia, implementación y migración cloud.",
        description_en:
          "We design, implement and migrate strategically to the cloud.",
      },
      {
        id: 2,
        slug: "qa-automation-service",
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
        slug: "conversion-digital-service",
        name_es: "Gestión del cambio y conversión digital",
        name_en: "Change management and digital conversion",
        description_es: "Cultura y entendimiento de la adopción tecnológica.",
        description_en: "Culture and understanding of technology adoption.",
      },
      {
        id: 2,
        slug: "academy-learning-service",
        name_es: "Academy & Learning",
        name_en: "Academy & Learning",
        description_es:
          "Recursos Educativos, metodológicos, técnicos e inspiracionales.",
        description_en:
          "Educational, methodological, technical and inspirational resources.",
      },
    ],
  },
];
