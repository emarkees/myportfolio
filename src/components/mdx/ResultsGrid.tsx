interface Result {
  val: string;
  sym?: string;
  label: string;
}

export function ResultsGrid({ results, data }: { results?: Result[], data?: string }) {
  let parsedResults: Result[] = [];
  if (data) {
    try { parsedResults = JSON.parse(data); } catch (e) {}
  } else if (results) {
    parsedResults = results;
  }

  if (!parsedResults || !parsedResults.length) return null;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-border border border-border rounded-md overflow-hidden mt-8 mb-12 not-prose">
      {parsedResults.map((res, i) => (
        <div key={i} className="bg-card p-6">
          <div className="font-mono text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-1.5">
            {res.val}
            {res.sym && <span className="text-accent text-lg md:text-xl">{res.sym}</span>}
          </div>
          <div className="text-xs text-muted-foreground tracking-[0.02em]">{res.label}</div>
        </div>
      ))}
    </div>
  );
}
