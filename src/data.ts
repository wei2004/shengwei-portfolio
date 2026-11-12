// All site text lives here. It follows content/網站公開版內容包.md — change both together.

export type ProjectId = "job-agent" | "cockpit" | "tapable-line" | "tapable-buildmode" | "cardif" | "brand" | "sor";

export interface Figure {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** Shown as the large image on the case page, instead of the first slide. */
  lead?: boolean;
}

export const categories = ["商業競賽", "AI 黑客松", "個人專案", "研究專題"] as const;
export type Category = (typeof categories)[number];

export interface Embed {
  kind: "demo" | "video";
  title: string;
  url: string;
}

export interface Project {
  id: ProjectId;
  category: Category;
  /** Shown on the home page card wall. */
  featured: boolean;
  /** Always listed first. */
  pinned?: boolean;
  title: string;
  tagline: string;
  kind: string;
  event: string;
  /** Organiser or sponsor, when the event name does not already say it. */
  host?: string;
  date: string;
  team?: string;
  /** A personal project, not a team entry; the page labels change to match. */
  solo?: boolean;
  awards: string[];
  roleTags: string[];
  summary: string;
  problem: string;
  approach: string;
  steps: { title: string; detail: string }[];
  /** Two to four headline figures, shown at the top of the case page. */
  metrics?: { value: string; label: string }[];
  /** A longer flow shown instead of `steps`. `key` marks the step that matters most. */
  flow?: { title: string; detail: string; key?: boolean; rules?: string[] }[];
  contributions: string[];
  outcome: string;
  scope: string;
  cover: Figure;
  gallery: Figure[];
  links?: { label: string; url: string }[];
  /** Full documents and certificates, opened in a new tab. */
  files?: { label: string; url: string }[];
  /** Live demos and videos shown on the page. */
  embeds?: Embed[];
  /** A second entry from the same event, shown lower on the same page. */
  companion?: { title: string; award: string; summary: string; contributions: string[]; gallery: Figure[]; files?: { label: string; url: string }[]; embeds?: Embed[] };
}

const img = (src: string, width: number, height: number, alt: string, caption: string): Figure => ({
  src: "/images/work/" + src, width, height, alt, caption,
});

export const profile = {
  name: "洪聖崴",
  englishName: "HUNG SHENG WEI",
  email: "eexx081@gmail.com",
  github: "https://github.com/wei2004",
  resumePdf: "/hung-sheng-wei-resume.pdf",
  portrait: img("profile/portrait.jpg", 866, 1154, "洪聖崴的證件照", ""),
  focus: "商業分析・消費者研究・AI 實作",
  /** The small line above the name on the home page. The resume keeps `focus`. */
  homeEyebrow: "商業分析・消費者研究・AI 實作",
  statement: ["從帳務到產品，", "我負責把事情做對。"],
  /** The home page opening. Leaves out counts: the band right below it shows them. */
  homeIntro:
    "北科經營管理系大四。在會計師事務所累積帳務與資料核對經驗，也參與消費者研究、商業提案與 AI 競賽。在團隊裡，我負責檢查商業模型講不講得通、把產品實際測過，並在決賽回答評審提問。",
  seeking: "關注商業分析、產品、行銷與 AI 科技。",
  education: "國立臺北科技大學・經營管理系",
  educationPeriod: "2023 入學，預計 2027 畢業",
  gpa: "GPA 3.8 / 4.0",
  learning: "科技法律學程修習中",
  about: [
    "我從經營管理出發，延伸到資訊系統、AI 應用與科技法律。在會計師事務所練出對數字的耐心：每一筆都要對得上。",
    "到了競賽，我把這份耐心用在提案和產品上：把成本與預期效益講清楚，實際操作原型、找出卡住的地方，並在決賽回答評審提問。",
  ],
};

/** The three boxes under the resume summary; each line is something already shown elsewhere on the site. */
export const coreAbilities: { title: string; evidence: string }[] = [
  { title: "商業分析", evidence: "保包巴士經濟模型報告與評審 QA；消波檜經濟模型整理。" },
  { title: "消費者研究", evidence: "S-O-R 專題主寫文獻探討，蒐集 250 則 Google 評論並人工核對。" },
  { title: "AI 實作", evidence: "製作共創世界窗離線 Demo；與 AI 協作做出求職工作台。" },
];

/** Certificates kept on the one-page resume; the About page lists all of them. */
export const resumeCertifications = ["TIMS 行銷專業能力認證", "會計事務－資訊乙級技術士", "BESTEP 培力英檢"];

export const tools = {
  fluent: ["Excel", "PowerPoint", "Word", "Canva"],
  familiar: ["Figma", "文中系統"],
  ai: ["ChatGPT", "Claude", "Gemini"],
  methods: ["經濟模型與成本效益簡報", "轉換漏斗", "產品與流程測試", "文獻探討", "評論資料蒐集與人工核對", "網頁互動 Demo"],
};

/** The About page: the same three abilities as the resume, with the tools behind each and where it shows. */
export const aboutAbilities: { title: string; tools: string; detail: string; links: { label: string; href: string }[] }[] = [
  {
    title: "商業分析",
    tools: "經濟模型、成本效益簡報、轉換漏斗、Excel",
    detail: "從帳務實務到競賽提案，檢查成本結構、轉換漏斗與預期效益，上台報告並回答評審追問。",
    links: [{ label: "保包巴士・銀獎", href: "/projects/cardif" }, { label: "消波檜・第一名", href: "/projects/brand" }],
  },
  {
    title: "消費者研究",
    tools: "文獻探討、評論蒐集與人工核對、門市觀察",
    detail: "主寫 S-O-R 專題的文獻探討，蒐集 Google 評論並人工核對；比賽中參與門市觀察。",
    links: [{ label: "S-O-R 消費者行為專題", href: "/projects/sor" }, { label: "消波檜・門市觀察", href: "/projects/brand" }],
  },
  {
    title: "AI 實作",
    tools: "需求拆解、與 AI 協作開發、原型測試（ChatGPT、Claude、Gemini）",
    detail: "和 AI 協作做出求職工作台與事務所的自動化腳本；做出可當場試玩的離線 Demo，並實際操作原型、提出修改方向。",
    links: [
      { label: "求職 Agent", href: "/projects/job-agent" },
      { label: "共創世界窗・創意組金獎", href: "/projects/cockpit" },
      { label: "TapAble・BUILDMODE 第二名", href: "/projects/tapable-buildmode" },
    ],
  },
];

