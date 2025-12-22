"use client";

import { useState } from "react";
import AnswerCard from "@/components/AnswerCard";

const ANSWERS = ["2", "4", "5", "10"];
const CORRECT_ANSWER = "4";

export default function PracticePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [judged, setJudged] = useState(false);

  const isCorrect = selected === CORRECT_ANSWER;

  return (
    <main className="min-h-screen bg-[#FAFBFC] px-6 pt-14 pb-40">
      {/* 問題文 */}
      <section className="mx-auto mb-8 w-[350px] text-left">
        <p className="mb-1 text-[18px] font-bold">問題1</p>
        <p className="text-base">次の式を展開したとき、x²の係数を求めよ。</p>
        <p className="mt-2 text-[20px] font-medium">(2x+3)²</p>
      </section>

      {/* 回答 */}
      <section className="mx-auto grid w-[350px] grid-cols-2 gap-y-[50px]">
        {ANSWERS.map((answer) => (
          <AnswerCard
            key={answer}
            value={answer}
            isSelected={selected === answer}
            isCorrect={judged ? answer === CORRECT_ANSWER : null}
            onClick={() => {
              if (!judged) setSelected(answer);
            }}
          />
        ))}
      </section>

      {/* 回答するボタン */}
      {!judged && (
        <div className="mx-auto mt-20 w-[340px]">
          <button
            disabled={!selected}
            onClick={() => setJudged(true)}
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

      {/* 判定パネル */}
      {judged && (
        <div
          className={`fixed bottom-0 left-0 w-full rounded-t-[24px] px-6 pt-6 pb-8
            ${isCorrect ? "bg-[#2C89C7]" : "bg-[#F6B8B8]"}`}
        >
          <div className="mx-auto w-[350px]">
            {/* 見出し */}
            <p
              className={`mb-2 text-[20px] font-bold ${
                isCorrect ? "text-white" : "text-[#333]"
              }`}
            >
              {isCorrect ? "正解 🎉" : "不正解"}
            </p>

            {/* 説明 */}
            <p
              className={`mb-6 text-[15px] leading-relaxed ${
                isCorrect ? "text-white" : "text-[#555]"
              }`}
            >
              {isCorrect ? (
                <>
                  ナイス！
                  <br />
                  (2x+3)² = 4x² + 12x + 9 より、 x²の係数は「4」です。
                </>
              ) : (
                <>
                  正解は「4」です。
                  <br />
                  (2x+3)² = 4x² + 12x + 9
                </>
              )}
            </p>

            {/* 次へ */}
            <button
              className={`h-[56px] w-full rounded-full font-bold
                ${
                  isCorrect
                    ? "bg-white text-[#2C89C7]"
                    : "bg-[#2C89C7] text-white"
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
