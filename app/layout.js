import './globals.css';

export const metadata = {
  title: 'ProductionOS',
  description: 'A single source of truth for your production.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="supported-color-schemes" content="light" />
      </head>
      <body>{children}</body>
    </html>
  );
}
