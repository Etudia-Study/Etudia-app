"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const QUESTIONS = [
  { id: "q1", text: "勉強は毎日コツコツしますか？" },
  { id: "q2", text: "復習はしますか？" },
  { id: "q3", text: "数学は得意ですか？" },
];

export default function MbtiPage() {
  const router = useRouter();

  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  // LocalStorage 読み込み
  useEffect(() => {
    const saved = localStorage.getItem("mbtiAnswers");
    if (saved) {
      setAnswers(JSON.parse(saved));
    }
  }, []);

  // 選択時に LocalStorage 保存
  const handleSelect = (qid: string, value: string) => {
    const newAns = { ...answers, [qid]: value };
    setAnswers(newAns);
    localStorage.setItem("mbtiAnswers", JSON.stringify(newAns));
  };

  // 回答後の処理
  const handleSubmit = () => {
    // すべての質問に答えているかチェック
    const isFilled = Object.values(answers).every((v) => v !== "");
    if (!isFilled) {
      alert("全ての質問に回答してください");
      return;
    }

    // agree が2つ以上で「コツコツタイプ」にする例
    const agreeCount = Object.values(answers).filter(
      (v) => v === "agree"
    ).length;

    const resultType = agreeCount >= 2 ? "コツコツタイプ" : "マイペースタイプ";

    // 結果を LocalStorage に保存
    localStorage.setItem("resultType", resultType);

    // 結果ページへ遷移
    router.push("/result");
  };

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-md mx-auto">
        <div className="inline-block border px-4 py-1 rounded-full text-sm mb-4">
          全3問
        </div>
        <p className="text-gray-700 mb-6">
          以下の質問に対して
          <br />
          最も当てはまる回答を選択してください。
        </p>

        {QUESTIONS.map((q, index) => (
          <div
            key={q.id}
            className="bg-[#CFE2F8] rounded-3xl p-6 mb-6 shadow-sm"
          >
            <p className="font-semibold mb-4">
              {String(index + 1).padStart(2, "0")}. {q.text}
            </p>

            <div className="flex justify-between text-center">
              {/* そう思わない */}
              <div
                onClick={() => handleSelect(q.id, "disagree")}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-full border-4 ${
                    answers[q.id] === "disagree"
                      ? "border-blue-500"
                      : "border-black"
                  } bg-white`}
                />
                <span className="text-xs mt-2">そう思わない</span>
              </div>

              {/* どちらでもない */}
              <div
                onClick={() => handleSelect(q.id, "neutral")}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-full border-4 ${
                    answers[q.id] === "neutral"
                      ? "border-blue-500"
                      : "border-black"
                  } bg-white`}
                />
                <span className="text-xs mt-2">どちらでもない</span>
              </div>

              {/* そう思う */}
              <div
                onClick={() => handleSelect(q.id, "agree")}
                className="flex flex-col items-center cursor-pointer"
              >
                <div
                  className={`w-14 h-14 rounded-full border-4 ${
                    answers[q.id] === "agree"
                      ? "border-blue-500"
                      : "border-black"
                  } bg-white`}
                />
                <span className="text-xs mt-2">そう思う</span>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="w-full bg-[#4A90E2] text-white py-4 rounded-3xl text-lg shadow-lg active:scale-95 transition"
        >
          回答する
        </button>
      </div>
    </div>
  );
}
