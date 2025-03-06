import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCourses from '@/components/home/FeaturedCourses';
import Button from '@/components/ui/Button';

const Index: React.FC = () => {
  // Simulate image preloading for smoother animations
  useEffect(() => {
    const preloadImages = () => {
      const imageUrls = [
        'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000',
        'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000',
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000'
      ];
      
      imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    };
    
    preloadImages();
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Hero />
        
        <div className="py-6 md:py-10">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
              <div className="p-6 rounded-xl bg-black/[0.02] flex flex-col items-center">
                <span className="text-3xl font-bold mb-2">100+</span>
                <span className="text-sm text-black/70">Expert Instructors</span>
              </div>
              <div className="p-6 rounded-xl bg-black/[0.02] flex flex-col items-center">
                <span className="text-3xl font-bold mb-2">250+</span>
                <span className="text-sm text-black/70">Quality Courses</span>
              </div>
              <div className="p-6 rounded-xl bg-black/[0.02] flex flex-col items-center">
                <span className="text-3xl font-bold mb-2">15k+</span>
                <span className="text-sm text-black/70">Active Students</span>
              </div>
              <div className="p-6 rounded-xl bg-black/[0.02] flex flex-col items-center">
                <span className="text-3xl font-bold mb-2">99%</span>
                <span className="text-sm text-black/70">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
        
        <FeaturedCourses />
        
        <div className="px-6 md:px-12 py-16 md:py-24 bg-black/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-black/5 rounded-full mb-4">
                Why choose us
              </span>
              <h2 className="heading-lg mb-6">Designed for the modern learner</h2>
              <p className="text-black/70">
                Our courses combine expert instruction, interactive exercises, and community support to ensure you succeed in your learning journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl glass-card text-center">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl">✦</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Learn at Your Pace</h3>
                <p className="text-black/70 text-sm">
                  Access course content anytime, anywhere. Learn on your schedule with no deadlines or time constraints.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl glass-card text-center">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl">⟡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Expert Instructors</h3>
                <p className="text-black/70 text-sm">
                  Learn from industry professionals with real-world experience and proven teaching methods.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl glass-card text-center">
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-xl">◎</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Practical Projects</h3>
                <p className="text-black/70 text-sm">
                  Apply what you learn with hands-on projects that build your portfolio and reinforce your skills.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="px-6 md:px-12 py-16 md:py-24">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-3xl overflow-hidden bg-gradient-radial from-black/10 to-black/5 p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="heading-md mb-6">Ready to start your learning journey?</h2>
                <p className="text-black/70 mb-8">
                  Join thousands of students already learning on our platform.
                </p>
                <Button size="lg">
                  Get Started Today
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
