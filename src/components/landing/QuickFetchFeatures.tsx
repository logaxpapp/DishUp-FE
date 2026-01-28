import React from "react";

const QuickFetchFeatures = () => {
  const features = [
    {
      title: "Super-Fast Delivery",
      description:
        "Get your food and items delivered in record time, anywhere in the city.",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=900&q=80",
    },
    {
      title: "All-in-One Convenience",
      description:
        "You can order food, send packages, or manage logistics, all in Quickfetch.",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
    },
    {
      title: "Reliable & Secure",
      description:
        "Enjoy real-time tracking and protected payments every step of the way.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
    },
  ];

  return (
    <section className="bg-[#fffaf2] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <h2 className="text-5xl font-semibold text-center mb-20">
          Why Use <span className="text-orange-500">Quick</span>Fetch?
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className="relative">
              {/* IMAGE */}
              <div className="h-[340px] rounded-3xl overflow-hidden">
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* FLOATING CARD */}
              <div className="absolute left-6 right-6 -bottom-16 bg-white rounded-3xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {f.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {f.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SPACER (because of overlap) */}
        <div className="h-20" />
      </div>
    </section>
  );
};

export default QuickFetchFeatures;