/** Everyday tools that are not tied to one ability. */
export const otherTools = "Excel、文中系統、PowerPoint、Canva、Figma";

export const projects: Project[] = [
  {
    id: "job-agent",
    category: "個人專案",
    featured: true,
    pinned: true,
    title: "求職 Agent 工作台",
    tagline: "從找職缺到追蹤進度，都在同一個工作台完成。",
    kind: "個人專案・AI 工作流程・需求與驗收",
    event: "個人專案",
    date: "2026.10 起",
    solo: true,
    awards: ["持續開發中"],
    roleTags: ["需求規劃", "流程設計", "AI 協作開發", "測試驗收"],
    summary: "這是我自己主導的專案。我定義要解決什麼、流程怎麼走、什麼情況不准往下走，再和 AI 協作做出來，並用真實職缺一路測到實際投遞。",
    problem: "履歷、作品集和應徵內容分散各處，每投一份都要重新核對、改稿、追蹤進度，也容易投錯版本或重複投遞。",
    approach: "用 AI 處理重複的搜尋、評分與撰稿，但把決定權留給自己：職缺要有真實來源，應徵內容要對得回履歷，每一步都留下依據。",
    steps: [
      { title: "找到", detail: "搜尋真實職缺，保留來源，不用測試資料充數。" },
      { title: "準備", detail: "對照既有履歷產生應徵內容，保存每個版本。" },
      { title: "親自投遞與追蹤", detail: "我看過內容後親自到平台送出，再記錄後續進度。" },
    ],
    flow: [
      { title: "找到", detail: "搜尋仍開放的公開職缺，保留來源。", rules: ["不登入、不操作求職平台"] },
      { title: "評分", detail: "依履歷評估適配度，寫出原因。" },
      { title: "準備", detail: "對照履歷產生應徵內容，沒做過的不寫。" },
      { title: "我親自投遞", detail: "看過內容後，由我到平台送出。", key: true, rules: ["投遞由本人親自送出"] },
      { title: "追蹤", detail: "記錄面試與結果，久未更新會提醒。", rules: ["同一職缺不重複投遞"] },
    ],
    contributions: [
      "規劃需求與流程：定義每一步要留下什麼依據，以及哪些情況必須停下來。",
      "全程與 AI 協作完成程式整合，沿用開源元件並保留來源。",
      "設計三條防呆規則，決定哪些事 AI 可以做、哪些一定要停下來由我判斷。",
      "用真實職缺測試驗收，回報問題並持續修改。",
    ],
    outcome: "已跑通真實職缺搜尋、適配評估、客製應徵內容與投遞追蹤，並實際用在自己的求職上。專案持續開發中。",
    scope: "程式由我規劃需求、與 AI 協作完成，目前僅供個人使用。因為求職平台規約限制自動化操作，工作台只搜尋與準備內容，不代為投遞。頁面中的公司與職缺皆為範例資料。",
    cover: img("agent/job-desk.jpg", 1600, 659, "求職工作台畫面：左側工作空間，中間是職缺與準備動作，右側是目前進度；內容為範例資料", "工作台畫面（內容為範例資料）"),
    gallery: [
      img("agent/today-list.jpg", 1152, 540, "今日清單的職缺卡片：顯示適配分數、適配原因，以及開啟職缺、複製應徵訊息、查看內容、我投了、略過等按鈕；內容為範例資料", "今日清單：看適配原因，投完再按「我投了」"),
      img("agent/fit-evidence.jpg", 1120, 638, "應徵內容畫面：列出職缺要求對應的經歷，以及履歷沒有、需要本人確認的事項；內容為範例資料", "應徵內容：每項要求對回經歷，沒有的不寫"),
      img("agent/tracker.jpg", 1009, 316, "投遞追蹤畫面：一筆已投遞的職缺，顯示更新日期、狀態選單與「該追蹤了」提醒；內容為範例資料", "投遞追蹤：記錄狀態，久未更新會提醒追蹤"),
    ],
  },
  {
    id: "cockpit",
    category: "AI 黑客松",
    featured: true,
    title: "共創世界窗",
    tagline: "讓同車乘客沿著旅程，一起創作車窗外的故事。",
    kind: "AI 體驗設計・互動 Demo",
    event: "AI 座艙感知與視覺化 Hackathon",
    host: "資策會數轉院 × 友達智慧移動 × 4SA 聯盟",
    date: "2026.10.20",
    awards: ["創意組金獎", "實作組潛力新星獎"],
    roleTags: ["離線 Demo 製作", "簡報支援", "評審 QA"],
    metrics: [{ value: "2 組", label: "作品晉級決賽" }, { value: "3 步", label: "共創玩法" }],
    summary: "車內娛樂多半是各看各的。團隊把沿途風景變成共同創作的舞台：一人造物、一人立規則，再交給下一位接力。我做了能實際試玩的離線 Demo。",
    problem: "同一台車上的乘客，常常各自盯著自己的螢幕。車內娛樂設計大多是個人觀看與操作，很少讓同車的人一起參與。",
    approach: "團隊提出「共創世界窗」，以三個步驟把車窗變成共同創作的畫布，並規劃先用共用螢幕驗證玩法，再逐步走向車載系統整合。",
    steps: [
      { title: "造物", detail: "乘客在平板上畫出角色或物件。" },
      { title: "立規則", detail: "另一位乘客設定這個世界的限制與目標。" },
      { title: "接力", detail: "故事交給下一位乘客接續，旅程結束後保存成故事本。" },
    ],
    contributions: [
      "製作並修改離線互動 Demo，把造物、立規則與接力三個步驟做成可以實際操作的流程。",
      "支援簡報內容與展示調整，讓評審在幾分鐘內看懂玩法。",
      "決賽參與評審 QA，回應玩法、技術可行性與落地方式的提問。",
    ],
    outcome: "團隊兩組作品都晉級決賽，獲創意組金獎與實作組潛力新星獎（團隊成果）。",
    scope: "Demo 是我製作的離線示範版本，沒有串接 API；簡報中的車載整合屬提案規劃。",
    cover: img("cockpit/award.jpg", 1477, 1108, "AI 座艙 Hackathon 團隊持獎牌合照", "頒獎合照：創意組金獎"),
    gallery: [
      img("cockpit/problem.jpg", 1600, 902, "簡報頁：明明坐在一起，卻各玩各的", "問題洞察：車內娛樂以個人觀看為主"),
      img("cockpit/three-steps.jpg", 1600, 902, "簡報頁：造物、立規則、接力三步驟", "解決方案：三步驟一起創造旅途故事"),
      img("cockpit/ai-flow.jpg", 1600, 902, "簡報頁：AI 理解乘客輸入並生成可延續的方案", "AI 的角色：讓創意接得下去，而不只是生成圖片"),
      img("cockpit/roadmap.jpg", 1600, 902, "簡報頁：從共用螢幕驗證到車載 HMI 整合的三階段", "落地規劃：先驗證玩法，再談車載整合"),
      img("cockpit/demo.jpg", 1440, 900, "共創世界窗離線 Demo：車窗外的河景與後座平板上的畫圖區", "我製作的離線 Demo 畫面"),
      img("cockpit/finals.jpg", 1477, 1108, "AI 座艙 Hackathon 決賽現場，團隊站在台前", "決賽現場"),
    ],
    links: [{ label: "在新分頁開啟 Demo", url: "https://wei2004.github.io/gongchuang-window-demo/" }],
    files: [{ label: "看完整提案簡報", url: "/files/gongchuang-deck.pdf" }],
    embeds: [
      { kind: "demo", title: "共創世界窗離線 Demo", url: "https://wei2004.github.io/gongchuang-window-demo/" },
      { kind: "video", title: "共創世界窗說明影片", url: "https://www.youtube-nocookie.com/embed/stMwMsfjcdk" },
    ],
    companion: {
      title: "警示找眼睛",
      award: "實作組潛力新星獎",
      files: [{ label: "看完整決賽簡報", url: "/files/alert-deck.pdf" }],
      embeds: [{ kind: "video", title: "警示找眼睛方案說明影片", url: "https://www.youtube-nocookie.com/embed/8wDF_BToUYk" }],
      summary: "同一場比賽的實作組作品。針對下車開門的風險，結合乘客的視線方向、後方來車與開門意圖，把警示送到乘客正在看的那個螢幕，並搭配光帶與震動提醒。",
      contributions: ["實際操作 Demo、找出問題並修改。", "修改決賽簡報。", "拍攝作品影片。", "決賽參與評審 QA。"],
      gallery: [
        img("cockpit/alert-window.jpg", 1600, 1200, "警示找眼睛 Demo：車窗畫面標示後方機車 5 秒後接近", "Demo 畫面：警示出現在乘客看的車窗"),
        img("cockpit/alert-rear.jpg", 1600, 1200, "警示找眼睛 Demo：後座螢幕提醒後方有機車、請等一下再開門", "Demo 畫面：後座螢幕提醒等一下再開門"),
        img("cockpit/alert-flow.jpg", 1600, 900, "簡報頁：感知、情境、Agent、五屏的警示流程", "從看到人到把警示送到他眼前"),
        img("cockpit/alert-gaze.jpg", 1600, 900, "簡報頁：依乘客視線把警示派送到對應螢幕", "視線派送：警示出現在乘客正在看的地方"),
      ],
    },
  },
  {
    id: "brand",
    category: "商業競賽",
    featured: true,
    title: "消波檜｜檜山坊",
    tagline: "把商場人流，變成走進門市、加入會員、再回來買的路徑。",
    kind: "品牌策略・顧客旅程・經濟模型",
    event: "AI 賦能∞品牌煉金術競賽",
    host: "檜山坊企業命題",
    date: "2026.05.29",
    team: "消波檜",
    awards: ["第一名"],
    roleTags: ["門市觀察", "經濟模型整理", "簡報優化", "評審 QA"],
    metrics: [{ value: "約 350 筆", label: "社群貼文與留言" }, { value: "約 300 筆", label: "親子場域與餐飲評論" }, { value: "90 秒", label: "門市體驗流程設計" }, { value: "300 萬", label: "投入規劃（提案估算）" }],
    summary: "檜山坊在裕隆城有人流、也有服務，中間缺的是轉換路徑。團隊以親子家庭為核心客群，設計從「經過」到「體驗」再到「購買與回購」的流程，並估算投入與效益。",
    problem: "誠品生活新店裕隆城的消費者以親子家庭為主，消費模式已經從需求導向轉為體驗導向。檜山坊門市有服務，卻缺少把活動人流轉成購買的設計。",
    approach: "團隊整合品牌與競品分析、社群評論、親子活動、門市導流、QR Code 會員標籤與回購流程，並規劃 300 萬投入的成本結構與預期效益。",
    steps: [
      { title: "吸引", detail: "以森林主題親子活動讓家長與孩子停留。" },
      { title: "體驗", detail: "優化門市服務與動線，讓經過的人願意試用。" },
      { title: "轉換", detail: "以 QR Code 會員標籤記錄偏好，串起購買與回購。" },
    ],
    contributions: [
      "參與門市觀察，整理現場動線與消費情境。",
      "整理提案內容，確認活動、體驗與消費轉換的邏輯接得起來。",
      "負責提案中的經濟模型整理：成本、轉換漏斗與預期收益。",
      "優化競賽簡報的內容與呈現，並在決賽準備與回應評審 QA。",
    ],
    outcome: "消波檜團隊獲第一名（團隊成果）。",
    scope: "品牌方案與經濟模型屬競賽階段的團隊提案，預估收益不是已達成的績效。",
    files: [{ label: "看品牌提案", url: "/files/brand-proposal.pdf" }, { label: "看第一名獎狀", url: "/files/brand-award.jpg" }],
    cover: img("brand/stage.jpg", 1477, 1108, "消波檜團隊在決賽台上簡報成本與預期效益", "決賽簡報現場"),
    gallery: [
      img("brand/insight.jpg", 1600, 900, "簡報頁：裕隆城親子家庭的四大需求與活動驅動決策", "消費洞察：親子家庭是核心客群"),
      img("brand/journey.jpg", 1600, 900, "簡報頁：AI 數據採集與 AIDA 顧客旅程", "顧客旅程：從行為蒐集、AI 分析到商業變現"),
      img("brand/economics.jpg", 1600, 900, "簡報頁：300 萬投入的成本、轉換漏斗與預估總收益", "經濟模型：成本、預期效益與轉換（提案估算）"),
      img("brand/award.jpg", 1477, 1108, "消波檜團隊於頒獎典禮持第一名獎牌", "頒獎合照：第一名"),
    ],
  },
  {
    id: "tapable-buildmode",
    category: "AI 黑客松",
    featured: true,
    title: "TapAble｜BUILDMODE",
    tagline: "讓視障者用熟悉的手機，操作陌生的觸控機台。",
    kind: "無障礙產品原型・產品測試",
    event: "FUTUREMODE 台灣未來祭｜BUILDMODE 2026 Hackathon",
    date: "2026.09.04–06",
    team: "ChatKTV",
    awards: ["第二名"],
    roleTags: ["產品測試", "修改建議", "Demo 準備"],
    metrics: [{ value: "160 隊", label: "參賽隊伍" }, { value: "3 天", label: "黑客松實作" }],
    summary: "公共服務全面觸控化之後，視障者的障礙不只是一個螢幕，而是找到機台、確認設備到完成操作的整段流程。團隊以校園文件列印機為場景做出可操作的原型，我負責把它實際測過一遍又一遍。",
    problem: "視障使用者面對觸控自助機台時，從找到設備、確認是哪一台，到完成服務，每一步都可能卡住。",
    approach: "團隊以手機作為輔助介面，串聯鏡頭環境辨識、NFC 設備確認、口語需求理解與語音引導，做出可展示的操作原型。",
    steps: [
      { title: "看見環境", detail: "用鏡頭辨識環境，提供方向與前方障礙提示。" },
      { title: "確認機台", detail: "以 NFC 碰觸確認設備，進入語音引導。" },
      { title: "理解需求", detail: "把口語需求對應到服務選項，逐步完成操作。" },
    ],
    contributions: [
      "參與功能與操作流程測試，整理測試中發現的問題。",
      "針對問題提供程式修改方向與功能改善建議。",
      "參與功能調整與競賽 Demo 準備，成果展示時補充產品邏輯。",
    ],
    outcome: "以 ChatKTV 團隊參加 BUILDMODE 2026 Hackathon，獲第二名（團隊成果）。",
    scope: "競賽版本的 NFC 與機台互動採模擬方式。團隊做過視障者需求訪談與明眼人戴眼罩操作測試；截至提交時，尚無視障者實際操作原型的紀錄。",
    cover: img("buildmode/award.jpg", 1280, 964, "ChatKTV 團隊於 BUILDMODE 頒獎台上合照", "頒獎合照：第二名"),
    gallery: [
      img("buildmode/deck-solution.jpg", 1440, 810, "TapAble 簡報：Edge AI 看、NFC 確認、LLM 理解三段構想", "團隊方案：讓手機成為操作引導介面"),
      img("buildmode/field-test.jpg", 416, 390, "手持手機靠近自助機台進行實測", "現場實測：拿手機到機台前實際操作"),
      img("buildmode/vision-person.jpg", 869, 1884, "TapAble 環境辨識實測畫面，辨識出前方行人並提示靠近", "環境辨識實測：辨識行人並提示前方有人靠近"),
      img("buildmode/vision-warning.jpg", 640, 1394, "TapAble 環境辨識測試畫面，提示前方有人靠近", "環境辨識測試畫面"),
      img("buildmode/phone-connected.jpg", 390, 844, "TapAble Demo：NFC 感應後確認校園文件自助服務機", "Demo：確認機台（NFC 為模擬）"),
      img("buildmode/stage-completed.jpg", 1280, 800, "TapAble Demo：文件已印出的完成畫面", "Demo：流程完成畫面"),
    ],
    links: [{ label: "看評選影片", url: "https://youtu.be/AtMjXhrwr38" }, { label: "團隊原始碼", url: "https://github.com/a96020183/tapable_sep" }],
    files: [{ label: "看獎狀", url: "/files/buildmode-award.pdf" }],
    embeds: [
      { kind: "demo", title: "TapAble 團隊 Demo", url: "https://a96020183.github.io/tapable-demo/start/" },
    ],
  },
  {
    id: "tapable-line",
    category: "AI 黑客松",
    featured: true,
    title: "TapAble｜LINE AI",
    tagline: "從校園原型，走向第一個真實的餐飲場域。",
    kind: "無障礙服務・商業模式・簡報",
    event: "LINE AI 創新創業競賽",
    date: "2026.10.16",
    awards: ["第三名"],
    roleTags: ["簡報優化", "影片拍攝", "評審 QA"],
    summary: "TapAble 的第二站。同一個無障礙題目，這次要回答「誰會付錢」與「為什麼是 LINE」：團隊把場景從校園列印機換成餐飲點餐，並以 LINE 承接通知。",
    problem: "觸控式自助機台缺少實體按鍵與適當提示，視障者很難獨立使用。要讓方案能落地，還得說明企業為什麼要導入。",
    approach: "團隊結合手機鏡頭、NFC 標籤與 VoiceOver／TalkBack 等原生無障礙功能，以 LINE 承接通知、評估 LINE Pay 付款整合，並以餐飲業作為第一個實際場域。",
    steps: [
      { title: "碰", detail: "NFC 感應，開啟對應的機台服務。" },
      { title: "用", detail: "用手機與 VoiceOver／TalkBack 完成操作。" },
      { title: "取", detail: "需要叫號時，由 LINE 通知取件或取餐。" },
    ],
    contributions: [
      "優化競賽簡報，調整敘事順序與呈現方式。",
      "負責競賽影片拍攝。",
      "準備並回應評審問題，說明服務價值、企業導入考量與 LINE 平台的角色。",
    ],
    outcome: "2026 年 10 月 16 日參與決賽，團隊獲第三名（團隊成果）。",
    scope: "",
    cover: img("line/award.jpg", 1567, 1045, "TapAble 團隊於 LINE AI 創新創業競賽獲第三名合照", "頒獎合照：第三名"),
    gallery: [
      img("line/product-flow.jpg", 1600, 900, "TapAble 簡報：碰、用、取三步驟把操作帶回手機", "團隊方案：把操作帶回使用者熟悉的手機"),
      img("line/dining-business.jpg", 1600, 900, "TapAble 簡報：從原型走向餐飲場域的商業模式", "商業模式：從原型走向第一個餐飲場域"),
      img("line/dining-prototype.jpg", 1600, 900, "TapAble 簡報：餐飲點餐原型的完成與模擬項目", "原型範圍：哪些完成、哪些是模擬"),
      img("line/line-integration.jpg", 1600, 900, "TapAble 簡報：為什麼選 LINE 而不是獨立 App", "為什麼是 LINE：降低使用者的下載門檻"),
    ],
  },
  {
    id: "cardif",
    category: "商業競賽",
    featured: true,
    title: "保包巴士",
    tagline: "讓 Z 世代在生活情境裡，第一次接觸保險。",
    kind: "保險科技・商業模式・經濟模型",
    event: "Cardif InsurHack 第三屆法國巴黎人壽校園黑客松商業競賽",
    date: "2026.01.25",
    team: "保包巴士",
    awards: ["銀獎"],
    roleTags: ["經濟模型報告", "評審 QA", "講稿與簡報"],
    metrics: [{ value: "50 校", label: "全台參賽學校" }, { value: "450+", label: "參賽學生" }],
    summary: "年輕人不買保險，常常不是不需要，而是「看不懂、不急、不想被推銷」。團隊提出以 LINE 承接、以生活情境觸發的月費訂閱保險，我負責經濟模型段落的上台報告與評審問答。",
    problem: "Z 世代對保險的接觸門檻高：商品難懂、購買流程繁瑣，也很少在生活中意識到保障的必要。",
    approach: "以 LINE 作為主要互動與服務載體，提出生活情境觸發的數位保險與月費訂閱方案，並以點數互動與智慧升級延伸顧客關係；再用經濟模型檢查成本、轉換與回收期。",
    steps: [
      { title: "觸發", detail: "在生活情境中觸發保障需求，而不是等人上門。" },
      { title: "訂閱", detail: "以月費制降低第一次投保的門檻。" },
      { title: "升級", detail: "以點數互動與智慧升級延長顧客關係。" },
    ],
    contributions: [
      "參與經濟模型、成本結構與轉換漏斗的討論。",
      "決賽上台報告經濟模型與成本效益段落。",
      "準備並回答評審 QA，說明獲客成本、轉換假設與回收期。",
      "整理簡報內容與講稿。",
    ],
    outcome: "保包巴士團隊獲銀獎（團隊成果）。",
    scope: "頁面上的金額、轉換率與回收期都是競賽提案的虛擬假設，不是已上線服務的實際營收或成效。",
    files: [{ label: "看完整提案", url: "/files/baobao-bus-proposal.pdf" }, { label: "看銀獎獎狀", url: "/files/baobao-bus-award.jpg" }],
    cover: img("cardif/award.jpg", 1477, 1108, "保包巴士團隊於 Cardif InsurHack 持銀獎獎牌合照", "頒獎合照：銀獎"),
    gallery: [
      img("cardif/business-model.jpg", 1400, 788, "簡報頁：從「提供保單」到「訂閱生活」的商業模式", "商業模式：從賣保單到訂閱生活"),
      img("cardif/funnel.jpg", 1600, 900, "簡報頁：第一年從 LINE 好友到穩定付費用戶的轉換漏斗", "第一年轉換漏斗（虛擬假設數字）"),
      img("cardif/economics.jpg", 1400, 788, "簡報頁：MVP 階段的經濟模型總覽", "經濟模型總覽：我在決賽報告的段落（虛擬假設數字）"),
      img("cardif/revenue.jpg", 1600, 900, "簡報頁：客戶終身價值與年化經常性收入試算", "營收試算（虛擬假設數字）"),
      img("cardif/badge.jpg", 1108, 1477, "Cardif InsurHack 競賽現場與洪聖崴的參賽識別證", "競賽現場與我的參賽識別證"),
    ],
  },
  {
    id: "sor",
    category: "研究專題",
    featured: false,
    title: "商場價值與消費者行為",
    tagline: "從 250 則 Google 評論，看商場帶給消費者的不只是購物。",
    kind: "大學專題・消費者研究",
    event: "國立臺北科技大學經營管理系專題研究",
    date: "2026.06",
    team: "林亭汝、郭以樂、洪聖崴、劉芯妤",
    awards: ["專題完成"],
    roleTags: ["文獻探討", "評論蒐集與核對", "實地探訪", "口試簡報"],
    metrics: [{ value: "250 則", label: "有效 Google 評論" }, { value: "12 條", label: "研究假設" }],
    summary: "以 S-O-R 理論，探討誠品生活新店裕隆城的功利型與享樂型價值，如何透過心理舒適感與新奇體驗，影響口碑與購買意圖。指導教授：黃增隆教授。",
    problem: "商場帶來的價值，除了購物本身，也包括心理上的舒適感與新奇體驗。這些感受如何影響消費者的口碑與購買意圖？",
    approach: "團隊以 Google 評論為資料，清洗後保留 250 則有效評論；以 AI 輔助編碼並人工檢視，再用 SPSS 做描述統計、因素分析、相關與迴歸分析。",
    steps: [
      { title: "蒐集", detail: "以現成爬蟲工具取得 2023–2026 年的 Google 評論。" },
      { title: "編碼", detail: "AI 輔助初步編碼，再由人工核對。" },
      { title: "分析", detail: "以 SPSS 檢驗 12 條假設。" },
    ],
    contributions: [
      "主要撰寫第二章文獻探討：查找期刊與研究報告、梳理 S-O-R 理論。",
      "用現成爬蟲工具蒐集 Google 評論，參與資料整理與人工核對。",
      "參與多次實地探訪、研究構思、結果討論，以及口試簡報與問答。",
    ],
    outcome: "2026 年 6 月完成專題。研究發現享樂型價值與心理舒適感、新奇體驗有顯著關係；並非所有假設都獲支持（H1、H12 未獲支持）。",
    scope: "SPSS 統計與 AI 編碼主要由其他組員操作。研究呈現的是變項之間的關聯，不是因果；公開評論不能代表所有來訪者。",
    files: [{ label: "看完整專題報告", url: "/files/sor-report.pdf" }],
    cover: img("research/fieldwork.jpg", 1108, 1477, "誠品生活新店裕隆城實地探訪照片", "實地探訪：誠品生活新店裕隆城"),
    gallery: [
      { ...img("research/abstract.jpg", 940, 1130, "專題報告摘要頁：以 S-O-R 理論分析誠品生活新店裕隆城的商場價值、心理舒適感、新奇體驗與口碑及購買意圖", "專題報告摘要"), lead: true },
      img("research/framework.png", 755, 440, "S-O-R 研究架構圖：商場價值、心理舒適感、新奇體驗與行為反應", "研究架構"),
      img("research/process.png", 360, 680, "資料分析流程圖：從評論蒐集、清洗、編碼到統計分析", "資料分析流程"),
      img("research/results.png", 770, 720, "研究假設驗證結果表", "假設驗證結果"),
    ],
  },
];

