"use client";
import { useState } from "react";



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
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {/* Title Above the Circle */}
      <h1 className="text-5xl font-bold text-white mb-10 bt-10 font-bytesized">
        GET READY TO ROCK AND ROLL
      </h1>

      <form
        className="flex flex-col items-center space-y-8"
        onSubmit={handleSubmit}
      >
        <div className="flex space-x-8">
          <div className="circle">
            <input
              type="text"
              name="name"
              placeholder="Name *"
              value={formData.name}
              onChange={handleChange}
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
            />
            {errors.telegram && <p className="error-text">{errors.telegram}</p>}
          </div>
        </div>
        <div className="big-circle">
          <button type="submit" className="contact-button">
            Talk to Founders
          </button>
        </div>
      </form>

    
    </div>
  );
}
