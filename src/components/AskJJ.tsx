"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        className="fixed bottom-6 right-6 z-40 bg-obsidian text-cream w-14 h-14 rounded-none flex items-center justify-center border border-obsidian/20 hover:bg-tvgg-rust transition-colors duration-0 active:scale-95 cursor-pointer"
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
      <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-24 right-6 z-40 w-[380px] max-h-[500px] bg-cream border border-obsidian/10 shadow-none flex flex-col overflow-hidden rounded-none">
          {/* Header */}
          <div className="bg-obsidian text-cream px-5 py-4 border-b border-obsidian/10">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-tvgg-rust mb-1">
              {"// Ask JJ"}
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
                  className="block text-left font-bold text-tvgg-rust hover:text-obsidian transition-colors mb-2 text-[11px] uppercase tracking-wider cursor-pointer"
                >
                  &quot;Tell me about the Nasher Prize&quot;
                </button>
                <button
                  onClick={() => handleSuggestion("What is the 4 Gaps Framework?")}
                  className="block text-left font-bold text-tvgg-rust hover:text-obsidian transition-colors mb-2 text-[11px] uppercase tracking-wider cursor-pointer"
                >
                  &quot;What is the 4 Gaps Framework?&quot;
                </button>
                <button
                  onClick={() => handleSuggestion("How did you learn to code?")}
                  className="block text-left font-bold text-tvgg-rust hover:text-obsidian transition-colors mb-2 text-[11px] uppercase tracking-wider cursor-pointer"
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
                    ? "bg-obsidian text-cream p-4 ml-8 rounded-none"
                    : "bg-cream border border-obsidian/10 text-obsidian p-4 mr-8 rounded-none"
                }`}
              >
                {m.content || (isLoading && m.role === "assistant" ? "" : "")}
              </div>
            ))}

            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1].content === "" && (
                <div className="bg-cream border border-obsidian/10 p-4 mr-8 font-mono text-[10px] text-brand-gray-600 uppercase tracking-widest">
                  Thinking...
                </div>
              )}

            {error && (
              <div className="bg-cream border border-obsidian/10 p-4 mr-8 text-[13px] text-brand-gray-600">
                {error}
                {error.includes("Email") ? null : (
                  <span className="block mt-1 text-[11px]">
                    Or email{" "}
                    <a
                      href="mailto:connect@theverygoodguys.com"
                      className="text-tvgg-rust underline"
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
              className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-brand-gray-300 font-mono"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-obsidian text-cream px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-tvgg-rust transition-colors duration-0 disabled:opacity-30 cursor-pointer"
            >
              Send
            </button>
          </form>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}
