"use client";
import Sidebar from "../../components/Sidebar";
import "../globals.css";

export const metadata = {
  title: "Admin Panel for Emali Tickets",
  description: "Get tickets for your favorite sporting events",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-row gap-x-10">
        <Sidebar />
        <div className="w-2/3">{children}</div>
      </body>
    </html>
  );
}
