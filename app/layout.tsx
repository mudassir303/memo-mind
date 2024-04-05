import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Memo Mind - Where Thoughts Become Notes",
  description:
    "Discover Memo Mind – the dynamic digital notebook empowering users to effortlessly capture, categorize, and retrieve their ideas and tasks. Seamlessly organize your thoughts and unleash your creativity with intuitive features designed to enhance productivity. With Memo Mind, streamline your workflow, find inspiration, and unlock your full potential. Take control of your notes and elevate your productivity journey with Memo Mind.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
