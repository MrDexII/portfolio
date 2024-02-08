import React, { useState } from "react";
import styles from "./Project-style.module.css";

function Project({ svg, name, image, description, buttons, id }) {
  const [flipFace, setFlipFace] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);

  const onClickMoreEvent = () => {
    setMoreInfo((prev) => !prev);
  };

  const More = () => {
    return (
      <>
        <div className={styles.imageContainer} onClick={onClickMoreEvent}>
          {image}
        </div>
        <div className={styles.description} onClick={onClickMoreEvent}>
          <p>{description}</p>
          <div className={styles.buttonsContainer}>
            {buttons.map((item) => (
              <a key={item.buttonName + id} href={item.link}>
                {item.buttonName}
              </a>
            ))}
          </div>
        </div>
      </>
    );
  };

  return (
    <div
      id={name}
      className={`${styles.container} ${flipFace ? styles.flip : ""} ${
        moreInfo ? styles.more : ""
      }`}
      onMouseEnter={() => {
        setFlipFace(true);
      }}
      onMouseLeave={() => {
        setFlipFace(false);
      }}
    >
      {flipFace ? <More /> : svg}
    </div>
  );
}

export default Project;
