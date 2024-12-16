import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from './Button';

const Footer = () => {
  return (
    <footer className=' text-white border-t border-gray-700 '>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid md:grid-cols-4 gap-8 grid-cols-1'>
          {/* Logo and Brand Section */}
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold text-red-500'>FitPro Gym</h2>
            <p className='text-gray-400'>
              Transform your body, elevate your fitness, and unlock your potential.
            </p>
            <div className='flex space-x-4 text-2xl'>
              <p href='#' className='hover:text-red-500 transition-colors'>
                <FaFacebook />
              </p>
              <p href='#' className='hover:text-red-500 transition-colors'>
                <FaInstagram />
              </p>
              <p href='#' className='hover:text-red-500 transition-colors'>
                <FaTwitter />
              </p>
              <p href='#' className='hover:text-red-500 transition-colors'>
                <FaLinkedin />
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-xl font-semibold mb-4 border-b-2 border-red-500 pb-2'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              <li>
                <Link to='/' className='hover:text-red-500 transition-colors'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/classes' className='hover:text-red-500 transition-colors'>
                  Classes
                </Link>
              </li>
              <li>
                <Link to='/shop' className='hover:text-red-500 transition-colors'>
                  Online Shop
                </Link>
              </li>
              <li>
                <Link to='/membership' className='hover:text-red-500 transition-colors'>
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className='text-xl font-semibold mb-4 border-b-2 border-red-500 pb-2'>
              Our Services
            </h3>
            <ul className='space-y-2'>
              <li>
                <p to='/personal-training' className=' transition-colors'>
                  Personal Training
                </p>
              </li>
              <li>
                <p to='/group-fitness' className=' transition-colors'>
                  Group Fitness
                </p>
              </li>
              <li>
                <p to='/nutrition-coaching' className=' transition-colors'>
                  Nutrition Coaching
                </p>
              </li>
              <li>
                <p to='/wellness-programs' className=' transition-colors'>
                  Wellness Programs
                </p>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className='text-xl font-semibold mb-4 border-b-2 border-red-500 pb-2'>
              Contact Us
            </h3>
            <div className='space-y-2'>
              <p>123 Fitness Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: support@fitprogym.com</p>
              <div className='mt-4'>
                <Button button="Get in Touch" 
                  to='/contact' 
               />
                 
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='mt-8 pt-6 border-t border-gray-700 text-center'>
          <p className='text-gray-400'>
            © {new Date().getFullYear()} FitPro Gym. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;