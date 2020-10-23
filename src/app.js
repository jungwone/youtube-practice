import React, { useEffect, useState } from "react";
import Header from "./components/header";
import VideoCardList from "./components/videoCardList";
import axios from "axios";
import "./app.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [keyword, setKeyword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("search keyword : ", keyword);
    setKeyword(""); // Reset keyword
  };

  useEffect(() => {
    var config = {
      method: "get",
      url:
        "https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=25&chart=mostPopular&key=AIzaSyAbH0XMKD0jbRwdgchcEbw7QeLjsibtSJo",
      headers: {},
    };

    axios(config).then((response) => {
      setVideos(response.data.items);
    });
  }, []);

  return (
    <>
      <Header keyword={keyword} setKeyword={setKeyword} onSubmit={onSubmit} />
      <VideoCardList videos={videos} />
    </>
  );
}

export default App;
