import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "MedinaStay",
  description: "Property Management in der Medina von Tanger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ padding: "20px" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}