export const byId = (id: ProjectId) => projects.find(p => p.id === id)!;

/** First place; the cockpit event calls it 金獎. */
/** Labels that describe a project's state rather than an award. */
export const isStatusLabel = (label: string) => label === "持續開發中" || label === "專題完成";

export const isTopAward = (award: string) => award.includes("第一名") || award.includes("金獎");

const competitionCategories: Category[] = ["商業競賽", "AI 黑客松"];
const newestFirst = (a: Project, b: Project) => b.date.localeCompare(a.date);
const competitions = projects.filter(p => competitionCategories.includes(p.category)).sort(newestFirst);

export const allWorks = [...projects].sort((a, b) => Number(!!b.pinned) - Number(!!a.pinned) || newestFirst(a, b));

/** Home page cards: featured works only, pinned first, at most six. */
export const featuredWorks = (limit = 6) => allWorks.filter(p => p.featured).slice(0, limit);

export const competitionStats = {
  competitions: competitions.length,
  awards: competitions.reduce((sum, p) => sum + p.awards.length, 0),
  firstPlaces: competitions.flatMap(p => p.awards).filter(isTopAward).length,
};

/** The resume list: one row per event. The home page uses `homeRecord`. */
export const competitionRecord: { date: string; event: string; host?: string; work: string; result: string; scale?: string; role: string; href: string }[] = [
  { date: "2026.10.20", event: "AI 座艙感知與視覺化 Hackathon", host: "資策會數轉院 × 友達智慧移動 × 4SA 聯盟", work: "共創世界窗／警示找眼睛", result: "創意組金獎／實作組潛力新星獎", role: "Demo 製作與實測、簡報、影片、評審 QA", href: "/projects/cockpit" },
  { date: "2026.10.16", event: "LINE AI 創新創業競賽", work: "TapAble", result: "第三名", role: "簡報優化、影片拍攝、評審 QA", href: "/projects/tapable-line" },
  { date: "2026.09.04–06", event: "BUILDMODE 2026 Hackathon", host: "台灣未來祭 OnboardFUTUREMODE", work: "TapAble", result: "第二名", scale: "160 隊", role: "產品測試、修改建議、Demo 準備", href: "/projects/tapable-buildmode" },
  { date: "2026.05.29", event: "AI 賦能∞品牌煉金術競賽", host: "檜山坊企業命題", work: "消波檜｜檜山坊", result: "第一名", role: "門市觀察、經濟模型整理、簡報優化、評審 QA", href: "/projects/brand" },
  { date: "2026.01.25", event: "Cardif InsurHack 法國巴黎人壽校園黑客松", work: "保包巴士", result: "銀獎", scale: "全台 50 校、450+ 位學生", role: "經濟模型報告、評審 QA、講稿與簡報", href: "/projects/cardif" },
];

