import React from "react";

const Reels: React.FC = () => (
  <div>
    <div className="flex flex-col items-center mb-8 gap-2">
      <h2 className="text-6xl font-normal">reels</h2>
    </div>
    <div className="mx-auto w-full max-w-[80%] px-6 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="relative">
          <span className="absolute -top-6 left-1 text-xl font-bold">VFX</span>
          <div className="aspect-video w-full bg-gray-200 border-2 border-black overflow-hidden">
            <video className="w-full h-full object-cover" controls muted>
              <source
                src="/vite-react-test/videos/2024_General_v7.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="relative">
          <span className="absolute -top-6 left-1 text-xl font-bold">
            MOGRAPH
          </span>
          <div className="aspect-video w-full bg-gray-200 border-2 border-black overflow-hidden">
            <video className="w-full h-full object-cover" controls muted>
              <source
                src="/vite-react-test/videos/2025_MoGraph_v1.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
    <div className="h-20" />
  </div>
);

export default Reels;
