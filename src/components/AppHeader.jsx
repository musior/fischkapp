import styles from "./AppHeader.module.css";

export const AppHeader = () => (
  <header className={styles.header}>
    <div className={styles.headerBarLeft}>
      <img
        src="../../public/logoImage.svg"
        alt="logo Fischkapp"
        className={styles.headerBarLogo}
      />
      <p>
        Cards: <span>{}</span>
      </p>
    </div>
    <div className={styles.headerBarRight}>
      <button>
        <img src="../../public/ctaButton.svg" alt="cta button" />
      </button>
    </div>
  </header>
);
