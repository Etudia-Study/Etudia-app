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
"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
  title: string;
  questionId: string;
  currentAnswer: string | null;
  onAnswerChange: (questionId: string, choiceValue: string) => void;
}

export default function QuestionCard({
  title,
  questionId,
  currentAnswer,
  onAnswerChange,
}: Props) {
  return (
    <div className="bg-[#CFE2F8] rounded-3xl py-10 px-4 mb-2.5 shadow-sm">
      <p className="font-semibold mb-4">{title}</p>

      <RadioGroup
        value={currentAnswer || ""}
        onValueChange={(value) => onAnswerChange(questionId, value)}
      >
        <div className="flex items-center justify-between">
          {/* そう思わない → A */}
          <div className="flex items-center flex-col space-y-2 w-[100px]">
            <RadioGroupItem
              value="A"
              id={`${questionId}-A`}
            />
            <Label htmlFor={`${questionId}-A`}>そう思わない</Label>
          </div>

          {/* どちらでもない → B */}
          <div className="flex items-center flex-col space-y-2 w-[100px]">
            <RadioGroupItem
              value="B"
              id={`${questionId}-B`}
            />
            <Label htmlFor={`${questionId}-B`}>どちらでもない</Label>
          </div>

          {/* そう思う → C */}
          <div className="flex items-center flex-col space-y-2 w-[100px]">
            <RadioGroupItem
              value="C"
              id={`${questionId}-C`}
            />
            <Label htmlFor={`${questionId}-C`}>そう思う</Label>
          </div>
        </div>
      </RadioGroup>
    </div>
  );
}
