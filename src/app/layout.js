import Header from "@/components/home/Header";
import "./globals.css";
import Footer from "@/components/home/Footer";

export const metadata = {
  title: "CARIBOU",
  description: "Welcom",
  icons: {
    icon: "/images/logoo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* فونت وزیرمتن از CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-font-face.css"
        />
      </head>
      <body
        className={`font-vazir antialiased bg-primary`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
