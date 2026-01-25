"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import PracticePage from "../practice/page";

export default function HomePage() {
  const router = useRouter();
  const suggestions = [
    "昨日の復習をしよう！",
    "正負の数 基礎の確認 1",
    "正負の数 基礎の確認 1",
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] px-6 py-10">
      {/* ロゴ */}
      <div className="flex justify-center mb-10">
        <Image src="/Etudia_yoko.png" width={120} height={40} alt="Étudia" />
      </div>

      {/* タイトル */}
      <h2 className="text-xl font-bold mb-4">今日の提案</h2>

      {/* カード */}
      <div className="bg-[#CFE0F5] rounded-3xl py-10 px-4 mb-2.5 shadow-sm">
        {suggestions.map((text, index) => (
          <div key={index} className="flex items-center mb-4">
            <span className="text-2xl mr-3">✔️</span>
            <p className="font-semibold underline">{text}</p>
          </div>
        ))}

        {/* ボタン */}
        <button
          className="w-full bg-[#4A90E2] text-white py-3 rounded-3xl text-lg font-semibold active:scale-95 transition mt-4 "
          onClick={() => router.push("/practice")}
        >
          学習をスタート
        </button>
      </div>
    </div>
  );
}
