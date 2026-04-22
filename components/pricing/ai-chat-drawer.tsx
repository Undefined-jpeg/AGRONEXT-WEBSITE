"use client"

import * as React from "react"
import { Sparkles, Send } from "lucide-react"
import { useTranslations } from "next-intl"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function AIChatDrawer() {
  const t = useTranslations("pricing.aiHelper")
  const [messages, setMessages] = React.useState<Message[]>([])
  const [input, setInput] = React.useState("")
  const [pending, setPending] = React.useState(false)
  const scrollRef = React.useRef<HTMLDivElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const content = input.trim()
    if (!content || pending) return

    const userMsg: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
    }
    setMessages((prev) => [...prev, userMsg])
    setInput("")
    setPending(true)

    try {
      const res = await fetch("/api/pricing/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: content }),
      })
      const data: { reply?: string } = await res.json()
      const assistantMsg: Message = {
        id: crypto.randomUUID(),
        role: "assistant",
        content: data.reply ?? t("dormantMessage"),
      }
      setMessages((prev) => [...prev, assistantMsg])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: t("dormantMessage"),
        },
      ])
    } finally {
      setPending(false)
    }
  }

  React.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    })
  }, [messages])

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          size="lg"
          className="fixed bottom-6 right-6 z-40 rounded-full shadow-lg h-14 px-5"
        >
          <Sparkles className="h-5 w-5" />
          <span className="hidden sm:inline">{t("open")}</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent side="right" className="flex flex-col">
        <DrawerHeader>
          <DrawerTitle className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-primary" />
            {t("title")}
          </DrawerTitle>
          <DrawerDescription>{t("subtitle")}</DrawerDescription>
        </DrawerHeader>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.length === 0 ? (
            <div className="text-center text-sm text-muted-foreground py-12">
              {t("dormantMessage")}
            </div>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className={
                  msg.role === "user"
                    ? "flex justify-end"
                    : "flex justify-start"
                }
              >
                <div
                  className={
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground rounded-2xl rounded-br-sm px-4 py-2 text-sm max-w-[80%]"
                      : "bg-muted text-foreground rounded-2xl rounded-bl-sm px-4 py-2 text-sm max-w-[80%]"
                  }
                >
                  {msg.content}
                </div>
              </div>
            ))
          )}
          {pending ? (
            <div className="flex justify-start">
              <div className="bg-muted rounded-2xl px-4 py-2 text-sm">...</div>
            </div>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={t("placeholder")}
            disabled={pending}
          />
          <Button type="submit" size="icon" disabled={pending || !input.trim()}>
            <Send className="h-4 w-4" />
            <span className="sr-only">{t("send")}</span>
          </Button>
        </form>
      </DrawerContent>
    </Drawer>
  )
}
