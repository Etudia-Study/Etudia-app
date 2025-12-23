"use client";

import LogoHeader from "@/components/LogoHeader";
import SuggestionList from "@/components/SuggestionList";
import StartButton from "@/components/StartButton";

export default function HomePage() {
  const suggestions = [
    "昨日の復習をしよう！",
    "正負の数 基礎の確認 1",
    "正負の数 基礎の確認 1",
  ];

  return (
    <div className="min-h-screen bg-[#F7F9FC] px-6 py-10">
      <LogoHeader />
      <SuggestionList suggestions={suggestions} />
      <StartButton />
    </div>
  );
}
