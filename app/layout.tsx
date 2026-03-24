import "../styles/tailwind.css"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "ShipBot - Build Full-Stack Apps Through Chat",
  description: "Send a Telegram message. Get a live, production-grade web app deployed in under 5 minutes. 20+ templates, auto GitHub + Vercel, full code ownership.",
  icons: { icon: "/favicon.svg" },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
