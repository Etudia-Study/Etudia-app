"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionCard from "@/components/ui/QuestionCard";
import ProblemStatement from "@/components/ui/ProblemStatement";
// 回答ステートの型定義
interface AnswersState {
  [key: string]: string | null; // A / B / C / null
}

// 質問データ
const questions = [
  { id: "q1", title: "勉強はコツコツしますか？" },
  { id: "q2", title: "復習はしますか？" },
  { id: "q3", title: "数学は得意ですか？" },
];

export default function QuizPage() {
  const router = useRouter();

  // 回答ステートの初期化
  const initialAnswers: AnswersState = questions.reduce(
    (acc, q) => ({ ...acc, [q.id]: null }),
    {} as AnswersState
  );

  const [answers, setAnswers] = useState<AnswersState>(initialAnswers);

  // 回答変更処理
  const handleAnswerChange = (questionId: string, choiceValue: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: choiceValue,
    }));
  };

  // 結果を計算して遷移
  const calculateResultAndRedirect = () => {
    const allAnswered = questions.every((q) => answers[q.id] !== null);
    if (!allAnswered) {
      alert("全ての質問に回答してください！");
      return;
    }

    // A/B/C をカウント
    let countA = 0;
    let countB = 0;
    let countC = 0;

    Object.values(answers).forEach((answer) => {
      if (answer === "A") countA++;
      if (answer === "B") countB++;
      if (answer === "C") countC++;
    });

    // 🔥 新しいロジック：タイプ名を変更！
    let resultType = "";
    if (countC >= countB && countC >= countA) {
      resultType = "勤勉タイプ";
    } else if (countB >= countA && countB >= countC) {
      resultType = "ひらめきタイプ";
    } else {
      resultType = "即断即決タイプ";
    }

    // 遷移
    router.push(`/result?type=${encodeURIComponent(resultType)}`);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <ProblemStatement />
      {/* 質問カード */}
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          title={q.title}
          questionId={q.id}
          currentAnswer={answers[q.id]}
          onAnswerChange={handleAnswerChange}
        />
      ))}

      <button
        onClick={calculateResultAndRedirect}
        style={{
          maxWidth: "600px",
          padding: "20px",
          backgroundColor: "#4A90E2",
          color: "white",
          border: "none",
          borderRadius: "30px",
          cursor: "pointer",
          marginTop: "20px",
          width: "100%",
        }}
      >
        回答する
      </button>
    </div>
  );
}