/** The home page record table: one row per award, so an event with two works takes two rows. */
export const homeRecord: { id: ProjectId; date: string; event: string; host?: string; work: string; result: string; scale?: string; role: string; href: string; cover?: Figure }[] = [
  { id: "cockpit", date: "2026.10.20", event: "AI 座艙感知與視覺化 Hackathon", host: "資策會數轉院 × 友達智慧移動 × 4SA 聯盟", work: "共創世界窗", result: "創意組金獎", role: "離線 Demo 製作、簡報支援、評審 QA", href: "/projects/cockpit" },
  { id: "cockpit", date: "2026.10.20", event: "AI 座艙感知與視覺化 Hackathon", host: "資策會數轉院 × 友達智慧移動 × 4SA 聯盟", work: "警示找眼睛", result: "實作組潛力新星獎", role: "Demo 實測與修改、修改決賽簡報、拍攝作品影片、評審 QA", href: "/projects/cockpit#companion", cover: byId("cockpit").companion!.gallery[0] },
  { id: "tapable-line", date: "2026.10.16", event: "LINE AI 創新創業競賽", work: "TapAble", result: "第三名", role: "簡報優化、影片拍攝、評審 QA", href: "/projects/tapable-line" },
  { id: "tapable-buildmode", date: "2026.09.04–06", event: "BUILDMODE 2026 Hackathon", host: "台灣未來祭 OnboardFUTUREMODE", work: "TapAble", result: "第二名", scale: "160 隊", role: "產品測試、修改建議、Demo 準備", href: "/projects/tapable-buildmode" },
  { id: "brand", date: "2026.05.29", event: "AI 賦能∞品牌煉金術競賽", host: "檜山坊企業命題", work: "消波檜｜檜山坊", result: "第一名", role: "門市觀察、經濟模型整理、簡報優化、評審 QA", href: "/projects/brand" },
  { id: "cardif", date: "2026.01.25", event: "Cardif InsurHack 法國巴黎人壽校園黑客松", work: "保包巴士", result: "銀獎", scale: "全台 50 校、450+ 位學生", role: "經濟模型報告、評審 QA、講稿與簡報", href: "/projects/cardif" },
];

