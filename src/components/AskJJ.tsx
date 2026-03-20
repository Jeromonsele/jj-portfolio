"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

export function AskJJ() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMessage: Message = {
        id: crypto.randomUUID(),
        role: "user",
        content: content.trim(),
      };

      const assistantMessage: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: "",
      };

      const newMessages = [...messages, userMessage];
      setMessages([...newMessages, assistantMessage]);
      setInput("");
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: newMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => null);
          if (data?.error === "not_configured") {
            setError(data.message);
            setMessages(newMessages); // Remove empty assistant message
            return;
          }
          throw new Error(data?.message || "Something went wrong");
        }

        // Stream the text response
        const reader = response.body?.getReader();
        if (!reader) throw new Error("No response body");

        const decoder = new TextDecoder();
        let accumulated = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          accumulated += decoder.decode(value, { stream: true });
          setMessages((prev) => {
            const updated = [...prev];
            const last = updated[updated.length - 1];
            if (last && last.role === "assistant") {
              updated[updated.length - 1] = { ...last, content: accumulated };
            }
            return updated;
          });
        }
      } catch (err) {
        const msg =
          err instanceof Error ? err.message : "Something went wrong";
        setError(msg);
        // Remove the empty assistant message
        setMessages(newMessages);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleSuggestion = (text: string) => {
    setInput(text);
    sendMessage(text);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-40 bg-black text-warm-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-orange transition-colors duration-200 active:scale-95 cursor-pointer"
        aria-label="Ask JJ"
      >
        {open ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="2" y1="2" x2="16" y2="16" />
            <line x1="16" y1="2" x2="2" y2="16" />
          </svg>
        ) : (
          <span className="font-mono text-xs font-bold">JJ</span>
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-40 w-[380px] max-h-[500px] bg-warm-white border border-brand-gray-300 shadow-2xl flex flex-col overflow-hidden rounded-sm">
          {/* Header */}
          <div className="bg-black text-warm-white px-5 py-4">
            <p className="font-mono text-[10px] uppercase tracking-[2px] text-orange mb-1">
              // Ask JJ
            </p>
            <p className="text-sm">
              Ask me anything about my work, projects, or how I think.
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 min-h-[200px] max-h-[320px]">
            {messages.length === 0 && !error && (
              <div className="text-[13px] text-brand-gray-600">
                <p className="mb-2">Try asking:</p>
                <button
                  onClick={() => handleSuggestion("Tell me about the Nasher Prize")}
                  className="block text-left text-orange hover:underline mb-1 text-[12px] cursor-pointer"
                >
                  &quot;Tell me about the Nasher Prize&quot;
                </button>
                <button
                  onClick={() => handleSuggestion("What is the 4 Gaps Framework?")}
                  className="block text-left text-orange hover:underline mb-1 text-[12px] cursor-pointer"
                >
                  &quot;What is the 4 Gaps Framework?&quot;
                </button>
                <button
                  onClick={() => handleSuggestion("How did you learn to code?")}
                  className="block text-left text-orange hover:underline text-[12px] cursor-pointer"
                >
                  &quot;How did you learn to code?&quot;
                </button>
              </div>
            )}

            {messages.map((m) => (
              <div
                key={m.id}
                className={`text-[13px] leading-relaxed whitespace-pre-wrap ${
                  m.role === "user"
                    ? "bg-black text-warm-white p-3 ml-8"
                    : "bg-brand-gray-100 text-black p-3 mr-8"
                }`}
              >
                {m.content || (isLoading && m.role === "assistant" ? "" : "")}
              </div>
            ))}

            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].content === "" && (
                <div className="bg-brand-gray-100 p-3 mr-8 text-[13px] text-brand-gray-600">
                  Thinking...
                </div>
              )}

            {error && (
              <div className="bg-brand-gray-100 p-3 mr-8 text-[13px] text-brand-gray-600">
                {error}
                {error.includes("Email") ? null : (
                  <span className="block mt-1 text-[11px]">
                    Or email{" "}
                    <a
                      href="mailto:connect@theverygoodguys.com"
                      className="text-orange underline"
                    >
                      connect@theverygoodguys.com
                    </a>
                  </span>
                )}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-brand-gray-300 p-3 flex gap-2"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-brand-gray-300"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-black text-warm-white px-4 py-2 text-[11px] font-mono uppercase tracking-wider hover:bg-orange transition-colors disabled:opacity-30 cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
