import acceleratorApproachAnimation from "../assets/animation/accelerator-approach.json";
import buildIntegrateAnimation from "../assets/animation/build-integrate.json";
import makeItLiveAnimation from "../assets/animation/make-it-live.json";
import dynamicCultureAnimation from "../assets/animation/dynamic-culture.json";

export const getIconData = (id: string) => {
  let icon, className;
  switch (id) {
    case "1":
      icon = acceleratorApproachAnimation;
      className = "dd-acceleratorApproachAnimation";
      break;
    case "2":
      icon = buildIntegrateAnimation;
      className = "dd-buildIntegrateAnimation";
      break;
    case "3":
      icon = makeItLiveAnimation;
      className = "dd-makeItLiveAnimation";
      break;
    case "4":
      icon = dynamicCultureAnimation;
      className = "dd-dynamicCultureAnimation";
      break;
    default:
      break;
  }
  return {
    loop: true,
    autoplay: true,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: `${className} text-text`,
    },
  };
};

export const getColorByService = {
  "accelerator-approach": "text-green",
  "build-and-integrate": "text-turquoise",
  "make-it-live": "text-blue",
  "dynamic-culture": "text-purple",
};

export const getBorderByService = {
  "accelerator-approach": "border-green",
  "build-and-integrate": "border-turquoise",
  "make-it-live": "border-blue",
  "dynamic-culture": "border-purple",
};

export const getTextColor = {
  green: "text-green",
  turquoise: "text-turquoise",
  blue: "text-blue",
  purple: "text-purple",
};

export const getBgColor = {
  green: "bg-green",
  turquoise: "bg-turquoise",
  blue: "bg-blue",
  purple: "bg-purple",
};

export const languages = { spanish: "es", english: "en" };
export const navLanguages = [
  { id: 1, label: "es", value: languages.spanish },
  { id: 2, label: "en", value: languages.english },
];

export const navLinks = [
  {
    id: 1,
    label_es: "inicio",
    label_en: "home",
    path: "",
  },
  {
    id: 2,
    label_es: "servicios",
    label_en: "services",
    path: "services",
  },
];

export const contactForm = {
  nameAndLastname: {
    label_es: "Nombre y Apellido",
    label_en: "Name and Last name",
    placeholder_es: "Nombre Apellido",
    placeholder_en: "Name Last name",
  },
  email: {
    label_es: "Correo Electrónico",
    label_en: "Email address",
    placeholder_es: "tumail@mail.com",
    placeholder_en: "youremail@mail.com",
  },
  company: {
    label_es: "Compañía",
    label_en: "Company",
    placeholder_es: "Nombre de la compañía a la que representas",
    placeholder_en: "Company you work for",
  },
  message: {
    label_es: "Mensage",
    label_en: "Message",
    placeholder_es: "Escrbir máximo 300 caracteres",
    placeholder_en: "Write a maximum of 300 characters",
  },
};
export const validationInput = {
  nameAndLastname: {
    required_es: "Nombre Apellido es un campo requerido",
    required_en: "Name and Lastname is a required field",
  },
  email: {
    required_es: "Correo Electrónico es un campo requerido",
    required_en: "Email address is a required field",
    valid_es: "Debe ser un correo electrónico válido",
    valid_en: "It must be a valid email",
  },
  company: {
    required_es: "Compañía es un campo requerido",
    required_en: "Company is a required field",
  },
  message: {
    required_es: "Mensage es un campo requerido",
    required_en: "Message is a required field",
    max_es: "Debe ser 300 caracteres máximo",
    max_en: "Must be 300 characters maximum",
  },
};

export const socialNetworks = [
  { name: "fb", link: "https://web.facebook.com/dynamicdevs" },
  { name: "in", link: "https://www.linkedin.com/company/dynamic-devs/" },
  { name: "twitter", link: "https://twitter.com/devsinfo?lang=es" },
  { name: "ig", link: "https://www.instagram.com/dynamicdevs/" },
];
