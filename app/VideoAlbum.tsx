import React, { useState } from 'react';

const videos = [
  'https://www.youtube.com/embed/IHspmYTf0Ms',
  'https://www.youtube.com/embed/3XrqUzxAViQ',
  'https://www.youtube.com/embed/SiJ7LbHkQKE',
  'https://www.youtube.com/embed/pHpJYv5wDtU',
  'https://www.youtube.com/embed/WHNNAQ8Ae_c',
];

export default function VideoAlbum() {
  const [index, setIndex] = useState(0);
  const maxIndex = videos.length - 2;

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 2, 0));
  };
  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 2, maxIndex));
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="flex gap-4">
        {videos.slice(index, index + 2).map((url, i) => (
          <div key={url} className="w-[220px] h-[390px] bg-black rounded-lg overflow-hidden shadow-md">
            <iframe
              src={url}
              title={`Video ${index + i + 1}`}
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full border-none rounded-lg"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={handlePrev} disabled={index === 0} className="px-3 py-1 rounded bg-gray-300 text-black text-lg font-bold disabled:opacity-50">←</button>
        <span className="text-lg font-medium">{index / 2 + 1}/{Math.ceil(videos.length / 2)}</span>
        <button onClick={handleNext} disabled={index >= maxIndex} className="px-3 py-1 rounded bg-gray-300 text-black text-lg font-bold disabled:opacity-50">→</button>
      </div>
    </div>
  );
}
