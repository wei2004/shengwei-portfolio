import { certifications, competitionRecord, coreAbilities, courses, experience, profile, resumeCertifications, tools, upcoming } from "../data";

/** One A4 page; the same markup prints to the downloadable PDF. */
export function Resume() {
  return (
    <div className="wrap resume">
      <div className="resume-tools">
        <h1>履歷</h1>
        <div className="actions">
          <a className="button" href={profile.resumePdf} download>下載 PDF</a>
          <button type="button" className="button button-ghost" onClick={() => window.print()}>列印</button>
        </div>
      </div>

      <article className="sheet" aria-label="洪聖崴履歷">
        <header className="sheet-head">
          <div>
            <p className="sheet-name">{profile.name}<span>{profile.englishName}</span></p>
            <p className="sheet-focus">{profile.focus}</p>
            <p className="sheet-statement">{profile.statement.join("")}</p>
            <p>{profile.education}・{profile.educationPeriod}・{profile.gpa}</p>
            <p><a href={"mailto:" + profile.email}>{profile.email}</a>・<a href={profile.github}>github.com/wei2004</a></p>
          </div>
          <img src={profile.portrait.src} alt={profile.portrait.alt} width={profile.portrait.width} height={profile.portrait.height} />
        </header>

        <p className="sheet-summary">{profile.homeIntro}</p>

        <ul className="sheet-core">
          {coreAbilities.map(c => <li key={c.title}><strong>{c.title}</strong>{c.evidence}</li>)}
        </ul>

        <section>
          <h2>競賽成果<small>皆為團隊獎</small></h2>
          {competitionRecord.map(item => (
            <div className="sheet-row" key={item.date}>
              <time>{item.date}</time>
              <div>
                <p><strong>{item.event}</strong>{item.host && "（" + item.host + "）"}<span className="award">{item.result}</span>{item.scale && <span className="sheet-scale">{item.scale}</span>}</p>
                <p className="sheet-role">作品：{item.work}｜我負責：{item.role}</p>
              </div>
            </div>
          ))}
          {upcoming.length > 0 && (
            <div className="sheet-row">
              <time>進行中</time>
              <div><p className="sheet-role">{upcoming.map(u => u.short + "（" + u.stage.replace("參賽中・", "") + "）").join("、")}</p></div>
            </div>
          )}
        </section>

        <section>
          <h2>工作與研究</h2>
          {experience.map(item => (
            <div className="sheet-row" key={item.title}>
              <time>{item.period}</time>
              <div>
                <p><strong>{item.title}</strong>｜{item.role}</p>
                <p className="sheet-role">{item.points.slice(0, 2).join("")}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="sheet-split">
          <div>
            <h2>技能</h2>
            <p><strong>熟練</strong>{tools.fluent.join("、")}</p>
            <p><strong>用過</strong>{tools.familiar.join("、")}</p>
            <p><strong>AI 工具</strong>{tools.ai.join("、")}</p>
            <h2>代表課程</h2>
            <p>{courses.slice(0, 2).flatMap(c => c.items.slice(0, 3)).map(name => name.replace(/\s*\d+$/, "")).join("、")}</p>
            <p>{profile.learning}</p>
          </div>
          <div>
            <h2>證照與語言</h2>
            <ul>{certifications.filter(c => resumeCertifications.includes(c.name)).map(c => <li key={c.name}>{c.name}{c.detail && "（" + c.detail + "）"}</li>)}</ul>
          </div>
        </section>
      </article>
    </div>
  );
}
