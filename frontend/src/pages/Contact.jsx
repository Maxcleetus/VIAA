import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (formData.phone && !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(formData.phone)) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSubmitError(false);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Network response was not ok.');
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error(error);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="  flex flex-col lg:flex-row p-4 gap-8">
      <div className="lg:w-1/2 px-4 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are here to assist you, feel free to contact us. 24/7 support available.
          If you like us please share it with others. Also if you faced any issues,
          please let us know about it.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r mb-6">
          <h3 className="font-bold text-blue-800 mb-2">Is it urgent? Then reach us through:</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <i className="fas fa-phone-alt text-blue-600 text-lg mr-3"></i>
              <a href="tel:+9207520964" className="text-blue-700 hover:text-blue-900">+92 075 20964</a>
            </div>
            <div className="flex items-center">
              <i className="fas fa-envelope text-blue-600 text-lg mr-3"></i>
              <a href="mailto:viaatransportation2025@gmail.com" className="text-blue-700 hover:text-blue-900 break-all">
                viaatransportation2025@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-pink-600 hover:text-pink-800 text-2xl"><i className="fab fa-instagram"></i></a>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <i className="fas fa-headset text-blue-600 text-xl mr-4"></i>
            <span className="text-gray-700">24/7 Customer Support</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-share-alt text-blue-600 text-xl mr-4"></i>
            <span className="text-gray-700">Share your experience with friends</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-exclamation-circle text-blue-600 text-xl mr-4"></i>
            <span className="text-gray-700">Report any issues you encounter</span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
          <div className="bg-blue-600 p-6 text-white">
            <h1 className="text-2xl font-bold">Get in Touch</h1>
            <p className="opacity-80">Fill out the form below and we'll get back to you soon</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {['name', 'email', 'phone', 'message'].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">{field === 'message' ? 'Your Message' : field.replace(/([A-Z])/g, ' $1')}</label>
                {field !== 'message' ? (
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    name={field}
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder={field === 'phone' ? '+1 (123) 456-7890' : ''}
                  />
                ) : (
                  <textarea
                    name={field}
                    rows="4"
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                )}
                {errors[field] && <p className="mt-1 text-sm text-red-600">{errors[field]}</p>}
              </div>
            ))}

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 flex items-center justify-center">
              {submitting ? <i className="fas fa-spinner fa-spin mr-2"></i> : null}
              {submitting ? 'Sending...' : 'Send Message'}
            </button>

            {success && (
              <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <i className="fas fa-check-circle mr-2"></i>
                Thank you! Your message has been sent successfully.
              </div>
            )}

            {submitError && (
              <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                <i className="fas fa-exclamation-circle mr-2"></i>
                There was an error submitting your message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;