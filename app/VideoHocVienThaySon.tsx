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

export default function VideoHocVienThaySon() {
  const [currentPage, setCurrentPage] = useState(0);
  const videosPerPage = 2;

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(videos.length / videosPerPage));
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + Math.ceil(videos.length / videosPerPage)) % Math.ceil(videos.length / videosPerPage));
  };

  const startIndex = currentPage * videosPerPage;
  const displayedVideos = videos.slice(startIndex, startIndex + videosPerPage);

  return (
    <div className="my-10">
      <h3 className="mb-5 text-lg font-medium">VIDEO HỌC VIÊN THẦY SƠN</h3>
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
                style={{ minHeight: "320px" }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-5">
        <button
          onClick={handlePrev}
          className="px-4 py-2 mx-2 bg-gray-300 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 mx-2 bg-gray-300 rounded hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}
