export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-5xl h-full m-auto">{children}</div>;
}
