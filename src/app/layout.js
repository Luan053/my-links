import "./globals.css";

export const metadata = {
  title: "my links | Luan",
  description: "my personal links, like a linktree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
