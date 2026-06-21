/**
 * IVY TUTORS NETWORK — CAMPAIGN PROGRESS PRESENTATION
 * Design: Refined Institutional — Playfair Display + Outfit
 * Palette: Deep Forest Green (#1A3D2B) + Warm Parchment + Antique Gold
 * Tone: Confident advisor briefing. Forward motion, not status report.
 * Structure: Destination → Lead Protection → Content Library → Creative → Ask → Close
 */

import { useEffect, useRef, useState } from "react";
import {
  Shield,
  BookOpen,
  Video,
  Users,
  MessageSquare,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  Play,
  Star,
  Megaphone,
  Lock,
  Zap,
  Eye,
  FileText,
  Camera,
  AlertCircle,
} from "lucide-react";

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663627107265/VF7za7yZzGGAVr6dSfTPuT/ivy-hero-bg-P5oB8F35bCZACGXNnhg9yM.webp";
const CONTENT_LIB_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663627107265/VF7za7yZzGGAVr6dSfTPuT/ivy-content-library-FoTS2TqBxMec8pqpT8FTm6.webp";
const LEAD_PROTECTION_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663627107265/VF7za7yZzGGAVr6dSfTPuT/ivy-lead-protection-Z4KkCaUT28RXUXfzJ7d2RA.webp";
const LOGO_MARK =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663627107265/VF7za7yZzGGAVr6dSfTPuT/ivy-logo-mark-3QZ95PF4NzpRpJykRb9UFq.webp";

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Sticky Nav ───────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Destination", href: "#destination" },
    { label: "Lead Protection", href: "#lead-protection" },
    { label: "Timeline", href: "#timeline" },
    { label: "Content Library", href: "#content-library" },
    { label: "Ad Creative", href: "#ad-creative" },
    { label: "Next Steps", href: "#next-steps" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2.5">
          <img src={LOGO_MARK} alt="Ivy Tutors Network" className="w-8 h-8" />
          <span
            className={`font-serif text-sm font-semibold tracking-wide transition-colors ${
              scrolled ? "text-[oklch(0.22_0.07_155)]" : "text-white"
            }`}
          >
            Ivy Tutors Network
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-sans text-xs font-medium tracking-wide uppercase transition-colors hover:opacity-70 ${
                scrolled ? "text-[oklch(0.22_0.07_155)]" : "text-white/80"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden p-2 ${scrolled ? "text-[oklch(0.22_0.07_155)]" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 space-y-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.97_0.015_80)] border-t border-[oklch(0.88_0.025_80)] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block font-sans text-sm font-medium text-[oklch(0.22_0.07_155)] py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_BG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.12_0.06_155/0.85)] via-[oklch(0.15_0.07_155/0.75)] to-[oklch(0.20_0.07_155/0.6)]" />

      <div className="relative container mx-auto pt-32 pb-24">
        <div className="max-w-3xl">
          <p className="ivy-eyebrow mb-6">GoToLead Partners × Ivy Tutors Network</p>
          <span className="ivy-rule" />

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Tailored for Ivy Tutors.
            <br />
            <em className="italic text-[oklch(0.82_0.09_85)]">Here's Where It Gets You.</em>
          </h1>
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.11_85)]" />
              <span className="font-sans text-xs text-white/60 uppercase tracking-widest">System Tailored</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.11_85)]" />
              <span className="font-sans text-xs text-white/60 uppercase tracking-widest">Content Ready</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.72_0.11_85)]" />
              <span className="font-sans text-xs text-white/60 uppercase tracking-widest">Launch Pending</span>
            </div>
          </div>

          <p className="font-sans text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mb-12">
            This briefing walks through the funnel being tailored to your specific audience,
            the content library we've prepared, and the one remaining piece that puts everything in motion.
          </p>

          {/* Progress bar */}
          <div className="mb-10 max-w-md">
            <div className="flex items-center justify-between mb-2">
              <span className="font-sans text-xs text-white/50 uppercase tracking-widest">Campaign Readiness</span>
              <span className="font-sans text-xs text-[oklch(0.72_0.11_85)] font-semibold">85%</span>
            </div>
            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[oklch(0.72_0.11_85)] to-[oklch(0.82_0.09_85)] rounded-full" style={{ width: '85%' }} />
            </div>
            <p className="font-sans text-xs text-white/40 mt-1.5">Awaiting branded content to reach full launch capacity</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#destination"
              className="inline-flex items-center gap-2 bg-[oklch(0.72_0.11_85)] hover:bg-[oklch(0.78_0.10_85)] text-[oklch(0.12_0.05_155)] font-sans font-semibold text-sm px-7 py-3.5 rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              View the Briefing
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#next-steps"
              className="inline-flex items-center gap-2 border border-white/40 hover:border-white/70 text-white font-sans font-medium text-sm px-7 py-3.5 rounded transition-all duration-200"
            >
              Jump to Next Steps
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="font-sans text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}

