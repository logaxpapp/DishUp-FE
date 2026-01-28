import React from "react";

const RoleSelectionPage = () => {
  const roles = [
    {
      title: "Customer",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80",
      alt: "Customer receiving delivery",
    },
    {
      title: "RIDER",
      image:
        "https://images.unsplash.com/photo-1526367790999-0150786686a2?w=900&q=80",
      alt: "Delivery rider",
    },
    {
      title: "Restaurant Partner",
      image:
        "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=900&q=80",
      alt: "Restaurant staff",
    },
    {
      title: "Admin. Partner",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
      alt: "Admin at desk",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffaf2] flex items-center justify-center px-6">
      <div className="w-full max-w-5xl">
        <header className="text-center mb-14">
          <h1 className="text-4xl font-semibold text-gray-900 mb-2">
            Who are you?
          </h1>
          <p className="text-gray-500">
            Choose your role below and get started.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {roles.map((role, index) => (
            <div
              key={index}
              className="relative bg-[#fffaf2] rounded-[28px]"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative rounded-[22px] overflow-hidden h-[300px]">
                <img
                  src={role.image}
                  alt={role.alt}
                  className="w-full h-full object-cover"
                />

                {/* TAG */}
                <div className="absolute top-5 left-5">
                  <span className="px-5 py-2 rounded-full text-sm font-medium text-gray-800 bg-white/85 backdrop-blur-md">
                    {role.title}
                  </span>
                </div>
              </div>

              {/* ARROW CUTOUT */}
              <div className="absolute -bottom-5 right-0 bg-[#fffaf2] p-2 rounded-full">
                <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelectionPage;
