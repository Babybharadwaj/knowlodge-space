
import React from 'react';
import { Link } from 'react-router-dom';
import { School, Briefcase, Users, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const About = () => {
  const features = [
    {
      title: 'Expert Trainers',
      description: 'Learn from industry experts with 8+ years of experience',
      icon: School,
    },
    {
      title: 'Placement Assistance',
      description: '100% placement support with mock interviews and resume preparation',
      icon: Briefcase,
    },
    {
      title: 'Live Projects',
      description: 'Work on real-time projects with hands-on experience',
      icon: Users,
    },
    {
      title: 'Certification',
      description: 'Globally recognized certification after course completion',
      icon: Star,
    },
  ];

  const highlights = [
    'Industry-relevant curriculum updated regularly',
    'Flexible batch timings for working professionals',
    'Weekend batches available',
    'Small batch size for personalized attention',
    'Regular assessments and mock tests',
    'Interview preparation sessions',
    'Resume building workshops',
    'Lifetime access to learning materials',
    'Free demo classes available',
    'EMI options available',
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              About Knowledge<span className="text-highlight">Space</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Best Software Training Institute in Vijayawada with 100% Placement Assistance
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature) => (
              <div 
                key={feature.title}
                className="bg-white rounded-lg p-6 text-center shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose Knowledge<span className="text-highlight">Space</span>?</h2>
              <p className="text-gray-600 mb-6">
                Knowledge<span className="text-highlight">Space</span> is a leading software training institute in Vijayawada, 
                offering comprehensive training programs in various technologies. Our mission is to bridge 
                the gap between academia and industry by providing practical, hands-on training to 
                students and professionals.
              </p>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-primary"><Check className="h-5 w-5" /></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <Button 
                asChild
                className="mt-8"
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/dxckx2bad/image/upload/v1746688654/Training-and-Development_qlzfbb.webp"
                alt="Training at Knowledge Space"
                className="w-full rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-16 py-12 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-primary">5000+</p>
                <p className="text-gray-600">Students Trained</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-gray-600">Placement Rate</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15+</p>
                <p className="text-gray-600">Training Programs</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">8+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
