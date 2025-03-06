
import React, { useState, useEffect } from 'react';
import { courses, categories, Category } from '@/lib/data';
import CourseCard from '../courses/CourseCard';
import CategoryButton from '../courses/CategoryButton';
import Button from '../ui/Button';

const FeaturedCourses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [visibleCourses, setVisibleCourses] = useState(4);
  
  useEffect(() => {
    if (selectedCategory) {
      setFilteredCourses(courses.filter(course => course.category === selectedCategory));
    } else {
      setFilteredCourses(courses);
    }
  }, [selectedCategory]);
  
  const handleCategoryClick = (categoryId: string) => {
    setSelectedCategory(prev => prev === categoryId ? null : categoryId);
  };
  
  const handleShowMore = () => {
    setVisibleCourses(prev => Math.min(prev + 4, filteredCourses.length));
  };
  
  return (
    <div className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-block px-3 py-1 text-sm font-medium bg-black/5 rounded-full mb-4">
              Learn something new
            </span>
            <h2 className="heading-lg mb-3">Featured Courses</h2>
            <p className="text-black/70 max-w-xl">
              Explore our most popular courses across all categories. Start your learning journey today.
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Button variant="text">
              View All Courses
            </Button>
          </div>
        </div>
        
        <div className="mb-10 overflow-x-auto pb-2 -mx-6 px-6">
          <div className="flex space-x-3">
            {categories.map(category => (
              <CategoryButton
                key={category.id}
                category={category}
                isActive={selectedCategory === category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="shrink-0"
              />
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredCourses.slice(0, visibleCourses).map((course, index) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              featured={course.featured}
              className="opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>
        
        {visibleCourses < filteredCourses.length && (
          <div className="mt-12 text-center">
            <Button variant="secondary" onClick={handleShowMore}>
              Show More Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCourses;
