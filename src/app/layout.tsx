import Menu from "./components/Menu";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi"> {/* Bao bọc với thẻ <html> */}
      <body>         {/* Thêm thẻ <body> */}
        <header>
          <Menu />

        </header>
        <main>{children}</main>
        <footer>
          <p>© 2025 Your Company</p>
        </footer>
      </body>
    </html>
  );
}