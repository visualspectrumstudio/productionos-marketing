import "./globals.css";

export const metadata = {
  title: "ProductionOS",
  description: "The operating system for modern production teams.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
