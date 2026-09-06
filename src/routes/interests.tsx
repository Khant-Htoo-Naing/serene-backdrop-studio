import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowUpRight,
  Compass,
  Cpu,
  Heart,
  Leaf,
  Palette,
  Sparkles,
} from "lucide-react";

const interests = [
  {
    icon: Palette,
    title: "Design",
    text: "Thoughtful visual details, calm compositions, and spaces that feel human.",
  },
  {
    icon: Cpu,
    title: "Technology",
    text: "Learning how digital tools can make ideas clearer and everyday life easier.",
  },
  {
    icon: Heart,
    title: "Meaningful relationships",
    text: "Choosing sincerity, kindness, and presence in the relationships that matter.",
  },
  {
    icon: Leaf,
    title: "Nature",
    text: "Quiet green places, changing light, and the restorative rhythm of the outdoors.",
  },
  {
    icon: Sparkles,
    title: "Personal growth",
    text: "Becoming more capable without losing softness, curiosity, or wonder.",
  },
];

export const Route = createFileRoute("/interests")({
  head: () => ({ meta: [{ title: "Interests — Khant Htoo Naing" }] }),
  component: InterestsPage,
});

function InterestsPage() {
  return (
    <main className="interests-page">
      <div className="interests-glow interests-glow-one" />
      <div className="interests-glow interests-glow-two" />
      <div className="interests-inner">
        <Link to="/" className="page-back">
          <ArrowLeft size={15} /> Back home
        </Link>
        <header className="interests-head">
          <span className="page-eyebrow">03 / INTERESTS</span>
          <h1>
            Curiosity is
            <br />
            <em>my compass.</em>
          </h1>
          <p>The ideas, people, and places that keep me learning and becoming.</p>
        </header>
        <div className="interests-list">
          {interests.map(({ icon: Icon, title, text }, index) => (
            <article className="interest-item" key={title}>
              <span className="interest-number">0{index + 1}</span>
              <Icon size={21} />
              <div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
              <ArrowUpRight size={17} />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
