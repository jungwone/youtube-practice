import React from "react";
import VideoCard from "./videoCard";
import styles from "./videoCardList.module.css";

function VideoCardList(props) {
  const { videos } = props;
  return (
    <div className={styles.videoCardList}>
      {videos &&
        videos.map((video) => (
          <VideoCard
            key={video.id}
            thumbnail={video.snippet.thumbnails.high.url}
            title={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
          />
        ))}
    </div>
  );
}

export default VideoCardList;
