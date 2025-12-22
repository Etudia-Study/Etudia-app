"use client";

import { useState } from "react";
import AnswerCard from "@/components/AnswerCard";

const ANSWERS = ["2", "4", "5", "10"];
const CORRECT_ANSWER = "4";

export default function PracticePage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [judged, setJudged] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAFBFC] px-6 pt-14">
      {/* 問題文 */}
      <section className="mx-auto mb-8 w-[350px] text-left">
        <p className="text-[18px] font-bold mb-1">問題1</p>
        <p className="text-base">次の式を展開したとき、x²の係数を求めよ。</p>
        <p className="mt-2 text-[20px] font-medium">(2x+3)²</p>
      </section>

      {/* 回答 */}
      <section className="mx-auto grid w-[350px] grid-cols-2 gap-x-0 gap-y-5">
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
      <div className="mx-auto mt-20 w-[340px]">
        <button
          disabled={!selected || judged}
          onClick={() => setJudged(true)}
          className={`
      w-full h-[64px] rounded-full font-bold
      ${
        selected
          ? "bg-[#2C89C7] text-[#FAFBFC] shadow-[0px_4px_0px_#2371A5]"
          : "bg-[#D9D9D9] text-[#B3B3B3] shadow-[0px_4px_0px_#B3B3B3]"
      }
    `}
        >
          回答する
        </button>
      </div>
    </main>
  );
}
