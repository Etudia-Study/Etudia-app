type AnswerCardProps = {
  value: string;
  isSelected: boolean;
  isCorrect: boolean | null;
  onClick: () => void;
};

export default function AnswerCard({
  value,
  isSelected,
  isCorrect,
  onClick,
}: AnswerCardProps) {
  const base =
    "flex items-center justify-center h-[185px] w-full rounded-[30px] text-[70px] font-bold transition";

  const defaultStyle =
    "bg-[#EEEEEE] text-[#B3B3B3] shadow-[0px_4px_0px_#B3B3B3]";

  const selectedStyle = "bg-[#DDD] text-[#666] shadow-[0px_4px_0px_#999]";

  const correctStyle =
    "bg-[#D1FAE5] text-[#065F46] shadow-[0px_4px_0px_#10B981]";

  const wrongStyle = "bg-[#FEE2E2] text-[#991B1B] shadow-[0px_4px_0px_#EF4444]";

  let style = defaultStyle;

  if (isCorrect === null && isSelected) style = selectedStyle;
  if (isCorrect === true) style = correctStyle;
  if (isCorrect === false && isSelected) style = wrongStyle;

  return (
    <button onClick={onClick} className={`${base} ${style}`}>
      {value}
    </button>
  );
}
