import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { courses } from '@/lib/data';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Button from '@/components/ui/Button';
import { ArrowLeft, Lock, CheckCircle, Play, FileText } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [completedModules, setCompletedModules] = useState<string[]>([]);
  
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center pt-28 pb-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
            <Button onClick={() => navigate('/courses')}>Back to Courses</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleEnroll = () => {
    setIsEnrolled(true);
    toast({
      title: "Enrolled Successfully!",
      description: "You now have access to all course modules.",
    });
  };

  const isModuleUnlocked = (moduleIndex: number) => {
    if (moduleIndex === 0) return true;
    return completedModules.includes(course.modules?.[moduleIndex - 1]?.id || '');
  };

  const handleModuleComplete = (moduleId: string) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
      toast({
        title: "Module Completed!",
        description: "You can now proceed to the next module.",
      });
    }
  };

  const handleModuleClick = (moduleId: string) => {
    window.open(`/courses/${courseId}/modules/${moduleId}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <button 
            onClick={() => navigate('/courses')}
            className="flex items-center text-sm font-medium mb-8 hover:underline"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Courses
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden mb-8">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-auto object-cover" 
                />
              </div>
              
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{course.title}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-medium px-3 py-1.5 bg-black/5 rounded-full">
                    {course.level}
                  </span>
                  <span className="text-sm text-black/60">{course.duration}</span>
                </div>
                
                <p className="text-lg text-black/70">{course.description}</p>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">What You'll Learn</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {Array(6).fill(0).map((_, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-green-500 mr-2 mt-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-sm text-black/70">
                        {index === 0 ? `Master ${course.category} fundamentals` : 
                         index === 1 ? 'Build real-world projects' :
                         index === 2 ? 'Solve complex problems' :
                         index === 3 ? 'Optimize performance' :
                         index === 4 ? 'Deploy applications' :
                                     'Implement best practices'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              
              {isEnrolled ? (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Course Modules</h2>
                  <div className="space-y-4">
                    {course.modules && course.modules.map((module, index) => {
                      const isUnlocked = isModuleUnlocked(index);
                      const isCompleted = completedModules.includes(module.id);
                      
                      return (
                        <div 
                          key={module.id} 
                          className={`p-6 rounded-lg border ${
                            isUnlocked 
                              ? 'bg-white hover:bg-gray-50 cursor-pointer' 
                              : 'bg-gray-50 cursor-not-allowed'
                          }`}
                          onClick={() => isUnlocked && handleModuleClick(module.id)}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-3">
                                <h3 className="font-medium">
                                  {module.title}
                                </h3>
                                {isCompleted && (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                )}
                                {!isUnlocked && (
                                  <Lock className="w-5 h-5 text-gray-400" />
                                )}
                              </div>
                              
                              <p className="text-sm text-gray-500 mt-1">
                                {module.lessons} lessons • {module.duration}
                              </p>
                              
                              {isUnlocked && (
                                <div className="mt-4 space-y-3">
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <FileText className="w-4 h-4" />
                                    <span>Module Content</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Play className="w-4 h-4" />
                                    <span>Video Lessons</span>
                                  </div>
                                  {module.quiz && (
                                    <div className="flex items-center gap-2">
                                      <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                                        Quiz: {module.quiz.questions} questions
                                      </span>
                                      <span className="text-xs text-black/60">
                                        {module.quiz.passingScore}% to pass
                                      </span>
                                    </div>
                                  )}
                                  
                                  {!isCompleted && (
                                    <Button 
                                      onClick={() => handleModuleComplete(module.id)}
                                      size="sm"
                                      className="mt-2"
                                    >
                                      Complete Module
                                    </Button>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Course Modules</h2>
                  <div className="space-y-3">
                    {course.modules && course.modules.map((module) => (
                      <div key={module.id} className="p-4 bg-black/[0.02] rounded-lg">
                        <h3 className="font-medium">{module.title}</h3>
                        <p className="text-sm text-black/60 mt-1">
                          {module.lessons} lessons • {module.duration}
                        </p>
                        {module.quiz && (
                          <div className="mt-2 flex items-center">
                            <span className="text-xs font-medium px-2 py-1 bg-blue-50 text-blue-600 rounded-full">
                              Quiz: {module.quiz.title}
                            </span>
                            <span className="text-xs text-black/60 ml-2">
                              {module.quiz.questions} questions • {module.quiz.passingScore}% to pass
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-28 p-6 border border-black/10 rounded-2xl shadow-sm">
                <div className="text-3xl font-bold mb-6">${course.price}</div>
                
                <Button 
                  size="lg" 
                  className="w-full mb-4"
                  onClick={handleEnroll}
                  disabled={isEnrolled}
                >
                  {isEnrolled ? 'Enrolled' : 'Enroll Now'}
                </Button>
                
                <div className="mb-6">
                  <p className="text-center text-sm text-black/60 mb-2">This course includes:</p>
                  <ul className="space-y-2">
                    <li className="flex text-sm">
                      <span className="mr-3">•</span>
                      <span>Full lifetime access</span>
                    </li>
                    <li className="flex text-sm">
                      <span className="mr-3">•</span>
                      <span>Access on mobile and desktop</span>
                    </li>
                    <li className="flex text-sm">
                      <span className="mr-3">•</span>
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex text-sm">
                      <span className="mr-3">•</span>
                      <span>Downloadable resources</span>
                    </li>
                    <li className="flex text-sm">
                      <span className="mr-3">•</span>
                      <span>{course.modules?.length || 0} modules with quizzes</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex items-center mb-2">
                    <img 
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt={course.instructor}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <p className="font-medium">{course.instructor}</p>
                      <p className="text-sm text-black/70">Course Instructor</p>
                    </div>
                  </div>
                  
                  {course.rating && (
                    <div className="flex items-center mt-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <svg 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(course.rating!) ? 'text-yellow-400' : 'text-gray-300'}`} 
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                        <span className="ml-2 text-sm font-medium">{course.rating.toFixed(1)} rating</span>
                      </div>
                    </div>
                  )}
                  
                  {course.studentsCount && (
                    <div className="mt-2 text-sm text-black/70">
                      {course.studentsCount.toLocaleString()} students enrolled
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
