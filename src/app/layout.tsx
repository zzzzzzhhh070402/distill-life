import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "蒸馏人生 — 从不同角度评价一个人的一生",
  description: "用261个问题和78个评价维度，蒸馏一个人的一生",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
