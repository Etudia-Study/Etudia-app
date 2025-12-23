type Props = {
  suggestions: string[];
};

export default function SuggestionList({ suggestions }: Props) {
  return (
    <>
      <h2 className="mb-4 text-xl font-bold">今日の提案</h2>

      <div className="rounded-3xl bg-[#CFE0F5] p-6 py-10 shadow-sm">
        {suggestions.map((text, index) => (
          <div key={index} className="mb-4 flex items-center">
            <span className="mr-3 text-2xl">✔️</span>
            <p className="font-semibold underline">{text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
