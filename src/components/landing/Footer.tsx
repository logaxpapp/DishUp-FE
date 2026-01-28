export default function Footer() {
  return (
    <footer className="bg-[#E8E8E8] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-orange-500">Quick</span>
              <span className="text-gray-900">Fetch</span>
            </h3>
            <p className="text-gray-600 text-sm">
              Quick, seamless delivery anytime, anywhere.
            </p>
          </div>

          {/* Explore Section */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  Download App
                </a>
              </li>
              <li>
                <a
                  href="#why-quickfetch"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  Why QuickFetch
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Partner with Us Section */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Partner with Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#restaurants"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  Restaurants
                </a>
              </li>
              <li>
                <a
                  href="#couriers"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  Couriers
                </a>
              </li>
              <li>
                <a
                  href="#partner"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+2347898758939"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  +2347898758939
                </a>
              </li>
              <li>
                <a
                  href="mailto:Quickfetch@gmail.com"
                  className="text-gray-600 text-sm hover:text-orange-500 transition-colors"
                >
                  Quickfetch@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <p className="text-center text-gray-600 text-sm">
            © {new Date().getFullYear()} QuickFetch. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}