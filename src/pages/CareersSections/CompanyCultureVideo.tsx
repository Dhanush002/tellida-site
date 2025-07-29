import React, { useRef, useState } from "react";
import "./CompanyCultureVideo.css";
import BackgroundImage from "../../assets/Rectangle11.png";
import PlayButtonImage from "../../assets/Group 1.png";
const bgVideo = require("../../assets/video/bgvideo.mp4");

const CompanyCultureVideo: React.FC = () => {
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
    <section className="company-culture-video">
      <div className="video-frame">
        {isVideoPlaying ? (
        <video
        ref={videoRef}
        className="youtube-video"
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
              className="video-background"
              style={{
                backgroundImage: `url(${BackgroundImage})`,
              }}
            ></div>

            {/* Play Button */}
            <div
              className="play-button-container"
              onClick={handlePlayButtonClick}
            >
              <img
                src={PlayButtonImage}
                alt="Play Video"
                className="play-button"
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CompanyCultureVideo;
