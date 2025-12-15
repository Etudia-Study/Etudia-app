// ProblemStatement.tsx (例)

import React, { FC } from "react";

// Propsの型を定義（ここでは children を受け取る）
type Props = {
  children?: React.ReactNode;
};

const ProblemStatement: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="inline-block border px-4 py-1 rounded-full text-sm mb-4 mt-5">
        全3問
      </div>
      <div className="mb-5">
        以下の質問に対して
        <br />
        最も当てはまる回答を選択してください。
      </div>
    </div>
  );
};

export default ProblemStatement;
