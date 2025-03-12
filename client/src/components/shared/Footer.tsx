"use client";

import Link from "next/link";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 lg:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About BasaFinder</h3>
            <p className="text-sm text-gray-400">
              BasaFinder helps you find the perfect home with ease. Explore rental listings, connect with landlords, and get the best housing deals.
            </p>
            <div className="mt-4 flex space-x-4 text-gray-400">
              <a href="#" target="_blank" className="hover:text-blue-500 duration-300"> <FaFacebookF className="w-6 h-6" /></a>
              <a href="#" target="_blank" className="hover:text-green-500 duration-300"> <FaWhatsapp className="w-6 h-6" /></a>
              <a href="#" target="_blank" className="hover:text-blue-700 duration-300"> <FaLinkedinIn className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/listings" className="hover:text-white">Find a Home</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
              <li><Link href="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQs</Link></li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-2">Dhaka, Bangladesh</li>
              <li className="mb-2">Phone: (+880) 12345-67890</li>
              <li>Email: <a href="mailto:info@basafinder.com" className="hover:text-white">info@basafinder.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BasaFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