const accountingStart = Date.UTC(2024, 6);
const accountingYears = Math.floor((Date.now() - accountingStart) / (365.25 * 24 * 60 * 60 * 1000));

export const stats = [
  { value: String(competitionStats.competitions), label: "場商業與 AI 競賽" },
  { value: String(competitionStats.awards), label: "項團隊獎" },
  { value: String(competitionStats.firstPlaces), label: "個第一名（團隊）" },
];

/** The award band, newest first. */
export const flow: { id: ProjectId; short: string }[] = [
  { id: "cockpit", short: "AI 座艙 Hackathon" },
  { id: "tapable-line", short: "LINE AI" },
  { id: "tapable-buildmode", short: "BUILDMODE" },
  { id: "brand", short: "AI 賦能品牌煉金術" },
  { id: "cardif", short: "Cardif InsurHack" },
];

/** Competitions registered but not finished. Fill in only what the owner has confirmed can be public. */
export const upcoming: { name: string; short: string; host: string; stage: string; date: string }[] = [
  { name: "青春靚點子全國學生創業挑戰賽（第五屆）", short: "青春靚點子創業挑戰賽", host: "新竹縣政府 × 數位時代", stage: "入圍決賽", date: "2026.11.20 決賽" },
  { name: "和泰 AI 黑客松 2026", short: "和泰 AI 黑客松", host: "和泰集團", stage: "決賽 15 強", date: "2026.11.21 決賽" },
  { name: "第四屆法國巴黎人壽校園黑客松", short: "法巴校園黑客松第四屆", host: "法國巴黎人壽", stage: "參賽中・擔任組長", date: "結果待公告" },
];

