"use client";

import { useState } from "react";
import LazySpline from "./LazySpline"; // Import the Spline component

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telegram: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    telegram: "",
  });

  const [messageSent, setMessageSent] = useState(false); // Track whether message was sent

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Simple form validation
    if (!formData.name) newErrors.name = "Oops! Fill in the field";
    if (!formData.email) newErrors.email = "Oops! Fill in the field";
    if (!formData.telegram) newErrors.telegram = "Oops! Fill in the field";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle form submission if no errors
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative overflow-hidden">
      {/* Spline Background Animation */}
      <div className="absolute inset-0 z-0">
        <LazySpline
          scene="https://prod.spline.design/t9w-C0eETE0gqoNi/scene.splinecode" 
        />
      </div>

      {/* Form Section */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center bg-gradient-to-t from-black via-transparent to-black py-10 px-4 rounded-lg">
        <h1 className="text-5xl font-bold text-white mb-10 mt-20 font-bytesized">
          GET READY TO ROCK AND ROLL
        </h1>

        <form className="flex flex-col items-center space-y-8" onSubmit={handleSubmit}>
          <div className="flex space-x-8">
            <div className="circle">
              <input
                type="text"
                name="name"
                placeholder="Name *"
                value={formData.name}
                onChange={handleChange}
                className="text-white"
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="circle">
              <input
                type="email"
                name="email"
                placeholder="E-mail *"
                value={formData.email}
                onChange={handleChange}
                className="text-white"
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="circle">
              <input
                type="text"
                name="telegram"
                placeholder="Telegram/WhatsApp"
                value={formData.telegram}
                onChange={handleChange}
                className="text-white"
              />
              {errors.telegram && <p className="error-text">{errors.telegram}</p>}
            </div>
          </div>
          <div className="big-circle mb-10 ">
            <button type="submit" className="contact-button">
              Talk to Founders
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
