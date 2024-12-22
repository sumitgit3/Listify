import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Get current location

  const { user, logout } = useContext(AuthContext);

  // Check user state
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate("/");
  };

  // Function to determine if the link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-purple-700">LiSTiFY</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-purple-700 text-3xl">
            {isMobileMenuOpen ? "X" : "☰"}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`text-purple-700 font-medium hover:text-pink-500 ${
              isActive("/") ? "border-b-2 border-purple-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/mylist"
            className={`text-purple-700 font-medium hover:text-pink-500 ${
              isActive("/mylist") ? "border-b-2 border-purple-500" : ""
            }`}
          >
            MyList
          </Link>
          <Link
            to="/about"
            className={`text-purple-700 font-medium hover:text-pink-500 ${
              isActive("/about") ? "border-b-2 border-purple-500" : ""
            }`}
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
               className="bg-purple-800 text-white px-3 py-1 text-sm rounded-md hover:bg-purple-900"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className={`text-purple-700 font-medium hover:text-pink-500 ${
                isActive("/login") ? "border-b-2 border-purple-500" : ""
              }`}
            >
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 space-y-4">
          <Link
            to="/"
            className={`block text-purple-700 font-medium hover:text-pink-500 ${
              isActive("/") ? "border-b-2 border-purple-500" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/mylist"
            className={`block text-purple-700 font-medium hover:text-pink-500 ${
              isActive("/mylist") ? "border-b-2 border-purple-500" : ""
            }`}
          >
            MyList
          </Link>
          <Link
            to="/about"
            className={`block text-purple-700 font-medium hover:text-pink-500 ${
              isActive("/about") ? "border-b-2 border-purple-500" : ""
            }`}
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
               className="bg-purple-800 text-white px-3 py-1 text-sm rounded-md hover:bg-purple-900"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className={`block text-purple-700 font-medium hover:text-pink-500 ${
                isActive("/login") ? "border-b-2 border-purple-500" : ""
              }`}
            >
              Login
            </Link>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;