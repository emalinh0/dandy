import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Emali Tickets",
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
        <Navbar />
        {children}
      </body>
    </html>
  );
}
