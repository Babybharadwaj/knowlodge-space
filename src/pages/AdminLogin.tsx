
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Link } from 'react-router-dom';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Mock admin authentication - in a real app, you would verify against a backend
    setTimeout(() => {
      setIsLoading(false);
      
      // For demo purposes, use a hardcoded admin credential
      if (email === 'admin@example.com' && password === 'admin123') {
        // Store admin auth state in localStorage
        localStorage.setItem('isAdminAuthenticated', 'true');
        
        toast.success("Admin login successful!");
        navigate('/admin/dashboard');
      } else {
        toast.error("Invalid admin credentials");
      }
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="mb-10">
            <Link to="/" className="text-xl font-bold tracking-tight opacity-90 hover:opacity-100 transition-opacity">
              Knowledge<span className="text-highlight">Space</span>
            </Link>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Admin Login</h2>
            <p className="mt-2 text-sm text-gray-600">
              Secure access for administrative users only.
            </p>
          </div>

          <div className="mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </Label>
                <div className="mt-1">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="mt-1">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <Button
                  type="submit"
                  disabled={isLoading}
                  variant="default"
                  className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  {isLoading ? "Signing in..." : "Sign in as Admin"}
                </Button>
              </div>
            </form>
            <div className="mt-6">
              <Link to="/signin" className="text-sm text-center block font-medium text-black hover:text-gray-800">
                Return to User Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-0 flex-1 lg:block">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-black/80 to-black/50">
          <div className="flex h-full items-center justify-center p-12">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Admin Control Panel</h2>
              <p className="text-xl opacity-90">Manage users, courses, and platform settings.</p>
            </div>
          </div>
        </div>
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
          alt="Admin Dashboard"
        />
      </div>
    </div>
  );
};

export default AdminLogin;
