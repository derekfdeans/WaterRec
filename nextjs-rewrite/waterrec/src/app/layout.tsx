import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({children}: LayoutProps<"/">) {
    return (
        <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">

        <h1>Willow Run Acres Smart Irrigation</h1>
        <p>Project BlueLab Metro</p>
        <nav>
            <Link href={"/"}>home</Link>
            <Link href={"/data"}>Data</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/gis"}>Interactive Map</Link>
        </nav>

        {children}

        </body>
        </html>
    );
}
