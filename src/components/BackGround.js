import React from "react";
import "./css/Background.css"; // 引入样式文件

const Background = ({ videoSource, posterSource }) => {
  console.log(videoSource);
  return (
    <div className="background">
      <video
        autoPlay="autoplay"
        loop="loop"
        muted
        className="background-video"
        poster={posterSource}
      >
        {/* 可以根据需要选择视频源 */}
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Background;
