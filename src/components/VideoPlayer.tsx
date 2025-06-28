import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoId: string;
  thumbnailQuality?: "default" | "hq" | "maxres";
  autoplayMuted?: boolean;
}

export default function VideoPlayer({
  videoId,
  thumbnailQuality = "maxres",
  autoplayMuted = false,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const showMutedAutoplay = autoplayMuted && !isPlaying;

  return (
    <div
      ref={playerRef}
      className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden bg-black shadow-[0_0_50px_rgba(245,158,11,0.3)]"
    >
      {showMutedAutoplay ? (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&controls=0&playsinline=1`}
            title="Video Player"
            className="absolute top-0 left-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div
            className="absolute inset-0 cursor-pointer bg-black/60 flex items-center justify-center"
            onClick={handlePlay}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center bg-black/70 rounded-lg px-6 py-6">
                <Play className="w-16 h-16 text-white mb-4 opacity-90" />
                <span className="text-white font-bold text-lg md:text-xl mb-1 text-center drop-shadow">Seu vídeo já começou</span>
                <span className="text-white text-base md:text-lg opacity-90 text-center">Clique para ouvir</span>
              </div>
            </div>
          </div>
        </>
      ) : !isPlaying ? (
        <div
          className="absolute inset-0 cursor-pointer bg-black/60 flex items-center justify-center"
          onClick={handlePlay}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/${thumbnailQuality}default.jpg`}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center bg-black/70 rounded-lg px-6 py-6">
              <Play className="w-16 h-16 text-white mb-4 opacity-90" />
              <span className="text-white font-bold text-lg md:text-xl mb-1 text-center drop-shadow">Seu vídeo já começou</span>
              <span className="text-white text-base md:text-lg opacity-90 text-center">Clique para ouvir</span>
            </div>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0&showinfo=0&controls=0`}
          title="Video Player"
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
}
