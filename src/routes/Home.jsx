import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Handle redirection logic when clicking "Get Started"
  const handleGetStarted = () => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/mylist");
    } else {
      navigate("/signup");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300">
      {/* Hero Section */}
      <header className="flex flex-col md:flex-row items-center justify-between py-20 px-6 md:px-16 text-center md:text-left">
        {/* Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-extrabold text-purple-900">
            Welcome to <span className="text-pink-600">LiSTiFY!</span>
          </h1>
          <p className="mt-4 text-lg text-purple-800">Your partner for organizing shopping lists and more!</p>
          {/* 'Get Started' button */}
          <button
            onClick={handleGetStarted}
            className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg hover:bg-pink-500 hover:shadow-xl"
          >
            Get Started
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="/rb_758.png" // Replace with your actual image URL
            alt="Welcome Illustration"
            className="rounded-lg"
          />
        </div>
      </header>

      {/* Features Section */}
      <section id="Home" className="py-16 bg-white rounded-t-lg shadow-lg flex-grow">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-extrabold text-purple-800 mb-8">Why Choose LiSTiFY?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-pink-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Calculate Your Budget Instantly</h3>
              <p>Plan your spending effortlessly and stay stress-free!</p>
            </div>
            <div className="p-6 bg-purple-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Access Anywhere</h3>
              <p>Access your lists from any device, anytime.</p>
            </div>
            <div className="p-6 bg-blue-200 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-purple-900 mb-2">Stay Organized</h3>
              <p>Keep track of everything you need in one place.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
