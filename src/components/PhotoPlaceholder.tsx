import React, { useState, useRef } from 'react';
import { Camera, RefreshCw } from 'lucide-react';

export interface PhotoPlaceholderProps {
  id?: string;
  photoKey: 'photo1' | 'photo2' | 'photo3';
  caption: string;
  dateStr: string;
  tag?: string;
  rotation?: string;
  illustrationType?: 'cab' | 'candid' | 'birthday';
  aspectRatio?: '4/3' | '3/4' | '4/5' | '1/1';
  objectPosition?: string;
  maxContainerWidth?: string;
}

export const PhotoPlaceholder: React.FC<PhotoPlaceholderProps> = ({
  photoKey,
  caption,
  dateStr,
  tag = '#unforgettable',
  rotation = 'rotate-[-1deg]',
  illustrationType = 'cab',
  aspectRatio = '4/3',
  objectPosition = 'object-center',
  maxContainerWidth = 'max-w-sm sm:max-w-md',
}) => {
  // Primary file: /photo1.jpg, /photo2.jpg, /photo3.jpg
  // For photo1, also allow /photo.jpg as fallback
  const initialSrc = `/${photoKey}.jpg`;
  const [imageSrc, setImageSrc] = useState<string | null>(initialSrc);
  const [hasError, setHasError] = useState<boolean>(false);
  const [triedFallback, setTriedFallback] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageError = () => {
    // If photo1 fails on /photo1.jpg, try /photo.jpg before falling back to illustration
    if (photoKey === 'photo1' && !triedFallback) {
      setTriedFallback(true);
      setImageSrc('/photo.jpg');
    } else {
      setHasError(true);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
      setHasError(false);
    }
  };

  const handleTriggerUpload = () => {
    fileInputRef.current?.click();
  };

  const showCustomPhoto = imageSrc && !hasError;

  const aspectClass =
    aspectRatio === '3/4'
      ? 'aspect-[3/4]'
      : aspectRatio === '4/5'
      ? 'aspect-[4/5]'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : 'aspect-[4/3]';

  return (
    <div className={`relative mx-auto ${maxContainerWidth} w-full my-4`}>
      {/* Scrapbook Washi Tape */}
      <div className="washi-tape z-20" />

      {/* Polaroid Container */}
      <div
        className={`relative bg-cream-50 p-3.5 sm:p-4 pb-5 sm:pb-6 rounded-2xl shadow-polaroid border border-charcoal-200/40 ${rotation} hover:rotate-0 transition-transform duration-300`}
      >
        {/* Photo Box */}
        <div className={`relative ${aspectClass} w-full rounded-xl overflow-hidden bg-gradient-to-b from-[#25222E] via-[#2F293A] to-[#1C1824] shadow-inner flex flex-col items-center justify-center text-cream-100 group`}>
          {showCustomPhoto ? (
            <img
              src={imageSrc}
              alt={caption}
              onError={handleImageError}
              className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${objectPosition}`}
            />
          ) : (
            /* Atmospheric Handcrafted Scrapbook Illustration */
            <div className="relative w-full h-full flex flex-col items-center justify-between p-5 overflow-hidden select-none">
              {illustrationType === 'cab' && (
                <>
                  <div className="absolute inset-0 bg-radial-at-c from-amber-500/10 via-transparent to-black/60 pointer-events-none" />
                  <div className="absolute top-1/4 left-1/5 w-16 h-16 rounded-full bg-amber-400/20 blur-xl pointer-events-none animate-pulse" />
                  <div className="absolute top-1/3 right-1/4 w-20 h-20 rounded-full bg-rose-400/25 blur-xl pointer-events-none" />
                  <div className="absolute bottom-1/4 left-1/3 w-14 h-14 rounded-full bg-emerald-400/15 blur-lg pointer-events-none" />
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-white/10 pointer-events-none" />

                  <div className="relative z-10 my-auto text-center px-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-3 shadow-sm">
                      <span className="text-xl">🚕✨</span>
                    </div>
                    <p className="font-serif italic text-lg sm:text-xl text-cream-100/95 font-light tracking-wide">
                      that cab ride...
                    </p>
                    <p className="text-xs text-cream-200/70 font-sans mt-1">
                      city lights &amp; peaceful silence
                    </p>
                  </div>
                  <div className="relative z-10 w-full flex justify-between items-center text-[10px] text-cream-200/50">
                    <span>03 · 10 · 2026</span>
                    <span className="font-sans">photo 01</span>
                  </div>
                </>
              )}

              {illustrationType === 'candid' && (
                <>
                  <div className="absolute inset-0 bg-radial-at-c from-rose-500/15 via-transparent to-black/60 pointer-events-none" />
                  <div className="absolute top-1/4 right-1/4 w-18 h-18 rounded-full bg-rose-400/20 blur-xl pointer-events-none" />
                  <div className="absolute bottom-1/3 left-1/4 w-16 h-16 rounded-full bg-amber-300/15 blur-lg pointer-events-none" />

                  <div className="relative z-10 my-auto text-center px-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-3 shadow-sm">
                      <span className="text-xl">☕📸</span>
                    </div>
                    <p className="font-serif italic text-lg sm:text-xl text-cream-100/95 font-light tracking-wide">
                      unscripted &amp; random...
                    </p>
                    <p className="text-xs text-cream-200/70 font-sans mt-1">
                      stupid jokes &amp; sweet little moments
                    </p>
                  </div>
                  <div className="relative z-10 w-full flex justify-between items-center text-[10px] text-cream-200/50">
                    <span>our favourites</span>
                    <span className="font-sans">photo 02</span>
                  </div>
                </>
              )}

              {illustrationType === 'birthday' && (
                <>
                  <div className="absolute inset-0 bg-radial-at-c from-amber-400/15 via-rose-500/10 to-black/60 pointer-events-none" />
                  <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full bg-amber-400/25 blur-xl pointer-events-none animate-pulse" />
                  <div className="absolute bottom-1/4 right-1/3 w-16 h-16 rounded-full bg-pink-400/20 blur-lg pointer-events-none" />

                  <div className="relative z-10 my-auto text-center px-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 mb-3 shadow-sm">
                      <span className="text-xl">🎂🌸</span>
                    </div>
                    <p className="font-serif italic text-lg sm:text-xl text-cream-100/95 font-light tracking-wide">
                      the birthday girl...
                    </p>
                    <p className="text-xs text-cream-200/70 font-sans mt-1">
                      hoping you smile today
                    </p>
                  </div>
                  <div className="relative z-10 w-full flex justify-between items-center text-[10px] text-cream-200/50">
                    <span>07 · 10 · 2026</span>
                    <span className="font-sans">photo 03</span>
                  </div>
                </>
              )}
            </div>
          )}

          {/* Interactive photo button overlay so Mann can test his photo directly */}
          <div className="absolute bottom-3 right-3 z-30">
            <button
              onClick={handleTriggerUpload}
              title={showCustomPhoto ? 'Change photo' : 'Add photo here'}
              className="px-2.5 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white text-[11px] font-sans flex items-center gap-1.5 transition-all shadow-md active:scale-95 border border-white/20"
              aria-label="Upload photo"
            >
              {showCustomPhoto ? (
                <>
                  <RefreshCw className="w-3 h-3 text-blush-300" />
                  <span>Change photo</span>
                </>
              ) : (
                <>
                  <Camera className="w-3 h-3 text-blush-300" />
                  <span>Add photo</span>
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
            {tag}
          </span>
        </div>
      </div>
    </div>
  );
};
