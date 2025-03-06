import React from 'react';
import { Course } from '@/lib/data';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  course: Course;
  className?: string;
  featured?: boolean;
  style?: React.CSSProperties;
}

const CourseCard: React.FC<CourseCardProps> = ({ 
  course, 
  className,
  featured = false,
  style
}) => {
  return (
    <div 
      className={cn(
        'flex flex-col overflow-hidden rounded-2xl transition-all duration-300',
        'hover-scale glass-card',
        featured ? 'shadow-md' : 'shadow-sm',
        className
      )}
      style={style}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="object-cover w-full h-full transition-transform duration-500 hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-white/80 backdrop-blur-sm rounded-full">
            {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
          </span>
        </div>
        {course.featured && (
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 text-xs font-medium bg-black/80 text-white backdrop-blur-sm rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      
      <div className="flex flex-col p-6 flex-grow">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-black/5 rounded-full">
            {course.level}
          </span>
          <span className="text-xs text-black/60">
            {course.duration}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2">{course.title}</h3>
        
        <p className="text-sm text-black/70 mb-4 line-clamp-2">{course.description}</p>
        
        <div className="flex items-center mt-auto">
          <div className="flex-grow">
            <p className="text-sm font-medium">{course.instructor}</p>
            {course.rating && (
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-3 h-3 ${i < Math.floor(course.rating!) ? 'text-yellow-400' : 'text-gray-300'}`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-1 text-xs text-black/60">{course.rating.toFixed(1)}</span>
                </div>
              </div>
            )}
          </div>
          <div className="text-right">
            <p className="text-lg font-bold">${course.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
