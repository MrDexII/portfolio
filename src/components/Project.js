import React, { useState } from "react";
import styles from "../styles/Project-style.module.css";

function Project({ svg, name, image, description, buttons, id }) {
  const [flipFace, setFlipFace] = useState(false);
  const [moreInfo, setMoreInfo] = useState(false);

  const onClickMoreEvent = () => {
    setMoreInfo((prev) => !prev);
  };

  const More = () => {
    return (
      <>
        <div className={styles.imageContainer}>
          {image}
          <svg
            onClick={onClickMoreEvent}
            fill="#000000"
            height="800px"
            width="800px"
            version="1.1"
            id={styles.maxIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g id={styles.maxIcon}>
              <path
                id={styles.downLeft}
                d="M175.445,336.555c-5-5.009-13.099-5.009-18.099,0L25.6,468.301V396.8c0-7.074-5.726-12.8-12.8-12.8
			C5.726,384,0,389.726,0,396.8v102.4c0,7.074,5.726,12.8,12.8,12.8h102.4c7.074,0,12.8-5.726,12.8-12.8
			c0-7.074-5.726-12.8-12.8-12.8H43.699l131.746-131.746C180.446,349.653,180.446,341.555,175.445,336.555z"
              />
              <path
                id={styles.topRight}
                d="M499.2,0H396.8C389.726,0,384,5.726,384,12.8c0,7.074,5.726,12.8,12.8,12.8h71.492L336.555,157.346
			c-5.001,5.001-5.001,13.099,0,18.099c5,5.001,13.099,5.001,18.099,0L486.4,43.699V115.2c0,7.074,5.726,12.8,12.8,12.8
			c7.074,0,12.8-5.726,12.8-12.8V12.8C512,5.726,506.274,0,499.2,0z"
              />
            </g>
          </svg>
        </div>
        <div className={styles.description}>
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
