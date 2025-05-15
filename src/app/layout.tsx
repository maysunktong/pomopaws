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
        <div className="content-wrapper">
          <Navigation />
          <div className="main-container">{children}</div>
        </div>
      </body>
    </html>
  );
}
