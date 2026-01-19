"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import Image from "next/image";
import { Suspense } from "react";

function PracticeResultContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = Number(searchParams.get("score") ?? 0);
  const total = Number(searchParams.get("total") ?? 0);

  return (
    <div className="mx-auto min-h-screen w-[375px] bg-white px-6 pt-6">
      {/* ===== ヘッダー ===== */}
      <header className="mb-10 flex items-center justify-between">
        {/* × ボタン */}
        <button
          onClick={() => router.push("/home")}
          className="flex h-[30px] w-[30px] items-center justify-center"
        >
          <IoCloseSharp size={28} />
        </button>

        <p className="text-xl font-medium text-[#111]">結果</p>

        {/* 右側の余白調整用 */}
        <div className="h-[30px] w-[30px]" />
      </header>

      {/* ===== 結果イラスト（SVG） ===== */}
      <div className="mb-8 flex justify-center">
        <Image
          src="/practice-result.svg"
          alt="結果イラスト"
          width={180}
          height={180}
        />
      </div>

      {/* ===== 結果テキスト ===== */}
      <div className="mb-10 text-center">
        <p className="mb-2 text-lg font-bold text-[#111]">よくできました！</p>
        <p className="text-sm text-[#666]">問題をすべて解き終えました</p>
      </div>

      {/* ===== スコア表示 ===== */}
      <div className="mb-10 rounded-xl bg-[#F7F7F7] p-4 text-center">
        <p className="text-sm text-[#666]">正解数</p>
        <p className="text-2xl font-bold text-[#2C89C7]">
          {score} / {total}
        </p>
      </div>

      {/* ===== ボタン ===== */}
      <div className="flex flex-col gap-4">
        <button
          onClick={() => router.push("/practice")}
          className="h-[48px] rounded-xl bg-[#2C89C7] text-sm font-medium text-white"
        >
          もう一度挑戦する
        </button>

        <button
          onClick={() => router.push("/")}
          className="h-[48px] rounded-xl border border-[#DDD] text-sm font-medium text-[#111]"
        >
          ホームへ戻る
        </button>
      </div>
    </div>
  );
}

export default function PracticeResultPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <p>読み込み中...</p>
        </div>
      }
    >
      <PracticeResultContent />
    </Suspense>
  );
}