export const experience = [
  {
    title: "國大會計師事務所",
    role: "工讀與實習",
    period: "2024.07 起",
    onHome: true,
    points: [
      "從進事務所起固定負責一間營建業公司的帳務，從傳票、登打、401 申報到過帳、沖帳、日記帳一手包辦；每期（兩個月）僅三聯式發票就超過 800 張。",
      "每兩個月整理營業稅申報資料，並和 AI 協作寫自動化腳本，處理沖帳、立票據等作業。",
      "學期間每週 2–3 天，寒暑假每天到班；也處理過小公司的日常帳務與營業稅，並做銀行與往來帳務核對、接觸扣繳相關作業。",
    ],
  },
  {
    title: "求職 Agent 工作台",
    role: "個人專案",
    period: "2026.10 起",
    points: [
      "規劃需求與流程，全程與 AI 協作完成整合、測試與迭代。",
      "已跑通真實職缺搜尋、適配評估、客製應徵內容與投遞追蹤；投遞由本人親自完成。",
    ],
    href: "/projects/job-agent",
    linkLabel: "看專案內容",
  },
  {
    title: "S-O-R 消費者行為專題",
    role: "大學團隊專題",
    period: "2026.06 完成",
    onHome: true,
    points: [
      "主寫文獻探討；用現成爬蟲工具蒐集 Google 評論並人工核對。",
      "參與實地探訪、結果討論與口試簡報。",
    ],
    href: "/projects/sor",
  },
  {
    title: "國科會計畫研究獎助生",
    role: "透過 AI 深度學習方法輔助企業漂綠行為之偵測",
    period: "2025.08 – 2026.07",
    onHome: true,
    points: [
      "蒐集企業近三年永續報告，進行中英文文字擷取、整理與比對。",
      "取得與整理股票資料庫資料，協助資料比對與標記。",
      "計畫編號 NSTC 114-2637-H-027-003，主持人林鳳儀教授。",
    ],
  },
];

