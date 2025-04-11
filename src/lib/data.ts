
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
  modules?: Module[];
};

export type Module = {
  id: string;
  title: string;
  duration: string;
  lessons: number;
  quiz?: Quiz;
};

export type Quiz = {
  id: string;
  title: string;
  questions: number;
  passingScore: number;
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
    title: 'Database Management System',
    instructor: 'Dr. Emma Watson',
    description: 'Comprehensive training in database design, SQL, normalization, transaction management, and database administration.',
    category: 'datascience',
    level: 'Intermediate',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1654277097633-fe9ba69e8a88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
    price: 199,
    featured: true,
    rating: 4.9,
    studentsCount: 3245,
    modules: [
      {
        id: 'm1-1',
        title: 'Introduction to DBMS',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q1-1',
          title: 'DBMS Fundamentals Quiz',
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 'm1-2',
        title: 'Entity-Relationship Model',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q1-2',
          title: 'ER Modeling Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm1-3',
        title: 'Relational Database Design',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q1-3',
          title: 'Relational Design Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm1-4',
        title: 'SQL Fundamentals',
        duration: '2 weeks',
        lessons: 8,
        quiz: {
          id: 'q1-4',
          title: 'SQL Basics Quiz',
          questions: 15,
          passingScore: 80
        }
      },
      {
        id: 'm1-5',
        title: 'Advanced SQL',
        duration: '1 week',
        lessons: 6,
        quiz: {
          id: 'q1-5',
          title: 'Advanced SQL Quiz',
          questions: 12,
          passingScore: 75
        }
      },
      {
        id: 'm1-6',
        title: 'Normalization',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q1-6',
          title: 'Normalization Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm1-7',
        title: 'Transaction Management',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q1-7',
          title: 'Transaction Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm1-8',
        title: 'Database Administration',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q1-8',
          title: 'DB Administration Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm1-9',
        title: 'Database Security',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q1-9',
          title: 'Security Quiz',
          questions: 8,
          passingScore: 80
        }
      }
    ]
  },
  {
    id: '2',
    title: 'Data Structures and Algorithms in JAVA',
    instructor: 'Prof. Alex Johnson',
    description: 'Master essential data structures and algorithms using Java, with practical implementations and problem-solving techniques.',
    category: 'programming',
    level: 'Intermediate',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000',
    price: 179,
    featured: true,
    rating: 4.8,
    studentsCount: 2987,
    modules: [
      {
        id: 'm2-1',
        title: 'Introduction to Java Programming',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q2-1',
          title: 'Java Basics Quiz',
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 'm2-2',
        title: 'Arrays and ArrayLists',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q2-2',
          title: 'Arrays Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm2-3',
        title: 'Linked Lists',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q2-3',
          title: 'Linked Lists Quiz',
          questions: 8,
          passingScore: 75
        }
      },
      {
        id: 'm2-4',
        title: 'Stacks and Queues',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q2-4',
          title: 'Stack and Queue Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm2-5',
        title: 'Trees and Graphs',
        duration: '2 weeks',
        lessons: 8,
        quiz: {
          id: 'q2-5',
          title: 'Trees and Graphs Quiz',
          questions: 15,
          passingScore: 75
        }
      },
      {
        id: 'm2-6',
        title: 'Sorting Algorithms',
        duration: '2 weeks',
        lessons: 6,
        quiz: {
          id: 'q2-6',
          title: 'Sorting Algorithms Quiz',
          questions: 12,
          passingScore: 75
        }
      },
      {
        id: 'm2-7',
        title: 'Searching Algorithms',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q2-7',
          title: 'Searching Algorithms Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm2-8',
        title: 'Dynamic Programming',
        duration: '2 weeks',
        lessons: 7,
        quiz: {
          id: 'q2-8',
          title: 'Dynamic Programming Quiz',
          questions: 10,
          passingScore: 80
        }
      },
      {
        id: 'm2-9',
        title: 'Advanced Problem Solving',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q2-9',
          title: 'Problem Solving Quiz',
          questions: 10,
          passingScore: 75
        }
      }
    ]
  },
  {
    id: '3',
    title: 'C Programming',
    instructor: 'Dr. Richard Miller',
    description: 'Comprehensive course on C programming fundamentals, memory management, pointers, and systems programming concepts.',
    category: 'programming',
    level: 'Beginner',
    duration: '8 weeks',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000',
    price: 149,
    featured: true,
    rating: 4.7,
    studentsCount: 3578,
    modules: [
      {
        id: 'm3-1',
        title: 'Introduction to C Programming',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q3-1',
          title: 'C Basics Quiz',
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 'm3-2',
        title: 'Data Types and Operators',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q3-2',
          title: 'Data Types Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm3-3',
        title: 'Control Structures',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q3-3',
          title: 'Control Structures Quiz',
          questions: 8,
          passingScore: 75
        }
      },
      {
        id: 'm3-4',
        title: 'Functions in C',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q3-4',
          title: 'Functions Quiz',
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 'm3-5',
        title: 'Arrays and Strings',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q3-5',
          title: 'Arrays and Strings Quiz',
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 'm3-6',
        title: 'Pointers',
        duration: '1 week',
        lessons: 6,
        quiz: {
          id: 'q3-6',
          title: 'Pointers Quiz',
          questions: 12,
          passingScore: 75
        }
      },
      {
        id: 'm3-7',
        title: 'Memory Management',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q3-7',
          title: 'Memory Management Quiz',
          questions: 8,
          passingScore: 80
        }
      },
      {
        id: 'm3-8',
        title: 'File I/O',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q3-8',
          title: 'File I/O Quiz',
          questions: 8,
          passingScore: 70
        }
      }
    ]
  },
  {
    id: '4',
    title: 'C++ Programming',
    instructor: 'Prof. Sarah Chen',
    description: 'Learn object-oriented programming with C++, including classes, inheritance, polymorphism, STL, and modern C++ features.',
    category: 'programming',
    level: 'Intermediate',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000',
    price: 169,
    featured: false,
    rating: 4.8,
    studentsCount: 2456,
    modules: [
      {
        id: 'm4-1',
        title: 'Introduction to C++',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q4-1',
          title: 'C++ Basics Quiz',
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 'm4-2',
        title: 'Object-Oriented Programming Concepts',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q4-2',
          title: 'OOP Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm4-3',
        title: 'Classes and Objects',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q4-3',
          title: 'Classes Quiz',
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 'm4-4',
        title: 'Inheritance and Polymorphism',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q4-4',
          title: 'Inheritance Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm4-5',
        title: 'Templates and Generic Programming',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q4-5',
          title: 'Templates Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm4-6',
        title: 'Standard Template Library (STL)',
        duration: '2 weeks',
        lessons: 8,
        quiz: {
          id: 'q4-6',
          title: 'STL Quiz',
          questions: 15,
          passingScore: 75
        }
      },
      {
        id: 'm4-7',
        title: 'Exception Handling',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q4-7',
          title: 'Exception Handling Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm4-8',
        title: 'Modern C++ Features',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q4-8',
          title: 'Modern C++ Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm4-9',
        title: 'Advanced C++ Programming',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q4-9',
          title: 'Advanced C++ Quiz',
          questions: 10,
          passingScore: 80
        }
      }
    ]
  },
  {
    id: '5',
    title: 'Cloud Computing',
    instructor: 'Dr. James Cloud',
    description: 'Explore cloud computing technologies, services, deployment models, security, and implementation strategies.',
    category: 'cloud',
    level: 'Intermediate',
    duration: '9 weeks',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000',
    price: 199,
    featured: true,
    rating: 4.9,
    studentsCount: 2156,
    modules: [
      {
        id: 'm5-1',
        title: 'Introduction to Cloud Computing',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q5-1',
          title: 'Cloud Basics Quiz',
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 'm5-2',
        title: 'Cloud Service Models',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q5-2',
          title: 'Service Models Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm5-3',
        title: 'Cloud Deployment Models',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q5-3',
          title: 'Deployment Models Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm5-4',
        title: 'AWS Fundamentals',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q5-4',
          title: 'AWS Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm5-5',
        title: 'Microsoft Azure',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q5-5',
          title: 'Azure Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm5-6',
        title: 'Google Cloud Platform',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q5-6',
          title: 'GCP Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm5-7',
        title: 'Cloud Security',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q5-7',
          title: 'Cloud Security Quiz',
          questions: 10,
          passingScore: 80
        }
      },
      {
        id: 'm5-8',
        title: 'Serverless Computing',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q5-8',
          title: 'Serverless Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm5-9',
        title: 'Cloud Implementation Strategies',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q5-9',
          title: 'Implementation Quiz',
          questions: 8,
          passingScore: 75
        }
      }
    ]
  },
  {
    id: '6',
    title: 'Software Engineering',
    instructor: 'Prof. Emily Roberts',
    description: 'Learn software development methodologies, requirements engineering, design patterns, testing, and project management.',
    category: 'development',
    level: 'Intermediate',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000',
    price: 219,
    featured: true,
    rating: 4.8,
    studentsCount: 1985,
    modules: [
      {
        id: 'm6-1',
        title: 'Introduction to Software Engineering',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q6-1',
          title: 'SE Basics Quiz',
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 'm6-2',
        title: 'Software Development Life Cycle',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q6-2',
          title: 'SDLC Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm6-3',
        title: 'Agile Development Methodologies',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q6-3',
          title: 'Agile Quiz',
          questions: 10,
          passingScore: 70
        }
      },
      {
        id: 'm6-4',
        title: 'Requirements Engineering',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q6-4',
          title: 'Requirements Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm6-5',
        title: 'Software Architecture',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q6-5',
          title: 'Architecture Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm6-6',
        title: 'Design Patterns',
        duration: '2 weeks',
        lessons: 8,
        quiz: {
          id: 'q6-6',
          title: 'Design Patterns Quiz',
          questions: 15,
          passingScore: 75
        }
      },
      {
        id: 'm6-7',
        title: 'Software Testing',
        duration: '2 weeks',
        lessons: 8,
        quiz: {
          id: 'q6-7',
          title: 'Testing Quiz',
          questions: 15,
          passingScore: 75
        }
      },
      {
        id: 'm6-8',
        title: 'Software Quality Assurance',
        duration: '1 week',
        lessons: 4,
        quiz: {
          id: 'q6-8',
          title: 'QA Quiz',
          questions: 8,
          passingScore: 70
        }
      },
      {
        id: 'm6-9',
        title: 'Software Project Management',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q6-9',
          title: 'Project Management Quiz',
          questions: 10,
          passingScore: 75
        }
      },
      {
        id: 'm6-10',
        title: 'DevOps Principles',
        duration: '1 week',
        lessons: 5,
        quiz: {
          id: 'q6-10',
          title: 'DevOps Quiz',
          questions: 10,
          passingScore: 70
        }
      }
    ]
  }
];
