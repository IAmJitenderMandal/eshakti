import React from "react";
import styles from "./midBanner.styles.module.scss";

export default function MidBanner() {
  return (
    <div className={styles.mid_banner}>
      <div className={styles.banner_img}>
        {/* mid-banner will be here in background */}
        <button className={styles.button}>
          <span>Shop Now</span>
        </button>
      </div>
    </div>
  );
}
