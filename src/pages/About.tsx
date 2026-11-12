import { aboutAbilities, certifications, resumeCertifications, experience, experienceHighlights, firmFlow, firmStats, otherTools, profile } from "../data";
import { LifeTimeline } from "../components/Charts";
import { InternalLink } from "../components/Icons";

const entryImages: Record<string, { src: string; alt: string; width: number; height: number }> = {
  "S-O-R 消費者行為專題": { src: "/images/work/research/fieldwork.jpg", alt: "誠品生活新店裕隆城實地探訪", width: 1108, height: 1477 },
  "求職 Agent 工作台": { src: "/images/work/agent/job-desk.jpg", alt: "求職工作台畫面", width: 1600, height: 659 },
};

export function Entry({ title }: { title: string }) {
  const e = experience.find(item => item.title === title)!;
  const h = experienceHighlights[title];
  const image = entryImages[title];
  return (
    <article className="entry">
      {image ? (
        <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />
      ) : (
        <div className="entry-tile"><strong>{h.value}</strong><span>{h.label}</span></div>
      )}
      <div>
        <p className="exp-period">{e.period}・{e.title}</p>
        <h3>{h.headline}</h3>
        <ul>{e.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
        {e.href && <InternalLink href={e.href}>{e.linkLabel ?? "看專題內容"}</InternalLink>}
      </div>
    </article>
  );
}

export function Firm() {
  const e = experience.find(item => item.title === "國大會計師事務所")!;
  const h = experienceHighlights[e.title];
  return (
    <div className="firm">
      <p className="exp-period">{e.period}・{e.title}・{e.role}</p>
      <h3>{h.headline}</h3>
      <dl className="stat-row">
        {firmStats.map(s => <div key={s.label}><dd>{s.value}</dd><dt>{s.label}</dt></div>)}
      </dl>
      <ul className="firm-points">{e.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
      <h4 id="firm-flow">一間公司的帳，我一手包辦</h4>
      <ol className="stepper" aria-labelledby="firm-flow">
        {firmFlow.map((s, i) => (
          <li key={s.title} className={s.key ? "is-key" : undefined}>
            <span aria-hidden="true">{i + 1}</span>
            <strong>{s.title}</strong>
            <p>{s.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function About() {
  return (
    <div className="wrap about">
      <header className="page-head">
        <p className="eyebrow">關於我</p>
        <h1>經歷</h1>
        {profile.about.map(p => <p key={p}>{p}</p>)}
        <p className="seeking">{profile.seeking}</p>
      </header>

      <section className="about-overview" aria-labelledby="overview-title">
        <h2 id="overview-title">這幾年同時在做的事</h2>
        <LifeTimeline />
      </section>

      <section className="about-section" aria-labelledby="abilities-title">
        <h2 id="abilities-title">三種能力</h2>
        <div>
          <div className="strengths">
            {aboutAbilities.map((s, i) => (
              <article className="strength" key={s.title}>
                <span className="strength-index" aria-hidden="true">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p className="ability-tools">{s.tools}</p>
                <p>{s.detail}</p>
                <ul>
                  {s.links.map(l => <li key={l.label}><InternalLink href={l.href}>{l.label}</InternalLink></li>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="hint other-tools">其他常用工具：{otherTools}</p>
        </div>
      </section>

      <section className="about-section" aria-labelledby="work-title">
        <h2 id="work-title">工作</h2>
        <Firm />
      </section>

      <section className="about-section" aria-labelledby="research-title">
        <h2 id="research-title">個人專案與研究</h2>
        <ul className="research-list">
          {experience.filter(e => e.title !== "國大會計師事務所").map(e => (
            <li key={e.title}>
              <time>{e.period}</time>
              <div>
                <strong>{e.title}</strong>
                <span>{e.role}</span>
                <p>{e.points[0]}</p>
              </div>
              <InternalLink href={e.href ?? "/school"}>{e.linkLabel ?? (e.href ? "看專題內容" : "看學校與研究")}</InternalLink>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-section" aria-labelledby="cert-title">
        <h2 id="cert-title">證照與語言</h2>
        <ul className="cert-key">
          {certifications.filter(c => resumeCertifications.includes(c.name)).map(c => <li key={c.name}><strong>{c.name}</strong>{c.detail && <span>{c.detail}</span>}</li>)}
        </ul>
        <h3 className="cert-more-title">其他證照</h3>
        <ul className="cert-more">
          {certifications.filter(c => !resumeCertifications.includes(c.name)).map(c => <li key={c.name}>{c.name}</li>)}
        </ul>
      </section>
    </div>
  );
}
