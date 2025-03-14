import "./globals.css";
import { Poppins as PoppinsFont } from "next/font/google";

const poppins = PoppinsFont({
  subsets: ['latin'],
  weight: "400"
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
