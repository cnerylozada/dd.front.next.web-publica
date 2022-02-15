import React, { useState } from "react";

export const CloseTab = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onBuy = () => {
    setIsLoading(true);
    window.onbeforeunload = (e) => "";
    setTimeout(() => {
      setIsLoading(false);
      window.onbeforeunload = null;
    }, 5000);
  };

  return (
    <div>
      <h1>Formulario</h1>
      <button onClick={onBuy}>{isLoading ? "Loading..." : "Buy"}</button>
    </div>
  );
};
