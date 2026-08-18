import "./globals.css";
import Link from "next/link";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html>
      <body className="min-h-full flex flex-col bg-orange-800 text-white ">
        <header className="p-4 border-b">
          <nav className="flex justify-center space-x-6 font-bold text-lg">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/products" className="hover:underline">
              Products
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>
        </header>

        <main className="flex-1 flex flex-col items-center justify-center p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
