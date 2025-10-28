import type { Metadata } from "next";
import "./styles/globals.css";

export const metadata: Metadata = {
  title: "MenuAura - Digital Menu Revolution",
  description: "Transform your menu with beautiful QR code-based digital menus. Coming soon!",
  keywords: ["digital menu", "QR code menu", "restaurant menu", "menu digitalization"],
  icons: {
    icon: "/MenuAuralogo favicon.png",
    shortcut: "/MenuAuralogo favicon.png",
    apple: "/MenuAuralogo favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
