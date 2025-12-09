// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

// interface Props {
//   title: string;
// }

// export default function QuestionCard({ title }: Props) {
//   return (
//     <div className="bg-[#CFE2F8] rounded-3xl py-10 px-4 mb-2.5 shadow-sm">
//       <p className="font-semibold mb-4">{title}</p>

//       <RadioGroup>
//         <div className="flex items-center justify-between">
//           {/* そう思わない */}
//           <div className="flex items-center flex-col space-y-2 w-[100px]">
//             <RadioGroupItem value="option-one" id="option-one" />
//             <Label htmlFor="option-one">そう思わない</Label>
//           </div>

//           {/* どちらでもない */}
//           <div className="flex items-center flex-col space-y-2 w-[100px]">
//             <RadioGroupItem value="option-two" id="option-one" />
//             <Label htmlFor="option-one">どちらでもない</Label>
//           </div>

//           {/* そう思う */}
//           <div className="flex items-center flex-col space-y-2 w-[100px]">
//             <RadioGroupItem value="option-three" id="option-one" />
//             <Label htmlFor="option-one">そう思う</Label>
//           </div>
//         </div>
//       </RadioGroup>
//     </div>
//   );
// }
// QuestionCard.tsx

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  title: string;
  // 質問の識別子（例: 'q1', 'q2'）
  questionId: string;
  // 現在の回答の値 (選択状態を反映するため)
  currentAnswer: string | null;
  // 親コンポーネントに回答を伝えるための関数
  onAnswerChange: (questionId: string, choiceValue: string) => void;
}

export default function QuestionCard({
  title,
  questionId,
  currentAnswer,
  onAnswerChange,
}: Props) {
  // 選択肢の値 (さきほどのロジックに合わせて 'A', 'B', 'C' に変更します)
  // 📝 ポイント: 値をロジックに合わせて意味のあるものに変更することが重要です
  const choices = [
    { value: "A", label: "そう思わない" },
    { value: "B", label: "どちらでもない" },
    { value: "C", label: "そう思う" },
  ];

  return (
    <div className="bg-[#CFE2F8] rounded-3xl py-10 px-4 mb-2.5 shadow-sm">
      <p className="font-semibold mb-4">{title}</p>

      {/* onValueChange: 選択された値が変更されるたびに呼び出されます */}
      <RadioGroup
        value={currentAnswer || ""} // currentAnswerを空文字列にフォールバック
        onValueChange={(value) => onAnswerChange(questionId, value)}
      >
        <div className="flex items-center justify-between">
          {choices.map((choice) => (
            <div
              key={choice.value}
              className="flex items-center flex-col space-y-2 w-[100px]"
            >
              {/* ⚠️ 注意: id は質問と選択肢の組み合わせでユニークにしてください */}
              <RadioGroupItem
                value={choice.value}
                id={`${questionId}-${choice.value}`}
              />
              <Label htmlFor={`${questionId}-${choice.value}`}>
                {choice.label}
              </Label>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
}
