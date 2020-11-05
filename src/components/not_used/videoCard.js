import React from "react";
import styles from "./videoCard.module.css";

function VideoCard(props) {
  return (
    <div className={styles.videoCard}>
      <div className={styles.thumbnail}>
        <figure>
          <img className={styles.image} alt="thumbnail" src={props.thumbnail} />
        </figure>
      </div>

      <div className={styles.textInfo}>
        <h4 className={styles.title}>{props.title}</h4>
        <span className={styles.channelTitle}>{props.channelTitle}</span>
      </div>
    </div>
  );
}

export default VideoCard;
