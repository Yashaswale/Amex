import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Switch } from '@headlessui/react';

const DEFAULT_CREDENTIALS = {
  email: 'qwerty@gmail.com',
  password: '12345'
};

const LoginModal = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear any existing errors
    if (errors[name] || errors.auth) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        delete newErrors.auth;
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    const { email, password } = formData;

    if (!email.trim()) newErrors.email = 'Please enter your email';
    if (!password.trim()) newErrors.password = 'Please enter your password';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      // Simulate API call with a small delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check credentials
      if (formData.email === DEFAULT_CREDENTIALS.email && 
          formData.password === DEFAULT_CREDENTIALS.password) {
        // Store auth state
        localStorage.setItem('isAuthenticated', 'true');
        if (rememberMe) {
          localStorage.setItem('rememberMe', 'true');
        }
        
        // Navigate to dashboard
        navigate('/dashboard');
      } else {
        setErrors({
          auth: 'Invalid email or password'
        });
      }
    } catch (error) {
      setErrors({
        auth: 'An error occurred. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden font-poppins">
      {/* Background image */}
      <div 
        className="absolute top-0 left-0 right-0 w-[calc(100%-1rem)] h-[calc(50%-1rem)] bg-cover bg-center rounded-md m-2"
        style={{ backgroundImage: "url('/login/Image.png')" }}
      />

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-sm mx-4">
          {/* Logo */}
          <img src="/logo.png" alt="Logo" className="h-10 mx-auto mb-3" />
          
          <h2 className="text-2xl font-bold text-center mb-2">
            Welcome Back
          </h2>
          
          <p className="text-sm text-gray-600 text-center mb-6">
            Enter your email and password to sign in
          </p>

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {errors.auth && (
              <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg">
                {errors.auth}
              </div>
            )}

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
                disabled={isLoading}
                className={`mt-1 block w-full h-10 pl-4 rounded-md border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500`}
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
                disabled={isLoading}
                className={`mt-1 block w-full h-10 pl-4 rounded-md border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-blue-500 disabled:bg-gray-50 disabled:text-gray-500`}
                placeholder="Enter your password"
              />
              {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
            </div>

            {/* Remember me toggle */}
            <div className="flex items-center gap-2">
              <Switch
                checked={rememberMe}
                onChange={setRememberMe}
                disabled={isLoading}
                className={`${
                  rememberMe ? 'bg-[#4FD1C5]' : 'bg-gray-200'
                } relative inline-flex h-4 w-8 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2 disabled:opacity-50`}
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
              disabled={isLoading}
              className="w-full py-2 px-4 mt-4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#4FD1C5] focus:ring-offset-2 uppercase disabled:opacity-50 relative"
              style={{ background: 'linear-gradient(to right, #4FD1C5 0%, #2FA7FF 100%)' }}
            >
              {isLoading ? (
                <>
                  <span className="opacity-0">Sign in</span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </>
              ) : (
                'Sign in'
              )}
            </button>
          </form>

          {/* Register link */}
          <p className="mt-3 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={() => navigate('/register')}
              disabled={isLoading}
              className="font-medium text-[#4FD1C5] hover:text-[#2FA7FF] transition-colors disabled:opacity-50"
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