import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lucky Wagh | Full Stack Developer & AI Enthusiast",
  description: "Portfolio of Lucky Wagh, a Third-year Engineering Student, Full Stack Developer, and AI/ML Enthusiast.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
