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
import hobbyChatting from "@/assets/hobby-chatting.jpg";
import hobbyComposing from "@/assets/hobby-composing.jpg";
import hobbyDrawing from "@/assets/hobby-drawing.jpg";
import hobbyGuitar from "@/assets/hobby-guitar.jpg";
import hobbyInnovation from "@/assets/hobby-innovation.jpg";
import hobbyListening from "@/assets/hobby-listening.jpg";
import hobbySinging from "@/assets/hobby-singing.jpg";

const hobbies = [
  {
    icon: Mic2,
    title: "Singing",
    text: "A voice for quiet evenings and small gatherings.",
    image: hobbySinging,
  },
  {
    icon: Music2,
    title: "Guitar",
    text: "Slow chords, familiar songs, and patient practice.",
    image: hobbyGuitar,
  },
  {
    icon: Waves,
    title: "Listening to music",
    text: "Finding calm, energy, and memories in a good song.",
    image: hobbyListening,
  },
  {
    icon: Brush,
    title: "Drawing",
    text: "Turning small observations into lines, shapes, and color.",
    image: hobbyDrawing,
  },
  {
    icon: Pencil,
    title: "Composing",
    text: "Collecting ideas and arranging them into something personal.",
    image: hobbyComposing,
  },
  {
    icon: MessageCircle,
    title: "Chatting",
    text: "Meaningful conversations with people I care about.",
    image: hobbyChatting,
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "Exploring better ways to make everyday things work.",
    image: hobbyInnovation,
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
