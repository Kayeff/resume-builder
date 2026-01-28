export default function WordsCount({
  para,
  totalwords,
}: {
  para: string;
  totalwords: number;
}) {
  const currentCount = para ? (para.trim().split(" ").length ?? 0) : 0;

  return (
    <span className="flex items-center justify-end text-sm text-foreground/50">
      {currentCount} / {totalwords}
    </span>
  );
}
