"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AnswerCard from "@/components/AnswerCard";
import { IoCloseSharp } from "react-icons/io5";

/* ================= 問題データ ================= */
const QUESTIONS = [
  {
    title: "次の式を展開したとき、x²の係数を求めよ。",
    formula: "(2x+3)²",
    answers: ["2", "4", "5", "10"],
    correct: "4",
    explanation: "(2x+3)² = 4x² + 12x + 9 より、x²の係数は「4」です。",
  },
  {
    title: "次の式を展開したとき、x²の係数を求めよ。",
    formula: "(x+5)²",
    answers: ["1", "5", "10", "25"],
    correct: "1",
    explanation: "(x+5)² = x² + 10x + 25 より、x²の係数は「1」です。",
  },
  {
    title: "次の式を展開したとき、x²の係数を求めよ。",
    formula: "(3x-1)²",
    answers: ["3", "6", "9", "-6"],
    correct: "9",
    explanation: "(3x-1)² = 9x² - 6x + 1 より、x²の係数は「9」です。",
  },
  {
    title: "次の式を展開したとき、x²の係数を求めよ。",
    formula: "(x-4)(x+4)",
    answers: ["1", "-16", "8", "0"],
    correct: "1",
    explanation: "(x-4)(x+4) = x² - 16 より、x²の係数は「1」です。",
  },
  {
    title: "次の式を展開したとき、x²の係数を求めよ。",
    formula: "(2x-5)(x+1)",
    answers: ["2", "-5", "-3", "1"],
    correct: "2",
    explanation: "(2x-5)(x+1) = 2x² - 3x - 5 より、x²の係数は「2」です。",
  },

  {
    title: "次の式を展開したとき、x²の係数を求めよ。",
    formula: "(x+2)(x+7)",
    answers: ["1", "9", "14", "2"],
    correct: "1",
    explanation: "(x+2)(x+7) = x² + 9x + 14 より、x²の係数は「1」です。",
  },
  {
    title: "次の式を展開したとき、x²の係数を求めよ。",
    formula: "(4x+1)²",
    answers: ["4", "8", "16", "1"],
    correct: "16",
    explanation: "(4x+1)² = 16x² + 8x + 1 より、x²の係数は「16」です。",
  },
  {
    title: "次の式を展開したとき、x²の係数を求めよ。",
    formula: "(x-6)²",
    answers: ["1", "-12", "36", "6"],
    correct: "1",
    explanation: "(x-6)² = x² - 12x + 36 より、x²の係数は「1」です。",
  },
  {
    title: "次の式を展開したとき、x²の係数を求めよ。",
    formula: "(5x-2)(x-3)",
    answers: ["5", "-15", "-11", "1"],
    correct: "5",
    explanation: "(5x-2)(x-3) = 5x² - 17x + 6 より、x²の係数は「5」です。",
  },
  {
    title: "次の式を展開したとき、x²の係数を求めよ。",
    formula: "(2x+1)(3x+4)",
    answers: ["5", "6", "8", "2"],
    correct: "6",
    explanation: "(2x+1)(3x+4) = 6x² + 11x + 4 より、x²の係数は「6」です。",
  },
];

