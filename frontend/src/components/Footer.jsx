import React from 'react';
import logo from '../assets/logo1.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className=" text-gray-700 py-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Want to travel smart with us?</h2>
        <p className="text-sm md:text-base text-gray-700/50 mb-6">
          Viaa makes local transportation easy, smooth & accessible. Connect with your local transit services in one click.
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-5 gap-8 text-gray-700/70 px-4 md:px-0">
        {/* Brand + Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src={logo}
            alt="Viaa Logo"
            className="w-[175px]"
          />
          <p className='text-gray-700'>Short & Smooth Transport.</p>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-2 ">Services</h3>
          <ul>
            <li>Auto / Rickshaw</li>
            <li>Bus Service</li>
            <li>Cab Services</li>
            <li>Train Details</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-700">About</h3>
          <ul>
            <li>Our Mission</li>
            <li>How It Works</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-700">Support</h3>
          <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-semibold mb-2 text-gray-700">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <FaFacebook className="hover:text-white transition cursor-pointer" />
            <FaTwitter className="hover:text-white transition cursor-pointer" />
            <FaInstagram className="hover:text-white transition cursor-pointer" />
            <FaLinkedin className="hover:text-white transition cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Viaa. All rights reserved. | Privacy Policy
      </div>
    </div>
  );
};

export default Footer