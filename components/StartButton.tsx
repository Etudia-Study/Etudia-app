"use client";

import { useRouter } from "next/navigation";

export default function StartButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/practice")}
      className="mt-4 w-full rounded-3xl bg-[#4A90E2] py-3 text-lg font-semibold text-white transition active:scale-95"
    >
      学習をスタート
    </button>
  );
}
