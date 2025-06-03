import { Link } from "react-router-dom";
import { Phone, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2D2D2D] text-white pt-16 pb-8 px-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">
              <span className="text-estate-primary">Shyam</span>
              <span className="text-estate-secondary">Estate</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Bringing you the finest real estate properties across India. Your
              trusted partner with over 3+ years of experience in finding the
              perfect piece of land.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:ml-16">
            <h3 className="font-playfair text-xl font-semibold mb-4 ">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  All Properties
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-estate-secondary" />
                <span className="text-gray-300">
                  Engineering Chauraha, Lucknow, Uttar Pradesh, India
                </span>
              </li>
              <li className="">
                <a className="flex items-center" href="tel:+919277101677">
                  <Phone className="w-5 h-5 mr-3 text-estate-secondary" />
                  <span className="text-gray-300">+91 9277101677</span>
                </a>
              </li>
              {/* <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-estate-secondary" />
                <span className="text-gray-300">info@shyamestate.com</span>
              </li> */}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>© {year} Shree Shyam Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
