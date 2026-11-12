import { useEffect, useState } from "react";
import { profile, projects } from "./data";
import { Home } from "./pages/Home";
import { WorkPage } from "./pages/Work";
import { CasePage } from "./pages/CasePage";
import { About } from "./pages/About";
import { School } from "./pages/School";
import { Resume } from "./pages/Resume";
import { ExternalLink } from "./components/Icons";

// Old routes from earlier versions still resolve, so links already sent out keep working.
const legacyRoutes: Record<string, string> = {
  "/projects": "/#work",
  "/journey": "/#record",
  "/learning": "/school",
  "/experience": "/about",
  "/more": "/about",
  "/more/life": "/about",
  "/more/notes": "/about",
  "/more/other": "/about",
};

const navigation = [
  { href: "/#work", label: "作品" },
  { href: "/about", label: "經歷" },
  { href: "/school", label: "學校" },
  { href: "/resume", label: "履歷" },
  { href: "#contact", label: "聯絡" },
];

function currentPath() {
  return window.location.pathname.replace(/\/$/, "") || "/";
}

export default function App() {
  const [path] = useState(currentPath);
  const project = projects.find(p => "/projects/" + p.id === path);

  useEffect(() => {
    const target = legacyRoutes[path];
    if (target) window.location.replace(target);
  }, [path]);

  // The page renders after the browser has already tried to follow the #hash, so follow it once more.
  useEffect(() => {
    if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }, []);

  // Set during render, not in an effect, so a project page never shows the home title first.
  const titles: Record<string, string> = { "/": "商業分析・消費者研究・AI 實作", "/about": "經歷", "/school": "學校與研究", "/resume": "履歷", "/work": "全部作品" };
  document.title = "洪聖崴｜" + (project?.title ?? titles[path] ?? "找不到頁面");

  let page;
  if (path === "/") page = <Home />;
  else if (path === "/work") page = <WorkPage />;
  else if (path === "/about") page = <About />;
  else if (path === "/school") page = <School />;
  else if (path === "/resume") page = <Resume />;
  else if (project) page = <CasePage project={project} />;
  else if (legacyRoutes[path]) page = null;
  else page = <NotFound />;

  return (
    <>
      <a className="skip-link" href="#main">跳到主要內容</a>
      <header className="site-header">
        <div className="wrap site-header-inner">
          <a className="site-name" href="/">洪聖崴<span>HUNG SHENG WEI</span></a>
          <nav aria-label="主要導覽">
            {navigation.map(item => (
              <a
                key={item.href}
                href={item.href}
                aria-current={item.href === path || (item.href === "/#work" && (path === "/work" || path.startsWith("/projects/"))) ? "page" : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>
      <main id="main">{page}</main>
      <Contact />
      <footer className="site-footer">
        <div className="wrap">
          <span>© 2026 洪聖崴 HUNG SHENG WEI・更新於 2026 年 11 月</span>
          <a href="#main">回到頂端</a>
        </div>
      </footer>
    </>
  );
}

function Contact() {
  const [status, setStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("已複製信箱");
    } catch {
      setStatus("無法自動複製，請直接選取信箱文字");
    }
  }
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-inner">
        <div>
          <p className="eyebrow">聯絡</p>
          <h2 id="contact-title">一起聊聊</h2>
          <p>歡迎聊聊實習或工作機會。</p>
        </div>
        <div className="contact-actions">
          <a className="contact-email" href={"mailto:" + profile.email}>{profile.email}</a>
          <div className="contact-row">
            <button type="button" className="button button-light" onClick={copyEmail}>複製信箱</button>
            <a className="button button-outline-light" href={profile.resumePdf} download>下載履歷 PDF</a>
            <ExternalLink href={profile.github} className="contact-link">GitHub</ExternalLink>
          </div>
          <span role="status" className="contact-status">{status}</span>
        </div>
      </div>
    </section>
  );
}

function NotFound() {
  return (
    <div className="wrap page-head">
      <h1>找不到這個頁面</h1>
      <p>網址可能打錯了，或頁面已經移動。</p>
      <a className="text-link" href="/">回到首頁</a>
    </div>
  );
}
