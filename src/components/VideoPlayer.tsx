import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoId: string;
  thumbnailQuality?: "default" | "hq" | "maxres";
}

export default function VideoPlayer({
  videoId,
  thumbnailQuality = "maxres",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div
      ref={playerRef}
      className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden bg-black shadow-[0_0_50px_rgba(245,158,11,0.3)]"
    >
      {!isPlaying ? (
        <div
          className="absolute inset-0 cursor-pointer bg-black/30"
          onClick={handlePlay}
        >
          <img
            src={`https://img.youtube.com/vi/${videoId}/${thumbnailQuality}default.jpg`}
            alt="Video Thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center px-4 space-y-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-3xl md:text-5xl font-bold"
              >
                <span className="text-white drop-shadow-lg">
                  ASSISTA AGORA!
                </span>
              </motion.div>
              <motion.p
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-xl md:text-2xl text-white font-medium tracking-wide"
              >
                Descubra o segredo das grandes mentes
              </motion.p>
            </motion.div>

            <motion.div
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full blur-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative bg-gradient-to-r from-amber-500 to-yellow-500 w-28 h-28 rounded-full flex items-center justify-center shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity" />
                <Play className="w-14 h-14 text-black fill-black" />
              </div>
            </motion.div>
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
