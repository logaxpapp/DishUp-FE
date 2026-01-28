import Image from "next/image";

export default function DownloadApp() {
  return (
    <section className="bg-[#F5E6D3] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Phone Images */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <Image
              src="/phone-mockup.png"
              alt="QuickFetch App Screenshots"
              width={500}
              height={500}
              className="object-contain"
            />
          </div>

          {/* Download Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Download{" "}
              <span className="relative inline-block">
                <span className="text-orange-500">Our</span>
                <span className="absolute -bottom-2 left-0 w-full h-3 bg-orange-500/20 -z-10"></span>
              </span>{" "}
              App
            </h2>

           <div className="flex flex-row gap-4 justify-center md:justify-start mt-4">
  {/* Google Play */}
  <a
    href="#"
    className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 hover:scale-105 transition"
  >
    <Image
      src="/google-play.png"
      alt="Get it on Google Play"
      width={120}
      height={36}
      className="h-8 w-auto"
    />
  </a>

  {/* App Store */}
  <a
    href="#"
    className="bg-black rounded-lg px-4 py-2 flex items-center gap-2 hover:scale-105 transition"
  >
    <Image
      src="/app-store.png"
      alt="Download on App Store"
      width={120}
      height={36}
      className="h-8 w-auto"
    />
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}