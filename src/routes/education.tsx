import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Award, GraduationCap, Guitar, Languages, Mic2 } from "lucide-react";

import trophies from "@/assets/trophies.jpg.asset.json";
import englishImg from "@/assets/edu/english.jpg";
import singingImg from "@/assets/edu/singing.jpg";
import guitarImg from "@/assets/edu/guitar.jpg";
import distinctionsImg from "@/assets/edu/distinctions-certificate.png.asset.json";
import medicalImg from "@/assets/edu/medical.jpg";

const items = [
  {
    icon: Languages,
    image: englishImg,
    title: "English skill",
    text: "B2 — upper intermediate. Comfortable reading, writing and holding real conversations.",
  },
  {
    icon: Mic2,
    image: singingImg,
    title: "Singing",
    text: "A voice for quiet evenings and small gatherings — music as a way of breathing.",
  },
  {
    icon: Guitar,
    image: guitarImg,
    title: "Playing guitar",
    text: "Six strings, slow chords, and songs learned patiently one line at a time.",
  },
  {
    icon: Award,
    image: distinctionsImg.url,
    title: "6 distinctions",
    text: "Six subject distinctions earned through steady, disciplined study.",
  },
  {
    icon: GraduationCap,
    image: medicalImg,
    title: "Medical student",
    text: "Now walking the long road of medicine, with care and curiosity as companions.",
  },
];

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education — Khant Htoo Naing" },
      { name: "description", content: "Language skills, music, academic distinctions and medical studies of Khant Htoo Naing." },
      { property: "og:title", content: "Education — Khant Htoo Naing" },
      { property: "og:description", content: "Language skills, music, academic distinctions and medical studies of Khant Htoo Naing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap" },
    ],
  }),
  component: EducationPage,
});

function EducationPage() {
  return (
    <main className="education-page">
      <img className="education-backdrop" src={trophies.url} alt="A shelf full of trophies, medals and certificates" />
      <div className="education-veil" aria-hidden="true" />

      <div className="education-inner">
        <Link to="/" className="education-back">
          <ArrowLeft size={15} /> Back
        </Link>

        <header className="education-head">
          <span className="education-eyebrow">01 / EDUCATION</span>
          <h1>Learning with direction.</h1>
          <p>A few of the things I have learned, practised and earned along the way.</p>
        </header>

        <ul className="education-list">
          {items.map(({ icon: Icon, image, title, text }) => (
            <li className="education-item" key={title}>
              <img className="education-thumb" src={image} alt={title} loading="lazy" width={768} height={768} />
              <div className="education-copy">
                <span className="education-tag"><Icon size={14} /> {title}</span>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
