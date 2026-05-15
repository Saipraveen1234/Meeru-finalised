import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#E8683A",
};

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://meeru.ai"),
  alternates: {
    canonical: "https://meeru.ai",
  },
  openGraph: {
    type: "website",
    siteName: "MeeruAI",
    images: [{ url: "/hero_video_poster.png", width: 1200, height: 630, alt: "MeeruAI" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/hero_video_poster.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased bg-white text-gray-900`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
