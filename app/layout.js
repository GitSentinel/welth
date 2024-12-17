import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/mycomponents/header";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welth",
  description: "One Stop Finance Platform",
  icon: "/favicon.ico",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        {/* <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head> */}
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">{children}</main>

          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto text-center px-4 text-gray-600">
              <p>Made with ❤️ by GitSentinel</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
