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
    "flex items-center justify-center h-[185px] w-[160px] rounded-[30px] text-[70px] font-bold transition";

  const defaultStyle =
    "bg-[#EEEEEE] text-[#B3B3B3] shadow-[0px_4px_0px_#B3B3B3]";

  const selectedStyle =
    "bg-[#DDDDDD] text-[#666666] shadow-[0px_4px_0px_#999999]";

  const correctStyle =
    "bg-[#CBEAD9] text-[#87C081] shadow-[0px_4px_0px_#87C081]";

  const wrongStyle = "bg-[#FEE2E2] text-[#991B1B] shadow-[0px_4px_0px_#EF4444]";

  let style = defaultStyle;

  // 未判定で選択中
  if (isCorrect === null && isSelected) {
    style = selectedStyle;
  }

  // 正解
  if (isCorrect === true) {
    style = correctStyle;
  }

  // 不正解（選んだものだけ）
  if (isCorrect === false && isSelected) {
    style = wrongStyle;
  }

  return (
    <button onClick={onClick} className={`${base} ${style}`}>
      {value}
    </button>
  );
}
