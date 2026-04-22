import type { Metadata } from "next"
import { Inter, Instrument_Serif } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: {
    default: "AgroNext — Akıllı Sera Yönetim Sistemi",
    template: "%s · AgroNext",
  },
  description:
    "AgroNext küçük ve orta ölçekli sera çiftçileri için yapay zeka destekli akıllı sera yönetim sistemi.",
  metadataBase: new URL(process.env.AUTH_URL ?? "http://localhost:3000"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
