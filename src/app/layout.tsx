import type { Metadata } from "next";
import "./globals.scss";
import Navigation from "../components/Navigation";
import { UserProvider } from "../context/UserContext";

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
          <UserProvider>
            <Navigation />
            <div className="main-container">{children}</div>
          </UserProvider>
        </div>
      </body>
    </html>
  );
}
