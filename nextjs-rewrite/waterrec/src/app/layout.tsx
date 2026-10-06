import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navigation from "@/ui/Navigation";

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
        <body className={"min-h-full flex flex-col items-center"}>

        <Navigation/>

        {children}

        <p>Project BlueLab Metro</p>

        </body>
        </html>
    );
}
