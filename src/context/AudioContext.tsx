import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

interface AudioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
}

const AudioContext = createContext<AudioContextType>({
  isPlaying: false,
  togglePlay: () => {}
});

const START_OFFSET_SECONDS = 45;

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const userMutedRef = useRef<boolean>(false);

  useEffect(() => {
    const audio = new Audio('/assets/audio/ambient-nepal.mp3');
    audio.loop = true;
    audio.volume = 0.28; // Gentle 0.25 - 0.3 volume

    // 1. Timing & Offset: Explicitly set audio.currentTime = 45 immediately
    try {
      audio.currentTime = START_OFFSET_SECONDS;
    } catch {
      // Browser may require metadata to be loaded first
    }

    const setInitialOffset = () => {
      if (audio.currentTime < START_OFFSET_SECONDS) {
        audio.currentTime = START_OFFSET_SECONDS;
      }
    };

    audio.addEventListener('loadedmetadata', setInitialOffset);
    audio.addEventListener('canplay', setInitialOffset);

    // 2. Loop Behavior: Ensure loop always replays from the 45-second mark
    let hasPlayedPastStart = false;

    const handleTimeUpdate = () => {
      // Track when audio has progressed past the 45-second mark
      if (audio.currentTime > START_OFFSET_SECONDS + 1) {
        hasPlayedPastStart = true;
      }
      // When audio loop wraps around to 0:00, reset directly to 45 seconds
      if (hasPlayedPastStart && audio.currentTime < START_OFFSET_SECONDS) {
        audio.currentTime = START_OFFSET_SECONDS;
      }
    };

    const handleEnded = () => {
      audio.currentTime = START_OFFSET_SECONDS;
      audio.play().catch(() => {});
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    audioRef.current = audio;

    // Autoplay compliance: trigger on first user gesture anywhere on the site
    const handleFirstInteraction = () => {
      if (userMutedRef.current || !audioRef.current) return;
      try {
        if (audioRef.current.currentTime < START_OFFSET_SECONDS) {
          audioRef.current.currentTime = START_OFFSET_SECONDS;
        }
      } catch {
        // Safe catch for pre-load states
      }

      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.info('Ambient audio waiting for user gesture:', err);
        });
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('keydown', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      audio.removeEventListener('loadedmetadata', setInitialOffset);
      audio.removeEventListener('canplay', setInitialOffset);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      userMutedRef.current = true;
    } else {
      userMutedRef.current = false;
      try {
        if (audioRef.current.currentTime < START_OFFSET_SECONDS) {
          audioRef.current.currentTime = START_OFFSET_SECONDS;
        }
      } catch {
        // Safe catch for state sync
      }

      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Audio playback error:', err);
      });
    }
  };

  return (
    <AudioContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAmbientAudio = () => useContext(AudioContext);