export default function PracticePage() {
  const router = useRouter();
  const [correctCount, setCorrectCount] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [judged, setJudged] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const total = QUESTIONS.length;
  const progress = ((currentIndex + 1) / total) * 100;

  const isCorrect = selected === currentQuestion.correct;

  const [showExitModal, setShowExitModal] = useState(false);

  const judgeAnswer = () => {
    setJudged(true);

    if (selected === QUESTIONS[currentIndex].correct) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  /* ================= 次の問題へ ================= */
  const goNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected(null);
      setJudged(false);
    } else {
      router.push(
        `/practiceresult?score=${correctCount}&total=${QUESTIONS.length}`
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#FAFBFC] px-6 pt-10 pb-40">
      {/* ================= ヘッダー ================= */}
      <header className="mx-auto mb-6 flex w-[327px] items-center gap-4">
        <button
          onClick={() => setShowExitModal(true)}
          className="flex h-[30px] w-[30px] items-center justify-center"
        >
          <IoCloseSharp size={30} />
        </button>

        <div className="relative h-[4px] flex-1 rounded-full bg-[#E5E5E5]">
          <div
            className="h-full rounded-full bg-[#2C89C7]"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      {/* ================= 問題文 ================= */}
      <section className="mx-auto mb-8 w-[350px] text-left">
        <p className="mb-1 text-[18px] font-bold">問題{currentIndex + 1}</p>
        <p className="text-base">{currentQuestion.title}</p>
        <p className="mt-2 text-[20px] font-medium">
          {currentQuestion.formula}
        </p>
      </section>

      {/* ================= 回答 ================= */}
      <section className="mx-auto grid w-[350px] grid-cols-2 gap-5">
        {currentQuestion.answers.map((answer) => (
          <AnswerCard
            key={answer}
            value={answer}
            isSelected={selected === answer}
            isCorrect={judged ? answer === currentQuestion.correct : null}
            onClick={() => {
              if (!judged) setSelected(answer);
            }}
          />
        ))}
      </section>

      {/* ================= 中断確認モーダル ================= */}
      {showExitModal && (
        <>
          {/* オーバーレイ */}
          <div
            className="fixed inset-0 z-40 bg-black/40"
            onClick={() => setShowExitModal(false)}
          />

          {/* ボトムシート */}
          <div className="fixed bottom-0 left-0 z-50 w-full rounded-t-[24px] bg-white px-6 pt-3 pb-8">
            <div className="mx-auto w-[350px]">
              {/* ハンドル */}
              <div className="mx-auto mb-4 h-[4px] w-[40px] rounded-full bg-[#D9D9D9]" />

              {/* テキスト */}
              <p className="mb-2 text-[18px] font-bold text-[#111]">
                中断しますか？
              </p>
              <p className="mb-8 text-[14px] leading-relaxed text-[#666]">
                ここまでの学習状況は保存されません
              </p>

              {/* ボタン */}
              <div className="flex flex-col gap-4">
                {/* 中断する */}
                <button
                  onClick={() => setShowExitModal(false)}
                  className="h-[56px] w-full rounded-full bg-[#2C89C7] font-bold text-white shadow-[0px_4px_0px_#2C89C7_inset]"
                >
                  学習を続ける
                </button>

                {/* 続ける */}
                <button
                  onClick={() => router.push("/")}
                  className="h-[56px] w-full rounded-full bg-white font-bold text-[#DB2F2F]"
                >
                  中断する
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ================= 回答するボタン ================= */}
      {!judged && (
        <div className="mx-auto mt-20 w-[340px]">
          <button
            disabled={!selected}
            onClick={judgeAnswer}
            className={`h-[64px] w-full rounded-full font-bold
              ${
                selected
                  ? "bg-[#2C89C7] text-[#FAFBFC] shadow-[0px_4px_0px_#2371A5]"
                  : "bg-[#D9D9D9] text-[#B3B3B3] shadow-[0px_4px_0px_#B3B3B3]"
              }`}
          >
            回答する
          </button>
        </div>
      )}

      {/* ================= 判定パネル ================= */}
      {judged && (
        <div
          className={`fixed bottom-0 left-0 w-full rounded-t-[24px] px-6 pt-6 pb-8
            ${isCorrect ? "bg-[#2C89C7]" : "bg-[#F6B8B8]"}`}
        >
          <div className="mx-auto w-[350px]">
            <p
              className={`mb-2 text-[20px] font-bold ${
                isCorrect ? "text-white" : "text-[#333]"
              }`}
            >
              {isCorrect ? "正解 🎉" : "不正解"}
            </p>

            <p
              className={`mb-6 text-[15px] leading-relaxed ${
                isCorrect ? "text-white" : "text-[#555]"
              }`}
            >
              {currentQuestion.explanation}
            </p>

            <button
              onClick={goNext}
              className={`h-[56px] w-full rounded-full font-bold
                ${
                  isCorrect
                    ? "bg-white text-[#2C89C7]"
                    : "bg-[#DB2F2F] text-white shadow-[0px_4px_0px_#9E1010]"
                }`}
            >
              次へ進む
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
