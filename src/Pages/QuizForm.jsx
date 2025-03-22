import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const QuizForm = ({ onComplete }) => {
  const [currentAnswers, setCurrentAnswers] = useState({});
  const navigate = useNavigate();

  const questions = [
    { id: 1, question: "Are there any co-occurring conditions (e.g., ADHD, speech delays)?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 2, question: "How would you rate the patient's reading fluency?", options: ["Slow", "Moderate", "Fast"], correctAnswer: "Moderate" },
    { id: 3, question: "Does the patient struggle with decoding unfamiliar words?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 4, question: "Has the patient been formally diagnosed with dyslexia?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 5, question: "Does the patient frequently guess words based on context?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 6, question: "Does the patient confuse similar-looking letters or words (e.g., b/d, saw/was)?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 7, question: "Does the patient have difficulty with phonological awareness?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 8, question: "Is there a family history of reading difficulties?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 9, question: "Does the patient show signs of anxiety when reading aloud?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 10, question: "Has the patient received any previous reading interventions?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 11, question: "Does the patient have difficulty maintaining attention while reading?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 12, question: "Is there a significant gap between reading ability and other academic skills?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 13, question: "Does the patient demonstrate strong comprehension when text is read to them?", options: ["Yes", "No"], correctAnswer: "Yes" },
    { id: 14, question: "Does the patient have difficulty with spelling?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 15, question: "Is the patient's reading speed significantly below grade level?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 16, question: "Does the patient avoid reading tasks when possible?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 17, question: "Has the patient's teacher expressed concerns about reading progress?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 18, question: "Does the patient have difficulty following written instructions?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 19, question: "Is there a discrepancy between oral and written expression?", options: ["Yes", "No"], correctAnswer: "No" },
    { id: 20, question: "Does the patient show strengths in areas not requiring reading?", options: ["Yes", "No"], correctAnswer: "Yes" }
  ];

  const isFormComplete = Object.keys(currentAnswers).length === questions.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormComplete) return;
    const score = questions.reduce((acc, question) => acc + (currentAnswers[question.id] === question.correctAnswer ? 1 : 0), 0);
    if (typeof onComplete === "function") onComplete(score, questions.length);
    navigate("/Contact");
  };

  const handleAnswerChange = (questionId, answer) => {
    setCurrentAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-12 relative">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-black"></div>
        <h1 className="text-3xl font-bold inline-block px-8 bg-white relative z-10">
          Assessment Form
        </h1>
      </div>

      <div className="space-y-8">
        {questions.map((question, index) => (
          <div key={question.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-8">
              <span className="text-xl font-medium">{index + 1}.</span>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl mb-4">{question.question}</h3>
                <div className="flex flex-col md:flex-row gap-4 md:gap-12">
                  {question.options.map((option) => (
                    <label key={option} className="flex items-center gap-3">
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={option}
                        onChange={(e) => handleAnswerChange(question.id, e.target.value)}
                        className="w-5 h-5 border-2 border-black text-black focus:ring-black"
                        required
                      />
                      <span className="text-lg">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          type="submit"
          disabled={!isFormComplete}
          className={`px-8 py-3 text-lg font-medium rounded transition-colors 
          ${isFormComplete ? "bg-black text-white hover:bg-gray-800" : "bg-gray-400 text-gray-700 cursor-not-allowed"}`}
        >
          Submit Assessment
        </button>
      </div>
    </form>
  );
};

export default QuizForm;
