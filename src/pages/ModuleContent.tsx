
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '@/lib/data';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowLeft } from 'lucide-react';
import Button from '@/components/ui/Button';
import Quiz from '@/components/quiz/Quiz';

const ModuleContent: React.FC = () => {
  const { courseId, moduleId } = useParams<{ courseId: string; moduleId: string }>();
  const navigate = useNavigate();
  const [showQuiz, setShowQuiz] = useState(false);
  
  const course = courses.find(c => c.id === courseId);
  const module = course?.modules?.find(m => m.id === moduleId);
  
  if (!course || !module) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-28 pb-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Module Not Found</h1>
            <Button onClick={() => navigate(`/courses/${courseId}`)}>Back to Course</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const sampleQuestions = [
    {
      id: 1,
      text: "What is the main purpose of this module?",
      options: [
        "To teach basic concepts",
        "To provide advanced knowledge",
        "To test existing skills",
        "To introduce new technologies"
      ],
      correctAnswer: 0
    },
    {
      id: 2,
      text: "Which of the following best describes the module's approach?",
      options: [
        "Theoretical only",
        "Practical only",
        "Both theoretical and practical",
        "Case study based"
      ],
      correctAnswer: 2
    },
    {
      id: 3,
      text: "What is the recommended prerequisite for this module?",
      options: [
        "No prerequisites",
        "Basic understanding",
        "Advanced knowledge",
        "Expert level skills"
      ],
      correctAnswer: 1
    }
  ];

  const handleQuizComplete = (passed: boolean) => {
    if (passed) {
      // You might want to store this in a real application
      localStorage.setItem(`completed-${moduleId}`, 'true');
      
      // Find next module
      const moduleIndex = course.modules?.findIndex(m => m.id === moduleId) ?? -1;
      const nextModule = course.modules?.[moduleIndex + 1];
      
      if (nextModule) {
        window.open(`/courses/${courseId}/modules/${nextModule.id}`, '_blank');
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <button 
            onClick={() => navigate(`/courses/${courseId}`)}
            className="flex items-center text-sm font-medium mb-8 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Course
          </button>
          
          <h1 className="text-3xl font-bold mb-6">{module.title}</h1>
          
          <div className="space-y-8">
            {!showQuiz && (
              <>
                <div className="rounded-lg overflow-hidden">
                  <video 
                    controls 
                    className="w-full aspect-video"
                    poster="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
                  >
                    <source 
                      src="https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>

                <div className="prose max-w-none">
                  <h2 className="text-2xl font-semibold mb-4">Description</h2>
                  <p className="text-gray-700 mb-4">
                    In this module, you will learn about {module.title.toLowerCase()}. We'll cover fundamental concepts,
                    practical applications, and hands-on exercises to help you master the material.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-3">Key Topics:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Introduction to {module.title}</li>
                    <li>Core Concepts and Principles</li>
                    <li>Practical Applications</li>
                    <li>Best Practices and Common Pitfalls</li>
                    <li>Real-world Examples and Case Studies</li>
                  </ul>

                  <div className="my-6 border rounded-lg overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
                      alt="Code example"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {module.quiz && (
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Module Quiz</h2>
                    <p className="mb-4">
                      Test your knowledge of {module.title} with this quiz. You need to score at least {module.quiz.passingScore}% to pass.
                    </p>
                    <Button onClick={() => setShowQuiz(true)}>Start Quiz</Button>
                  </div>
                )}
              </>
            )}

            {showQuiz && module.quiz && (
              <Quiz
                questions={sampleQuestions}
                passingScore={module.quiz.passingScore}
                onComplete={handleQuizComplete}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ModuleContent;
