import React from "react";

const HowItWorks = () => {
  const roles = [
    {
      title: "Restaurant",
      image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80",
      alt: "Restaurant staff member",
      steps: [
        "Sign Up & List your menu/items",
        "Receive and manage orders.",
        "Track in real time."
      ]
    },
    {
      title: "Customer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
      alt: "Customer using phone",
      steps: [
        "choose your favorites restaurant.",
        "Watch real-time updates.",
        "Send other items too."
      ]
    },
    {
      title: "Rider",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&q=80",
      alt: "Delivery rider",
      steps: [
        "Get alerts for nearby orders.",
        "Get order with customer details.",
        "Use the in-app map for drop off."
      ]
    },
    {
      title: "Admin.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      alt: "Admin at computer",
      steps: [
        "Oversee restaurants, riders, and customers.",
        "Track orders, revenue, and ratings.",
        "Keep everything running."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            How it Works
          </h2>
          <p className="text-gray-500 text-lg">
            Quickfetch is built to simplify your everyday needs, ordering food and sending packages.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <div
              key={index}
              className="flex gap-6 bg-white rounded-3xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              {/* Image */}
              <div className="flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden">
                <img
                  src={role.image}
                  alt={role.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {role.title}
                </h3>
                <ul className="space-y-4">
                  {role.steps.map((step, stepIndex) => (
                    <li key={stepIndex} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gray-400 mt-2"></span>
                      <span className="text-gray-600 leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;