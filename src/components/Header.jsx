import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const {user,logout} = useContext(AuthContext);
  

  // check user state 
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [user]); // Dependency ensures this effect runs on user change

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false); // Update logged-in state
    navigate("/"); // Redirect to homepage
  };

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
            className="text-purple-700 font-medium hover:text-pink-500"
          >
            Home
          </Link>
          <Link
            to="/mylist"
            className="text-purple-700 font-medium hover:text-pink-500"
          >
            MyList
          </Link>
          <Link
            to="/about"
            className="text-purple-700 font-medium hover:text-pink-500"
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="text-red-700 font-medium hover:text-pink-500"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-purple-700 font-medium hover:text-pink-500"
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
            className="block text-purple-700 font-medium hover:text-pink-500"
          >
            Home
          </Link>
          <Link
            to="/mylist"
            className="block text-purple-700 font-medium hover:text-pink-500"
          >
            MyList
          </Link>
          <Link
            to="/about"
            className="block text-purple-700 font-medium hover:text-pink-500"
          >
            About
          </Link>
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="block text-red-700 font-medium hover:text-pink-500"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="block text-purple-700 font-medium hover:text-pink-500"
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
