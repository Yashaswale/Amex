import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Switch } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';

// Simple email regex - can be enhanced based on requirements
//const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]/;

const RegisterModal = () => {
  const navigate = useNavigate();
  
  // Form fields and validation state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  // Update form fields and clear any existing errors
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Basic email validation
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Validate form before submission
  const validateForm = () => {
    let newErrors = {};
    const { name, email, password } = formData;

    // Required field checks
    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!email.trim()) newErrors.email = 'Please enter your email';
    if (!password.trim()) newErrors.password = 'Please enter a password';

    // Email format check
    if (email && !isValidEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      // TODO: Implement registration logic
      console.log('Registration data:', {
        ...formData,
        rememberMe
      });
      
      // Redirect to login after successful registration
      // navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden font-poppins">
      {/* Background image */}
      <div 
        className="absolute top-0 left-0 right-0 w-[calc(100%-1rem)] h-[calc(60%-1rem)] bg-cover bg-center rounded-md m-2"
        style={{ backgroundImage: "url('/login/Image.png')" }}
      />

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-xs mx-4 space-y-4">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="h-10 mx-auto mb-3" />
          
          <h2 className="text-lg font-semibold text-center mb-4">
            Register with
          </h2>

          {/* Google sign-up */}
          <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-50 mb-4">
            <FcGoogle className="text-xl" />
          </button>

          {/* Divider */}
          <div className="relative mb-4">
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Registration form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`mt-1 block w-full h-10 pl-4 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500`}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`mt-1 block w-full h-10 pl-4 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500`}
                placeholder="Your email address"
              />
              {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`mt-1 block w-full h-10 pl-4 rounded-lg border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500`}
                placeholder="Create a password"
              />
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            {/* Remember me toggle */}
            <div className="flex items-center gap-2">
              <Switch
                checked={rememberMe}
                onChange={setRememberMe}
                className={`${
                  rememberMe ? 'bg-[#4FD1C5]' : 'bg-gray-200'
                } relative inline-flex h-4 w-8 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2`}
              >
                <span className="sr-only">Remember me</span>
                <span
                  className={`${
                    rememberMe ? 'translate-x-4' : 'translate-x-1'
                  } inline-block h-3 w-3 transform rounded-full bg-white transition-transform`}
                />
              </Switch>
              <span className="text-sm text-gray-600">Remember me</span>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full py-2 px-4 mt-4 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2 uppercase"
              style={{ background: 'linear-gradient(to right, #4FD1C5 0%, #2FA7FF 100%)' }}
            >
              Sign up
            </button>
          </form>

          {/* Login link */}
          <p className="mt-3 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <button 
              onClick={() => navigate('/login')}
              className="font-medium text-[#4FD1C5] hover:text-[#2FA7FF] transition-colors"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
