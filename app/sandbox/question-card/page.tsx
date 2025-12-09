// pages/quiz.tsx (または pages/index.js)

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import QuestionCard from "@/components/ui/QuestionCard"; // パスは環境に合わせて調整してください

// 💡 回答ステートの型定義
interface AnswersState {
  // キーは質問ID (string) で、値は回答 (string: 'A', 'B', 'C') または null
  [key: string]: string | null;
}

// 質問データの定義
const questions = [
  { id: "q1", title: "あなたは積極的に人と交流するのが好きですか？" },
  { id: "q2", title: "物事を決める際は、論理よりも直感を優先しますか？" },
  { id: "q3", title: "計画を立てるよりも、臨機応変に行動する方が得意ですか？" },
];

export default function QuizPage() {
  const router = useRouter();

  // 1. 回答を保存するためのステートを初期化
  // 💡 reduceの初期値に AnswersState 型を明示的に指定してエラーを回避
  const initialAnswers: AnswersState = questions.reduce(
    (acc, q) => ({ ...acc, [q.id]: null }),
    {} as AnswersState // TypeScriptに型を明示
  );

  // 💡 useState に AnswersState 型を渡してエラーを回避
  const [answers, setAnswers] = useState<AnswersState>(initialAnswers);

  // 2. QuestionCardから呼び出される回答更新関数
  // 💡 パラメーターに string 型を明示的に指定してエラーを回避
  const handleAnswerChange = (questionId: string, choiceValue: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: choiceValue,
    }));
  };

  // 3. 結果を計算し、遷移する関数
  const calculateResultAndRedirect = () => {
    // 回答がすべて完了しているかチェック
    const allAnswered = questions.every((q) => answers[q.id] !== null);

    if (!allAnswered) {
      alert("全ての質問に回答してください！");
      return;
    }

    // A, B, C のカウントロジック (簡略化した例)
    let countA = 0;
    let countB = 0;
    let countC = 0;

    // 💡 Object.values(answers) は string | null の配列になるため、
    // nullチェックをしながらカウントします。
    Object.values(answers).forEach((answer) => {
      if (answer === "A") countA++;
      else if (answer === "B") countB++;
      else if (answer === "C") countC++;
    });

    let resultType = "";
    if (countA >= countB && countA >= countC) {
      resultType = "TYPE_ALPHA";
    } else if (countB > countA && countB >= countC) {
      resultType = "TYPE_BETA";
    } else {
      resultType = "TYPE_GAMMA";
    }

    router.push(`/result?type=${resultType}`);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>MBTI風 アンケート</h1>

      {/* 質問カードのレンダリング */}
      {questions.map((q) => (
        <QuestionCard
          key={q.id}
          title={q.title}
          questionId={q.id}
          // 💡 answers[q.id] は AnswersState 型により string | null であることが保証され、エラーが解消
          currentAnswer={answers[q.id]}
          onAnswerChange={handleAnswerChange}
        />
      ))}

      <button
        onClick={calculateResultAndRedirect}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        結果を見る！
      </button>
    </div>
  );
}
