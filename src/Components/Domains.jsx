import React from "react";

const Domains = () => {
  const domains = [
    { name: "Artificial Intelligence", desc: "Solve challenges using AI & ML models." },
    { name: "Web Development", desc: "Innovative websites and web apps for real-world problems." },
    { name: "Blockchain", desc: "Decentralized apps, smart contracts & secure systems." },
    { name: "Healthcare Tech", desc: "Build solutions to improve health & wellness." },
    { name: "Cybersecurity", desc: "Strengthen digital security with innovative tools." },
  ];

  return (
    <section
      id="domains"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-gradient-to-b from-sky-100 to-white"
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 border-b-4 border-sky-500 pb-3">
        Hackathon Domains
      </h2>

      {/* Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="p-8 bg-white rounded-2xl shadow-md border border-sky-200 hover:shadow-xl hover:scale-105 transition transform duration-300"
          >
            <h3 className="text-2xl font-semibold text-sky-700 mb-4">
              {domain.name}
            </h3>
            <p className="text-gray-600">{domain.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Domains;
