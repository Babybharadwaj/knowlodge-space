
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
  { id: 'design', name: 'Design', icon: '✦' },
  { id: 'development', name: 'Development', icon: '⌘' },
  { id: 'business', name: 'Business', icon: '◆' },
  { id: 'marketing', name: 'Marketing', icon: '⟡' },
  { id: 'photography', name: 'Photography', icon: '◎' },
  { id: 'music', name: 'Music', icon: '♪' },
  { id: 'programming', name: 'Programming', icon: '⚙️' },
  { id: 'testing', name: 'Testing', icon: '✓' },
  { id: 'datascience', name: 'Data Science', icon: '📊' }
];

export const courses: Course[] = [
  {
    id: '1',
    title: 'Design Systems Fundamentals',
    instructor: 'Sarah Johnson',
    description: 'Learn how to create and maintain scalable design systems for digital products.',
    category: 'design',
    level: 'Intermediate',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000',
    price: 99,
    featured: true,
    rating: 4.9,
    studentsCount: 2458
  },
  {
    id: '2',
    title: 'Modern Frontend Development',
    instructor: 'Alex Chen',
    description: 'Master the latest frontend technologies and frameworks.',
    category: 'development',
    level: 'Intermediate',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=1000',
    price: 129,
    featured: true,
    rating: 4.8,
    studentsCount: 3211
  },
  {
    id: '3',
    title: 'Strategic Marketing for Startups',
    instructor: 'Michael Torres',
    description: 'Develop effective marketing strategies tailored for startup growth.',
    category: 'marketing',
    level: 'Beginner',
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000',
    price: 79,
    featured: true,
    rating: 4.7,
    studentsCount: 1893
  },
  {
    id: '4',
    title: 'Business Analytics & Data Visualization',
    instructor: 'Emma Williams',
    description: 'Learn to analyze business data and create compelling visualizations.',
    category: 'business',
    level: 'Intermediate',
    duration: '5 weeks',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000',
    price: 119,
    featured: false,
    rating: 4.6,
    studentsCount: 1456
  },
  {
    id: '5',
    title: 'Mobile Photography Mastery',
    instructor: 'David Kim',
    description: 'Create stunning photos using just your smartphone.',
    category: 'photography',
    level: 'Beginner',
    duration: '3 weeks',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000',
    price: 69,
    featured: false,
    rating: 4.8,
    studentsCount: 2789
  },
  {
    id: '6',
    title: 'Advanced React Patterns',
    instructor: 'Rachel Green',
    description: 'Take your React skills to the next level with advanced patterns.',
    category: 'development',
    level: 'Advanced',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1000',
    price: 149,
    featured: true,
    rating: 4.9,
    studentsCount: 1876
  },
  {
    id: '7',
    title: 'Music Production Essentials',
    instructor: 'James Wilson',
    description: 'Learn the fundamentals of music production and audio engineering.',
    category: 'music',
    level: 'Beginner',
    duration: '7 weeks',
    image: 'https://images.unsplash.com/photo-1619983081563-430f63602796?q=80&w=1000',
    price: 109,
    featured: false,
    rating: 4.7,
    studentsCount: 2134
  },
  {
    id: '8',
    title: 'UI Animation Principles',
    instructor: 'Nina Patel',
    description: 'Create delightful user interfaces through thoughtful animations.',
    category: 'design',
    level: 'Intermediate',
    duration: '4 weeks',
    image: 'https://images.unsplash.com/photo-1454692771704-7b178dd04da0?q=80&w=1000',
    price: 89,
    featured: false,
    rating: 4.8,
    studentsCount: 1567
  },
  // New courses
  {
    id: '9',
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
    id: '10',
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
    id: '11',
    title: 'Data Science Training',
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
  },
  {
    id: '12',
    title: 'Software Testing',
    instructor: 'Julia Martinez',
    description: 'Comprehensive training in manual and automated testing methodologies and tools.',
    category: 'testing',
    level: 'Beginner',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=1000',
    price: 149,
    featured: false,
    rating: 4.7,
    studentsCount: 1876
  },
  {
    id: '13',
    title: 'Java Training',
    instructor: 'Andrew Wilson',
    description: 'Master core Java concepts, OOP principles, and enterprise Java development.',
    category: 'programming',
    level: 'Beginner',
    duration: '6 weeks',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000',
    price: 129,
    featured: false,
    rating: 4.8,
    studentsCount: 3564
  }
];
