import React from "react";

const NotFound: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center gap-6">
    <div className="text-center">
      <div className="text-[10rem] font-normal leading-none">404</div>
      <h1 className="text-4xl font-normal mt-2">page not found</h1>
    </div>
    <div className="border-t-2 border-black w-24" />
    <p className="text-lg text-gray-600">that page doesn't exist.</p>
    <a href="/" className="underline text-lg">
      go home
    </a>
  </div>
);

export default NotFound;
