import React from "react";

const Rule = () => {
  const rules = [
    "Teams must belong to the same college (inter-departmental teams are permitted).",
    "Each team shall consist of a minimum of 3 members and a maximum of 4 members.",
    "Shortlisted participants will be connected with leading industry experts for a pre-mentoring session.",
    "Participants are required to bring their own components that are necessary for their project.",
    "Students are expected to be dressed in formal attire.",
    "Food, refreshments, and accommodation will be provided at free of cost to all participants.",
  ];

  return (
    <section
      id="rules"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-gradient-to-b from-sky-100 to-white"
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 border-b-4 border-sky-500 pb-3">
        Rules & Regulations
      </h2>

      {/* Rules Container with Border */}
      <div className="w-full max-w-5xl border-4 border-sky-500 rounded-2xl p-10 bg-white shadow-lg">
        <ul className="space-y-6 text-lg text-gray-700">
          {rules.map((rule, index) => (
            <li
              key={index}
              className="flex items-start gap-4 p-4 border-b last:border-b-0 hover:bg-sky-50 rounded-lg transition"
            >
              <span className="font-bold text-sky-600 text-xl">
                #{index + 1}
              </span>
              <p>{rule}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Rule;
