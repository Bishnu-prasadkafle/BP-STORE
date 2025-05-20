import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Instagram,
  Music2,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-[#1a1a1a] dark:to-[#0f0f0f] px-10 py-10 text-gray-900 dark:text-white'>
      <div className='max-w-7xl mx-auto'>
        <h2 className='text-4xl font-bold mb-10 text-center'>
          📬 Get in
          <span className='text-red-600'> Touch</span>
        </h2>
        <p className='text-center text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10'>
          Have questions or need assistance? Whether you want to{" "}
          <span className='font-semibold text-red-600'>shop with us</span>, ask
          a question, or just say hello — we’d love to hear from you!
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Left Side: Contact Info */}
          <div>
            <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>

            <div className='space-y-4'>
              <p className='flex items-center gap-2'>
                <Phone className='text-red-600' /> +977 9805868705
              </p>
              <p className='flex items-center gap-2'>
                <Mail className='text-red-600' /> bpShopaccessories@gmail.com
              </p>
              <p className='flex items-center gap-2'>
                <MapPin className='text-red-600' /> Kawasoti, Nawalpur, Nepal
              </p>
            </div>

            <div className='mt-8'>
              <h4 className='text-lg font-semibold mb-2'>Follow us at:</h4>
              <div className='flex gap-6 items-center text-red-600'>
                <a href='#' className='flex items-center gap-1 hover:underline'>
                  <Facebook size={18} /> Facebook
                </a>
                <a href='#' className='flex items-center gap-1 hover:underline'>
                  <Instagram size={18} /> Instagram
                </a>
              </div>
            </div>

            <div className='mt-6'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226184.0720370085!2d83.96990408097514!3d27.651569243689067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39945038afa4321d%3A0xaee42f23a1636db6!2sKawasoti!5e0!3m2!1sen!2snp!4v1747762005970!5m2!1sen!2snp'
                width='100%'
                height='300'
                style={{ border: 0 }}
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Google Maps Location'></iframe>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className='bg-white dark:bg-[#121212] rounded-xl shadow-lg p-6 space-y-4'>
            <div>
              <label className='block mb-1 font-medium'>Name</label>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 dark:bg-[#1e1e1e] dark:border-gray-600'
                placeholder='Your name'
              />
            </div>
            <div>
              <label className='block mb-1 font-medium'>Email</label>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 dark:bg-[#1e1e1e] dark:border-gray-600'
                placeholder='you@example.com'
              />
            </div>
            <div>
              <label className='block mb-1 font-medium'>Message</label>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                rows='4'
                className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-600 dark:bg-[#1e1e1e] dark:border-gray-600'
                placeholder='Your message...'></textarea>
            </div>
            <button
              type='submit'
              className='inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition duration-300'>
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position='top-right' autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Contact;
