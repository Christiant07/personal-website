

// General components
import "./globals.css";

export const metadata = {
  title: "Christian's Personal Website",
  description: "Christian's Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
