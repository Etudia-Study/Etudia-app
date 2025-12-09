// ProblemStatement.tsx (例)

import React, { FC } from "react";

// Propsの型を定義（ここでは children を受け取る）
type Props = {
  children?: React.ReactNode;
};

const ProblemStatement: FC<Props> = ({ children }) => {
  return (
    <div>
      <div>以下の質問に対して 最も当てはまる回答を選択してください。</div>
      {children}
    </div>
  );
};

export default ProblemStatement;
