import { Inter } from "next/font/google";
import "./globals.css";
import "./style.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Weather App - Check Current Weather Forecast | MyWeatherApp",
  description: "Get real-time weather updates with our Weather App. Stay informed about current weather conditions, forecasts, and more. Built with Next.js.",
  keywords: [
    "weather app",
    "current weather forecast",
    "real-time weather updates",
    "weather conditions",
    "weather forecasts",
    "Next.js",
    "reactive weather app",
    "weather tracking app",
    "weather information",
    "weather tool",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}