/** The headline and figure for each experience on the About page. */
export const experienceHighlights: Record<string, { value: string; label: string; headline: string }> = {
  "國大會計師事務所": { value: "800+ 張", label: "每期三聯式發票", headline: "每期 800 張以上的發票，每一筆都要對得上。" },
  "求職 Agent 工作台": { value: "3 條", label: "防呆規則", headline: "把重複的求職流程，做成自己的工作台。" },
  "S-O-R 消費者行為專題": { value: "250 則", label: "有效 Google 評論", headline: "從評論看見，商場帶來的不只是購物。" },
  "國科會計畫研究獎助生": { value: "3 年", label: "企業永續報告", headline: "替 AI 漂綠偵測，把研究資料準備好。" },
};

export const firmStats: { value: string; label: string }[] = [
  { value: "800+ 張", label: "每期三聯式發票" },
  { value: "5 階段", label: "從傳票到日記帳一手包辦" },
  { value: accountingYears + " 年+", label: "事務所年資（學期間每週 2–3 天）" },
];

/** One company's books, start to finish, all done by me, grouped into five stages. */
export const firmFlow: { title: string; detail: string; key?: boolean }[] = [
  { title: "憑證", detail: "整理傳票、掃描。" },
  { title: "登打", detail: "登打帳務、補傳票。" },
  { title: "營業稅", detail: "每兩個月印製 401 申報書。" },
  { title: "過帳", detail: "過帳、立帳。" },
  { title: "沖帳與結帳", detail: "立票據、沖帳（和 AI 協作寫腳本處理），印日記帳。", key: true },
];

