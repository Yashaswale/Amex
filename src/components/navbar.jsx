import React, { useState } from 'react';
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
    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all border-b-4 ${
      active ? 'border-teal-400 bg-blue-50' : 'border-transparent hover:bg-gray-50'
    } text-gray-600`}
  >
    <Icon className="text-xl" />
    <span className="text-sm font-medium">{text}</span>
  </Link>
);

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 sm:px-14 py-3 bg-white border-b shadow-md">
      {/* Left Section */}
      <div className="flex items-center gap-6 sm:gap-8">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-1">
          <img src="/logo.png" alt="AMEX" className="h-8" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex items-center gap-2">
          <NavItem icon={HiHome} text="Home" active={currentPath === '/home'} to="/home" />
          <NavItem icon={BiTrendingDown} text="Live Wall" active={currentPath === '/livewall'} to="/livewall" />
          <NavItem icon={BiCalendarEvent} text="Events" active={currentPath === '/events'} to="/events" />
          <NavItem icon={AiOutlineEye} text="Watchlist" active={currentPath === '/watchlist'} to="/watchlist" />
          <NavItem icon={AiOutlineAppstore} text="App Stock" active={currentPath === '/app-stock'} to="/app-stock" />
          <NavItem icon={AiOutlineAppstore} text="Alert" active={currentPath === '/alert'} to="/alert" />
          <NavItem icon={AiOutlineAppstore} text="Items" active={currentPath === '/items'} to="/items" />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* ADD Button */}
        <button className="px-4 py-1.5 bg-cyan-400 text-white rounded-2xl hover:bg-cyan-500 transition w-24 hidden sm:block">
          ADD
        </button>

        {/* AI Model and Training */}
        <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
          <BsRobot className="text-lg text-gray-600" />
          <span className="text-sm font-medium text-gray-700">AI Model and Training</span>
        </button>

        {/* Profile */}
        <button className="hidden sm:flex w-8 h-8 rounded-full bg-gray-100 items-center justify-center">
          <CgProfile className="text-xl text-gray-600" />
        </button>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="2xl:hidden text-2xl text-gray-600">
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg flex flex-col items-center gap-3 py-4 sm:hidden">
          <NavItem icon={HiHome} text="Home" active={currentPath === '/home'} to="/home" closeMenu={() => setMenuOpen(false)} />
          <NavItem icon={BiTrendingDown} text="Live Wall" active={currentPath === '/livewall'} to="/livewall" closeMenu={() => setMenuOpen(false)} />
          <NavItem icon={BiCalendarEvent} text="Events" active={currentPath === '/events'} to="/events" closeMenu={() => setMenuOpen(false)} />
          <NavItem icon={AiOutlineEye} text="Watchlist" active={currentPath === '/watchlist'} to="/watchlist" closeMenu={() => setMenuOpen(false)} />
          <NavItem icon={AiOutlineAppstore} text="App Stock" active={currentPath === '/app-stock'} to="/app-stock" closeMenu={() => setMenuOpen(false)} />
          <NavItem icon={AiOutlineAppstore} text="Alert" active={currentPath === '/alert'} to="/alert" closeMenu={() => setMenuOpen(false)} />
          <NavItem icon={AiOutlineAppstore} text="Items" active={currentPath === '/items'} to="/items" closeMenu={() => setMenuOpen(false)} />

          <button className="px-4 py-1.5 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition w-24">
            ADD
          </button>

          <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg hover:bg-gray-50">
            <BsRobot className="text-lg text-gray-600" />
            <span className="text-sm font-medium text-gray-700">AI Model and Training</span>
          </button>

          <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
            <CgProfile className="text-xl text-gray-600" />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
