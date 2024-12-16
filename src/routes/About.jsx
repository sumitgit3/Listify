import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-300 via-pink-200 to-blue-300 p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        {/* Page Title */}
        <h1 className="text-3xl font-extrabold text-purple-800 mb-6 text-center">
          About <span className="text-pink-500">LiSTiFY</span>
        </h1>

        {/* Section Content */}
        <div className="text-purple-700 leading-relaxed space-y-4">
          <p>
            <strong>LiSTiFY</strong> is your ultimate shopping list manager, designed to make your 
            daily life easier. Whether you are planning for a grocery trip, managing a budget, 
            or keeping track of your weekly shopping needs, <strong>LiSTiFY</strong> is here to help.
          </p>

          <p>
            Our app allows you to easily organize your shopping lists, add and categorize items, 
            and even mark items as purchased with a single click. Stay on top of your budget and 
            never forget an item again!
          </p>

          <p>
            At <strong>LiSTiFY</strong>, we believe in making everyday tasks efficient and enjoyable. 
            With features like real-time collaboration, budget tracking, and an intuitive interface, 
            shopping has never been this easy.
          </p>

          {/* Mission Statement */}
          <div className="p-4 bg-purple-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-purple-900 mb-2">Our Mission</h2>
            <p>
              To simplify shopping and empower users to stay organized, save time, 
              and manage their budgets effectively.
            </p>
          </div>

          {/* How It Works */}
          <div className="p-4 bg-pink-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-pink-900 mb-2">How It Works</h2>
            <ol className="list-decimal list-inside">
              <li>Add items to your shopping list.</li>
              <li>Organize them by category for easier access.</li>
              <li>Mark items as purchased as you shop.</li>
              <li>Enjoy a seamless shopping experience!</li>
            </ol>
          </div>

          {/* Contact Info */}
          <div className="p-4 bg-blue-100 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-blue-900 mb-2">Get In Touch</h2>
            <p>
              Have questions, feedback, or suggestions? We'd love to hear from you! 
              Contact us at <a href="mailto:support@listify.com" className="text-purple-600 underline">support@listify.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
