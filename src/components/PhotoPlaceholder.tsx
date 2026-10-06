import React, { useState, useRef } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

interface PhotoPlaceholderProps {
  caption: string;
  dateStr: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  caption,
  dateStr,
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
    }
  };

  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative mx-auto max-w-sm sm:max-w-md w-full my-6">
      {/* Scrapbook Washi Tape */}
      <div className="washi-tape z-20" />

      {/* Polaroid Container */}
      <div className="relative bg-cream-50 p-4 pb-6 rounded-2xl shadow-polaroid border border-charcoal-200/40 rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
        {/* Photo Box */}
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#25222E] via-[#2F293A] to-[#1C1824] shadow-inner flex flex-col items-center justify-center text-cream-100 group">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Memory on 03.10.2026"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            /* Abstract Atmospheric Cab Window Illustration */
            <div className="relative w-full h-full flex flex-col items-center justify-between p-5 overflow-hidden select-none">
              {/* Raindrops and Bokeh City Glow in Cab Window */}
              <div className="absolute inset-0 bg-radial-at-c from-amber-500/10 via-transparent to-black/60 pointer-events-none" />

              {/* Bokeh glowing light circles outside cab window */}
              <div className="absolute top-1/4 left-1/5 w-16 h-16 rounded-full bg-amber-400/20 blur-xl pointer-events-none animate-pulse" />
              <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-rose-400/25 blur-xl pointer-events-none" />
              <div className="absolute bottom-1/4 left-1/3 w-14 h-14 rounded-full bg-emerald-400/15 blur-lg pointer-events-none" />

              {/* Subtle Cab Window Glass Frame Lines */}
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/10 pointer-events-none" />
              <div className="absolute inset-y-0 right-1/3 w-[1px] bg-white/10 pointer-events-none" />

              {/* Center Silhouette / Night mood icon */}
              <div className="relative z-10 my-auto text-center px-4">
                <div className="w-12 h-12 mx-auto rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-3 shadow-sm">
                  <span className="text-xl">🚕✨</span>
                </div>
                <p className="font-serif italic text-lg sm:text-xl text-cream-100/90 font-light tracking-wide">
                  that cab ride...
                </p>
                <p className="text-xs text-cream-200/60 font-sans mt-1">
                  city lights &amp; peaceful silence
                </p>
              </div>

              {/* Bottom Subtle Note */}
              <div className="relative z-10 w-full flex justify-between items-center text-[10px] text-cream-200/50">
                <span>03 · 10 · 2026</span>
                <span className="font-sans">our little memory</span>
              </div>
            </div>
          )}

          {/* Interactive photo button overlay so Mann can test his photo directly */}
          <div className="absolute bottom-3 right-3 z-30">
            <button
              onClick={handleTriggerUpload}
              title={imageSrc ? 'Change photo' : 'Add your photo here'}
              className="px-2.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-[11px] font-sans flex items-center gap-1.5 transition-all shadow-md active:scale-95 border border-white/20"
              aria-label="Upload photo"
            >
              {imageSrc ? (
                <>
                  <RefreshCw className="w-3 h-3 text-blush-300" />
                  <span>Change</span>
                </>
              ) : (
                <>
                  <Camera className="w-3 h-3 text-blush-300" />
                  <span>Mann's photo slot</span>
                </>
              )}
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>

        {/* Polaroid Caption */}
        <div className="pt-3 px-1 flex justify-between items-end">
          <div>
            <p className="font-serif italic text-base sm:text-lg text-charcoal-700">
              {caption}
            </p>
            <p className="font-sans text-[11px] text-charcoal-400 mt-0.5">
              {dateStr}
            </p>
          </div>
          <span className="text-xs text-blush-400 font-serif italic">
            #unforgettable
          </span>
        </div>
      </div>
    </div>
  );
};
