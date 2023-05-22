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
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
