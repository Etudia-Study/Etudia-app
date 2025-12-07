"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();
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
      <button
        onClick={() => router.push("/home")}
        className="w-full bg-[#4A90E2] text-white py-4 rounded-3xl text-lg shadow-lg active:scale-95 transition max-w-md"
      >
        学習を始める
      </button>
    </div>
  );
}
