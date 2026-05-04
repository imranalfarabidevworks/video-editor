import "./globals.css";
import Cursor from "./components/Cursor";
export const metadata = {
  title: "JUNAID ARSHAD — Video Editor",
  description: "Professional video editor specializing in cinematic storytelling and motion graphics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Cursor />
        {children}
      </body>
    </html>
  );
}