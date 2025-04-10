
export type Course = {
  id: string;
  title: string;
  instructor: string;
  description: string;
  category: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  image: string;
  price: number;
  featured?: boolean;
  rating?: number;
  studentsCount?: number;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
};

export const categories: Category[] = [
  { id: 'development', name: 'Development', icon: '⌘' },
  { id: 'programming', name: 'Programming', icon: '⚙️' },
  { id: 'datascience', name: 'Data Science', icon: '📊' },
  { id: 'cloud', name: 'Cloud', icon: '☁️' },
  { id: 'devops', name: 'DevOps', icon: '🔄' },
  { id: 'ai', name: 'AI', icon: '🧠' }
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Java Full Stack Training',
    instructor: 'Robert Johnson',
    description: 'Comprehensive training in Java, Spring Boot, Hibernate, and Angular/React for full stack development.',
    category: 'programming',
    level: 'Intermediate',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000',
    price: 199,
    featured: true,
    rating: 4.9,
    studentsCount: 3245
  },
  {
    id: '2',
    title: 'Python Full Stack Training',
    instructor: 'Lisa Zhang',
    description: 'Master Python, Django, Flask, and React/Vue.js to build complete web applications.',
    category: 'programming',
    level: 'Intermediate',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1000',
    price: 179,
    featured: true,
    rating: 4.8,
    studentsCount: 2987
  },
  {
    id: '3',
    title: 'DevOps',
    instructor: 'James Wilson',
    description: 'Learn modern DevOps practices including CI/CD, containerization, and infrastructure as code.',
    category: 'devops',
    level: 'Intermediate',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1000',
    price: 189,
    featured: true,
    rating: 4.7,
    studentsCount: 2156
  },
  {
    id: '4',
    title: 'AWS Cloud Solutions',
    instructor: 'Michelle Rodriguez',
    description: 'Become an AWS certified professional and learn to architect scalable cloud solutions.',
    category: 'cloud',
    level: 'Advanced',
    duration: '9 weeks',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000',
    price: 220,
    featured: false,
    rating: 4.9,
    studentsCount: 1856
  },
  {
    id: '5',
    title: 'Advanced AI',
    instructor: 'Dr. Alan Turing',
    description: 'Explore cutting-edge artificial intelligence concepts, including machine learning and neural networks.',
    category: 'ai',
    level: 'Advanced',
    duration: '11 weeks',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000',
    price: 249,
    featured: true,
    rating: 4.8,
    studentsCount: 1245
  },
  {
    id: '6',
    title: 'Data Science and Analytics',
    instructor: 'Marcus Peters',
    description: 'Learn data analysis, machine learning, and visualization using Python, R, and industry tools.',
    category: 'datascience',
    level: 'Intermediate',
    duration: '14 weeks',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    price: 249,
    featured: true,
    rating: 4.9,
    studentsCount: 2156
  }
];
