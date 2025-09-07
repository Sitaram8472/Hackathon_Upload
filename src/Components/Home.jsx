import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-sky-100 to-white px-6"
    >
      {/* Hackathon Title */}
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">
        🚀 Hackathon 2025
      </h1>

      {/* Tagline */}
      <p className="text-xl text-gray-700 mb-6 max-w-2xl">
        Innovate • Collaborate • Build the Future <br />
        Join us for an amazing 24-hour coding marathon!
      </p>

      {/* Date + Location */}
      <div className="mb-8 text-gray-600 text-lg">
        📅 15th – 16th September 2025 | 📍 JIS College of Engineering
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-6">
        <a
          href="https://docs.google.com/forms/d/YOUR_FORM_ID/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-500 text-white px-6 py-3 rounded-xl shadow-md hover:bg-sky-600 transition duration-300"
        >
          Register Now
        </a>
        <a
          // href="/timeline"
          className="bg-gray-800 text-white px-6 py-3 rounded-xl shadow-md hover:bg-gray-900 transition duration-300"
        >
          View Timeline
        </a>
      </div>
    </section>
  );
};

export default Home;
