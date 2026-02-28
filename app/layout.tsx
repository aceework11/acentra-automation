import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ChatbotWidget from "@/components/chatbot-widget";

export const metadata: Metadata = {
  title: "Acentra Automation | AI Automation Built Exclusively for Real Estate Agents",
  description:
    "The only automation company built exclusively for real estate agents. Speed-to-Lead Bot, Listing Launch Machine, and Past Client Referral Engine. Close more deals without working more hours.",
  keywords: [
    "real estate automation",
    "real estate agent automation",
    "speed to lead automation",
    "AI automation for realtors",
    "listing launch automation",
    "real estate CRM automation",
    "Follow Up Boss automation",
    "Zillow lead automation",
    "n8n real estate",
  ],
  openGraph: {
    title: "Acentra Automation | AI Automation for Real Estate Agents",
    description:
      "Speed-to-Lead Bot, Listing Launch Machine, and Past Client Referral Engine. Built exclusively for real estate agents.",
    type: "website",
    url: "https://acentraautomation.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acentra Automation — For Real Estate Agents",
    description: "The only automation platform built exclusively for real estate agents.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-text-primary antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <ChatbotWidget />
      </body>
    </html>
  );
}
