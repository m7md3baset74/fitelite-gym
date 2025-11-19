import React, { useState } from "react";

export default function Features() {
    const [activeFeature, setActiveFeature] = useState(null);

    const features = [
  {
    id: 1,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Cutting-Edge Equipment",
    description:
      "Experience fitness with our state-of-the-art equipment featuring the latest technology, ergonomic designs, and premium quality for optimal performance and results.",
    image:
      "https://images.unsplash.com/photo-1570829460005-c840387bb1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Accessible 24/7",
    description:
      "Your fitness journey doesn't stop when the sun sets. Enjoy unlimited access to our facilities 24 hours a day, 7 days a week, fitting perfectly around your busy schedule.",
    image:
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 3,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2.356l-1.857-1.857M17 20H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v11M17 20l-3-3M7 10h10M7 14h3"
        />
      </svg>
    ),
    title: "Elite Personal Training ",
    description:
      "Work with certified and experienced trainers who provide personalized coaching, technique guidance, and motivation to help you reach your goals safely and effectively.",
    image:
      "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 4,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5v2a2 2 0 012 2v6a2 2 0 002 2h2v-2h2v2h2v-6a2 2 0 012-2h2v-2z"
        />
      </svg>
    ),
    title: "Luxury Amenities",
    description:
      "Enjoy premium amenities including spa-quality changing rooms, towel service, saunas, steam rooms, and recovery areas that elevate your fitness experience.",
    image:
      "https://images.unsplash.com/photo-1604480133435-25b86862d276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 5,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 00-2 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 00-2-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "Customized Programs",
    description:
      "Achieve your specific fitness goals with our tailored programs that adapt to your progress, preferences, and lifestyle for maximum efficiency and results.",
    image:
      "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 6,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Fitness App Integration",
    description:
      "Track your progress, book classes, and connect with trainers through our dedicated mobile app that puts your fitness journey in the palm of your hand.",
    image:
      "https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
];





  return (
    <div id="features" className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="h-0.5 w-8 bg-red-600 mr-3"></div>
            <span className="text-red-600 font-semibold text-sm tracking-wider uppercase">
              Premium Eperience
            </span>
            <div className="h-0.5 w-8 bg-red-600 ml-3"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose
            <span className="text-red-600">FITELITE</span>?
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            We combain luxury and fitness to provide an unparalleled gym
            experience.
          </p>
        </div>
        <div className="relative mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-1">
                {features.map((feature) => {
                    return <div
                  className={`group relative p-5 rounded-xl transition-all duration-300 cursor-pointer ${activeFeature === feature.id ? 
                    'bg-red-50 shadow-lg border-l-4 border-red-500' : 'bg-white hover:bg-red-50'}`}
                    onMouseEnter={() => setActiveFeature(feature.id)}
                    onClick={() => setActiveFeature(feature.id)}
                >
                  <div className="flex items-start">
                    <div
                      className={`p-3 rounded-lg transition-all duration-300 ${activeFeature === feature.id ? 
                        "text-red-600 bg-red-100" : "text-gray-500 bg-gray-100 group-hover:text-red-600 group-hover:bg-red-100"}`}
                    >
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3
                        className={`text-lg font-semibold transition-all duration-300`}
                      >
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
                })}
              </div>
            </div>
            <div className="lg:col-span-2 relative h-[500px] lg:h-auto">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                {features.map((feature) => {
                    return <div
                  className={`absolute inset-0 transition-all duration-700 transform ${activeFeature === feature.id ? 
                    "obacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
                  <img
                    src={feature.image}
                    alt="Feature Highlight"
                    className="w-full h-full object-cover rounded"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-8 z -20">
                    <h3 className="text-2xl text-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>
                </div>
                })}
                {!activeFeature && <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10">
                    <img
                      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                      alt="Feature Highlight"
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-8 z -20">
                      <h3 className="text-2xl font-bold text-white mb-2 ">
                        Discover Our Premium Features
                      </h3>
                      <p className="text-gray-200">
                        {" "}
                        Hover over any feature to lern more about what makes
                        FITELITE special.
                      </p>
                    </div>
                  </div>
                </div>}
              </div>
            </div>
          </div>
          {/* stats section */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-red-600 mb-1">50+</div>
              <p className="text-gray-600">Fitness Classes</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-red-600 mb-1">24/7</div>
              <p className="text-gray-600">Access</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-red-600 mb-1">15+</div>
              <p className="text-gray-600">Expert Trainers</p>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-red-600 mb-1">1000+</div>
              <p className="text-gray-600">Happy Members</p>
            </div>
          </div>

          {/* call to Action */}
          <div className="mt-20 text-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 
            rounded-full font-medium text-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Our Membership Options
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
