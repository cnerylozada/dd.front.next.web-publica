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
      className: className,
    },
  };
};

export const getTextColor = {
  green: "text-green",
  blue: "text-blue",
  purple: "text-purple",
  turquoise: "text-turquoise",
};

export const languages = { spanish: "es", english: "en" };

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

export const navLanguages = [
  { id: 1, label: "sp", value: languages.spanish },
  { id: 2, label: "en", value: languages.english },
];
