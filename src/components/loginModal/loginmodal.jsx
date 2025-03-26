import React, { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

// Simple email regex - can be enhanced based on requirements
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LoginModal = () => {
  const navigate = useNavigate();
  // Form state
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  // Handle input changes and clear errors on type
  const updateField = (e) => {
    const field = e.target.name;
    const newValue = e.target.value;

    setFormData(data => ({ ...data, [field]: newValue }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(current => ({ ...current, [field]: '' }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    const { email, password } = formData;

    if (!email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!password?.trim()) {
      newErrors.password = 'Password is required';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSignIn = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // TODO: Add your signin logic here
    console.log('Form submitted:', { ...formData, keepLoggedIn });
  };

  return (
    <div className="fixed inset-0 overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero section with background */}
      <div 
        className="absolute top-0 left-0 right-0 w-[calc(100%-1rem)] h-[calc(60%-1rem)] bg-cover bg-center rounded-md m-2"
        style={{ backgroundImage: "url('/login/Image.png')" }}
      />

      {/* Auth container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-xs mx-4 space-y-4">
          {/* Brand logo */}
          <div className="flex justify-center mb-3">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>

          <h2 className="text-2xl font-bold text-center mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Welcome Back
          </h2>
          
          <p className="text-xs text-gray-400 text-center mb-6 font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Enter your email and password to sign in
          </p>

          {/* Signin form */}
          <form onSubmit={handleSignIn} className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={updateField}
                className={`mt-1 block w-full rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 h-10 pl-4`}
                placeholder="Your email"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                required
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700" style={{ fontFamily: 'Poppins, sans-serif' }}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={updateField}
                className={`mt-1 block w-full rounded-md border ${errors.password ? 'border-red-500' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:ring-blue-500 h-10 pl-4`}
                placeholder="Your password"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                required
              />
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            {/* Preferences */}
            <div className="flex items-center justify-start gap-2 mt-2">
              <Switch
                checked={keepLoggedIn}
                onChange={setKeepLoggedIn}
                className={`${
                  keepLoggedIn ? 'bg-[#4FD1C5]' : 'bg-gray-200'
                } relative inline-flex h-4 w-8 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2`}
              >
                <span className="sr-only">Keep me logged in</span>
                <span
                  className={`${
                    keepLoggedIn ? 'translate-x-4' : 'translate-x-1'
                  } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <span className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>Remember me</span>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              onClick={() => navigate('/home')}
              className="mt-4 w-full text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2"
              style={{ 
                fontFamily: 'Poppins, sans-serif',
                background: 'linear-gradient(to right, #4FD1C5 0%, #2FA7FF 100%)'
              }}
            >
              SIGN IN
            </button>
          </form>

          {/* Register link */}
          <p className="mt-3 text-center text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Don't have an account?{' '}
            <button 
              onClick={() => navigate('/register')}
              className="font-medium text-[#4FD1C5] hover:text-[#2FA7FF] transition-colors" 
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
