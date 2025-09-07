import React from "react";

const Timeline = () => {
  const events = [
    { date: "August 19, 2025", title: "Registration Starts" },
    { date: "September 15, 2025", title: "Registration Ends" },
    { date: "September 22, 2025", title: "Announcement of Shortlisted Teams" },
    { date: "September 28, 2025", title: "Pre Mentoring Session for Shortlisted Teams" },
    { date: "October 7, 2025", title: "Hackathon Begins at St. Joseph's Campus" },
    { date: "October 7, 2025", title: "First and Second Round of Evaluation" },
    { date: "October 8, 2025", title: "Third Round of Evaluation" },
    { date: "October 8, 2025", title: "Valedictory and Prize Distribution" },
    { date: "End of Hackathon", title: "The Journey Concludes 🎉" },
  ];

  return (
    <section
      id="timeline"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-gradient-to-b from-sky-100 to-white"
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold text-gray-900 mb-16 border-b-4 border-sky-500 pb-3">
        Hackathon Timeline
      </h2>

      {/* Timeline Container */}
      <div className="relative max-w-7xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full border-l-4 border-sky-500"></div>

        {/* Events */}
        <div className="space-y-16">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex items-center w-full ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              {/* Event Card */}
              <div
                className={`relative w-[55%] p-10 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 ${
                  index % 2 === 0 ? "text-left" : "text-right"
                }`}
              >
                <span className="block text-lg text-gray-500 mb-2">
                  {event.date}
                </span>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {event.title}
                </h3>

                {/* Connector Dot */}
                <div
                  className={`absolute top-8 w-6 h-6 rounded-full bg-sky-500 border-4 border-white shadow-md ${
                    index % 2 === 0 ? "-right-4" : "-left-4"
                  }`}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
