import { useState } from "react";
import { allWorks, categories } from "../data";
import type { Category } from "../data";
import { WorkCard } from "./Home";

export function WorkPage() {
  const [filter, setFilter] = useState<Category | "全部">("全部");
  const shown = allWorks.filter(p => filter === "全部" || p.category === filter);

  return (
    <div className="wrap work-page">
      <header className="page-head">
        <p className="eyebrow">作品</p>
        <h1>全部作品</h1>
        <p>獎項都是團隊成果。</p>
      </header>
      <div className="work-filter" role="group" aria-label="依分類篩選作品">
        {(["全部", ...categories] as const).map(c => (
          <button key={c} type="button" aria-pressed={c === filter} onClick={() => setFilter(c)}>{c}</button>
        ))}
      </div>
      <h2 className="visually-hidden">作品列表</h2>
      <div className="work-grid">{shown.map((p, i) => <WorkCard key={p.id} project={p} eager={i < 3} />)}</div>
    </div>
  );
}
