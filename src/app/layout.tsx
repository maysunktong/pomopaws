import type { Metadata } from "next";
import "./globals.scss";
import Navigation from "../components/Navigation";

export const metadata: Metadata = {
  title: "PomoPaws",
  description: "Your paws on productivity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <div className="main-container">{children}</div>
      </body>
    </html>
  );
}
