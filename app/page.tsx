"use client";

import { useState } from "react";
import Image from "next/image";

type Tab = "generate" | "leaderboard" | "support";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("generate");
  const [niche, setNiche] = useState("");
  const [result, setResult] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [logoSpin, setLogoSpin] = useState(false);

  const overallScore = 74;

  function resetHome() {
    setLogoSpin(true);

    setTimeout(() => {
      setLogoSpin(false);
    }, 500);

    setActiveTab("generate");
    setResult("");
    setNiche("");
  }

  function generateNiche() {
    if (niche.trim() === "") {
      setResult("Write a niche first.");
      return;
    }

    setResult(`🔥 ${niche} has strong potential.

Overall Score: ${overallScore}/100

Audience: Young people interested in ${niche}

Product Ideas:
- Starter kit
- Digital guide
- Premium bundle
- Subscription box
- Digital checklist

TikTok Hooks:
- "I wish I knew this before starting ${niche}"
- "3 products in ${niche} that could blow up"
- "This niche is still underrated"

Warning:
This is an early demo analysis. Real AI trend data will be added later.`);
  }

  const faqs = [
    {
      question: "What is NicheRadar?",
      answer:
        "NicheRadar helps users discover and evaluate Shopify niche ideas before they become saturated.",
    },
    {
      question: "How does it work?",
      answer:
        "You enter a niche or market, and NicheRadar gives you a structured breakdown with product ideas, audience angles, trend potential, and content hooks.",
    },
    {
      question: "Who is this for?",
      answer:
        "It is built for people who want to start an online business but do not know what products or niches to focus on.",
    },
    {
      question: "Will this guarantee success?",
      answer:
        "No. It is a research tool, not a money printer. Execution, branding, marketing, and testing still matter.",
    },
  ];

  const metrics = [
    { label: "Trend", score: 8, text: "Search interest is growing fast." },
    { label: "CPM Potential", score: 7, text: "Strong monetization potential." },
    { label: "Competition", score: 3, text: "Relatively low competition." },
    { label: "Virality", score: 9, text: "High viral potential on TikTok." },
  ];

  const leaderboard = [
    { rank: 1, niche: "AI Wearable Accessories", score: 94, tag: "Exploding", locked: true },
    { rank: 2, niche: "Pet Sleep Tech", score: 91, tag: "High Demand", locked: true },
    { rank: 3, niche: "Smart Recovery Gear", score: 89, tag: "Low Competition", locked: true },
    { rank: 4, niche: "AI Desk Accessories", score: 86, tag: "Rising", locked: false },
    { rank: 5, niche: "Home Fitness Recovery", score: 84, tag: "Viral Potential", locked: false },
    { rank: 6, niche: "Smart Study Tools", score: 81, tag: "Student Market", locked: false },
    { rank: 7, niche: "Travel Organization", score: 78, tag: "Evergreen", locked: false },
    { rank: 8, niche: "Pet Anxiety Products", score: 75, tag: "Emotional Buyer", locked: false },
    { rank: 9, niche: "Minimalist Gaming Setups", score: 72, tag: "Aesthetic Trend", locked: false },
    { rank: 10, niche: "Cable Management Kits", score: 69, tag: "Simple Product", locked: false },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black text-white px-6 py-8">
      <nav className="sticky top-4 z-50 mx-auto mb-20 flex w-full max-w-5xl items-center justify-center gap-20 rounded-3xl border border-zinc-800/80 bg-black/50 px-5 py-0 backdrop-blur-xl">
        <button
          onClick={resetHome}
          className="flex items-center transition duration-300 hover:scale-105 active:scale-95"
        >
          <Image
  src="/logo.png"
  alt="NicheRadar Logo"
  width={180}
  height={180}
  className={`scale-150 transition duration-500 ${
    logoSpin ? "rotate-180 scale-150" : ""
  }`}
/>
        </button>

        <div className="flex gap-2 rounded-2xl border border-zinc-800 bg-zinc-950/80 p-2">
          {["generate", "leaderboard", "support"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as Tab)}
              className={`rounded-xl px-4 py-2 font-semibold capitalize transition duration-300 ${
                activeTab === tab
                  ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.18)]"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </nav>

      {activeTab === "generate" && (
        <section className="mx-auto flex w-full max-w-5xl animate-[fadeIn_0.35s_ease-out] flex-col items-center">
          <h2 className="mb-4 text-center text-5xl font-bold tracking-tight">
            Generate Niches
          </h2>

          <p className="mb-8 max-w-md text-center text-zinc-400">
            Find winning Shopify niches before they blow up.
          </p>

          <div className="mb-8 flex gap-3">
            <input
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-80 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none transition duration-300 focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(34,211,238,0.18)]"
              placeholder="Enter a niche..."
            />

            <button
              onClick={generateNiche}
              className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition duration-200 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] active:scale-95"
            >
              Generate
            </button>
          </div>

          {result && (
            <section className="mt-6 w-full rounded-3xl border border-zinc-800 bg-zinc-950/90 p-8 shadow-[0_0_60px_rgba(34,211,238,0.05)] animate-[fadeUp_0.4s_ease-out]">
              <p className="mb-3 font-semibold text-green-400">
                ● ANALYSIS COMPLETE
              </p>

              <h2 className="mb-2 text-4xl font-bold">{niche}</h2>

              <p className="mb-8 text-zinc-400">
                Demo niche analysis based on trend potential, CPM opportunity,
                competition and virality.
              </p>

              <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-4">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition duration-300 hover:scale-[1.03] hover:border-zinc-700"
                  >
                    <p className="mb-4 text-sm text-zinc-400">{metric.label}</p>

                    <p className="mb-4 text-5xl font-bold">
                      {metric.score}
                      <span className="text-2xl text-zinc-500">/10</span>
                    </p>

                    <div className="mb-4 h-2 overflow-hidden rounded-full bg-zinc-800">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          metric.score >= 8
                            ? "bg-green-500"
                            : metric.score >= 5
                            ? "bg-yellow-400"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${metric.score * 10}%` }}
                      />
                    </div>

                    <p className="text-sm text-zinc-400">{metric.text}</p>
                  </div>
                ))}
              </div>

              <div className="mb-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                <div className="mb-5 flex items-end gap-2">
                  <p className="text-6xl font-bold">{overallScore}</p>
                  <p className="mb-2 text-2xl text-zinc-500">/100</p>
                </div>

                <div className="mb-4 flex h-4 overflow-hidden rounded-full">
                  <div className="w-[40%] bg-red-500" />
                  <div className="w-[30%] bg-yellow-400" />
                  <div className="w-[30%] bg-green-500" />
                </div>

                <p className="font-semibold text-green-400">
                  High Potential 🔥
                </p>
              </div>

              <div className="whitespace-pre-line rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
                {result}
              </div>
            </section>
          )}

          <section className="mt-12 w-full max-w-2xl">
            <h2 className="mb-4 text-center text-3xl font-bold">FAQ</h2>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index}>
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="flex w-full items-center justify-between gap-20 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4 text-left transition hover:bg-zinc-800"
                  >
                    <span className="font-semibold">{faq.question}</span>

                    <span
                      className={`transition-transform duration-300 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openFaq === index
                        ? "max-h-40 opacity-100 translate-y-0"
                        : "max-h-0 opacity-0 -translate-y-2"
                    }`}
                  >
                    <div className="mt-2 rounded-xl border border-zinc-800 bg-zinc-950 p-5 text-zinc-400">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </section>
      )}

      {activeTab === "leaderboard" && (
        <section className="mx-auto w-full max-w-3xl animate-[fadeIn_0.35s_ease-out]">
          <h2 className="mb-2 text-center text-4xl font-bold">
            Top Niches This Week
          </h2>

          <p className="mb-6 text-center text-zinc-500">
            The highest scoring niches are locked for Pro users.
          </p>

          <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 shadow-[0_0_60px_rgba(34,211,238,0.04)]">
            {leaderboard.map((item) => (
              <div
                key={item.rank}
                className="relative flex items-center justify-between gap-20 border-b border-zinc-800 px-5 py-4 transition last:border-b-0 hover:bg-zinc-900"
              >
                <div className="flex items-center gap-4">
                  <span className="font-bold text-zinc-500">#{item.rank}</span>

                  <div className={item.locked ? "blur-sm select-none" : ""}>
                    <p className="font-semibold">{item.niche}</p>
                    <p className="text-sm text-zinc-500">{item.tag}</p>
                  </div>
                </div>

                <div
                  className={
                    item.locked ? "blur-sm select-none text-right" : "text-right"
                  }
                >
                  <p
                    className={`font-bold ${
                      item.score >= 85 ? "text-green-400" : "text-yellow-400"
                    }`}
                  >
                    {item.score}
                  </p>

                  <p className="text-xs text-zinc-500">score</p>
                </div>

                {item.locked && (
                  <div className="absolute inset-0 flex items-center justify-end bg-black/20 pr-5">
                    <span className="rounded-full border border-zinc-700 bg-zinc-900 px-3 py-1 text-sm shadow-[0_0_25px_rgba(34,211,238,0.08)]">
                      🔒 Pro
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {activeTab === "support" && (
  <section className="mx-auto w-full max-w-2xl animate-[fadeIn_0.35s_ease-out]">
    <h2 className="mb-3 text-center text-4xl font-bold">Support</h2>

    <p className="mb-8 text-center text-zinc-400">
      Need help, found a bug, or have an idea?
    </p>

    <div className="space-y-4">
      <a
        href="mailto:kalleanka65476@gmail.com?subject=NicheRadar%20Feedback&body=Hey,%20I%20have%20feedback%20about%20NicheRadar:"
        className="block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]"
      >
        <p className="text-lg font-semibold">Send Feedback</p>
        <p className="text-sm text-zinc-500">
          Share thoughts, ideas, or what you want added next.
        </p>
      </a>

      <a
        href="mailto:kalleanka65476@gmail.com?subject=NicheRadar%20Bug%20Report&body=Bug%20description:"
        className="block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-red-400 hover:shadow-[0_0_25px_rgba(248,113,113,0.08)]"
      >
        <p className="text-lg font-semibold">Report a Bug</p>
        <p className="text-sm text-zinc-500">
          Something broken or acting weird? Report it here.
        </p>
      </a>

      <a
        href="mailto:kalleanka65476@gmail.com?subject=NicheRadar%20Feature%20Request&body=Feature%20idea:"
        className="block rounded-2xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-green-400 hover:shadow-[0_0_25px_rgba(74,222,128,0.08)]"
      >
        <p className="text-lg font-semibold">Request a Feature</p>
        <p className="text-sm text-zinc-500">
          Want a leaderboard filter, saved niches, or trend alerts?
        </p>
      </a>
    </div>
  </section>
)}

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </main>
  );
}