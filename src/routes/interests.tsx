import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Compass, Leaf, Sparkles, TrainFront } from "lucide-react";

import waterfallVideo from "@/assets/serene-forest-waterfall-loop.mp4.asset.json";
import waterfall from "@/assets/serene-forest-waterfall.jpg";
import centerPortrait from "@/assets/photos/center-portrait.webp";
import fullPhoto from "@/assets/photos/full-photo.webp";
import photoThree from "@/assets/photos/img-20260826-134536.webp";

const interests = [
  {
    icon: Compass,
    title: "Explore new things",
    text: "Following curiosity into new places, ideas, skills, and small discoveries.",
    poster: centerPortrait,
  },
  {
    icon: TrainFront,
    title: "Travelling",
    text: "Collecting the changing light, unfamiliar streets, and stories found on the way.",
    poster: fullPhoto,
  },
  {
    icon: Leaf,
    title: "Nature and Creatures",
    text: "Finding wonder in forests, flowing water, animals, and the life around us.",
    poster: waterfall,
  },
  {
    icon: Sparkles,
    title: "Breakthrough technology",
    text: "Watching brave ideas become tools that can change how people live and create.",
    poster: photoThree,
  },
];

export const Route = createFileRoute("/interests")({
  head: () => ({
    meta: [
      { title: "Interests — Khant Htoo Naing" },
      {
        name: "description",
        content: "The ideas, journeys, nature and technology that keep Khant Htoo Naing curious.",
      },
    ],
  }),
  component: InterestsPage,
});

function InterestsPage() {
  return (
    <main className="interests-page interests-video-page">
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
          <p>The moving ideas, places, living things, and inventions that keep me learning.</p>
        </header>
        <div className="interest-video-grid">
          {interests.map(({ icon: Icon, title, text, poster }, index) => (
            <article className="interest-video-card" key={title}>
              <video
                className="interest-video"
                src={waterfallVideo.url}
                poster={poster}
                autoPlay
                muted
                loop
                playsInline
                aria-hidden="true"
              />
              <div className="interest-video-shade" />
              <div className="interest-video-copy">
                <span>
                  <Icon size={16} /> 0{index + 1}
                </span>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
              <ArrowUpRight className="interest-video-arrow" size={18} />
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
