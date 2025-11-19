import React, { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "FitLife completely transformed my fitness journey. The trainers are knowledgeable and the community is so supportive!",
      author: "Jennifer K.",
      role: "Member since 2020",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wWwlxfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
    },
    {
      quote:
        "I've tried many gyms, but FitLife stands out with its premium equipment and excellent class variety. Worth every penny!",
      author: "Michael T.",
      role: "Member since 2021",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wWwlxfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 4,
    },
    {
      quote:
        "The personal training at FitLife helped me achieve results I never thought possible. I'm stronger and healthier than ever.",
      author: "Sarah M.",
      role: "Member since 2019",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wWwlxfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 5,
    },
    {
      quote:
        "As a busy professional, the 24/7 access and variety of quick, effective classes make Fitlife perfect for my schedule.",
      author: "Daivid L.",
      role: "Member since 2022",
      image:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wWwlxfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      rating: 4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const renderStart = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
      </svg>
    ));
  };

  return (
    <div id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Members Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            {" "}
            Don't just take out word for it - hear from our satisfied members.
          </p>
        </div>
        <div className="relative">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="w-full md:w-1/3 p-8">
              <div className="aspect-square rounded-full overflow-hidden w-32 h-32 mx-auto mb-6 border-4 border-red-100">
                <img
                  src={testimonials[activeIndex].image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  {renderStart(testimonials[activeIndex].rating)}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-1">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-gray-500">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </div>
            <div className="w-full md:w-2/3 bg-gradient-to-r from-red-50 to-gray-50 p-8 md:p-12">
              <svg
                class="w-12 h-12 text-red-200 mb-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3H5a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2H6Zm9 0a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1a5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3Z" />
              </svg>

              <p className="text-xl md:text-2xl text-gray-700 italic mb-8 ">
                "{testimonials[activeIndex].quote}"
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-4 ">
            <button
              className="p-2 rounded-full bg-white shadow hover:shadow-md transition duration-300"
              onClick={prevTestimonial}
            >
              <svg
                class="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div className="flex space-x-2 items-center">
              <button
                className={`w-3 h-3 rounded-full transition duration-300`}
              ></button>
            </div>
            <button
              className="p-2 rounded-full bg-white shadow hover:shadow-md transition duration-300"
              onClick={nextTestimonial}
            >
              {" "}
              <svg
                class="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
