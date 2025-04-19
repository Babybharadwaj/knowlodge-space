
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from "@/components/ui/Button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/components/ui/use-toast';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password.",
        variant: "destructive"
      });
      return;
    }

    // Authentication logic
    if (role === 'admin') {
      // Admin login
      if (email === 'admin@example.com' && password === 'admin123') {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify({ email, role: 'admin' }));
        toast({
          title: "Success",
          description: "Admin login successful!",
          variant: "default"
        });
        navigate('/admin/dashboard');
      } else {
        toast({
          title: "Error",
          description: "Invalid admin credentials.",
          variant: "destructive"
        });
      }
    } else {
      // Student login
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('user', JSON.stringify({ email, role: 'student' }));
      toast({
        title: "Success",
        description: "Student login successful!",
        variant: "default"
      });
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center pt-28 pb-16">
        <div className="max-w-md w-full px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-black/70">Sign in to continue learning</p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-black/10">
            <Tabs defaultValue="student" onValueChange={(value) => setRole(value)} className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student">Student</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>
            </Tabs>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-black/70 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/10 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-black/70 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black/10 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                />
              </div>
              
              <Button type="submit" className="w-full">Sign In</Button>
              
              <div className="text-center mt-6">
                <p className="text-sm text-black/60">
                  Don't have an account?{' '}
                  <a href="/register" className="text-black font-medium hover:underline">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SignIn;
