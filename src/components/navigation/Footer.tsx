

const Footer = () => {
  return (
    <footer className="bg-[#241f2b] text-gray-300 pt-12">
      <div className="max-w-[1500px] mx-auto px-6 grid md:grid-cols-4 gap-10 border-b border-gray-700 pb-10">
        {/* About us */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">About us</h3>
          <p className="text-sm leading-6 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Eaque
            ipsa quae ab illo inventore veritatis et quasi architecto.
          </p>
          <a
            href="#"
            className="text-yellow-500 text-sm hover:underline inline-block"
          >
            Read more
          </a>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Contact info
          </h3>
          <p className="mb-2">
            <span className="font-semibold text-yellow-500">Call:</span>{" "}
            +489756412322 , +56897456123
          </p>
          <p className="mb-2">
            <span className="font-semibold text-yellow-500">Write:</span>{" "}
            yourmail@domain.com
          </p>
          <p className="mb-2">
            <span className="font-semibold text-yellow-500">Find us:</span> USA
            27TH Brooklyn NY
          </p>
          <a
            href="#"
            className="text-yellow-500 text-sm hover:underline inline-block mt-2"
          >
            Get in Touch
          </a>
        </div>

        {/* Helpful links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Helpful links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-yellow-500">
                OUR LAST NEWS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                MENU
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                CONTACTS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                ABOUT
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-500">
                PRIVACY POLICY
              </a>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-500 mb-4">
            Subscribe
          </h3>
          <p className="text-sm mb-4">
            Want to be notified when we launch a new template or an update. Just
            sign up and we'll send you a notification by email.
          </p>
          <div className="flex border border-gray-600 rounded overflow-hidden">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 bg-transparent outline-none text-sm"
            />
            <button className="bg-yellow-600 text-white px-5">SEND</button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center py-6 text-sm text-gray-400">
        <p>© Forked 2025 . All rights reserved.</p>

        {/* Social icons */}
        <div className="flex space-x-3 mt-4 md:mt-0">
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center border border-gray-600 hover:bg-yellow-600 hover:text-white"
          >
            f
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center border border-gray-600 hover:bg-yellow-600 hover:text-white"
          >
            X
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center border border-gray-600 hover:bg-yellow-600 hover:text-white"
          >
            IG
          </a>
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center border border-gray-600 hover:bg-yellow-600 hover:text-white"
          >
            Tt
          </a>
        </div>

        {/* Back to top */}
        <a
          href="#"
          className="mt-4 md:mt-0 text-yellow-500 font-semibold hover:underline flex items-center gap-1"
        >
          BACK TO TOP <span>↑</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
