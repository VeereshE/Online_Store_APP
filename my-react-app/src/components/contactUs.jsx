import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";

const ContactForm = () => {
  const { addToast } = useToasts();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.comments) {
      addToast("Please fill in all fields.", { appearance: "error", autoDismiss: true });
      return;
    }
    setFormData({ name: "", email: "", phone: "", comments: "" });
    addToast("Message sent successfully!", { appearance: "success", autoDismiss: true });
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-1/2 h-auto flex justify-center mb-6 lg:mb-0">
        <img
          src="/person.png"
          alt="person"
          className="max-w-full h-auto"
        />
      </div>
      <img
          src="/images3.jpg"
          alt="person1"
          className="max-w-full h-auto"
        />
    
      <div className="w-full lg:w-1/2 max-w-md mx-auto bg-white p-9 m-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="comments" className="block text-gray-700 font-bold mb-2">
              Comments
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Enter your comments"
              rows="4"
              className="block w-full px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
