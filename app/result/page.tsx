"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ResultPage() {
  const [resultType, setResultType] = useState("");

  useEffect(() => {
    const result = localStorage.getItem("mbtiResult");
    if (result) setResultType(result);
  }, []);

  return (
    <div className="flex flex-col items-center p-6 pt-10">
      {/* ロゴ */}
      <div className="my-2">
        <Image src="/Etudia_yoko.png" alt="logo_yoko" width={260} height={94} />
      </div>

      {/* メッセージ */}
      <p className="text-center text-lg font-bold">
        アンケートの回答
        <br />
        ありがとうございました！
      </p>

      {/* イラスト */}
      <div className="my-6">
        <Image
          src="/result_kotu.png"
          alt="result-illust"
          width={260}
          height={260}
        />
      </div>

      {/* タイプ表示 */}
      <p className="text-center text-lg mb-10">
        あなたは<b>コツコツタイプ</b>です
      </p>

      {/* ボタン */}
      <button className="w-72 bg-blue-500 text-white text-lg py-3 rounded-full">
        学習を始める
      </button>
    </div>
  );
}
