/** One arrow for every link that leaves the site. */
export function ExternalIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
      <path d="M5.5 3.5h7v7M12.5 3.5 4 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Arrow for links that stay on the site. */
export function ArrowIcon() {
  return (
    <svg className="icon" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">
      <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ExternalLink({ href, children, className = "text-link" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children}
      <ExternalIcon />
      <span className="visually-hidden">（開新視窗）</span>
    </a>
  );
}

export function InternalLink({ href, children, className = "text-link" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a className={className} href={href}>
      {children}
      <ArrowIcon />
    </a>
  );
}

/** Line icons for the job desk's three guard rules. */
export function RuleIcon({ kind }: { kind: "lock" | "person" | "once" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg className="rule-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false">
      {kind === "lock" && (<><rect x="5" y="11" width="14" height="9" rx="2" {...common} /><path d="M8 11V8a4 4 0 0 1 8 0v3" {...common} /></>)}
      {kind === "person" && (<><circle cx="9" cy="8" r="3.5" {...common} /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" {...common} /><path d="m15.5 11 2 2 4-4" {...common} /></>)}
      {kind === "once" && (<><rect x="8" y="8" width="12" height="12" rx="2" {...common} /><path d="M4 16V6a2 2 0 0 1 2-2h10" {...common} /><path d="M3 3l18 18" {...common} /></>)}
    </svg>
  );
}

/** Line icons for the home page facts: school, work, direction, programme. */
export function FactIcon({ kind }: { kind: "school" | "work" | "aim" | "law" }) {
  const c = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg className="fact-icon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" focusable="false">
      {kind === "school" && (<><path d="M2 9l10-5 10 5-10 5z" {...c} /><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" {...c} /></>)}
      {kind === "work" && (<><rect x="3" y="7" width="18" height="13" rx="2" {...c} /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" {...c} /></>)}
      {kind === "aim" && (<><circle cx="12" cy="12" r="9" {...c} /><path d="m15.5 8.5-2 5-5 2 2-5z" {...c} /></>)}
      {kind === "law" && (<><path d="M12 4v16M8 20h8M5 7h14" {...c} /><path d="M5 7l-2.5 6a2.5 2.5 0 0 0 5 0zM19 7l-2.5 6a2.5 2.5 0 0 0 5 0z" {...c} /></>)}
    </svg>
  );
}
