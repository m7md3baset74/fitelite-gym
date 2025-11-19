import React from "react";

export default function About() {
  return (
    <div id="about" className="py-20 bg-gray-50 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              About FitLife
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, we are dedicated to transforming lives through
              fitness and wellness. Our mission is to provide a supportive and
              motivating environment where individuals of all fitness levels can
              achieve their health goals. With state-of-the-art facilities,
              expert trainers, and a wide range of classes, we strive to make
              fitness accessible, enjoyable, and effective for everyone.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              At FitLife, we believe that fitness is not just about physical
              strength but also about mental well-being. Our holistic approach
              combines cutting-edge workout programs with nutrition guidance and
              wellness support to help you lead a balanced and healthy
              lifestyle. Join us and become part of a vibrant community
              committed to personal growth and lifelong fitness.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-3xl font-bold text-red-600">10+</div>
                <p className="text-gray-600">Years of Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">15+</div>
                <p className="text-gray-600">Expert Trainers</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">50+</div>
                <p className="text-gray-600">Weekly Classes</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">5000+</div>
                <p className="text-gray-600">Happy Members</p>
              </div>
            </div>
            <a
              href="#contact"
              className="inline-flex bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition duration-300">
              Learn More
            </a>
          </div>
            <div className="order-1 lg:order-2">
                <div className="relative">
                    <img src="
                    https://images.unsplash.com/photo-1593476550610-87baa860004a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80
                    " alt="" className="w-full rounded-lg shadow-xl h-[500px] object-cover"/>
                    <div className="absolute -bottom-6 -left-6 bg-red-700 opacity-80 text-white p-6 rounded-lg shadow-lg hidden md:block">
                        <div className="text-2xl font-bold">Premium Facilities</div>
                        <p>15000 sq ft workout space</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
