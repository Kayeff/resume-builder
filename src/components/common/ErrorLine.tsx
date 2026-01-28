export default function ErrorLine({ error }: { error: string }) {
  return <span className="text-red-500 text-sm">{error}</span>;
}
