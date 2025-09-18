import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    setSubmitted(true);
  };

  return (
    <section
      className="md:py-16 py-10 bg-gradient-to-br from-blue-100 via-white to-blue-100  scroll-mt-10"
      id="contact"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-slate-800 font-mono">
          Contact Me
        </h2>
        <hr className="w-28 mx-auto border-t-2 border-black my-3" />

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-12 gap-8 items-center md:mt-12 mt-5 ">
          {/* Left Side - Info / Illustration */}
          <div className="flex flex-col justify-center">
            <h3 className="md:text-3xl text-lg font-semibold text-indigo-600">
              Get in Touch
            </h3>
            <p className="text-slate-700 md:text-lg text-base my-3">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out
              via the form or contact details below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-indigo-600 text-xl" />
                <span className="text-slate-700 md:text-lg text-base">
                  amitkilambu8@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-indigo-600 text-xl" />
                <span className="text-slate-700 md:text-lg text-base">
                  +977 9860678384
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-indigo-600 text-xl" />
                <span className="text-slate-700 md:text-lg text-base">
                  Bhaktapur, Nepal
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200 p-8 hover:shadow-lg transition duration-300">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Any Message..."
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 border border-slate-300 rounded-md shadow-sm focus:ring-indigo-600 focus:border-indigo-600"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-green-600">
                  Thank you for reaching out!
                </h3>
                <p className="text-slate-700 mt-2">
                  I'll get back to you as soon as possible.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
