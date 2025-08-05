import React, { useState } from 'react';

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwkgyyqk"; // Replace with your actual Formspree endpoint if different

const BookDemo: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    role: '',
    about: '',
    company: '',
    companyRole: '',
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name) newErrors.name = 'Name is required';
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.contact) newErrors.contact = 'Contact number is required';
    if (!form.role) newErrors.role = 'Please select a role';
    if (form.role === 'company' && !form.company) newErrors.company = 'Company name required';
    if (form.role === 'company' && !form.companyRole) newErrors.companyRole = 'Role in company required';
    if (!form.about) newErrors.about = 'Please provide details';
    return newErrors;
  };

  const handleValidationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const validation = validate();
    if (Object.keys(validation).length > 0) {
      e.preventDefault();
      setErrors(validation);
      return false;
    }
    setShowThankYou(true);
    // Let the browser submit the form to Formspree
    return true;
  };

  return (
    <div className="min-h-screen bg-saddlebrown-50 flex justify-center items-center px-2">
      {showThankYou ? (
        <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg text-center text-green-600 text-xl font-semibold">
          Thank you! We will contact you soon.
        </div>
      ) : (
        <form
          action={FORMSPREE_ENDPOINT}
          method="POST"
          className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg"
          onSubmit={handleValidationSubmit}
        >
          <h2 className="text-3xl font-bold mb-6 text-primary-900 text-center">Book a Demo</h2>
          <input type="hidden" name="_replyto" value={form.email} />
          <div className="mb-4">
            <label className="block text-primary-900 font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-primary-900 font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-primary-900 font-semibold mb-1">Contact Number</label>
            <input
              type="tel"
              name="contact"
              value={form.contact}
              onChange={handleChange}
              className="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            {errors.contact && <div className="text-red-500 text-sm mt-1">{errors.contact}</div>}
          </div>
          <div className="mb-4">
            <label className="block text-primary-900 font-semibold mb-1">Are you a:</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
            >
              <option value="">Select...</option>
              <option value="student">Student</option>
              <option value="professional">Professional</option>
              <option value="company">Company</option>
            </select>
            {errors.role && <div className="text-red-500 text-sm mt-1">{errors.role}</div>}
          </div>
          {form.role === 'company' && (
            <>
              <div className="mb-4">
                <label className="block text-primary-900 font-semibold mb-1">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                />
                {errors.company && <div className="text-red-500 text-sm mt-1">{errors.company}</div>}
              </div>
              {form.company && (
                <div className="mb-4">
                  <label className="block text-primary-900 font-semibold mb-1">Your Role in Company</label>
                  <input
                    type="text"
                    name="companyRole"
                    value={form.companyRole}
                    onChange={handleChange}
                    className="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                  />
                  {errors.companyRole && <div className="text-red-500 text-sm mt-1">{errors.companyRole}</div>}
                </div>
              )}
            </>
          )}
          {((form.role !== 'company' && form.role) || (form.role === 'company' && form.companyRole)) && (
            <div className="mb-6">
              <label className="block text-primary-900 font-semibold mb-1">About</label>
              <textarea
                name="about"
                value={form.about}
                onChange={handleChange}
                className="w-full border border-primary-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-400"
                rows={3}
              />
              {errors.about && <div className="text-red-500 text-sm mt-1">{errors.about}</div>}
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default BookDemo; 