// ─── Section: Destination / Outcome Frame ─────────────────────────────────────
function DestinationSection() {
  return (
    <section id="destination" className="py-24 bg-[oklch(0.97_0.015_80)]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="reveal mb-16">
            <p className="ivy-eyebrow mb-4">01 — The Destination</p>
            <span className="ivy-rule" />
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[oklch(0.22_0.07_155)] mb-6">
              What This Campaign Delivers
            </h2>
            <p className="font-sans text-lg text-[oklch(0.35_0.04_155)] leading-relaxed max-w-2xl">
              The goal has never been to generate raw leads. It's to deliver qualified, pre-warmed families
              who already understand Ivy Tutors Network's approach and are ready to have a real conversation.
            </p>
          </div>

          {/* Pull quote */}
          <div className="reveal reveal-delay-1 border-l-2 border-[oklch(0.72_0.11_85)] pl-8 py-4 mb-16">
            <p className="font-serif text-2xl md:text-3xl italic text-[oklch(0.22_0.07_155)] leading-snug">
              "The families who book a consultation through this campaign will have already seen your expertise,
              recognized your team's credentials, and decided they want to talk — before anyone picks up the phone."
            </p>
          </div>

          {/* Two-column contrast */}
          <div className="reveal reveal-delay-2 grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white border border-[oklch(0.88_0.025_80)] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.88_0.025_80)] flex items-center justify-center">
                  <AlertCircle className="w-4 h-4 text-[oklch(0.55_0.04_155)]" />
                </div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[oklch(0.55_0.04_155)]">
                  Without This System
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Cold leads who don't know who you are",
                  "No follow-up — leads go cold after the first contact",
                  "Every missed call is a lost enrollment",
                  "Ad spend with no trust layer behind it",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-[oklch(0.45_0.04_155)] leading-relaxed">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.04_80)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[oklch(0.22_0.07_155)] rounded-lg p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.72_0.11_85)/0.2] flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-[oklch(0.72_0.11_85)]" />
                </div>
                <p className="font-sans text-xs font-semibold uppercase tracking-widest text-[oklch(0.72_0.11_85)]">
                  With This System
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Families who recognize your face and trust your credentials",
                  "Automated follow-up that keeps every lead warm",
                  "No prospect falls through — every inquiry is tracked",
                  "Content builds trust before the consultation is even booked",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-sm text-white/85 leading-relaxed">
                    <CheckCircle className="mt-0.5 w-4 h-4 text-[oklch(0.72_0.11_85)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why this niche is different */}
          <div className="reveal reveal-delay-3 bg-[oklch(0.94_0.02_80)] rounded-lg p-8 md:p-10">
            <p className="ivy-eyebrow mb-3">Why the nurturing layer matters here</p>
            <h3 className="font-serif text-2xl font-semibold text-[oklch(0.22_0.07_155)] mb-4">
              These Families Are Making a Significant Investment
            </h3>
            <p className="font-sans text-base text-[oklch(0.35_0.04_155)] leading-relaxed mb-6">
              Ivy League admissions advisory is not an impulse purchase. The families you serve are
              sophisticated, research-oriented, and making decisions that matter enormously to them.
              They don't book a consultation with someone they've never heard of. They book with someone
              they've already come to trust — through content, through credentials, through consistency.
            </p>
            <p className="font-sans text-base text-[oklch(0.35_0.04_155)] leading-relaxed">
              That's what this campaign is designed to do. The ads bring families into the system.
              The content library and automated follow-up do the trust-building work that converts
              a curious click into a booked consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Lead Protection ─────────────────────────────────────────────────
function LeadProtectionSection() {
  const protections = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Immediate Response Triggers",
      desc: "The moment a lead submits a form, an automated sequence begins — email, text, and call prompts within minutes. No lead waits in silence.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "A2P-Registered Messaging",
      desc: "Business text messages are registered with the carriers through the A2P process. This means your automated texts land in inboxes — not spam folders.",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Full Pipeline Visibility",
      desc: "Every prospect is tracked from initial inquiry through consultation and enrollment. You'll see exactly where each lead is in the process at any time.",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Multi-Touch Follow-Up",
      desc: "Calls, emails, and texts work together in a coordinated sequence. Prospects who don't respond immediately are re-engaged — not abandoned.",
    },
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Education Before the Ask",
      desc: "Before any booking prompt, leads receive content that explains your process, your team's credentials, and what families can expect. Trust is built before the consultation.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Re-Engagement for Cold Leads",
      desc: "Prospects who don't move forward immediately are placed in a long-term nurture sequence. The campaign continues working even when a family isn't ready yet.",
    },
  ];

  return (
    <section id="lead-protection" className="py-24 bg-[oklch(0.22_0.07_155)]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="reveal mb-6">
            <p className="ivy-eyebrow mb-4" style={{ color: "oklch(0.72 0.11 85)" }}>
              02 — Lead Protection
            </p>
            <span className="ivy-rule" />
          </div>
          <div className="reveal reveal-delay-1 mb-6">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6">
              Every Lead Is Protected.
              <br />
              <em className="italic text-[oklch(0.82_0.09_85)]">Here's Why That Matters.</em>
            </h2>
          </div>
          <div className="reveal reveal-delay-2 mb-16">
            <p className="font-sans text-lg text-white/70 leading-relaxed max-w-2xl">
              The backend of this campaign is built to ensure that no inquiry goes unanswered,
              no prospect falls through the cracks, and every ad dollar generates a lead that
              stays in your pipeline — not one that disappears after a single missed call.
            </p>
          </div>

          {/* Image + stat */}
          <div className="reveal reveal-delay-3 mb-16 rounded-xl overflow-hidden relative">
            <img
              src={LEAD_PROTECTION_IMG}
              alt="Lead protection pipeline visualization"
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.12_0.06_155/0.7)] to-transparent flex items-end">
              <div className="p-8">
                <p className="font-serif text-xl italic text-white/90 max-w-lg">
                  "In this niche, a missed follow-up isn't just a lost lead. It's a lost family —
                  and a lost enrollment that could represent a significant relationship."
                </p>
              </div>
            </div>
          </div>

          {/* Protection grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {protections.map((item, i) => (
              <div
                key={item.title}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/8 transition-colors`}
              >
                <div className="w-10 h-10 rounded-lg bg-[oklch(0.72_0.11_85)/0.15] flex items-center justify-center text-[oklch(0.72_0.11_85)] mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-base font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-white/65 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Timeline / What's Taking Time ───────────────────────────────
function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-[oklch(0.97_0.015_80)]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="reveal mb-4">
            <p className="ivy-eyebrow mb-4">02b — Where We Are & Why</p>
            <span className="ivy-rule" />
          </div>
          <div className="reveal reveal-delay-1 mb-6">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[oklch(0.22_0.07_155)] mb-6">
              Two Dependencies.
              <br />
              <em className="italic text-[oklch(0.55_0.1_85)]">Neither One Is Avoidable.</em>
            </h2>
          </div>
          <div className="reveal reveal-delay-2 mb-14">
            <p className="font-sans text-lg text-[oklch(0.35_0.04_155)] leading-relaxed max-w-2xl">
              This campaign isn't waiting on agency work. It's waiting on two specific external
              dependencies — one is a third-party regulatory process, the other is the branded
              content that only you can provide. Here's exactly what each one is.
            </p>
          </div>

          {/* Two dependency cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            {/* A2P */}
            <div className="reveal reveal-delay-1">
              <div className="bg-white border border-[oklch(0.88_0.025_80)] rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.94_0.02_80)] flex items-center justify-center">
                    <Shield className="w-5 h-5 text-[oklch(0.45_0.04_155)]" />
                  </div>
                  <span className="ivy-badge ivy-badge-amber">Carrier Review Process</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-[oklch(0.22_0.07_155)] mb-3">
                  A2P Carrier Approval
                </h3>
                <p className="font-sans text-sm text-[oklch(0.45_0.04_155)] leading-relaxed mb-4">
                  A2P (Application-to-Person) registration is a federal compliance requirement
                  for business text messaging. Once submitted, it goes through a carrier review
                  process that is entirely outside the agency's control — timelines are set by
                  the carriers themselves, typically ranging from a few days to a couple of weeks.
                </p>
                <p className="font-sans text-sm text-[oklch(0.45_0.04_155)] leading-relaxed">
                  This registration is what enables the automated follow-up sequences to reach
                  prospects reliably via SMS. The campaign can run without it — but the full
                  nurture sequence doesn't operate at capacity until it clears.
                </p>
              </div>
            </div>

            {/* Branded content */}
            <div className="reveal reveal-delay-2">
              <div className="bg-[oklch(0.22_0.07_155)] rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.72_0.11_85)/0.2] flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[oklch(0.72_0.11_85)]" />
                  </div>
                  <span className="ivy-badge ivy-badge-gold">Content Turnaround</span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  Branded Content Recording
                </h3>
                <p className="font-sans text-sm text-white/75 leading-relaxed mb-4">
                  The nurture sequences are built and ready. But they depend on the filmed
                  testimonial and FAQ content to run at full capacity — because the sequences
                  are designed to deliver that content to prospects at specific points in the
                  follow-up cadence.
                </p>
                <p className="font-sans text-sm text-white/75 leading-relaxed">
                  Unbranded creative can run in the meantime as a supporting element. But the
                  sequences don't reach their full trust-building potential until the branded
                  videos are in place. That's what the content guide is for — and the recording
                  ask is as minimal as we could make it.
                </p>
              </div>
            </div>
          </div>

          {/* What's been happening in the meantime */}
          <div className="reveal reveal-delay-3 bg-[oklch(0.94_0.02_80)] rounded-xl p-8 md:p-10">
            <p className="ivy-eyebrow mb-3">In the meantime</p>
            <h3 className="font-serif text-2xl font-semibold text-[oklch(0.22_0.07_155)] mb-4">
              What's Been Happening While We Wait
            </h3>
            <p className="font-sans text-base text-[oklch(0.35_0.04_155)] leading-relaxed mb-6">
              While these two dependencies are being resolved, the agency-side work has been
              ongoing — not paused. The funnel is being actively tailored to Ivy Tutors Network's
              specific audience, lead types, and nurture logic. The content library has been
              researched, scripted, and structured. The ad creative direction has been developed.
              The lead protection system has been configured.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Funnel architecture", note: "Actively being tailored to your audience and lead types" },
                { label: "Lead protection system", note: "Configured and tested for your pipeline" },
                { label: "Content guide & scripts", note: "Researched, written, and delivered" },
                { label: "Ad creative direction", note: "Developed and ready to deploy" },
                { label: "Nurture sequences", note: "Built and awaiting branded content to run at full capacity" },
                { label: "A2P submission", note: "Submitted and in carrier review" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-white rounded-lg p-4">
                  <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.42_0.08_155)] mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-sans text-sm font-semibold text-[oklch(0.22_0.07_155)] mb-0.5">{item.label}</p>
                    <p className="font-sans text-xs text-[oklch(0.55_0.04_155)] leading-relaxed">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Content Library ─────────────────────────────────────────────────
