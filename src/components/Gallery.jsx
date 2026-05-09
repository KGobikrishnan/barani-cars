import { useState, useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Camera, Maximize2 } from 'lucide-react';
import './Gallery.css';

const videoData = [
  { id: 1, url: '/gallery/v1.mp4', insta: 'https://www.instagram.com/p/DXLKARFTacl/' },
  { id: 2, url: '/gallery/v2.mp4', insta: 'https://www.instagram.com/p/DXQUQc4TG3z/' },
  { id: 3, url: '/gallery/v3.mp4', insta: 'https://www.instagram.com/p/DX0S0jnpjGj/' },
  { id: 4, url: '/gallery/v4.mp4', insta: 'https://www.instagram.com/p/DQNzNjsjFMC/' },
  { id: 5, url: '/gallery/v5.mp4', insta: 'https://www.instagram.com/p/DVKhki7ARSJ/' },
  { id: 6, url: '/gallery/v6.mp4', insta: 'https://www.instagram.com/p/DU9hndLAcSS/' },
  { id: 7, url: '/gallery/v7.mp4', insta: 'https://www.instagram.com/p/DUHc3qCDKU1/' },
  { id: 8, url: '/gallery/v8.mp4', insta: 'https://www.instagram.com/p/DTjZzPXExXf/' },
  { id: 9, url: '/gallery/v9.mp4', insta: 'https://www.instagram.com/p/DTOzfWFiLXr/' },
  { id: 10, url: '/gallery/v10.mp4', insta: 'https://www.instagram.com/p/DS43TkEEYBE/' },
  { id: 11, url: '/gallery/v11.mp4', insta: 'https://www.instagram.com/p/DS2TydyEWdv/' },
  { id: 12, url: '/gallery/v12.mp4', insta: 'https://www.instagram.com/p/DSzipWiETRX/' },
];

const VideoItem = ({ video, isActive, onToggleSound, isRowPaused }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = !isActive;
      // If unmuted, make sure it's playing from the current position
      if (!isActive) {
        // When muted, we just keep it looping silently
      }
    }
  }, [isActive]);

  const handleEnded = () => {
    if (isActive) {
      onToggleSound(null); // Mute and resume
    }
  };

  const handleDoubleClick = (e) => {
    e.stopPropagation();
    window.open(video.insta, '_blank');
  };

  return (
    <div 
      className={`gallery__video-card ${isActive ? 'active' : ''}`}
      onClick={() => onToggleSound(video.id)}
      onDoubleClick={handleDoubleClick}
    >
      <video
        ref={videoRef}
        src={video.url}
        autoPlay
        loop={!isActive}
        muted={!isActive}
        playsInline
        preload="metadata"
        onEnded={handleEnded}
        className="gallery__video-element"
      />
      <div className="gallery__video-overlay">
        <div className="gallery__video-info">
          <div className={`sound-indicator ${isActive ? 'active' : ''}`}>
            {!isActive ? <VolumeX size={16} /> : <Volume2 size={16} />}
            <span>{!isActive ? 'Click for Sound' : 'Sound On'}</span>
          </div>
          <div className="insta-hint">
            <Camera size={14} />
            <span>Double click for Reel</span>
          </div>
        </div>
        <div className="gallery__video-corner">
           <Maximize2 size={18} />
        </div>
      </div>
      {isActive && <div className="video-playing-glow" />}
    </div>
  );
};

const MarqueeRow = ({ videos, reverse = false, activeVideoId, onToggleSound, rowIndex, pausedRowIndex }) => {
  const isPaused = pausedRowIndex === rowIndex;
  
  // Create a minimal set for seamless loop (2 clones is enough)
  const displayVideos = useMemo(() => [...videos, ...videos], [videos]);
  
  const [duration, setDuration] = useState(10);

  useEffect(() => {
    const updateDuration = () => {
      setDuration(window.innerWidth < 768 ? 6 : 10);
    };
    updateDuration();
    window.addEventListener('resize', updateDuration);
    return () => window.removeEventListener('resize', updateDuration);
  }, []);

  return (
    <div className="gallery__marquee-container">
      <motion.div 
        className="gallery__marquee-track"
        animate={isPaused ? {} : { 
          x: reverse ? [0, "-50%"] : ["-50%", 0] 
        }}
        transition={{ 
          duration: duration, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        {displayVideos.map((video, idx) => (
          <VideoItem 
            key={`${video.id}-${idx}`} 
            video={video} 
            isActive={activeVideoId === video.id}
            onToggleSound={(id) => onToggleSound(id, rowIndex)}
            isRowPaused={isPaused}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default function Gallery() {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [pausedRowIndex, setPausedRowIndex] = useState(null);

  // Synchronized video flow: Row 1 has 1-12, Row 2 has 1-12 but reversed or offset
  const row1 = useMemo(() => videoData, []);
  const row2 = useMemo(() => [...videoData].reverse(), []);

  const handleToggleSound = (id, rowIndex) => {
    if (activeVideoId === id) {
      // Mute current and resume
      setActiveVideoId(null);
      setPausedRowIndex(null);
    } else {
      // Play new, pause its row
      setActiveVideoId(id);
      setPausedRowIndex(rowIndex);
    }
  };

  // Mute on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (activeVideoId !== null) {
        setActiveVideoId(null);
        setPausedRowIndex(null);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeVideoId]);

  return (
    <section id="gallery" className="gallery section">
      <div className="gallery__glow-top" />
      <div className="gallery__glow-bottom" />
      
      <div className="container container--wide">
        <div className="gallery__header-wrapper">
          <motion.div
            className="gallery__header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label">🎬 Cinematic Experience</span>
            <h2 className="section-title">
              The <span className="highlight">Endless</span> Flow
            </h2>
            <p className="section-subtitle">
              Click a masterpiece to hear its soul. The flow stops for you. Scroll to resume the journey.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="gallery__marquee-section">
        {/* Row 1: Left to Right */}
        <MarqueeRow 
          videos={row1} 
          reverse={true} 
          activeVideoId={activeVideoId}
          onToggleSound={handleToggleSound}
          rowIndex={0}
          pausedRowIndex={pausedRowIndex}
        />
        
        {/* Row 2: Right to Left */}
        <MarqueeRow 
          videos={row2} 
          reverse={false} 
          activeVideoId={activeVideoId}
          onToggleSound={handleToggleSound}
          rowIndex={1}
          pausedRowIndex={pausedRowIndex}
        />
      </div>
    </section>
  );
}

