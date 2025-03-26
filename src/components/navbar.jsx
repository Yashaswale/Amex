import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiHome } from "react-icons/hi";
import { BiTrendingDown, BiCalendarEvent } from "react-icons/bi";
import { AiOutlineEye, AiOutlineAppstore } from "react-icons/ai";
import { BsRobot } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiMenu, FiX } from "react-icons/fi";

const NavItem = ({ icon: Icon, text, active, to, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors border-b-4 ${
      active ? "border-teal-400" : "border-transparent"
    } ${active ? "bg-blue-50" : "hover:bg-gray-50"} text-gray-600`}
  >
    <Icon className="text-xl" />
    <span className="text-sm font-medium">{text}</span>
  </Link>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname;

  return (
    <nav className="bg-white border-b shadow-lg">
      <div className="flex items-center justify-between px-6 py-3 md:px-14">
        {/* Left Section */}
        <div className="flex items-center gap-4 md:gap-8">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-1">
            <img src="/logo.png" alt="AMEX" className="h-8" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            <NavItem icon={HiHome} text="Home" active={currentPath === "/home"} to="/home" />
            <NavItem icon={BiTrendingDown} text="Live Wall" active={currentPath === "/livewall"} to="/livewall" />
            <NavItem icon={BiCalendarEvent} text="Events" active={currentPath === "/events"} to="/events" />
            <NavItem icon={AiOutlineEye} text="Watchlist" active={currentPath === "/watchlist"} to="/watchlist" />
            <NavItem icon={AiOutlineAppstore} text="App Stock" active={currentPath === "/app-stock"} to="/app-stock" />
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-1.5 bg-cyan-400 text-white rounded-2xl hover:bg-cyan-500 transition-colors w-24">
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

        {/* Mobile Menu Toggle Button */}
        <button className="md:hidden text-gray-600 text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-2 bg-white border-t shadow-md px-6 py-4">
          <NavItem icon={HiHome} text="Home" active={currentPath === "/home"} to="/home" onClick={() => setMenuOpen(false)} />
          <NavItem icon={BiTrendingDown} text="Live Wall" active={currentPath === "/livewall"} to="/livewall" onClick={() => setMenuOpen(false)} />
          <NavItem icon={BiCalendarEvent} text="Events" active={currentPath === "/events"} to="/events" onClick={() => setMenuOpen(false)} />
          <NavItem icon={AiOutlineEye} text="Watchlist" active={currentPath === "/watchlist"} to="/watchlist" onClick={() => setMenuOpen(false)} />
          <NavItem icon={AiOutlineAppstore} text="App Stock" active={currentPath === "/app-stock"} to="/app-stock" onClick={() => setMenuOpen(false)} />

          {/* Buttons in mobile menu */}
          <button className="px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-colors">
            ADD
          </button>

          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
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
