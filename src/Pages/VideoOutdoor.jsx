import React, { useState } from "react";
import { Link } from "react-router-dom";
const OutdoorPlay = () => {
  const [video, setVideo] = useState(null);
  
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoURL = URL.createObjectURL(file);
      setVideo(videoURL);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mt-6">Encourage Outdoor Play! 🌳⚽</h1>
      <p className="mt-2 text-gray-400 text-lg text-center max-w-2xl">
        Outdoor activities are essential for children's cognitive and physical development. Encourage kids to play outside and explore the world! 🌞
      </p>

      {/* Playful Animation */}
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        <button className="px-6 py-3 bg-gray-800 border-2 border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Explore Outdoor Games
        </button>
        <button className="px-6 py-3 bg-gray-800 border-2 border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Benefits of Outdoor Play
        </button>
      </div>

      {/* Video Upload Section */}
      <div className="mt-10 w-full max-w-lg p-6 border border-gray-700 rounded-lg bg-gray-800 text-center">
        <h2 className="text-2xl font-semibold">Upload a Video of Your Child Playing</h2>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="mt-4 w-full text-sm text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-gray-700 file:text-white hover:file:bg-gray-600 cursor-pointer"
        />
        {video && (
          <div className="mt-4">
            <video controls className="w-full h-auto rounded-lg border border-gray-600">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>
      <button class="bg-blue-500 mt-10 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  <Link to='/feedbackform'>Send Feedback</Link>
</button>

    </div>
  );
};

export default OutdoorPlay;