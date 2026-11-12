import { courseAreas, lawGroups, profile } from "../data";
import { CreditBars, TermLine } from "../components/Charts";
import { Entry } from "./About";

export function School() {
  return (
    <div className="wrap about">
      <header className="page-head">
        <p className="eyebrow">學校</p>
        <h1>學校與研究</h1>
        <p><strong>{profile.education}</strong>・{profile.educationPeriod}・{profile.gpa}・{profile.learning}</p>
      </header>

      <section className="about-section" aria-labelledby="grades-title">
        <h2 id="grades-title">修課與成績</h2>
        <div className="chart-pair">
          <CreditBars />
          <TermLine />
        </div>
      </section>

      <section className="about-section" aria-labelledby="courses-title">
        <h2 id="courses-title">代表課程</h2>
        <div className="course-list">
          {courseAreas.map(c => (
            <article key={c.area}>
              <h3>{c.area}</h3>
              <p>{c.courses}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section" aria-labelledby="law-title">
        <h2 id="law-title">科技法律學程</h2>
        <div className="law">
          <p className="law-lead">在商管背景之外補上法律視角：看一個 AI 或數位服務時，除了做不做得出來，也看權利和責任落在誰身上。</p>
          <dl className="stat-row">
            <div><dd>10 門</dd><dt>已完成的法律課程</dt></div>
            <div><dd>21 學分</dd><dt>已取得</dt></div>
            <div><dd>2 門</dd><dt>修習中</dt></div>
          </dl>
          <div className="law-groups">
            {lawGroups.map(g => (
              <div key={g.title}>
                <h3>{g.title}</h3>
                <ul>{g.courses.map(c => <li key={c.name}>{c.name}{c.current && <span className="tag">修習中</span>}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section" aria-labelledby="research-title">
        <h2 id="research-title">研究</h2>
        <div className="entries">
          <Entry title="S-O-R 消費者行為專題" />
          <Entry title="國科會計畫研究獎助生" />
        </div>
      </section>
    </div>
  );
}
