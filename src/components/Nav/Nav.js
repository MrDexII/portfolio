import React, { useState } from "react";
import { useEffect } from "react";

import styles from "./Nav-style.module.css";

function Nav() {
  const [showMobileView, setShowMobileView] = useState(true);

  useWindowSize();

  const handleClick = () => {
    if (window.innerWidth >= 1200) {
      setShowMobileView(true);
    } else {
      setShowMobileView((prev) => {
        return !prev;
      });
    }
  };

  // Hook
  function useWindowSize() {
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        if (window.innerWidth >= 1200) {
          setShowMobileView(true);
        } else {
          setShowMobileView(false);
        }
      }

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Call handler right away so state gets updated with initial window size
      handleResize();

      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
  }

  const NavigationList = () => {
    return (
      <ul className={styles.navigation}>
        <li onClick={handleClick}>
          <a href="#home">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 13v10h-6v-6h-6v6h-6v-10h-3l12-12 12 12h-3zm-1-5.907v-5.093h-3v2.093l3 3z" />
              </svg>
            </span>
            Home
          </a>
        </li>
        {/* <li onClick={handleClick}><img src={userIcon} alt="user icon" /><a href='#about'>O mnie</a></li> */}
        <li onClick={handleClick}>
          <a href="#projects">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M1.8 9l-.8-4h22l-.8 4h-2.029l.39-2h-17.122l.414 2h-2.053zm18.575-6l.604-2h-17.979l.688 2h16.687zm3.625 8l-2 13h-20l-2-13h24zm-8 4c0-.552-.447-1-1-1h-6c-.553 0-1 .448-1 1s.447 1 1 1h6c.553 0 1-.448 1-1z" />
              </svg>
            </span>
            Projekty
          </a>
        </li>
        <li onClick={handleClick}>
          <a href="#contact">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z" />
              </svg>
            </span>
            Kontakt
          </a>
        </li>
      </ul>
    );
  };

  return (
    <div className={styles.container}>
      <a href="#home">
        <svg
        id={styles.logo}
          width="80"
          height="57"
          viewBox="0 0 80 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id={styles.logo}>
            <path id={styles.down} d="M56 40L50.5 43.5L54 49.5H61.5L56 40Z" />
            <path id={styles.mid} d="M0.5 57L8 44L48.5 27L80 17L0.5 57Z" />
            <path
              id={styles.up}
              fillRule="evenodd"
              clipRule="evenodd"
              d="M48.5 27L33 0L8 44L18 40L33 15L41.5 30.0984L48.5 27Z"
            />
          </g>
        </svg>
      </a>
      <button
        className={`${styles.menuButton} ${
          showMobileView ? styles.isActive : ""
        }`}
        onClick={handleClick}
      >
        <span>toggle menu</span>
      </button>
      {showMobileView ? <NavigationList /> : ""}
    </div>
  );
}

export default Nav;
