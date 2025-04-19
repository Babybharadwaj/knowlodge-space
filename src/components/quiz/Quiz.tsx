
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import Button from "@/components/ui/Button";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  questions: Question[];
  passingScore: number;
  onComplete: (passed: boolean) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, passingScore, onComplete }) => {
  const [currentAnswers, setCurrentAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const calculateScore = () => {
    const correctAnswers = currentAnswers.reduce((acc, answer, index) => {
      return acc + (answer === questions[index].correctAnswer ? 1 : 0);
    }, 0);
    return (correctAnswers / questions.length) * 100;
  };

  const handleSubmit = () => {
    const score = calculateScore();
    setShowResults(true);
    const passed = score >= passingScore;
    
    toast({
      title: passed ? "Congratulations!" : "Try Again",
      description: passed 
        ? `You passed with ${score.toFixed(1)}%!` 
        : `You scored ${score.toFixed(1)}%. You need ${passingScore}% to pass.`,
      variant: passed ? "default" : "destructive"
    });

    onComplete(passed);
  };

  if (showResults) {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Quiz Results</h3>
        <p>Your score: {calculateScore().toFixed(1)}%</p>
        <p>Required to pass: {passingScore}%</p>
        {calculateScore() < passingScore && (
          <Button onClick={() => {
            setShowResults(false);
            setCurrentAnswers(new Array(questions.length).fill(-1));
          }}>
            Try Again
          </Button>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h3 className="text-xl font-semibold">Module Quiz</h3>
      {questions.map((question, questionIndex) => (
        <div key={question.id} className="space-y-4">
          <p className="font-medium">{questionIndex + 1}. {question.text}</p>
          <div className="space-y-2">
            {question.options.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                  currentAnswers[questionIndex] === optionIndex
                    ? 'bg-black/5 border-black'
                    : 'hover:bg-black/5'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  checked={currentAnswers[questionIndex] === optionIndex}
                  onChange={() => {
                    const newAnswers = [...currentAnswers];
                    newAnswers[questionIndex] = optionIndex;
                    setCurrentAnswers(newAnswers);
                  }}
                  className="mr-3"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <Button
        onClick={handleSubmit}
        disabled={currentAnswers.includes(-1)}
        className="mt-6"
      >
        Submit Quiz
      </Button>
    </div>
  );
};

export default Quiz;
