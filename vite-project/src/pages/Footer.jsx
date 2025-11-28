const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-10">

       
        <div className="col-span-1">
          <h2 className="text-2xl font-bold text-orange-500">
            e<span className="text-green-600">-commerce</span>
          </h2>

          <p className="text-sm mt-3 text-gray-600">
            69 Selous Ave, Harare, Zimbabwe
          </p>
          <p className="text-sm text-gray-600">Support (+263) 03 0000052</p>

          <p className="mt-3 text-sm text-gray-600">info@demo.com</p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Help Center</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-black cursor-pointer">FAQ</li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              About E-Commerce
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Support Tickets
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

     
        <div>
          <h3 className="font-bold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Become A Supplier
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Track Order
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Services & Membership
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Help & Community
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Buy On E-Commerce</h3>
          <ul className="space-y-2">
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Terms & Conditions
            </li>
            <li className="text-gray-600 hover:text-black cursor-pointer">
              Privacy & Rules
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-bold text-lg mb-3">Download App</h3>
          <div className="flex gap-3">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              className="h-10 cursor-pointer"
              alt="Google Play"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              className="h-10 cursor-pointer"
              alt="App Store"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
