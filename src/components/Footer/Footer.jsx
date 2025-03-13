import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r mb-0 from-gray-800 via-gray-700 to-gray-800 text-white py-10 border-t-4 border-gray-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Copyright */}
        <div className="flex flex-col justify-between">
          <div>
            <Logo width="120px" />
          </div>
          <p className="text-sm text-gray-400 mt-4">
            © {new Date().getFullYear()} DevUI. All rights reserved.
          </p>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 text-gray-300">
            Company
          </h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:underline" to="/">
                Features
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/">
                Pricing
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/">
                Affiliate Program
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/">
                Press Kit
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 text-gray-300">
            Support
          </h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:underline" to="/">
                Account
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/">
                Help
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/">
                Contact Us
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/">
                Customer Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4 text-gray-300">
            Legals
          </h3>
          <ul className="space-y-2">
            <li>
              <Link className="hover:underline" to="/">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/">
                Licensing
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
