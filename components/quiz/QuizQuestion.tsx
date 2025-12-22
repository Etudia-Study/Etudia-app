"use client";

import { useState } from "react";

type Choice = {
  id: number;
  text: string;
  isCorrect: boolean;
};

const choices: Choice[] = [
  { id: 1, text: "before_action", isCorrect: true },
  { id: 2, text: "after_action", isCorrect: false },
  { id: 3, text: "around_action", isCorrect: false },
];

export default function QuizQuestion() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSelect = (choice: Choice) => {
    if (isAnswered) return;
    setSelectedId(choice.id);
    setIsAnswered(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">
        Q. コントローラの前処理に使うのはどれ？
      </h2>

      {choices.map((choice) => {
        const isSelected = selectedId === choice.id;

        let bg = "bg-white border-gray-300 hover:bg-gray-50";

        if (isAnswered) {
          if (choice.isCorrect) {
            bg = "bg-green-100 border-green-500";
          } else if (isSelected) {
            bg = "bg-red-100 border-red-500";
          }
        }

        return (
          <button
            key={choice.id}
            onClick={() => handleSelect(choice)}
            className={`w-full rounded-xl border px-4 py-3 text-left transition ${bg}`}
          >
            {choice.text}
          </button>
        );
      })}
    </div>
  );
}
