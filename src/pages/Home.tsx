import type { CSSProperties } from "react";
import { byId, experience, featuredWorks, flow, homeRecord, isStatusLabel, isTopAward, profile, stats, upcoming } from "../data";
import type { Project } from "../data";
import { InternalLink } from "../components/Icons";

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">{profile.homeEyebrow}</p>
          <h1 id="hero-title">{profile.name}<span>{profile.englishName}</span></h1>
          <p className="hero-statement">{profile.statement.map(s => <span key={s}>{s}</span>)}</p>
          <p className="hero-intro">{profile.homeIntro}</p>
          <div className="actions">
            <a className="button" href="#work">看代表作</a>
            <a className="text-link" href={profile.resumePdf} download>下載履歷 PDF</a>
          </div>
        </div>
        <aside className="hero-side">
          <img src={profile.portrait.src} alt={profile.portrait.alt} width={profile.portrait.width} height={profile.portrait.height} fetchPriority="high" />
          <dl>
            <div><dt>就讀</dt><dd>北科經營管理系大四</dd></div>
            <div><dt>工作</dt><dd>國大會計師事務所工讀與實習</dd></div>
            <div><dt>方向</dt><dd>商業分析、產品、行銷、AI 科技</dd></div>
            <div><dt>學程</dt><dd>科技法律學程（修習中）</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  );
}

/** The results, straight after the opening; every award is a team result. */
function AwardBand() {
  return (
    <section className="award-band" aria-labelledby="awards-title">
      <div className="wrap">
        <header>
          <h2 id="awards-title">競賽成果</h2>
          <ul>{stats.map(s => <li key={s.label}><strong>{s.value}</strong> {s.label}</li>)}</ul>
        </header>
        <ol className="band-timeline" style={{ "--n": flow.length } as CSSProperties}>
          {[...flow].reverse().map(f => {
            const p = byId(f.id);
            return (
              <li key={f.id} className={p.awards.some(isTopAward) ? "is-first" : undefined}>
                <a href={"/projects/" + p.id}>
                  <time>{p.date}</time>
                  {p.awards.map(a => <strong key={a}>{a}</strong>)}
                  <span>{p.title}</span>
                  <small>{f.short}</small>
                </a>
              </li>
            );
          })}
        </ol>
        {upcoming.length > 0 && (
          <p className="band-upcoming"><strong>進行中</strong>{upcoming.map(u => u.short + "（" + u.stage + (u.date.includes("決賽") ? "・" + u.date.slice(5, 10).replace(".", "/") : "") + "）").join("、")}</p>
        )}
      </div>
    </section>
  );
}

export function WorkCard({ project: p, eager, showRole = true }: { project: Project; eager?: boolean; showRole?: boolean }) {
  const cover = p.cover;
  const awards = p.awards.filter(a => a !== p.companion?.award);
  return (
    <article>
      <a className="work-cover" href={"/projects/" + p.id} tabIndex={-1} aria-hidden="true">
        <img src={cover.src} alt="" width={cover.width} height={cover.height} loading={eager ? "eager" : "lazy"} decoding="async" />
      </a>
      <div>
        <span className="work-awards">{awards.map(a => <span className={"award" + (isStatusLabel(a) ? " award-status" : "")} key={a}>{a}</span>)}</span>
        <h3>{p.title}</h3>
        <p>{p.tagline}</p>
        {showRole && <p className="work-role"><span>我負責</span>{p.roleTags.join("・")}</p>}
        <InternalLink href={"/projects/" + p.id}>看完整案例</InternalLink>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section className="section wrap" id="work" aria-labelledby="work-title">
      <header className="section-head">
        <p className="eyebrow">代表作</p>
        <h2 id="work-title">我實際做了什麼</h2>
        <p>獎項都是團隊成果。</p>
      </header>
      <div className="work-grid">{featuredWorks().map(p => <WorkCard key={p.id} project={p} showRole={false} />)}</div>
      <div className="work-all"><InternalLink href="/work">看全部作品</InternalLink></div>
    </section>
  );
}

/** Every competition with its result and my part; first places stand out. */
function RecordTable() {
  return (
    <section className="section wrap" id="record" aria-labelledby="record-title">
      <header className="section-head">
        <p className="eyebrow">競賽紀錄</p>
        <h2 id="record-title">每場比賽，我負責什麼</h2>
      </header>
      <table className="record-table">
        <thead>
          <tr><th scope="col">比賽與作品</th><th scope="col">類別與日期</th><th scope="col">團隊成果</th><th scope="col">我負責</th></tr>
        </thead>
        <tbody>
          {homeRecord.map(r => {
            const p = byId(r.id);
            const cover = r.cover ?? p.cover;
            const first = isTopAward(r.result);
            return (
              <tr key={r.work + r.date} className={first ? "is-first" : undefined}>
                <td>
                  <div className="record-work">
                    <img src={cover.src} alt="" width={cover.width} height={cover.height} loading="lazy" decoding="async" />
                    <div><a href={r.href}>{r.event}</a>{r.host && <span>{r.host}</span>}<span className="record-entry">作品：{r.work}</span></div>
                  </div>
                </td>
                <td><span className="tag">{p.category}</span><span className="record-date">{r.date}</span></td>
                <td><span className={"award" + (first ? " award-solid" : "")}>{r.result}</span>{r.scale && <span className="record-scale">{r.scale}</span>}</td>
                <td>{r.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

function Experience() {
  return (
    <section className="section wrap" aria-labelledby="exp-title">
      <header className="section-head">
        <p className="eyebrow">工作與研究</p>
        <h2 id="exp-title">兩年的帳務實務，練出對數字的耐心</h2>
      </header>
      <div className="home-firm">
        <div>
          <p className="exp-period">2024.07 起・國大會計師事務所・工讀與實習</p>
          <h3>一間營建業公司的帳，從傳票到日記帳由我一手包辦</h3>
          <p>整理傳票、登打、營業稅 401 申報、過帳、沖帳到印日記帳都自己做；並和 AI 協作寫腳本，處理立票據與沖帳。</p>
          <InternalLink href="/about">看完整工作內容</InternalLink>
        </div>
        <p className="home-firm-stat"><strong>800+ 張</strong><span>每期（兩個月）三聯式發票</span></p>
      </div>
      <div className="exp-grid exp-grid-two">
        {experience.filter(e => e.onHome && e.title !== "國大會計師事務所").map(e => (
          <article className="exp-card" key={e.title}>
            <p className="exp-period">{e.period}</p>
            <h3>{e.title}</h3>
            <p className="exp-role">{e.role}</p>
            <ul>{e.points.map(pt => <li key={pt}>{pt}</li>)}</ul>
            {e.href && <InternalLink href={e.href}>看專題內容</InternalLink>}
          </article>
        ))}
      </div>
      <InternalLink href="/about">看完整經歷與證照</InternalLink>
    </section>
  );
}

export function Home() {
  return (
    <>
      <Hero />
      <AwardBand />
      <Work />
      <Experience />
      <RecordTable />
    </>
  );
}
