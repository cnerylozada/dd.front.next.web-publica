import { useEffect, useState } from "react";
import { DDIcon, DDText } from "@cnerylozada/dd.front.react.wp.library";
import { useStore, setLanguage } from "../store";
import { navLanguages } from "@/utils";

export const SelectLanguage = ({ currentLng }: { currentLng: string }) => {
  const [store, dispatch] = useStore();
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    const ddSelectLanguage = document.getElementById("ddSelectLanguage");
    window.onclick = function (e: any) {
      if (!ddSelectLanguage?.contains(e.target)) setIsSelected((_) => !_);
    };
  }, []);

  return (
    <div id="ddSelectLanguage" className="relative px-3">
      <div
        className="flex items-center space-x-1 cursor-pointer"
        onClick={() => setIsSelected((_) => !_)}
      >
        <DDText weight="light" className="capitalize">
          {navLanguages.filter((_) => _.value === currentLng)[0].label}
        </DDText>
        <DDIcon name="arrowmore" size="sm" className="block" />
      </div>
      {isSelected && (
        <div className="absolute top-full left-0 bg-bg1 w-full">
          {navLanguages.map((_, index: number) => (
            <div
              key={index}
              onClick={() => {
                localStorage.setItem("dd-lng", _.value);
                dispatch(setLanguage(_.value));
              }}
              className="p-3 flex items-center space-x-1 
              text-text cursor-pointer hover:text-primary "
            >
              <DDText weight="light" className="capitalize">
                {_.label}
              </DDText>
              {currentLng === _.value && (
                <DDIcon name="check" size="sm" className="block" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
