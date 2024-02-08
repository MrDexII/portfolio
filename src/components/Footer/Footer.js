import React from "react";
import styles from "./Footer-style.module.css";

function Footer() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Szybka nawigacja</h1>
      <h1 className={styles.secondTitle}>Projekty</h1>
      <ul>
        <li>
          <a href="#pokemon">Pokemon REST</a>
        </li>
        <li>
          <a href="#game">Gra</a>
        </li>
        <li>
          <a href="#scraping">Web scraping</a>
        </li>
        <li>
          <a href="#computing">Obliczenia ewolucyjne</a>
        </li>
      </ul>
      <div className={styles.links}>
        <a href="#home">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="m21 13l0 10 -6 0 0-6 -6 0 0 6 -6 0 0-10 -3 0 12-12 12 12 -3 0zm-1-5.9l0-5.1 -3 0 0 2.1 3 3z" />
            </svg>
          </span>
        </a>
        <a href="#projects">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="m1.8 9l-0.8-4 22 0 -0.8 4 -2 0 0.4-2 -17.1 0 0.4 2 -2.1 0zm18.6-6l0.6-2 -18 0 0.7 2 16.7 0zm3.6 8l-2 13 -20 0 -2-13 24 0zm-8 4c0-0.6-0.4-1-1-1l-6 0c-0.6 0-1 0.4-1 1s0.4 1 1 1l6 0c0.6 0 1-0.4 1-1z" />
            </svg>
          </span>
        </a>
        <a href="#contact">
          <span>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="m20 22.6l-3.5-6.8c0 0-2 1-2.1 1 -2.2 1.1-6.8-7.8-4.6-9l2.1-1 -3.5-6.8 -2.1 1c-7.2 3.8 4.2 26 11.6 22.6 0.1-0.1 2.1-1 2.1-1z" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
