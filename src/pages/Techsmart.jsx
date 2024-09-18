import React, { useState, useRef, useEffect } from "react";
import Progress from "../utils/Progress";

export default function Techsmart() {
  const [videoCurrentProgress, setVideoCurrentProgress] = useState(0);
  const videoRef = useRef(null);

  const toggleVideoPlay = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    }
  };

  const showCurrentTime = (videoDom) => {
    if (videoDom && videoDom.duration > 0) {
      const progress = (videoDom.currentTime / videoDom.duration) * 100;
      setVideoCurrentProgress(progress);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleTimeUpdate = () => showCurrentTime(videoElement);
      videoElement.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const containerStyle = {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    margin:'0',
    overflow: 'hidden',
  };

  const progressStyle = {
    position: 'absolute',
    margin:0,
    top: '15%', // Adjust as needed
    right:'5vw'
  };

  return (
    <div className="bg-dark" style={containerStyle}>
      <video
        ref={videoRef}
        onClick={toggleVideoPlay}
        width="100%"
        height="100%"
        autoPlay
        loop
        muted
        style={{ objectFit: 'cover' }}
        aria-label="Video player"
      >
        <source src="https://se-prod-webapp-media.s3.amazonaws.com/assets/landingPage/intuitiveness/HMI_desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={progressStyle}>
      <Progress now={videoCurrentProgress} />
      </div>
    </div>
  );
}
