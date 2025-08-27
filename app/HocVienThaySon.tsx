'use client'
import React, { useState } from "react";

const videos = [
  "https://www.youtube.com/embed/bUkrC-x1dK0",
  "https://www.youtube.com/embed/AV9oXx1QJfM",
  "https://www.youtube.com/embed/1egBMCLkS5U",
  "https://www.youtube.com/embed/JhMa5ByiD9I",
  "https://www.youtube.com/embed/CBnjpYdm2oI",
  "https://www.youtube.com/embed/1cin8i5j_UA",
  "https://www.youtube.com/embed/tINHObhFicc",
  "https://www.youtube.com/embed/TnkiHnHtmqc",
  "https://www.youtube.com/embed/vTooWC_sRTA",
  "https://www.youtube.com/embed/Ykb5ligXjss",
  "https://www.youtube.com/embed/Jr5yYCt5pUM",
  "https://www.youtube.com/embed/1heiRvgPufs",
  "https://www.youtube.com/embed/CcvuPqM708k",
  "https://www.youtube.com/embed/_VpOshde464",
  "https://www.youtube.com/embed/dMA5jIFOCag",
  "https://www.youtube.com/embed/ch2pOhOuU5U",
  "https://www.youtube.com/embed/tK_BFAnRKmA",
  "https://www.youtube.com/embed/NcKvE_JclSU",
  "https://www.youtube.com/embed/D_mnNvFLwdE",
  "https://www.youtube.com/embed/QxPAXgwDi6Y"
];

export default function HocVienThaySon() {
  const [index, setIndex] = useState(0);
  const videosPerPage = 2;
  const maxIndex = Math.ceil(videos.length / videosPerPage) -1;

  const handlePrev = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const startIndex = index * videosPerPage;
  const displayedVideos = videos.slice(startIndex, startIndex + videosPerPage);

  return (
    <div className="flex flex-col items-center p-4">
      <div className="grid gap-8 md:grid-cols-2">
        {displayedVideos.map((video, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={video}
                title={`Video ${startIndex + idx + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-4">
        <button onClick={handlePrev} disabled={index === 0} className="px-3 py-1 rounded bg-gray-300 text-black text-lg font-bold disabled:opacity-50">←</button>
        <span className="text-lg font-medium">{index + 1}/{maxIndex +1}</span>
        <button onClick={handleNext} disabled={index >= maxIndex} className="px-3 py-1 rounded bg-gray-300 text-black text-lg font-bold disabled:opacity-50">→</button>
      </div>
    </div>
  );
}