function ContentLibrarySection() {
  const [activeTab, setActiveTab] = useState<"expert" | "testimonials" | "faq">("expert");

  const tabs = [
    { id: "expert" as const, label: "Expert Authority Videos", icon: <Video className="w-4 h-4" /> },
    { id: "testimonials" as const, label: "Parent & Student Testimonials", icon: <Star className="w-4 h-4" /> },
    { id: "faq" as const, label: "FAQ Videos", icon: <MessageSquare className="w-4 h-4" /> },
  ];

  const expertVideos = [
    {
      category: "Admissions Strategy",
      title: "The Ivy League Admissions Myth",
      hook: "Most families think Ivy League admissions is about grades and test scores. It's not.",
      purpose: "Establishes John as a credible authority who sees the process differently than most advisors.",
      scripts: [
        "Addresses the common misconception about what gets students admitted",
        "Explains the holistic review process and what committees actually look for",
        "Positions Ivy Tutors Network as the advisor who understands the real game",
      ],
    },
    {
      category: "Admissions Strategy",
      title: "Why Most College Counselors Miss the Mark",
      hook: "There's a difference between a school counselor who knows the process and an advisor who's been inside it.",
      purpose: "Differentiates Ivy Tutors Network from generic college counseling services.",
      scripts: [
        "Highlights the difference between institutional counselors and specialized advisors",
        "Explains what families miss when they rely on school-provided guidance alone",
        "Introduces the Ivy Tutors Network approach and what makes it different",
      ],
    },
    {
      category: "Parent Concerns",
      title: "What Parents Get Wrong About the Timeline",
      hook: "The families who start this process in 11th grade are already behind.",
      purpose: "Creates urgency without pressure — speaks directly to the parent audience.",
      scripts: [
        "Explains why early engagement matters in the admissions process",
        "Addresses the common mistake of waiting too long to get strategic",
        "Frames the consultation as a planning conversation, not a sales call",
      ],
    },
    {
      category: "Test Prep",
      title: "SAT vs. ACT: The Decision Most Families Get Wrong",
      hook: "Your student doesn't need a perfect score. They need the right score on the right test.",
      purpose: "Demonstrates expertise in test strategy and positions the team as advisors, not tutors.",
      scripts: [
        "Explains the strategic difference between SAT and ACT preparation",
        "Addresses how to choose the right test based on student strengths",
        "Positions Ivy Tutors Network as strategic advisors, not just test prep providers",
      ],
    },
    {
      category: "Conversion-Focused",
      title: "What Happens in the First Consultation",
      hook: "A lot of families wonder what they're actually signing up for. Here's exactly what to expect.",
      purpose: "Reduces friction before the booking — answers the question before it's asked.",
      scripts: [
        "Walks through what the initial consultation covers",
        "Sets clear expectations so families know what they're committing to",
        "Ends with a direct invitation to book",
      ],
    },
  ];

  const testimonialScripts = [
    {
      type: "Parent Testimonial",
      label: "Parent",
      title: "Parent Testimonial Framework",
      prompts: [
        "Where were you in the process when you first reached out to Ivy Tutors Network?",
        "What made you decide to work with them versus handling the process on your own?",
        "What was the most valuable part of working with the team?",
        "What would you tell another family who's on the fence about getting this kind of help?",
      ],
      note: "Self-recorded or video interview format. Natural, conversational delivery preferred over scripted responses.",
    },
    {
      type: "Student Testimonial",
      label: "Student",
      title: "Student Testimonial Framework",
      prompts: [
        "What was the college application process like before you started working with Ivy Tutors?",
        "What changed after you started working with the team?",
        "What's one thing the team helped you see about your application that you wouldn't have seen on your own?",
        "Where did you end up, and what do you want other students to know?",
      ],
      note: "Students should speak naturally. The goal is authentic reflection, not a polished endorsement.",
    },
  ];

  const faqVideos = [
    {
      question: "What makes Ivy Tutors Network different from a school counselor?",
      answer: "School counselors are generalists managing hundreds of students. Our team works exclusively on college admissions strategy and has direct experience with the process from the inside. We know what admissions committees are actually looking for — and we build a strategy around that.",
    },
    {
      question: "When should families start working with you?",
      answer: "The earlier, the better — but it's never too late. Ideally, we're working with students in 9th or 10th grade to build the right academic and extracurricular profile. That said, we work with juniors and seniors who need focused, strategic guidance on a compressed timeline.",
    },
    {
      question: "What does the process look like?",
      answer: "We start with a consultation to understand where your student is and where they want to go. From there, we build a customized strategy that covers academics, test prep, extracurriculars, essay development, and application positioning. We're with you from strategy through submission.",
    },
    {
      question: "Do you guarantee admissions to specific schools?",
      answer: "No. Anyone who guarantees admission to a specific school is not being honest with you. What we guarantee is a strategically positioned application that gives your student the best possible chance. Our track record speaks for itself.",
    },
    {
      question: "How is this different from a tutoring service?",
      answer: "Tutoring improves grades and test scores. We do that too — but our work goes much further. We're building an admissions strategy: the right schools, the right positioning, the right narrative, the right application. Tutoring is one tool. We're the architect.",
    },
  ];

  return (
    <section id="content-library" className="py-24 bg-[oklch(0.94_0.02_80)]">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="reveal mb-4">
            <p className="ivy-eyebrow mb-4">03 — The Content Library</p>
            <span className="ivy-rule" />
          </div>
          <div className="reveal reveal-delay-1 mb-6">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[oklch(0.22_0.07_155)] mb-6">
              The Trust Engine Behind the Campaign
            </h2>
          </div>
          <div className="reveal reveal-delay-2 mb-12">
            <p className="font-sans text-lg text-[oklch(0.35_0.04_155)] leading-relaxed max-w-2xl">
              The content library is what separates this campaign from a standard lead generation effort.
              These videos don't just fill a nurture sequence — they build the credibility that makes
              a family want to book a consultation with Ivy Tutors Network specifically.
            </p>
          </div>

          {/* Image */}
          <div className="reveal reveal-delay-3 mb-12 rounded-xl overflow-hidden">
            <img
              src={CONTENT_LIB_IMG}
              alt="Content creation setup"
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>

          {/* Trust mechanic callout */}
          <div className="reveal reveal-delay-4 bg-[oklch(0.22_0.07_155)] rounded-xl p-8 md:p-10 mb-12">
            <p className="ivy-eyebrow mb-3" style={{ color: "oklch(0.72 0.11 85)" }}>
              The Trust Mechanic
            </p>
            <h3 className="font-serif text-2xl font-semibold text-white mb-4">
              Face Recognition Compounds Credibility
            </h3>
            <p className="font-sans text-base text-white/75 leading-relaxed">
              When a parent sees a video from John in a Facebook ad, then clicks through and sees
              the same face on the education page, then receives a follow-up email with the same
              name — they're not dealing with an anonymous service. They're building a relationship
              with a specific expert whose credentials they've already evaluated. That's the difference
              between a cold lead and a warm one. The content library makes that happen at scale.
            </p>
          </div>

          {/* Tabs */}
          <div className="reveal">
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 font-sans text-sm font-medium px-5 py-2.5 rounded-full border transition-all ${
                    activeTab === tab.id
                      ? "bg-[oklch(0.22_0.07_155)] text-white border-[oklch(0.22_0.07_155)]"
                      : "bg-white text-[oklch(0.35_0.04_155)] border-[oklch(0.88_0.025_80)] hover:border-[oklch(0.22_0.07_155)]"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Expert Videos */}
            {activeTab === "expert" && (
              <div className="space-y-4">
                <p className="font-sans text-sm text-[oklch(0.45_0.04_155)] mb-6 leading-relaxed">
                  These videos position John and the Ivy Tutors Network team as the authoritative voice
                  on Ivy League admissions. They run as ad content and as nurture sequence touchpoints —
                  building credibility before any booking prompt is made.
                </p>
                {expertVideos.map((video, i) => (
                  <div key={video.title} className="bg-white border border-[oklch(0.88_0.025_80)] rounded-lg overflow-hidden">
                    <div className="flex items-center gap-4 p-5 border-b border-[oklch(0.88_0.025_80)]">
                      <div className="w-9 h-9 rounded-full bg-[oklch(0.22_0.07_155)/0.08] flex items-center justify-center flex-shrink-0">
                        <Play className="w-4 h-4 text-[oklch(0.22_0.07_155)]" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="ivy-badge ivy-badge-green">{video.category}</span>
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-[oklch(0.22_0.07_155)]">
                          {video.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="font-serif text-sm italic text-[oklch(0.35_0.04_155)] mb-4 border-l-2 border-[oklch(0.72_0.11_85)] pl-4">
                        "{video.hook}"
                      </p>
                      <p className="font-sans text-xs text-[oklch(0.45_0.04_155)] mb-3">
                        <strong className="font-semibold text-[oklch(0.35_0.04_155)]">Purpose:</strong> {video.purpose}
                      </p>
                      <ul className="space-y-1.5">
                        {video.scripts.map((point) => (
                          <li key={point} className="flex items-start gap-2 font-sans text-xs text-[oklch(0.45_0.04_155)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[oklch(0.42_0.08_155)] mt-0.5 flex-shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Testimonials */}
            {activeTab === "testimonials" && (
              <div className="space-y-6">
                <p className="font-sans text-sm text-[oklch(0.45_0.04_155)] mb-6 leading-relaxed">
                  Testimonials from real families are the highest-trust content in the nurture sequence.
                  They validate the investment, reduce skepticism, and speak directly to the concerns
                  of prospective families in a way that no expert video can replicate.
                </p>
                {testimonialScripts.map((t) => (
                  <div key={t.type} className="ivy-card">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="ivy-badge ivy-badge-gold">{t.label}</span>
                      <h3 className="font-serif text-xl font-semibold text-[oklch(0.22_0.07_155)]">
                        {t.title}
                      </h3>
                    </div>
                    <p className="font-sans text-sm font-semibold text-[oklch(0.35_0.04_155)] mb-3 uppercase tracking-wide">
                      Suggested Prompts
                    </p>
                    <ul className="space-y-3 mb-5">
                      {t.prompts.map((prompt, i) => (
                        <li key={i} className="flex items-start gap-3 font-sans text-sm text-[oklch(0.35_0.04_155)] leading-relaxed">
                          <span className="font-serif italic text-[oklch(0.72_0.11_85)] font-semibold flex-shrink-0">
                            {i + 1}.
                          </span>
                          {prompt}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[oklch(0.94_0.02_80)] rounded-lg p-4">
                      <p className="font-sans text-xs text-[oklch(0.45_0.04_155)] leading-relaxed">
                        <strong className="font-semibold">Format note:</strong> {t.note}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* FAQ Videos */}
            {activeTab === "faq" && (
              <div className="space-y-4">
                <p className="font-sans text-sm text-[oklch(0.45_0.04_155)] mb-6 leading-relaxed">
                  FAQ videos are short, direct-to-camera answers to the questions families ask most.
                  They run in the nurture sequence to address objections before they become barriers.
                  These do not need to be highly produced — natural, conversational delivery is preferred.
                </p>
                {faqVideos.map((faq, i) => (
                  <div key={i} className="ivy-card">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[oklch(0.22_0.07_155)/0.08] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MessageSquare className="w-4 h-4 text-[oklch(0.22_0.07_155)]" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-semibold text-[oklch(0.22_0.07_155)] mb-3">
                          {faq.question}
                        </h3>
                        <p className="font-sans text-sm text-[oklch(0.45_0.04_155)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Ad Creative ─────────────────────────────────────────────────────
function AdCreativeSection() {
  return (
    <section id="ad-creative" className="py-24 bg-[oklch(0.97_0.015_80)]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="reveal mb-4">
            <p className="ivy-eyebrow mb-4">04 — Ad Creative</p>
            <span className="ivy-rule" />
          </div>
          <div className="reveal reveal-delay-1 mb-6">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[oklch(0.22_0.07_155)] mb-6">
              Two Types of Creative.
              <br />
              <em className="italic text-[oklch(0.55_0.1_85)]">One Clear Distinction.</em>
            </h2>
          </div>
          <div className="reveal reveal-delay-2 mb-16">
            <p className="font-sans text-lg text-[oklch(0.35_0.04_155)] leading-relaxed max-w-2xl">
              The campaign uses two categories of ad creative, and it's important to understand
              what each one is, what it does, and what stage it belongs to.
            </p>
          </div>

          {/* Two creative types */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Branded */}
            <div className="reveal reveal-delay-1">
              <div className="bg-[oklch(0.22_0.07_155)] rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.72_0.11_85)/0.2] flex items-center justify-center">
                    <Camera className="w-5 h-5 text-[oklch(0.72_0.11_85)]" />
                  </div>
                  <div>
                    <span className="ivy-badge ivy-badge-gold text-xs">Branded Creative</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-white mb-4">
                  Real People. Real Credibility.
                </h3>
                <p className="font-sans text-sm text-white/75 leading-relaxed mb-6">
                  Branded creative features real team members and real families on camera.
                  This is the highest-trust content in the campaign — it's what turns a
                  curious scroll into a genuine interest in Ivy Tutors Network specifically.
                </p>
                <ul className="space-y-3">
                  {[
                    "John and team members speaking directly to camera",
                    "Parent and student testimonial videos",
                    "Expert authority content from the content library",
                    "The face-recognition trust mechanic — same face, ad to landing page",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-white/80">
                      <CheckCircle className="w-4 h-4 text-[oklch(0.72_0.11_85)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-sans text-xs text-white/50 leading-relaxed">
                    These assets are produced from the content guide scripts. They are the
                    final piece before the campaign runs at full capacity.
                  </p>
                </div>
              </div>
            </div>

            {/* Unbranded */}
            <div className="reveal reveal-delay-2">
              <div className="bg-white border border-[oklch(0.88_0.025_80)] rounded-xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[oklch(0.94_0.02_80)] flex items-center justify-center">
                    <Megaphone className="w-5 h-5 text-[oklch(0.45_0.04_155)]" />
                  </div>
                  <div>
                    <span className="ivy-badge ivy-badge-amber text-xs">Unbranded Creative</span>
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[oklch(0.22_0.07_155)] mb-4">
                  Directional Examples.
                  <br />
                  <span className="text-[oklch(0.45_0.04_155)] text-xl">Not Final Assets.</span>
                </h3>
                <p className="font-sans text-sm text-[oklch(0.45_0.04_155)] leading-relaxed mb-6">
                  Unbranded creative uses AI-generated imagery to show the visual style and
                  messaging approach that's currently converting well in this category.
                  These are directional examples — they show what works, not what will run.
                </p>
                <ul className="space-y-3">
                  {[
                    "AI-generated imagery showing current high-converting creative styles",
                    "Demonstrates the visual direction before branded assets are produced",
                    "Useful for testing messaging angles before investing in production",
                    "Clearly labeled as directional — not presented as finished campaign assets",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 font-sans text-sm text-[oklch(0.45_0.04_155)]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[oklch(0.75_0.04_80)] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-6 border-t border-[oklch(0.88_0.025_80)]">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-[oklch(0.55_0.12_65)] mt-0.5 flex-shrink-0" />
                    <p className="font-sans text-xs text-[oklch(0.55_0.04_155)] leading-relaxed">
                      <strong>Important:</strong> Unbranded AI creative is directional only and not final.
                      It can serve as a secondary, supporting element in the ad mix — but the branded
                      content is what anchors the campaign and drives the highest-trust results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Creative visual examples */}
          <div className="reveal reveal-delay-3 mb-16">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="ivy-eyebrow mb-1">AI Creative Direction / Example Concepts</p>
                <p className="font-sans text-sm text-[oklch(0.55_0.04_155)]">Directional only. Not finished campaign assets.</p>
              </div>
              <span className="ivy-badge ivy-badge-amber">Conceptual</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Urgency / Deadline Angle", desc: "Application deadline framing — time-sensitive hook" },
                { label: "Social Proof Angle", desc: "Results-focused framing — outcomes and track record" },
                { label: "Problem / Awareness Angle", desc: "Pain-point framing — what families get wrong" },
                { label: "Authority / Credentials Angle", desc: "Expertise framing — insider knowledge positioning" },
                { label: "Comparison Angle", desc: "Differentiation framing — vs. school counselors" },
                { label: "Investment Angle", desc: "Stakes framing — the cost of not getting help" },
              ].map((concept) => (
                <div
                  key={concept.label}
                  className="group relative bg-[oklch(0.94_0.02_80)] border-2 border-dashed border-[oklch(0.80_0.03_80)] rounded-xl overflow-hidden aspect-[4/5] flex flex-col items-center justify-end p-4"
                >
                  {/* Placeholder visual area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-[oklch(0.88_0.025_80)] flex items-center justify-center mx-auto mb-2">
                        <Megaphone className="w-5 h-5 text-[oklch(0.55_0.04_155)]" />
                      </div>
                      <p className="font-sans text-xs text-[oklch(0.65_0.04_155)] uppercase tracking-widest">Image Slot</p>
                    </div>
                  </div>
                  {/* Label overlay */}
                  <div className="relative z-10 w-full bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <p className="font-sans text-xs font-semibold text-[oklch(0.22_0.07_155)] mb-0.5">{concept.label}</p>
                    <p className="font-sans text-xs text-[oklch(0.55_0.04_155)] leading-tight">{concept.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="font-sans text-xs text-[oklch(0.65_0.04_155)] mt-4 text-center">
              These concept slots represent the creative directions being developed. Final AI-generated examples will be placed here.
            </p>
          </div>

          {/* Why both matter */}
          <div className="reveal reveal-delay-3 bg-[oklch(0.94_0.02_80)] rounded-xl p-8 md:p-10">
            <p className="ivy-eyebrow mb-3">The Creative Strategy</p>
            <h3 className="font-serif text-2xl font-semibold text-[oklch(0.22_0.07_155)] mb-4">
              Why the Branded Content Is the Priority
            </h3>
            <p className="font-sans text-base text-[oklch(0.35_0.04_155)] leading-relaxed mb-4">
              In a high-trust, high-investment category like Ivy League admissions advisory,
              generic creative doesn't convert at the level this campaign is designed to reach.
              Families making this kind of decision want to see the person they're going to work with.
              They want to evaluate credentials, assess communication style, and decide if this is
              someone they trust with their child's future.
            </p>
            <p className="font-sans text-base text-[oklch(0.35_0.04_155)] leading-relaxed">
              That's why the branded content — the expert videos, the testimonials, the FAQ answers —
              is the primary engine of this campaign. The unbranded AI creative serves a supporting
              role: it can run alongside branded content to test messaging angles and broaden reach.
              But it's the branded content that makes the campaign work specifically for Ivy Tutors Network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Next Steps / The Ask ───────────────────────────────────────────
function NextStepsSection() {
  const firstBatch = [
    {
      category: "Expert Authority Videos",
      ask: "One video from each of the five script categories",
      detail: "Admissions Strategy, Parent Concerns, Test Prep, Conversion-Focused — pick one from each. The scripts are written. Natural delivery is preferred over word-for-word recitation.",
      effort: "~30–45 min total",
    },
    {
      category: "Testimonials",
      ask: "One parent testimonial + one student testimonial",
      detail: "Self-recorded or a short video interview. The prompts are in the content guide. Conversational, authentic delivery — not a polished endorsement.",
      effort: "~15–20 min each",
    },
    {
      category: "FAQ Videos",
      ask: "The five FAQ responses",
      detail: "Direct-to-camera, short answers. These do not need to be produced. Phone camera, good lighting, quiet space. The answers are already written.",
      effort: "~20–30 min total",
    },
  ];

  return (
    <section id="next-steps" className="py-24 bg-[oklch(0.22_0.07_155)]">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="reveal mb-4">
            <p className="ivy-eyebrow mb-4" style={{ color: "oklch(0.72 0.11 85)" }}>
              05 — What We Need From You
            </p>
            <span className="ivy-rule" />
          </div>
          <div className="reveal reveal-delay-1 mb-6">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-white mb-6">
              One Clear Ask.
              <br />
              <em className="italic text-[oklch(0.82_0.09_85)]">The Last Piece Before Launch.</em>
            </h2>
          </div>
          <div className="reveal reveal-delay-2 mb-16">
            <p className="font-sans text-lg text-white/70 leading-relaxed max-w-2xl">
              The funnel is being actively tailored to Ivy Tutors Network's specific lead types,
              nurture needs, and audience. The scripts are written. The one remaining piece is
              the branded content — and we've made it as straightforward as possible to produce.
            </p>
          </div>

          {/* The ask cards */}
          <div className="space-y-5 mb-16">
            {firstBatch.map((item, i) => (
              <div
                key={item.category}
                className={`reveal reveal-delay-${i + 1} bg-white/5 border border-white/10 rounded-xl p-7`}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-5">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="ivy-badge ivy-badge-gold">{item.category}</span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-white mb-2">
                      {item.ask}
                    </h3>
                    <p className="font-sans text-sm text-white/65 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="bg-[oklch(0.72_0.11_85)/0.15] border border-[oklch(0.72_0.11_85)/0.3] rounded-lg px-4 py-2 text-center">
                      <p className="font-sans text-xs text-[oklch(0.72_0.11_85)] font-semibold uppercase tracking-wide mb-0.5">
                        Estimated Time
                      </p>
                      <p className="font-sans text-sm text-white font-medium">{item.effort}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Logistics note */}
          <div className="reveal reveal-delay-4 bg-white/8 border border-white/15 rounded-xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[oklch(0.72_0.11_85)/0.2] flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-[oklch(0.72_0.11_85)]" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-white mb-3">
                  Production Doesn't Need to Be Complex
                </h3>
                <p className="font-sans text-sm text-white/70 leading-relaxed mb-4">
                  These videos don't require a production crew or a studio. A smartphone camera,
                  good natural lighting, and a quiet space are all you need. The scripts are guides —
                  the goal is conviction and clarity, not word-for-word recitation.
                </p>
                <p className="font-sans text-sm text-white/70 leading-relaxed">
                  Once you have the first batch, send everything over and we'll review together.
                  This is a content library we'll build over time — the first batch is what gets
                  the campaign running.
                </p>
              </div>
            </div>
          </div>

          {/* A2P reminder */}
          <div className="reveal reveal-delay-5 bg-[oklch(0.72_0.11_85)/0.1] border border-[oklch(0.72_0.11_85)/0.3] rounded-xl p-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[oklch(0.72_0.11_85)] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-sm font-semibold text-[oklch(0.82_0.09_85)] mb-1">
                  A2P Registration
                </p>
                <p className="font-sans text-sm text-white/65 leading-relaxed">
                  If you haven't yet completed the A2P registration form, please do so as soon as possible.
                  This is required for business text messaging compliance and enables the automated
                  follow-up sequences to reach prospects reliably. The approval process can take
                  a few days to a couple of weeks depending on carrier review times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Close ───────────────────────────────────────────────────────────
function CloseSection() {
  return (
    <section id="close" className="py-24 bg-[oklch(0.97_0.015_80)]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal mb-6">
            <img
              src={LOGO_MARK}
              alt="Ivy Tutors Network"
              className="w-16 h-16 mx-auto mb-6 opacity-80"
            />
            <p className="ivy-eyebrow mb-4 text-center">06 — Questions & Next Steps</p>
            <span className="ivy-rule mx-auto" />
          </div>

          <div className="reveal reveal-delay-1 mb-8">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold text-[oklch(0.22_0.07_155)] mb-6">
              We're Ready to Walk Through
              <br />
              <em className="italic">Any of This in Detail.</em>
            </h2>
            <p className="font-sans text-lg text-[oklch(0.35_0.04_155)] leading-relaxed">
              The funnel is being tailored specifically to Ivy Tutors Network. The content guide
              is ready. The campaign is waiting on the branded content to run at full capacity.
              We're here to answer any questions, walk through any section of this briefing,
              and make the content production process as smooth as possible.
            </p>
          </div>

          <div className="reveal reveal-delay-2 bg-[oklch(0.22_0.07_155)] rounded-2xl p-10 mb-12">
            <p className="font-serif text-2xl italic text-white/90 mb-6 leading-snug">
              "The goal is simple: get the first batch of content recorded, get it into the system,
              and get this campaign in front of the families who need what Ivy Tutors Network offers."
            </p>
            <p className="font-sans text-sm text-white/50 uppercase tracking-widest">
              GoToLead Partners
            </p>
          </div>

          {/* Roadmap - what's in progress */}
          <div className="reveal reveal-delay-3 text-left bg-white border border-[oklch(0.88_0.025_80)] rounded-xl p-8 mb-12">
            <h3 className="font-serif text-xl font-semibold text-[oklch(0.22_0.07_155)] mb-2">
              Where Things Are Right Now
            </h3>
            <p className="font-sans text-sm text-[oklch(0.55_0.04_155)] mb-6">
              This is an active campaign build — not a finished product handed off. Here's the current state of each workstream.
            </p>
            <div className="space-y-3">
              {[
                { label: "Funnel architecture & automations", note: "Being actively tailored to Ivy Tutors Network's specific lead types and nurture logic", state: "active" },
                { label: "Lead protection & pipeline tracking", note: "Configured and being refined as the campaign takes shape", state: "active" },
                { label: "Education page & form flow", note: "Live and being optimized for conversion", state: "active" },
                { label: "Follow-up sequences & nurturing", note: "Built and ready to run at full capacity once branded content is in place", state: "active" },
                { label: "Content guide & scripts", note: "Delivered — ready for recording", state: "delivered" },
                { label: "Facebook / Meta account & pixel", note: "In progress", state: "progress" },
                { label: "A2P messaging registration", note: "Submitted — in carrier review (third-party process, outside agency control)", state: "progress" },
                { label: "Branded content recording", note: "Awaiting first batch from client — this is the unlock for full campaign capacity", state: "pending" },
              ].map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4 py-3 border-b border-[oklch(0.88_0.025_80)] last:border-0">
                  <div className="flex items-start gap-3 flex-1">
                    <div className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                      item.state === "active" ? "bg-[oklch(0.42_0.08_155)]" :
                      item.state === "delivered" ? "bg-[oklch(0.72_0.11_85)]" :
                      item.state === "progress" ? "bg-[oklch(0.55_0.12_65)]" :
                      "bg-[oklch(0.75_0.04_80)]"
                    }`} />
                    <div>
                      <p className="font-sans text-sm font-medium text-[oklch(0.22_0.07_155)] mb-0.5">{item.label}</p>
                      <p className="font-sans text-xs text-[oklch(0.55_0.04_155)] leading-relaxed">{item.note}</p>
                    </div>
                  </div>
                  <span
                    className={`ivy-badge flex-shrink-0 mt-0.5 ${
                      item.state === "active" ? "ivy-badge-green" :
                      item.state === "delivered" ? "ivy-badge-gold" :
                      item.state === "progress" ? "ivy-badge-amber" :
                      "ivy-badge-amber"
                    }`}
                  >
                    {item.state === "active" ? "In progress" :
                     item.state === "delivered" ? "Delivered" :
                     item.state === "progress" ? "In progress" :
                     "Pending"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-4">
            <p className="font-sans text-sm text-[oklch(0.55_0.04_155)] leading-relaxed">
              Prepared by <strong className="text-[oklch(0.22_0.07_155)]">GoToLead Partners</strong> for Ivy Tutors Network.
              <br />
              Questions? Reach out to Jay at{" "}
              <a href="mailto:jay@gotoleadpartners.com" className="text-[oklch(0.22_0.07_155)] underline underline-offset-2 hover:opacity-70 transition-opacity">
                jay@gotoleadpartners.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.04_155)] py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <img src={LOGO_MARK} alt="Ivy Tutors Network" className="w-6 h-6 opacity-60" />
          <span className="font-sans text-xs text-white/40 tracking-wide">
            Ivy Tutors Network × GoToLead Partners
          </span>
        </div>
        <p className="font-sans text-xs text-white/30">
          Confidential client briefing — June 2026
        </p>
      </div>
    </footer>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <DestinationSection />
      <LeadProtectionSection />
      <TimelineSection />
      <ContentLibrarySection />
      <AdCreativeSection />
      <NextStepsSection />
      <CloseSection />
      <Footer />
    </div>
  );
}
