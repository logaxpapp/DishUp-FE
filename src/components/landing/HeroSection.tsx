export default function HeroSection() {
  return (
    <section className="relative bg-[#FFFCF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-44">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-[42px] lg:text-[56px] font-extrabold leading-tight text-gray-900">
              Quickfetch brings{" "}
              <span className="text-orange-500">speed</span>
              <br />
              and{" "}
              <span className="text-orange-500">simplicity</span> to your
              <br />
              doorstep.
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed">
              Enjoy fast delivery, seamless service, and total control. You can
              order meals, send items, track every move, or grow your food
              business all from one powerful app.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="px-6 py-3 bg-orange-500 text-white rounded-md text-sm font-semibold">
                Download on App Store
              </button>
              <button className="px-6 py-3 bg-[#0B3C6D] text-white rounded-md text-sm font-semibold">
                Download on Google Play
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-end">
            {/* soft bike shadow */}
            <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-[#FFE9D3] rounded-full blur-3xl z-0" />

            <img
              src="/rider.png"
              alt="Delivery rider"
              className="relative z-10 w-[520px] object-contain"
            />
          </div>
        </div>

        {/* STATS — RIGHT ALIGNED + BORDER */}
        <div className="absolute right-36 bottom-32 z-20">
          <div className="bg-white border border-[#EFEFEF] rounded-2xl shadow-md px-10 py-8 w-[890px]">
            <div className="grid grid-cols-3 gap-8 text-left">
              <div>
                <h3 className="text-4xl font-extrabold text-gray-900">
                  10,000+
                </h3>
                <p className="mt-1 text-gray-500 text-sm">
                  Successful Deliveries.
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-gray-900">
                  40,000+
                </h3>
                <p className="mt-1 text-gray-500 text-sm">
                  Happy Users.
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-gray-900">
                  500+
                </h3>
                <p className="mt-1 text-gray-500 text-sm">
                  Restaurant Partners.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
