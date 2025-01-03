import React from 'react';
import { FacebookIcon, InstagramIcon, TwitterIcon, LinkedinIcon } from '@shadcn/icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" target="_blank" className="hover:text-gray-400">About Us</a>
              </li>
              <li>
                <a href="/services" target="_blank" className="hover:text-gray-400">Services</a>
              </li>
              <li>
                <a href="/blog" target="_blank" className="hover:text-gray-400">Blog</a>
              </li>
              <li>
                <a href="/careers" target="_blank" className="hover:text-gray-400">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">1234 Street Name</p>
            <p className="text-gray-400">City, Country 56789</p>
            <p className="text-gray-400">Email: contact@example.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t pt-6 text-center text-gray-400">
          <p>&copy; 2025 StyleHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
