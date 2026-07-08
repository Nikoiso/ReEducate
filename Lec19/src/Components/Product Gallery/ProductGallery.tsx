import { useState } from "react";
import styles from "./ProductGallery.module.css";

const images = [
  "/Photos/Rectangle.png",
  "/Photos/Rectangle Copy 2.png",
  "/Photos/Rectangle Copy 3.png",
  "/Photos/Rectangle Copy 4.png"
];

export default function ProductGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageContainer}>
        <img src={images[activeIndex]} alt="Product" className={styles.mainImage} />
      </div>

      <div className={styles.thumbnailRow}>
        {images.map((thumb, index) => (
          <div
            key={index}
            className={`${styles.thumbWrapper} ${index === activeIndex ? styles.activeThumb : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <img src={thumb} alt={`Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}