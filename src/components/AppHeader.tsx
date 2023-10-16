import React from "react";
import styles from "./AppHeader.module.css";

interface AppHeaderProps {
  cardsAmount: number;
}

export const AppHeader = ({ cardsAmount = 0 }: AppHeaderProps) => (
  <header className={styles.header}>
    <div className={styles.headerBarLeft}>
      <img
        src="../../public/logoImage.svg"
        alt="logo Fischkapp"
        className={styles.headerBarLogo}
      />
      <p>
        Cards: <span>{cardsAmount}</span>
      </p>
    </div>
    <div className={styles.headerBarRight}>
      <button>
        <img src="../../public/ctaButton.svg" alt="cta button" />
      </button>
    </div>
  </header>
);
