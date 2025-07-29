import React, { useState, useRef } from "react";
import "./CeoVideo.css";
import BackgroundImage from "../../assets/CEOVideo.jpg";
import PlayButtonImage from "../../assets/Group 1.png";
const bgVideo = require("../../assets/video/bgvideo.mp4");

const CeoVideo: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayButtonClick = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
        setIsVideoPlaying(false);
      } else {
        videoRef.current.play();
        setIsVideoPlaying(true);
      }
    }
  };

  return (
    <section className="company-culture-video-ceo">
      <div className="video-frame-ceo">
        {isVideoPlaying ? (
          <video
            ref={videoRef}
            className="youtube-video-ceo"
            src={bgVideo}
            autoPlay
            loop
            muted
            playsInline
            onClick={handleVideoClick}
          ></video>
        ) : (
          <>
            {/* Background Image */}
            <div
              className="video-background-ceo"
              style={{
                backgroundImage: `url(${BackgroundImage})`,
              }}
            ></div>

            {/* Play Button */}
            <div
              className="play-button-container-ceo"
              onClick={handlePlayButtonClick}
            >
              <img
                src={PlayButtonImage}
                alt="Play Video"
                className="play-button-ceo"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CeoVideo;
