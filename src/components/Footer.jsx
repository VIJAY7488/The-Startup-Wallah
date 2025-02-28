import { FaLinkedinIn } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-blue-700 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">The Startup Wallah</h3>
            <p className="text-sm opacity-80 text-justify">
              The Startup Wallah is your ultimate platform for connecting entrepreneurs with investors, mentors, and essential resources to fuel startup success. Whether you're launching your first venture or scaling your business, we provide the network and support to turn ideas into thriving enterprises.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about-us" className="text-sm opacity-80 hover:opacity-100">
                  About Us
                </a>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-80 hover:opacity-100">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm opacity-80 hover:opacity-100">
                  Investment Process
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm opacity-80 hover:opacity-100">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-sm opacity-80 hover:opacity-100">
                  E-books
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm opacity-80 hover:opacity-100">
                  Newsletters
                </Link>
              </li>
              <li>
                <a href="#faq" className="text-sm opacity-80 hover:opacity-100">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Rules & Policies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Rules & Policies</h4>
            <ul className="space-y-2">
              <li>
                <a href="./public/Privacy_Policy.pdf" className="text-sm opacity-80 hover:opacity-100">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Cancellation Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm opacity-80 hover:opacity-100">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <button
              className="w-full flex items-center justify-center gap-2  text-black  bg-gray-400 rounded-md hover:bg-gray-500 transition-colors  py-2"
            >
              <CiMail className="h-5 w-5 text-black font-semibold" />
              ashutosh@thestartupwallah.com
            </button>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://www.linkedin.com/company/the-startup-wallah/about/"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                <FaLinkedinIn className="h-5 w-5 hover:text-blue-600" />
              </a>
              <a
                href="#"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                <LuInstagram className="h-5 w-5 hover:text-pink-500" />
              </a>
              <a
                href="https://wa.me/message/DB45B2CA3YBTE1"
                className="text-white hover:text-accent-foreground transition-colors"
              >
                <FaWhatsapp className="h-5 w-5 hover:text-green-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center text-sm text-white/60">
            <p>©2025 TheStartupWallah. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
