import { useState } from "react";
import { creditMix, semesterAverages, timelineRows } from "../data";

const start = Date.UTC(2023, 8);
const month = (value: string) => {
  const [y, m, d = 1] = value.split(".").map(Number);
  return Date.UTC(y, m - 1, d);
};

/** What ran side by side, from enrolment until now. */
export function LifeTimeline() {
  const end = Date.now();
  const at = (t: number) => ((t - start) / (end - start)) * 100;
  const years = [2024, 2025, 2026].map(y => ({ y, left: at(Date.UTC(y, 0)) }));

  return (
    <figure className="gantt">
      <div className="gantt-axis" aria-hidden="true">
        {years.map(({ y, left }) => <span key={y} style={{ left: left + "%" }}>{y}</span>)}
      </div>
      <ul>
        {timelineRows.map(row => (
          <li key={row.label}>
            <span className="gantt-label">{row.label}<small>{row.note}</small></span>
            <span className="gantt-track">
              {row.from && (() => {
                const from = at(month(row.from));
                const to = row.to ? at(month(row.to)) : 100;
                return <i className="gantt-bar" style={{ left: from + "%", width: to - from + "%" }} title={row.label + "：" + row.from + "–" + (row.to ?? "現在")} />;
              })()}
              {row.points?.map((p, i, all) => {
                // Dots days apart would hide each other, so the earlier one steps left.
                const next = all[i + 1];
                const crowded = next && at(month(next.date)) - at(month(p.date)) < 1.5;
                return (
                  <i
                    key={p.date + p.title}
                    className={"gantt-dot" + (p.top ? " is-top" : "")}
                    style={{ left: `calc(${at(month(p.date))}% - ${crowded ? 14 : 0}px)` }}
                    title={p.date + " " + p.title}
                  />
                );
              })}
            </span>
          </li>
        ))}
      </ul>
      <figcaption>橘點是第一名或金獎（團隊成果）。</figcaption>
    </figure>
  );
}

/** Credits by subject area, biggest first. */
export function CreditBars() {
  const total = creditMix.reduce((sum, c) => sum + c.credits, 0);
  const max = Math.max(...creditMix.map(c => c.credits));
  return (
    <figure className="chart">
      <h3>六學期修了什麼</h3>
      <ul className="bars">
        {creditMix.map(c => (
          <li key={c.area}>
            <span className="bar-label">{c.area}</span>
            <span className="bar-track"><i style={{ width: (c.credits / max) * 100 + "%" }} /></span>
            <span className="bar-value">{c.credits} 學分・{Math.round((c.credits / total) * 100)}%</span>
          </li>
        ))}
      </ul>
      <figcaption>共 {total} 學分。</figcaption>
    </figure>
  );
}

/** Term averages from the transcript. */
export function TermLine() {
  const [active, setActive] = useState<number | null>(null);
  const width = 640;
  const height = 220;
  const pad = { top: 26, right: 28, bottom: 30, left: 52 };
  const min = 80;
  const max = 95;
  const x = (i: number) => pad.left + (i * (width - pad.left - pad.right)) / (semesterAverages.length - 1);
  const y = (v: number) => height - pad.bottom - ((v - min) / (max - min)) * (height - pad.top - pad.bottom);
  const line = semesterAverages.map((s, i) => (i ? "L" : "M") + x(i) + " " + y(s.average)).join(" ");
  const peak = Math.max(...semesterAverages.map(s => s.average));
  const labelled = (i: number) => i === 0 || i === semesterAverages.length - 1 || semesterAverages[i].average === peak;

  return (
    <figure className="chart">
      <h3>各學期學業平均</h3>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="六學期學業平均：84.0、85.4、83.6、86.6、91.2、89.7" onMouseLeave={() => setActive(null)}>
        {[80, 85, 90, 95].map(v => (
          <g key={v}>
            <line className="chart-grid" x1={pad.left} x2={width - pad.right} y1={y(v)} y2={y(v)} />
            <text className="chart-axis" x={pad.left - 24} y={y(v) + 4} textAnchor="end">{v}</text>
          </g>
        ))}
        <path className="chart-line" d={line} />
        {semesterAverages.map((s, i) => (
          <g key={s.term}>
            <circle className="chart-dot" cx={x(i)} cy={y(s.average)} r={active === i ? 6 : 4.5} />
            <text className="chart-axis" x={x(i)} y={height - 8} textAnchor="middle">{s.term}</text>
            {(labelled(i) || active === i) && <text className="chart-value" x={x(i)} y={y(s.average) - 12} textAnchor="middle">{s.average.toFixed(1)}</text>}
            <rect
              className="chart-hit"
              x={x(i) - 40}
              y={0}
              width={80}
              height={height}
              onMouseEnter={() => setActive(i)}
            />
          </g>
        ))}
      </svg>
    </figure>
  );
}
