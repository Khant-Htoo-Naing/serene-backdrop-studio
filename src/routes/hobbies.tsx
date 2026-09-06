import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Brush,
  Lightbulb,
  MessageCircle,
  Mic2,
  Music2,
  Pencil,
  Waves,
} from "lucide-react";

import hobbiesBackground from "@/assets/hobbies-background.png";
import centerPortrait from "@/assets/photos/center-portrait.webp";
import fullPhoto from "@/assets/photos/full-photo.webp";
import photoThree from "@/assets/photos/img-20260826-134536.webp";
import photoFour from "@/assets/photos/img-20260816-183505.webp";
import photoFive from "@/assets/photos/img-20260815-093637.webp";
import photoSix from "@/assets/photos/img-20260731-080053.webp";
import profile from "@/assets/photos/profile.webp";

const hobbies = [
  {
    icon: Mic2,
    title: "Singing",
    text: "A voice for quiet evenings and small gatherings.",
    image: centerPortrait,
  },
  {
    icon: Music2,
    title: "Guitar",
    text: "Slow chords, familiar songs, and patient practice.",
    image: fullPhoto,
  },
  {
    icon: Waves,
    title: "Listening to music",
    text: "Finding calm, energy, and memories in a good song.",
    image: photoThree,
  },
  {
    icon: Brush,
    title: "Drawing",
    text: "Turning small observations into lines, shapes, and color.",
    image: photoFour,
  },
  {
    icon: Pencil,
    title: "Composing",
    text: "Collecting ideas and arranging them into something personal.",
    image: photoFive,
  },
  {
    icon: MessageCircle,
    title: "Chatting",
    text: "Meaningful conversations with people I care about.",
    image: profile,
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Exploring better ways to make everyday things work.",
    image: photoSix,
  },
];

export const Route = createFileRoute("/hobbies")({
  head: () => ({
    meta: [
      { title: "Hobbies — Khant Htoo Naing" },
      {
        name: "description",
        content:
          "The music, creativity, conversations and ideas that shape Khant Htoo Naing's everyday life.",
      },
    ],
  }),
  component: HobbiesPage,
});

function HobbiesPage() {
  return (
    <main className="hobbies-page">
      <img
        className="hobbies-backdrop"
        src={hobbiesBackground}
        alt="Personal guitar and mirror photo collage"
      />
      <div className="hobbies-veil" aria-hidden="true" />
      <div className="hobbies-inner">
        <Link to="/" className="page-back">
          <ArrowLeft size={15} /> Back home
        </Link>
        <header className="hobbies-head">
          <span className="page-eyebrow">02 / HOBBIES</span>
          <h1>
            Things that make
            <br />
            <em>life feel alive.</em>
          </h1>
          <p>
            Small rituals, creative detours, and the sounds that make ordinary days more meaningful.
          </p>
        </header>
        <ul className="hobbies-grid">
          {hobbies.map(({ icon: Icon, title, text, image }, index) => (
            <li
              className="hobby-card"
              key={title}
              style={{ "--delay": `${index * 45}ms` } as CSSProperties}
            >
              <img src={image} alt="" loading="lazy" />
              <div className="hobby-copy">
                <span>
                  <Icon size={15} /> 0{index + 1}
                </span>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
              <ArrowUpRight className="hobby-arrow" size={17} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
