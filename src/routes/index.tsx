import { createFileRoute } from "@tanstack/react-router";
import { useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  BookOpen,
  ChevronDown,
  Compass,
  Flower2,
  Heart,
  Leaf,
  Link2,
  Mail,
  Music2,
  Sparkles,
  SunMedium,
} from "lucide-react";

import waterfall from "@/assets/serene-forest-waterfall.jpg";
import centerPortrait from "@/assets/photos/center-portrait.webp";
import fullPhoto from "@/assets/photos/full-photo.webp";
import photoThree from "@/assets/photos/img-20260826-134536.webp";
import photoFour from "@/assets/photos/img-20260816-183505.webp";
import photoFive from "@/assets/photos/img-20260815-093637.webp";
import photoSix from "@/assets/photos/img-20260731-080053.webp";

const photos = [
  { src: centerPortrait, className: "photo-main" },
  { src: fullPhoto, className: "photo-tall" },
  { src: photoThree, className: "photo-small" },
  { src: photoFour, className: "photo-square" },
  { src: photoFive, className: "photo-wide" },
  { src: photoSix, className: "photo-mini" },
];

const panels = {
  education: {
    eyebrow: "01 / EDUCATION",
    title: "Learning with direction.",
    icon: BookOpen,
    body: "A curious student building a foundation one thoughtful step at a time. My education is a work in progress, shaped by patience, discipline, and a desire to understand how things work.",
    note: "Current chapter · Student",
  },
  hobbies: {
    eyebrow: "02 / HOBBIES",
    title: "Quiet things, deeply felt.",
    icon: Music2,
    body: "I enjoy the small rituals that create a sense of calm: music, photography, time with pets, and making space to notice the world around me.",
    note: "A slower pace is still a pace.",
  },
  interests: {
    eyebrow: "03 / INTERESTS",
    title: "Curiosity is my compass.",
    icon: Compass,
    body: "I am drawn to design, technology, meaningful conversations, and the kind of ideas that make everyday life feel a little more intentional.",
    note: "Always exploring · Always becoming",
  },
  contact: {
    eyebrow: "04 / CONNECT",
    title: "Let’s keep in touch.",
    icon: Link2,
    body: "This is the place for my future contact links. Until then, feel free to leave a message and say hello.",
    note: "Links coming soon",
  },
};

type PanelKey = keyof typeof panels;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khant Htoo Naing | Personal Portfolio" },
      { name: "description", content: "The personal portfolio and story of Khant Htoo Naing." },
      { property: "og:title", content: "Khant Htoo Naing | Personal Portfolio" },
      { property: "og:description", content: "The personal portfolio and story of Khant Htoo Naing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [activePanel, setActivePanel] = useState<PanelKey | null>(null);
  const active = activePanel ? panels[activePanel] : null;
  const ActiveIcon = active?.icon;

  return (
    <main className="site-shell">
      <div className="sun-orb" aria-hidden="true" />
      <div className="leaf-line leaf-line-one" aria-hidden="true"><Leaf size={54} /></div>
      <div className="leaf-line leaf-line-two" aria-hidden="true"><Flower2 size={38} /></div>

      <section className="profile-column">
        <div className="topline">
          <span className="monogram">KHN</span>
          <span className="topline-label">Personal garden · 2026</span>
          <span className="status-dot"><span /> Based in Myanmar</span>
        </div>

        <div className="intro-copy">
          <p className="kicker"><Sparkles size={13} /> A little about me</p>
          <h1>Khant<br /><em>Htoo Naing</em></h1>
          <p className="lead">A quiet mind with a warm heart,<br />finding purpose in the everyday.</p>
        </div>

        <div className="photo-collage" aria-label="A collage of personal photographs in a serene forest">
          <img className="nature-backdrop" src={waterfall} alt="A serene forest waterfall behind the photo collage" width={1536} height={1024} />
          <div className="collage-sticker sticker-one"><SunMedium size={20} /><span>good<br />days</span></div>
          <div className="collage-sticker sticker-two">from<br />my life</div>
          {photos.map((photo, index) => (
            <div className={`photo-card ${photo.className}`} key={photo.src} style={{ "--i": index } as CSSProperties}>
              <img src={photo.src} alt={`Khant Htoo Naing personal photo ${index + 1}`} />
            </div>
          ))}
          <div className="collage-caption"><span>Little moments</span><span>01—06</span></div>
        </div>

        <div className="identity-strip">
          <div className="identity-mark"><Heart size={15} fill="currentColor" /></div>
          <p>Ambivert, but more introverted.<br /><span>Tranquility &amp; serenity.</span></p>
          <p className="identity-side">Love<br />to love.</p>
        </div>
      </section>

      <section className="story-column">
        <header className="story-header">
          <span className="chapter-label"><Leaf size={13} /> 01 — THE BEGINNING</span>
          <span className="scroll-hint">Scroll to explore <ChevronDown size={14} /></span>
        </header>

        <div className="story-body">
          <p className="section-kicker">Nice to meet you</p>
          <h2>Determined,<br /><span>purposeful,</span><br />and becoming.</h2>
          <p className="story-text">I’m Khant Htoo Naing — someone who finds meaning in quiet moments, sincere relationships, and the steady pursuit of a life that feels true. I believe softness and determination can exist in the same person.</p>

          <div className="facts-card">
            <div className="facts-heading"><span>AT A GLANCE</span><span className="rule" /></div>
            <div className="facts-grid">
              <div><span>Born</span><strong>21.4.2008</strong></div>
              <div><span>Height</span><strong>5&apos; 5&quot;</strong></div>
              <div><span>Family</span><strong>Five members</strong></div>
              <div><span>Nature</span><strong>Pet lover</strong></div>
            </div>
            <p className="family-note">My father and mother are engineers of chemical and chemistry. My elder sister attends TTU and studies civil engineering. My younger brother is a Grade 8 student.</p>
          </div>
        </div>

        <nav className="section-nav" aria-label="More about Khant Htoo Naing">
          {(Object.keys(panels) as PanelKey[]).map((key, index) => {
            const item = panels[key];
            const Icon = item.icon;
            const isActive = activePanel === key;
            return (
              <button className={`nav-item ${isActive ? "is-active" : ""}`} key={key} onClick={() => setActivePanel(isActive ? null : key)} aria-expanded={isActive} aria-controls="section-detail-panel">
                <span className="nav-number">0{index + 1}</span><span>{item.eyebrow.split(" / ")[1]}</span><Icon size={17} className="nav-icon" /><ArrowUpRight size={17} className="arrow-icon" />
              </button>
            );
          })}
        </nav>

        {active && (
          <div className="detail-panel" id="section-detail-panel" role="region" aria-live="polite">
            <div className="detail-top"><span>{active.eyebrow}</span>{ActiveIcon && <ActiveIcon size={18} />}</div>
            <h3>{active.title}</h3>
            <p>{active.body}</p>
            <span className="detail-note">{active.note}</span>
            {activePanel === "contact" && <a className="mail-link" href="mailto:hello@example.com"><Mail size={15} /> Add an email link <ArrowUpRight size={14} /></a>}
          </div>
        )}

        <footer className="site-footer"><span>© KHN</span><span>Made with intention</span><span className="footer-heart">♥</span></footer>
      </section>
    </main>
  );
}