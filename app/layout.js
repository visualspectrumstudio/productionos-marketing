import './globals.css';

export const metadata = {
  title: 'ProductionOS — A single source of truth for your production',
  description: 'Stop frankensteining subscriptions together to manage your show. ProductionOS replaces TeamTrack, HireHop, Notion and email advances with one system.',
  openGraph: {
    title: 'ProductionOS — A single source of truth for your production',
    description: 'Stop frankensteining subscriptions together to manage your show.',
    type: 'website',
  },
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
