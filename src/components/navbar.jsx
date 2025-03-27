import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiHome, HiMenu, HiX } from 'react-icons/hi';
import { BiTrendingDown, BiCalendarEvent } from 'react-icons/bi';
import { AiOutlineEye, AiOutlineAppstore } from 'react-icons/ai';
import { BsRobot } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';

const NavItem = ({ icon: Icon, text, active, to, closeMenu }) => (
  <Link
    to={to}
    onClick={closeMenu}
    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border-b-4 w-full text-center justify-center lg:w-auto lg:text-left ${
      active ? 'border-teal-400 bg-blue-50' : 'border-transparent hover:bg-gray-50'
    } text-gray-600`}
  >
    <Icon className="text-xl" />
    <span className="text-sm font-medium hidden lg:inline">{text}</span>
  </Link>
);

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1110);

  // Handle responsive design based on screen width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1110);
      if (window.innerWidth > 1110) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const navItems = [
    { icon: HiHome, text: "Home", path: "/home" },
    { icon: BiTrendingDown, text: "Live Wall", path: "/livewall" },
    { icon: BiCalendarEvent, text: "Events", path: "/events" },
    { icon: AiOutlineEye, text: "Watchlist", path: "/watchlist" },
    { icon: AiOutlineAppstore, text: "App Stock", path: "/app-stock" },
    { icon: AiOutlineAppstore, text: "Alert", path: "/alert" },
    { icon: AiOutlineAppstore, text: "Items", path: "/items" }
  ];

  const renderNavItems = (mobile = false) => (
    navItems.map((item, index) => (
      <NavItem 
        key={index} 
        icon={item.icon} 
        text={item.text} 
        active={currentPath === item.path} 
        to={item.path} 
        closeMenu={() => setMenuOpen(false)}
      />
    ))
  );

  return (
    <nav className="relative top-0 left-0 w-full z-50 flex items-center justify-between px-4 lg:px-14 py-3 bg-white border-b shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-4 lg:gap-8">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-1">
          <img src="/logo.png" alt="AMEX" className="h-6 lg:h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-2">
          {renderNavItems()}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 lg:gap-4">
        {/* ADD Button */}
        <button className="px-3 lg:px-4 py-1 lg:py-1.5 bg-cyan-400 text-white rounded-2xl hover:bg-cyan-500 transition w-16 lg:w-24 text-xs lg:text-sm">
          ADD
        </button>

        {/* AI Model and Training */}
        <button className="hidden lg:flex items-center gap-2 px-2 lg:px-3 py-1 lg:py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
          <BsRobot className="text-base lg:text-lg text-gray-600" />
          <span className="text-xs lg:text-sm font-medium text-gray-700">AI Model</span>
        </button>

        {/* Profile */}
        <button className="hidden lg:flex w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-gray-100 items-center justify-center">
          <CgProfile className="text-base lg:text-xl text-gray-600" />
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="lg:hidden text-2xl text-gray-600"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && isMobile && (
        <div 
          className="relative top-16 left-0 w-full h-[calc(100vh-4rem)] bg-white shadow-lg flex flex-col items-center gap-4 py-6 overflow-y-auto"
          onClick={() => setMenuOpen(false)}
        >
          <div className="w-full px-4 flex flex-col items-center gap-4">
            {renderNavItems(true)}

            <button className="px-4 py-1.5 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition w-full max-w-xs mt-4">
              ADD
            </button>

            <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 w-full max-w-xs justify-center">
              <BsRobot className="text-lg text-gray-600" />
              <span className="text-sm font-medium text-gray-700">AI Model and Training</span>
            </button>

            <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mt-4">
              <CgProfile className="text-2xl text-gray-600" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;