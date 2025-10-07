import React from 'react'
import { FaSquareXTwitter,FaSquareInstagram, FaLinkedin  } from "react-icons/fa6";
import Icon from './Icon.jsx';
import { IoCallOutline,IoLockClosedOutline,IoMailOutline, IoLocationOutline,  IoLogoDiscord } from "react-icons/io5";
import { Link } from 'react-router-dom';
import GoodWill from './GoodWill.jsx';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
  {/* <!-- Main Footer Content --> */}
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* <!-- Company Info --> */}
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <h3 className="text-2xl font-bold text-orange-400">LOGO</h3>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          India's premier destination for authentic sneakers. From limited edition drops to everyday essentials, we bring you the best in sneaker culture.
        </p>
        
        {/* <!-- Social Media Links --> */}
        <div className="flex space-x-4 pt-2">
            <Icon><FaSquareXTwitter/></Icon>
            <Icon><FaSquareInstagram/></Icon>
            <Icon><FaLinkedin/></Icon>
            <Icon><IoLogoDiscord/></Icon>
          
        </div>
      </div>

      {/* <!-- Quick Links --> */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
        <ul className="space-y-2">
          <li><Link to={"/"}  className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Home</Link></li>
          <li><Link to={"/product"}  className="text-gray-400 hover:text-orange-400 transition-colors text-sm">All Products</Link></li>
          <li><Link to={"/aboutus"}  className="text-gray-400 hover:text-orange-400 transition-colors text-sm">About Us</Link></li>
          <li><Link to={"/help"} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Help & FAQ</Link></li>
          <li><Link to={"/profile"} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">My Account</Link></li>
          <li><Link to={"/order-confirmation"} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Order Status</Link></li>
        </ul>
      </div>

      {/* <!-- Customer Service --> */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Customer Service</h4>
        <ul className="space-y-2">
          <li><Link to={"help"} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Contact Us</Link></li>
          <li><Link to={"help"} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Shipping Info</Link></li>
          <li><Link to={"help"} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Returns & Exchanges</Link></li>
          <li><Link to={"help"} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Size Guide</Link></li>
          <li><Link to={"help"} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Care Instructions</Link></li>
          <li><Link to={"T&C"} className="text-gray-400 hover:text-orange-400 transition-colors text-sm">Privacy Policy</Link></li>
        </ul>
      </div>

      {/* <!-- Newsletter & Contact --> */}
      <div className="space-y-4">
        <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
        <p className="text-gray-400 text-sm">Get the latest drops and exclusive deals delivered to your inbox.</p>
        
        {/* <!-- Newsletter Signup --> */}
        <div className="space-y-3">
          <div className="flex">
            <input type="email" placeholder="Enter your email" 
                   className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-white text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"/>
            <button className="px-4 py-2 bg-orange-600 text-white rounded-r-lg hover:bg-orange-700 transition-colors text-sm font-medium">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-gray-500">By subscribing, you agree to receive marketing emails from ABHI.</p>
        </div>

        {/* <!-- Contact Info --> */}
        <div className="pt-4 space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <div className="text-orange-400"><IoCallOutline/></div>
            <span className="text-gray-400">+91 1800-SNEAKER</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
                        <div className="text-orange-400"><IoMailOutline/></div>

            <span className="text-gray-400">support@abhi.com</span>
          </div>
          <div className="flex items-start space-x-2 text-sm">
                       <div className="text-orange-400"><IoLocationOutline/></div>

            <span className="text-gray-400">Mumbai, Maharashtra<br/>India</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Trust Badges & Features --> */}
  <div className="border-t border-gray-800">
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <GoodWill/>
      </div>
    </div>
  </div>

  {/* <!-- Payment Methods --> */}
  <div className="border-t border-gray-800">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

        {/* <!-- Security Badge --> */}
        <div className="flex items-center space-x-2 text-sm text-gray-400">
        <div className="text-green-500"><IoLockClosedOutline/></div>
          <span>Secured by SSL</span>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- Bottom Footer --> */}
  <div className="border-t border-gray-800 bg-black">
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* <!-- Copyright --> */}
        <div className="text-center md:text-left">
          <p className="text-gray-500 text-sm">&copy; 2025 ABHI Sneakers. All Rights Reserved.</p>
          <p className="text-gray-600 text-xs mt-1">Made with ❤️ for sneakerheads in India</p>
        </div>

        {/* <!-- Legal Links --> */}
        <div className="flex items-center space-x-6 text-sm">
          <Link to={"/T&C"} className="text-gray-500 hover:text-orange-400 transition-colors">Privacy Policy</Link>
          <Link to={"/T&C"} className="text-gray-500 hover:text-orange-400 transition-colors">Terms of Service</Link>
          <Link to={"/help"} className="text-gray-500 hover:text-orange-400 transition-colors">Sitemap</Link>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer