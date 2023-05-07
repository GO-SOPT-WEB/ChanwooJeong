import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const SingleColorItem = (props) => {
  const { rgb, weight, idx, hexColor } = props;

  const [isCopy, setIsCopy] = useState(false);

  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopy(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [isCopy]);

  return (
    <article
      className={`color ${idx > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setIsCopy(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {isCopy && <Modal />}
    </article>
  );
};

export default SingleColorItem;
