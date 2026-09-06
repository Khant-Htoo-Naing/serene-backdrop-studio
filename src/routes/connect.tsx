import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Instagram, Mail, MessageCircle } from "lucide-react";

const links = [
  { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
  {
    icon: Instagram,
    label: "Instagram",
    value: "Follow the little moments",
    href: "https://instagram.com",
  },
  {
    icon: MessageCircle,
    label: "Say hello",
    value: "Start a conversation",
    href: "mailto:hello@example.com?subject=Hello%20Khant",
  },
];

export const Route = createFileRoute("/connect")({
  head: () => ({ meta: [{ title: "Connect — Khant Htoo Naing" }] }),
  component: ConnectPage,
});

function ConnectPage() {
  return (
    <main className="connect-page">
      <div className="connect-paper" />
      <div className="connect-sun" />
      <div className="connect-inner">
        <Link to="/" className="page-back">
          <ArrowLeft size={15} /> Back home
        </Link>
        <header className="connect-head">
          <span className="page-eyebrow">04 / CONNECT</span>
          <h1>
            Let’s keep
            <br />
            <em>in touch.</em>
          </h1>
          <p>A quiet hello is always welcome. Choose a link below and say hi.</p>
        </header>
        <div className="connect-links">
          {links.map(({ icon: Icon, label, value, href }) => (
            <a
              className="connect-link"
              href={href}
              key={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
            >
              <span className="connect-icon">
                <Icon size={19} />
              </span>
              <span>
                <small>{label}</small>
                <strong>{value}</strong>
              </span>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
        <p className="connect-note">Made with intention · KHN</p>
      </div>
    </main>
  );
}
