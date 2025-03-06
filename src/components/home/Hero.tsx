
import React from 'react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl animate-in-sequence">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-black/5 rounded-full mb-6 animate-fade-in opacity-0">
            Learn from the best
          </span>
          
          <h1 className="heading-xl mb-6 animate-fade-in opacity-0 subtle-text-gradient">
            Elevate your skills with expert-led courses
          </h1>
          
          <p className="text-lg md:text-xl text-black/70 mb-8 leading-relaxed animate-fade-in opacity-0">
            Discover courses designed to propel your career forward. Learn at your own pace with hands-on projects and personalized feedback.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in opacity-0">
            <Button size="lg">
              Explore Courses
            </Button>
            <Button variant="secondary" size="lg">
              For Instructors
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background circles/blur effect */}
      <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-yellow-100/20 rounded-full blur-3xl" />
    </div>
  );
};

export default Hero;
