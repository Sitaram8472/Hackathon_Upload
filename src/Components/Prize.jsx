import React from "react";
import { Trophy, Award, Briefcase, Rocket } from "lucide-react"; // icons for styling

const Prize = () => {
  const prizes = [
    { place: "Champion", title: "First Prize", amount: "₹60,000", highlight: true },
    { place: "1st Runner-up", title: "Second Prize", amount: "₹40,000" },
    { place: "2nd Runner-up", title: "Third Prize", amount: "₹25,000" },
  ];

  const extras = [
    { icon: "🎓", title: "Internship Program", desc: "Internship stipend worth ₹30,000" },
    { icon: "📜", title: "Certification Vouchers", desc: "Free course vouchers worth ₹16,000 for all from DADB" },
    { icon: "💼", title: "Job Opportunities", desc: "Exciting job offers from DATA PATTERNS for top performers" },
    { icon: "🚀", title: "Career Boost", desc: "Exclusive networking with industry leaders and mentors" },
  ];

  return (
    <section
      id="prize"
      className="min-h-screen flex flex-col items-center px-6 py-20 bg-gradient-to-b from-sky-100 to-white"
    >
      {/* Section Heading */}
      <h2 className="text-5xl font-extrabold text-gray-900 mb-12 border-b-4 border-sky-500 pb-3">
        Prize Distribution
      </h2>
      <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl">
        Compete for extraordinary rewards that will accelerate your professional journey 🚀
      </p>

      {/* Prize Cards */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {prizes.map((prize, index) => (
          <div
            key={index}
            className={`p-8 rounded-2xl shadow-lg border-2 ${
              prize.highlight
                ? "bg-gradient-to-b from-yellow-200 to-yellow-100 border-yellow-500"
                : "bg-white border-sky-300"
            } hover:shadow-xl transition`}
          >
            <h3 className="text-xl font-semibold text-gray-800">{prize.title}</h3>
            <p className="text-sky-600 font-bold">{prize.place}</p>
            <p className="text-3xl font-extrabold mt-3">{prize.amount}</p>
          </div>
        ))}
      </div>

      {/* Total Prize Pool */}
      <div className="mt-10 text-center">
        <h3 className="text-2xl font-bold text-gray-800">
          🎉 Total Prize Pool: <span className="text-sky-600">₹1,25,000</span>
        </h3>
      </div>

      {/* Extra Rewards */}
      <div className="grid md:grid-cols-2 gap-8 mt-16 w-full max-w-5xl">
        {extras.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg border border-sky-200 transition"
          >
            <span className="text-3xl">{item.icon}</span>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Text */}
      <p className="mt-12 text-center text-lg text-gray-700 font-medium max-w-3xl">
        Boost your career by taking part in this exciting event that offers amazing rewards and career opportunities 🌟
      </p>
    </section>
  );
};

export default Prize;
