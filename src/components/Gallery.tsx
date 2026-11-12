import { useEffect, useRef, useState } from "react";
import type { Figure } from "../data";

/** A single image that opens full size when clicked. */
export function Shot({ figure, onOpen, eager }: { figure: Figure; onOpen?: () => void; eager?: boolean }) {
  const image = (
    <img src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} loading={eager ? "eager" : "lazy"} decoding="async" />
  );
  return (
    <figure className={"shot" + (figure.height > figure.width ? " shot-tall" : "")}>
      {onOpen ? (
        <button type="button" className="shot-button" onClick={onOpen} aria-label={"放大圖片：" + figure.caption}>
          {image}
        </button>
      ) : image}
      {figure.caption && <figcaption>{figure.caption}</figcaption>}
    </figure>
  );
}

/** One large image (slides first), the rest as small thumbnails; one shared viewer, arrow keys move between images. */
export function Gallery({ figures }: { figures: Figure[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = dialog.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
  }, [open]);

  const step = (delta: number) => setOpen(i => (i === null ? i : (i + delta + figures.length) % figures.length));
  const current = open === null ? null : figures[open];
  // Wide figures are slides; the first slide leads, photos follow.
  const slides = figures.filter(f => f.width / f.height >= 1.7);
  const photos = figures.filter(f => f.width / f.height < 1.7);

  const open_ = (f: Figure) => () => setOpen(figures.indexOf(f));
  const viewer = (
    <dialog
      ref={dialog}
      className="viewer"
      aria-label="圖片檢視"
      onClose={() => setOpen(null)}
      onClick={e => { if (e.target === e.currentTarget) setOpen(null); }}
      onKeyDown={e => {
        if (e.key === "ArrowRight") step(1);
        if (e.key === "ArrowLeft") step(-1);
      }}
    >
      {current && (
        <div className="viewer-body">
          <img src={current.src} alt={current.alt} width={current.width} height={current.height} />
          <div className="viewer-bar">
            <p>{current.caption}<span>{(open ?? 0) + 1} / {figures.length}</span></p>
            <div className="viewer-actions">
              {figures.length > 1 && (
                <>
                  <button type="button" onClick={() => step(-1)}>上一張</button>
                  <button type="button" onClick={() => step(1)}>下一張</button>
                </>
              )}
              <button type="button" onClick={() => setOpen(null)} autoFocus>關閉</button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );

  const ordered = [...slides, ...photos];
  const lead = figures.find(f => f.lead) ?? ordered[0];
  const rest = ordered.filter(f => f !== lead);
  return (
    <>
      <div className="gallery-lead"><Shot figure={lead} onOpen={open_(lead)} /></div>
      {rest.length > 0 && (
        <div className="gallery-thumbs">{rest.map(f => <Shot key={f.src} figure={f} onOpen={open_(f)} />)}</div>
      )}
      {viewer}
    </>
  );
}
