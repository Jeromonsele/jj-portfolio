"use client";

import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const questions = [
  { gap: "psychological", text: "I find it difficult to delegate important tasks, even when I have capable people." },
  { gap: "psychological", text: "If I took a two-week vacation, critical operations would stall." },
  { gap: "cultural", text: "When I introduce a new process or tool, my team resists the change." },
  { gap: "cultural", text: "My team's values and priorities often don't align with the company's direction." },
  { gap: "systems", text: "Key information lives in people's heads, not in documented processes." },
  { gap: "systems", text: "Our tools and platforms don't connect well — we move data manually between systems." },
  { gap: "technical", text: "We're using tools or software that we've outgrown but haven't replaced." },
  { gap: "technical", text: "Our team lacks the technical skills needed for where we want to go next." },
];

const scaleLabels = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];

interface Results {
  psychological: number;
  cultural: number;
  systems: number;
  technical: number;
}

const gapDescriptions: Record<string, { title: string; description: string; color: string }> = {
  psychological: {
    title: "The Psychological Gap",
    description: "You're the bottleneck. The organization depends on your presence, your decisions, your approval. Until you can step away without things breaking, you haven't built a system — you've built a dependency.",
    color: "#C85A2A",
  },
  cultural: {
    title: "The Cultural Gap",
    description: "Your team isn't aligned. New processes get resisted, communication breaks down, and people aren't rowing in the same direction. Culture isn't what you say — it's what happens when you're not in the room.",
    color: "#8B6F47",
  },
  systems: {
    title: "The Systems Gap",
    description: "Your processes don't talk to each other. Information lives in people's heads instead of documented systems. You're doing manually what should happen automatically.",
    color: "#4A6741",
  },
  technical: {
    title: "The Technical Gap",
    description: "Your tools aren't keeping up. You've outgrown your software, your team lacks skills for the next phase, or you're running on infrastructure that worked two years ago but doesn't scale.",
    color: "#3D5A80",
  },
};

export default function Diagnostic() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [results, setResults] = useState<Results | null>(null);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      // Calculate results
      const r: Results = { psychological: 0, cultural: 0, systems: 0, technical: 0 };
      newAnswers.forEach((s, i) => {
        const gap = questions[i].gap as keyof Results;
        r[gap] += s;
      });
      // Normalize to percentage (max 10 per gap)
      r.psychological = Math.round((r.psychological / 10) * 100);
      r.cultural = Math.round((r.cultural / 10) * 100);
      r.systems = Math.round((r.systems / 10) * 100);
      r.technical = Math.round((r.technical / 10) * 100);
      setResults(r);
    }
  };

  const biggestGap = results
    ? (Object.entries(results).sort(([, a], [, b]) => b - a)[0][0] as keyof typeof gapDescriptions)
    : null;

  const progress = ((currentQ) / questions.length) * 100;

  return (
    <>
      <Nav />
      <main className="max-w-[1200px] mx-auto px-10 pt-32 pb-20 min-h-[70vh]">
        <p className="font-mono text-[11px] text-orange uppercase tracking-[2px] mb-5">
          // 4 Gaps Diagnostic
        </p>

        {!results ? (
          <>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.85] tracking-tighter mb-6">
              Find Your<br />Biggest Gap.
            </h1>
            <p className="text-brand-gray-600 max-w-lg mb-10 leading-relaxed">
              8 questions. 2 minutes. Find out which of the four organizational gaps is holding you back. Based on the 4 Gaps Framework I developed during my master&apos;s research and tested on real businesses.
            </p>

            {/* Progress bar */}
            <div className="w-full max-w-lg h-[3px] bg-brand-gray-300 mb-10">
              <div
                className="h-full bg-orange transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Question */}
            <div className="max-w-lg">
              <p className="font-mono text-[10px] text-brand-gray-600 uppercase tracking-[2px] mb-3">
                Question {currentQ + 1} of {questions.length}
              </p>
              <h2 className="text-xl font-extrabold mb-8 leading-snug">
                {questions[currentQ].text}
              </h2>
              <div className="flex gap-3">
                {scaleLabels.map((label, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(i + 1)}
                    className="flex-1 border border-brand-gray-300 py-3 px-2 text-[11px] text-center font-mono uppercase tracking-wider hover:border-orange hover:text-orange transition-colors active:scale-95 active:bg-orange active:text-warm-white"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-[clamp(2rem,5vw,4rem)] font-black uppercase leading-[0.85] tracking-tighter mb-6">
              Your Results.
            </h1>

            {/* Gap bars */}
            <div className="max-w-2xl space-y-6 mb-12">
              {Object.entries(results).sort(([, a], [, b]) => b - a).map(([gap, score]) => {
                const info = gapDescriptions[gap];
                return (
                  <div key={gap}>
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="text-lg font-extrabold">{info.title}</h3>
                      <span className="font-mono text-[13px] text-orange">{score}%</span>
                    </div>
                    <div className="w-full h-3 bg-brand-gray-100">
                      <div
                        className="h-full transition-all duration-700"
                        style={{ width: `${score}%`, backgroundColor: info.color }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Biggest gap callout */}
            {biggestGap && (
              <div className="border-l-[3px] pl-6 mb-12 max-w-2xl" style={{ borderColor: gapDescriptions[biggestGap].color }}>
                <p className="font-mono text-[10px] text-orange uppercase tracking-[2px] mb-2">Your biggest gap</p>
                <h3 className="text-xl font-extrabold mb-3">{gapDescriptions[biggestGap].title}</h3>
                <p className="text-[15px] text-brand-gray-600 leading-relaxed">
                  {gapDescriptions[biggestGap].description}
                </p>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:connect@theverygoodguys.com?subject=4 Gaps Diagnostic Results"
                className="bg-black text-warm-white px-8 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-orange transition-colors text-center"
              >
                Talk to JJ About Your Gaps →
              </a>
              <button
                onClick={() => { setResults(null); setAnswers([]); setCurrentQ(0); }}
                className="border border-black px-8 py-3.5 text-xs font-semibold uppercase tracking-[1.5px] hover:bg-black hover:text-warm-white transition-colors text-center"
              >
                Retake Diagnostic
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </>
  );
}
