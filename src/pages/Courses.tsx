
import React from 'react';
import { courses } from '@/lib/data';
import CourseCard from '@/components/courses/CourseCard';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Courses: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">All Courses</h1>
            <p className="text-lg text-black/70 max-w-3xl">
              Explore our comprehensive selection of courses designed to help you advance your career and develop new skills.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {courses.map((course) => (
              <CourseCard 
                key={course.id} 
                course={course} 
                featured={course.featured}
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: `${parseInt(course.id) * 100}ms` }}
              />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Courses;
