import { isStatusLabel, projects } from "../data";
import type { Embed, Project } from "../data";
import { Gallery, Shot } from "../components/Gallery";
import { ExternalLink } from "../components/Icons";

const siblings: Partial<Record<Project["id"], Project["id"]>> = {
  "tapable-buildmode": "tapable-line",
  "tapable-line": "tapable-buildmode",
};

function Embeds({ items }: { items: Embed[] }) {
  return (
    <div className="embeds">
      {items.map(e => (
        <div className={"embed embed-" + e.kind} key={e.url}>
          <iframe src={e.url} title={e.title} loading="lazy" allow="fullscreen; autoplay; microphone; camera" allowFullScreen />
        </div>
      ))}
    </div>
  );
}

function Actions({ files, links }: { files?: Project["files"]; links?: Project["links"] }) {
  if (!files?.length && !links?.length) return null;
  return (
    <ul className="link-row case-actions">
      {files?.map(f => <li key={f.url}><ExternalLink href={f.url} className="chip-link">{f.label}</ExternalLink></li>)}
      {links?.map(l => <li key={l.url}><ExternalLink href={l.url} className="chip-link">{l.label}</ExternalLink></li>)}
    </ul>
  );
}

export function CasePage({ project }: { project: Project }) {
  const index = projects.indexOf(project);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const siblingId = siblings[project.id];
  const sibling = siblingId ? projects.find(p => p.id === siblingId) : null;

  return (
    <article className="case">
      <header className="case-hero">
        <div className="wrap">
          <div className="case-hero-grid">
            <div>
              <a className="back-link" href="/#work">回到作品</a>
              <p className="eyebrow">{project.kind}</p>
              <h1>{project.title}</h1>
              <p className="case-tagline">{project.tagline}</p>
              <Actions files={project.files} links={project.links} />
            </div>
            <Shot figure={project.cover} eager />
          </div>
          <dl className="case-facts">
            <div><dt>{project.category === "個人專案" || project.category === "研究專題" ? "類型" : "競賽"}</dt><dd>{project.event}{project.host && <small className="case-host">{project.host}</small>}</dd></div>
            <div><dt>時間</dt><dd>{project.date}</dd></div>
            {project.team && <div><dt>團隊</dt><dd>{project.team}</dd></div>}
            <div><dt>{project.solo ? "狀態" : "團隊成果"}</dt><dd>{project.awards.map(a => <span className={"award" + (isStatusLabel(a) ? " award-status" : "")} key={a}>{a}</span>)}</dd></div>
          </dl>
          {project.metrics && (
            <dl className="case-metrics">
              {project.metrics.map(m => <div key={m.label}><dd>{m.value}</dd><dt>{m.label}</dt></div>)}
            </dl>
          )}
          {sibling && (
            <p className="case-sibling">
              TapAble 系列：同一個題目也參加了 <a href={"/projects/" + sibling.id}>{sibling.event}（{sibling.awards.join("、")}）</a>
            </p>
          )}
        </div>
      </header>

      <div className="wrap case-body">
        <p className="case-summary">{project.summary}</p>

        <section className="case-section mine" aria-labelledby="mine-title">
          <h2 id="mine-title">我負責的部分</h2>
          <ul>{project.contributions.map(c => <li key={c}>{c}</li>)}</ul>
        </section>

        <section className="case-section case-outcome" aria-labelledby="outcome-title">
          <h2 id="outcome-title">成果</h2>
          <p className="case-outcome-awards">{project.awards.map(a => <strong key={a} className={isStatusLabel(a) ? "is-status" : undefined}>{a}</strong>)}</p>
          <p className="case-outcome-text">{project.outcome}</p>
          {project.scope && <p className="note">{project.scope}</p>}
        </section>

        <section className="case-section" aria-labelledby="problem-title">
          <h2 id="problem-title">問題</h2>
          <p>{project.problem}</p>
        </section>

        {project.embeds && (
          <section className="case-section" aria-labelledby="embed-title">
            <h2 id="embed-title">實際看作品</h2>
            <Embeds items={project.embeds} />
          </section>
        )}

        <section className="case-section" aria-labelledby="approach-title">
          <h2 id="approach-title">{project.solo ? "我的做法" : "團隊的做法"}</h2>
          <p>{project.approach}</p>
          {project.flow ? (
            <>
              <ol className="stepper">
                {project.flow.map((s, i) => (
                  <li key={s.title} className={s.key ? "is-key" : undefined}>
                    <span aria-hidden="true">{i + 1}</span>
                    <strong>{s.title}</strong>
                    <p>{s.detail}</p>
                  </li>
                ))}
              </ol>
              <div className="flow-rules">
                <h3>三條防呆規則</h3>
                <ul>
                  {project.flow.flatMap(s => (s.rules ?? []).map(r => <li key={r}><span>{s.title}</span>{r}</li>))}
                </ul>
              </div>
            </>
          ) : (
            <ol className="steps">
              {project.steps.map((s, i) => (
                <li key={s.title}>
                  <span className="step-index" aria-hidden="true">{i + 1}</span>
                  <strong>{s.title}</strong>
                  <p>{s.detail}</p>
                </li>
              ))}
            </ol>
          )}
        </section>

        {project.gallery.length > 0 && (
          <section className="case-section" aria-labelledby="gallery-title">
            <h2 id="gallery-title">作品畫面</h2>
            <div><Gallery figures={project.gallery} /></div>
          </section>
        )}

        {project.companion && (
          <section className="case-section companion" id="companion" aria-labelledby="companion-title">
            <p className="eyebrow">同場另一組作品</p>
            <h2 id="companion-title">{project.companion.title}<span className="award">{project.companion.award}</span></h2>
            <p>{project.companion.summary}</p>
            <Actions files={project.companion.files} />
            <h3>我負責的部分</h3>
            <ul className="plain-list">{project.companion.contributions.map(c => <li key={c}>{c}</li>)}</ul>
            {project.companion.embeds && <Embeds items={project.companion.embeds} />}
            <Gallery figures={project.companion.gallery} />
          </section>
        )}
      </div>

      <nav className="wrap case-nav" aria-label="其他作品">
        <a href={"/projects/" + prev.id}><span>上一個</span><strong>{prev.title}</strong></a>
        <a href={"/projects/" + next.id}><span>下一個</span><strong>{next.title}</strong></a>
      </nav>
    </article>
  );
}