/** Bars and dots on the About page overview. Dates are yyyy.mm; no `to` means still running. */
export const timelineRows: { label: string; note: string; from?: string; to?: string; points?: { date: string; title: string; top?: boolean }[] }[] = [
  { label: "北科經管", note: "2023.09 起", from: "2023.9" },
  { label: "事務所", note: "2024.07 起", from: "2024.7" },
  { label: "國科會計畫", note: "2025.08–2026.07", from: "2025.8", to: "2026.7" },
  { label: "S-O-R 專題", note: "完成於 2026.06", from: "2025.9", to: "2026.6" },
  { label: "求職 Agent", note: "2026.10 起", from: "2026.10" },
  { label: "競賽", note: "2026 五場", points: [
    { date: "2026.1.25", title: "保包巴士・銀獎" },
    { date: "2026.5.29", title: "消波檜・第一名", top: true },
    { date: "2026.9.4", title: "TapAble｜BUILDMODE・第二名" },
    { date: "2026.10.16", title: "TapAble｜LINE AI・第三名" },
    { date: "2026.10.20", title: "共創世界窗・創意組金獎", top: true },
  ] },
];

/** From the transcript printed 2026.09.24, plus the 2-credit off-campus internship. Excludes 0-credit courses. */
export const creditMix: { area: string; credits: number }[] = [
  { area: "數據、資訊與 AI", credits: 32 },
  { area: "會計、財務與經濟", credits: 27 },
  { area: "管理與行銷", credits: 24 },
  { area: "科技法律", credits: 21 },
  { area: "語言", credits: 12 },
  { area: "通識與其他", credits: 12 },
  { area: "校外實習", credits: 2 },
];

export const semesterAverages: { term: string; average: number }[] = [
  { term: "112-1", average: 84.0 },
  { term: "112-2", average: 85.4 },
  { term: "113-1", average: 83.6 },
  { term: "113-2", average: 86.6 },
  { term: "114-1", average: 91.2 },
  { term: "114-2", average: 89.7 },
];

/** Representative courses on the school page. */
export const courseAreas: { area: string; courses: string }[] = [
  { area: "會計與財務", courses: "會計學、中級會計學、成本會計、財務管理、國際金融" },
  { area: "資訊與 AI", courses: "人工智慧跨域經營管理之應用、管理資訊系統、資料庫系統與應用、網頁設計與 JavaScript、程式設計" },
  { area: "管理與行銷", courses: "管理學、行銷管理、作業管理、企業倫理與永續管理" },
];

/** Law courses, from the transcript. `current` marks the ones still in progress. */
export const lawGroups: { title: string; courses: { name: string; current?: boolean }[] }[] = [
  { title: "智慧財產", courses: [{ name: "智慧財產權" }, { name: "智慧財產權訴訟" }, { name: "商標法" }, { name: "著作權法", current: true }] },
  { title: "資訊與 AI", courses: [{ name: "資訊法律" }, { name: "人工智慧：倫理與法律", current: true }] },
  { title: "公司與商事", courses: [{ name: "公司法" }, { name: "商事法" }] },
  { title: "基礎法律", courses: [{ name: "民法" }, { name: "刑法" }, { name: "行政法" }, { name: "民事訴訟法" }] },
];

export const courses = [
  { area: "會計與財務", items: ["會計學 99", "成本會計 97", "國際金融 93", "財務管理 92", "中級會計學 87"] },
  { area: "資訊與 AI", items: ["人工智慧跨域經營管理之應用 97", "管理資訊系統 96", "資料庫系統與應用 96", "網頁設計與 JavaScript 93", "程式設計 90"] },
  { area: "管理與行銷", items: ["企業倫理與永續管理 96", "作業管理 94", "行銷管理 91", "管理學 90"] },
  { area: "科技法律學程（修習中）", items: ["資訊法律 90", "民法 90", "商標法 88", "智慧財產權 87", "公司法 85"] },
];

export const certifications = [
  { name: "TIMS 行銷專業能力認證", detail: "傑出獎・2025.02" },
  { name: "會計事務－資訊乙級技術士", detail: "2023" },
  { name: "BESTEP 培力英檢", detail: "聽力、閱讀 CEFR B1・2024.05" },
  { name: "會計事務－人工記帳丙級技術士", detail: "" },
  { name: "會計事務－資訊丙級技術士", detail: "" },
  { name: "電腦軟體應用丙級技術士", detail: "" },
  { name: "門市服務丙級技術士", detail: "" },
  { name: "會計能力檢定一級", detail: "" },
  { name: "商業管理能力檢定二級", detail: "" },
  { name: "會計專業認證合格證明", detail: "" },
  { name: "英語能力測驗三級", detail: "" },
];
