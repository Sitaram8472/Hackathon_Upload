import React from "react";

const Sponsars = () => {
  const sponsors = [
    { name: "Data Patterns", logo: "/logos/data-patterns.png" }, // replace with actual logo path
  ];

  const partners = [
    { name: "L&T EduTech", logo: "/logos/lnt.png" },
    { name: "Candela", logo: "/logos/candela.png" },
    { name: "DADB", logo: "/logos/dadb.png" },
    { name: "Converse Data Solutions", logo: "/logos/converse.png" },
    { name: "Enthutech", logo: "/logos/enthutech.png" },
    { name: "Ematix", logo: "/logos/ematix.png" },
    { name: "IQmath Technologies", logo: "/logos/iqmath.png" },
  ];

  return (
    <section
      id="sponsors"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-gradient-to-b from-sky-100 to-white"
    >
      {/* Main Heading */}
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 border-b-4 border-sky-500 pb-3 text-center">
        Our Sponsors & Partners
      </h2>

      {/* Sponsor Section */}
      <div className="w-full max-w-5xl text-center mb-20">
        <h3 className="text-3xl font-bold text-sky-700 mb-8">Title Sponsor</h3>
        <div className="flex justify-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="w-72 h-40 flex items-center justify-center bg-white border-4 border-sky-500 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition transform duration-300"
            >
              {sponsor.logo ? (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-24 object-contain"
                />
              ) : (
                <span className="text-2xl font-semibold text-gray-800">
                  {sponsor.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Partners Section */}
      <div className="w-full max-w-6xl text-center">
        <h3 className="text-3xl font-bold text-sky-700 mb-10">Our Partners</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full h-32 flex items-center justify-center bg-white border border-gray-200 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition transform duration-300"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 object-contain"
                />
              ) : (
                <span className="text-lg font-medium text-gray-700">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsars;
