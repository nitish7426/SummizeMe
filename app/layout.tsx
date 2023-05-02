import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SummizeMe | Article Summarizer",
  description:
    "Effortlessly summarize articles with our AI-powered tool. Extract key insights in seconds and streamline your reading experience. Make reading more efficient with our innovative solution.",
  icons: { icon: "logo.png" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
