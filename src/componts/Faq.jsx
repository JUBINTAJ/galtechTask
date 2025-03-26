import { Plus, X } from "lucide-react";
import { useState } from "react";

export default function Faq() {
    const [openQuestion, setOpenQuestion] = useState(0);
  
    const questions = [
      {
        question: "LOREM IPSUM DOLOR?",
        answer: "LOREM IPSUM DOLOR?LOREM IPSUM DOLOR? LOREM IPSUM DOLOR?LOREM IPSUM DOLOR? LOREM IPSUM DOLOR?LOREM IPSUM DOLOR? LOREM IPSUM DOLOR?LOREM IPSUM DOLOR? LOREM IPSUM DOLOR?"
      },
      {
        question: "LOREM IPSUM DOLOR?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "LOREM IPSUM DOLOR?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "LOREM IPSUM DOLOR?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "LOREM IPSUM DOLOR?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        question: "LOREM IPSUM DOLOR?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ];
  
    return (
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-16">FAQ</h1>
        <div className="space-y-4">
          {questions.map((q, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                className="w-full py-6 flex justify-between items-center text-left"
                onClick={() => setOpenQuestion(openQuestion === idx ? -1 : idx)}
              >
                <span className="text-xl font-medium">{q.question}</span>
                {openQuestion === idx ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Plus className="w-6 h-6" />
                )}
              </button>
              {openQuestion === idx && (
                <div className="pb-6">
                  <p className="text-gray-600">{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }