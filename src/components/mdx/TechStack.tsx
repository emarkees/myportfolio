interface TechGroup {
  title: string;
  items: string[];
  accentColor: string;
  accentItems?: string[];
}

export function TechStack({ groups, data }: { groups?: TechGroup[], data?: string }) {
  let parsedGroups: TechGroup[] = [];
  if (data) {
    try { parsedGroups = JSON.parse(data); } catch (e) {}
  } else if (groups) {
    parsedGroups = groups;
  }

  if (!parsedGroups || !parsedGroups.length) return null;

  return (
    <div className="flex flex-col gap-6 not-prose mt-8 mb-16">
      {parsedGroups.map((group, i) => (
        <div key={i}>
          <div className="font-mono text-[10px] text-muted-foreground tracking-[0.1em] uppercase mb-3">{group.title}</div>
          <div className="flex flex-wrap gap-2">
            {group.items.map(t => {
              const isAccent = group.accentItems?.includes(t);
              if (isAccent) {
                return (
                  <span key={t} className="font-mono text-xs font-medium px-4 py-1.5 rounded border tracking-[0.02em]"
                    style={{
                      color: group.accentColor,
                      backgroundColor: `${group.accentColor}1A`,
                      borderColor: `${group.accentColor}4D`
                    }}>
                    {t}
                  </span>
                )
              }
              return (
                <span key={t} className="font-mono text-xs font-medium px-4 py-1.5 rounded bg-card border border-border text-muted-foreground tracking-[0.02em]">
                  {t}
                </span>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
