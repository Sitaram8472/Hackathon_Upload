import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  const staffCoordinators = [
    {
      name: "Dr. A. Kumar",
      role: "Staff Coordinator",
      phone: "+91 98765 43210",
      email: "akumar@college.edu",
    },
    {
      name: "Prof. R. Sharma",
      role: "Staff Coordinator",
      phone: "+91 87654 32109",
      email: "rsharma@college.edu",
    },
  ];

  const studentCoordinators = [
    {
      name: "Sitaram Sahu",
      role: "Student Coordinator",
      phone: "+91 99999 88888",
      email: "sitaram@college.edu",
    },
    {
      name: "Ananya Singh",
      role: "Student Coordinator",
      phone: "+91 88888 77777",
      email: "ananya@college.edu",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-gradient-to-b from-sky-100 to-white"
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 border-b-4 border-sky-500 pb-3 text-center">
        Coordinators & Contact
      </h2>

      {/* Coordinators Section */}
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-6xl mb-16">
        {/* Staff Coordinators */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-sky-500">
          <h3 className="text-2xl font-bold text-sky-700 mb-6">
            Staff Coordinators
          </h3>
          <ul className="space-y-6">
            {staffCoordinators.map((person, index) => (
              <li key={index} className="border-b pb-4 last:border-b-0">
                <p className="text-lg font-semibold text-gray-800">
                  {person.name}
                </p>
                <p className="text-gray-600">{person.role}</p>
                <div className="flex items-center gap-3 text-gray-700 mt-2">
                  <Phone className="w-4 h-4 text-sky-500" /> {person.phone}
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-4 h-4 text-sky-500" /> {person.email}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Student Coordinators */}
        <div className="bg-white shadow-lg rounded-2xl p-8 border-t-4 border-sky-500">
          <h3 className="text-2xl font-bold text-sky-700 mb-6">
            Student Coordinators
          </h3>
          <ul className="space-y-6">
            {studentCoordinators.map((person, index) => (
              <li key={index} className="border-b pb-4 last:border-b-0">
                <p className="text-lg font-semibold text-gray-800">
                  {person.name}
                </p>
                <p className="text-gray-600">{person.role}</p>
                <div className="flex items-center gap-3 text-gray-700 mt-2">
                  <Phone className="w-4 h-4 text-sky-500" /> {person.phone}
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Mail className="w-4 h-4 text-sky-500" /> {person.email}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Contact Footer */}
      <div className="text-center mt-10">
        <h4 className="text-xl font-bold text-gray-800">Get in Touch</h4>
        <p className="text-gray-600 mt-2">
          For queries, reach out to us at{" "}
          <span className="text-sky-600 font-semibold">
            hackathon@college.edu
          </span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
