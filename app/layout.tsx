import TopBanner from "@/components/home/top_banner";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Cycling Meetup App – Find & Join Local Rides | DOMAIN_NAME",
  description: "Connect with cyclists in your area, join group rides, and discover new cycling buddies using our cycling meetup app. Easy sign-up and instant ride organization – start pedaling today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        
      </head>
      <body
        className="antialiased"
      >
        <ThemeProvider defaultTheme="dark" attribute="data-theme">
          <div className="flex flex-col">
            <div className="fixed flex flex-col w-full z-50">
              <TopBanner />
              <Navbar />
            </div>
            {children}
            <div className="w-full">
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
