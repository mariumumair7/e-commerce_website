import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <div className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-lg">
        {/* Header Section */}
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-semibold text-gray-800">About Us</h1>
          <p className="text-lg text-gray-600 mt-2">
            Learn more about our company and what we stand for.
          </p>
        </header>

        {/* Content Section */}
        <section className="space-y-6">
          <div className="flex flex-col md:flex-row items-center">
            <div >
              <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mt-4">
                Our mission is to provide the best service and products to our customers. We strive to innovate and deliver high-quality experiences that exceed expectations.
              </p>
            </div>
          </div>

          {/* More Information Section */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">What We Do</h2>
            <p className="text-gray-600 mt-4">
              We specialize in creating amazing web experiences and delivering top-notch products. From building state-of-the-art websites to crafting tailored digital solutions, we do it all.
            </p>
          </div>

          {/* Values Section */}
          <div>
            <h2 className="text-3xl font-semibold text-gray-800">Our Values</h2>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li className="text-gray-600">Customer Satisfaction</li>
              <li className="text-gray-600">Innovation</li>
              <li className="text-gray-600">Integrity</li>
              <li className="text-gray-600">Sustainability</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
