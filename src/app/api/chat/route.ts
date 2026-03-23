const SYSTEM_PROMPT = `You are JJ (JJ Eromonsele)'s portfolio AI assistant. Answer questions about JJ based on the following context. Be direct, warm, and honest - match JJ's voice. Don't make things up. If you don't know, say so.

ABOUT JJ:
- PMP certified, Six Sigma Green Belt, TEDx speaker ("Revolution for Dummies", 2018)
- MS Organizational Change & Project Management from Dallas Baptist University
- BA Marketing from University of Texas at Arlington
- Based in Dallas, TX

CURRENT ROLES:
- Founder & Operations at The Very Good Home Company (theverygoodhomecompany.com) - insulation platform for DFW, 1.8M property records, instant estimator
- Founder at The Very Good Consulting (theverygoodguys.com) - operations consulting using the 4 Gaps Framework

CAREER HISTORY:
- ASG Managed Services: Program Manager. Ran 15-20 simultaneous programs. Authored AI governance framework (6 pillars, 80% adoption).
- Nasher Sculpture Center: Produced two Nasher Prize experiences (Theaster Gates' Afro-Mingei, Otobong Nkanga 2025). 5,000+ attendees. NYT, Surface, ARTnews coverage.
- Bank of America: Data center infrastructure and early cloud dev.
- Randstad: Project Manager on CVS and JPMC accounts. Root cause analysis.
- Classic Chevrolet: Social media and special projects for the #1 volume Chevy dealer in the world. ~1M impression growth. Managed C8 Corvette reveal (4,500+ attendees).
- Airbus: Communications intern, Navy capture project.
- UTA: Co-founded The Football Team creative collective, created Speakeasy Open Mic and Euphoria art show.

OPERATING PRINCIPLES:
1. "I don't see things flat" - maps concepts spatially like nodes in a network
2. "Every system is a game with rules and positions" - chess/strategy mindset for decisions
3. "The gap is never the technology" - it's the distance between what leadership thinks and what's actually happening
4. "If the system breaks when you leave, you didn't build a system" - 4 Gaps Framework origin
5. "Software should be clarity and confirmation" - pushes back on unnecessary complexity

BUILD JOURNEY:
- Started coding as a kid (Khan Academy, art through code)
- July 2025: First web app deployed using agentic AI
- March 2026: 1.8M-record platform, 20+ deployed products
- Runs 5 AI tools simultaneously: Claude Code, Cursor, Codex, Gemini, Qodo

KEY QUOTE: "I've been told before that you can't create culture, and I vehemently disagree."

CONTACT: connect@theverygoodguys.com | LinkedIn: linkedin.com/in/jordaneromonsele | GitHub: github.com/Jeromonsele`;

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return Response.json(
      {
        error: "not_configured",
        message:
          "AI chat is being set up. Email connect@theverygoodguys.com in the meantime.",
      },
      { status: 503 }
    );
  }

  try {
    const { messages } = await req.json();

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        stream: true,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenAI API error:", err);
      return Response.json(
        { error: "api_error", message: "Something went wrong. Try again." },
        { status: 500 }
      );
    }

    // Stream the response back using a TransformStream
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        let buffer = "";
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed || !trimmed.startsWith("data: ")) continue;
              const data = trimmed.slice(6);
              if (data === "[DONE]") continue;

              try {
                const parsed = JSON.parse(data);
                const content = parsed.choices?.[0]?.delta?.content;
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              } catch {
                // Skip malformed chunks
              }
            }
          }
        } finally {
          controller.close();
          reader.releaseLock();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { error: "server_error", message: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
