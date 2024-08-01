import "./globals.css";

export const metadata = {
  title: "PSPDFKit Web SDK ",
  description: "PSPDFKit Web SDK Document Comparison Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
