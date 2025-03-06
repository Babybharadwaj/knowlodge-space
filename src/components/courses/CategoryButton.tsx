
import React from 'react';
import { Category } from '@/lib/data';
import { cn } from '@/lib/utils';

interface CategoryButtonProps {
  category: Category;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ 
  category, 
  isActive = false,
  onClick,
  className
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
        'flex items-center space-x-2',
        isActive 
          ? 'bg-black text-white shadow-sm' 
          : 'bg-black/5 text-black/70 hover:bg-black/10',
        className
      )}
    >
      <span className="text-base">{category.icon}</span>
      <span>{category.name}</span>
    </button>
  );
};

export default CategoryButton;
