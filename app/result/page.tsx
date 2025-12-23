"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const resultType = searchParams.get("type") || "不明";

  // タイプごとの表示内容
  const typeInfo: Record<string, { label: string; image: string }> = {
    勤勉タイプ: {
      label: "あなたは「勤勉タイプ」です！",
      image: "/result_kotu.png",
    },
    ひらめきタイプ: {
      label: "あなたは「ひらめきタイプ」です！",
      image: "/result_hirameki1.png",
    },
    即断即決タイプ: {
      label: "あなたは「即断即決タイプ」です！",
      image: "/result_sokudan.png",
    },
  };

  // デフォルト（該当なし）
  const display = typeInfo[resultType] || {
    label: "結果が取得できませんでした",
    image: "/result_default.png",
  };

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
          src={display.image}
          alt="result-illust"
          width={260}
          height={260}
        />
      </div>

      {/* タイプ表示 */}
      <p className="text-center text-lg mb-10 font-semibold">{display.label}</p>

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
