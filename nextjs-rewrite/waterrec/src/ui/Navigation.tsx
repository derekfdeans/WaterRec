'use client';

import Link from "next/link";
import {useState} from "react";
import Button from "@/ui/Button";
import {usePathname} from "next/navigation";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNav = () => setIsOpen(!isOpen);
    const pathname = usePathname();

    return (
        <div className={"bg-secondary-50 text-text-900"}>
            <header className={"relative w-screen flex flex-row justify-between p-5 items-center"}>
                <h1 className={"font-bold text-xl"}>WRA Smart Irrigation</h1>
                <Button action={toggleNav}>toggle nav</Button>
            </header>

            {isOpen &&
                <nav className={"min-h-full min-w-full p-5 absolute flex flex-col gap-3 bg-secondary-50"}>
                    <Link href={"/"} className={pathname == "/" ? "font-bold" : ""}>Home</Link>
                    <Link href={"/data"} className={pathname == "/data" ? "font-bold" : ""}>Data</Link>
                    <Link href={"/about"} className={pathname == "/about" ? "font-bold" : ""}>About Us</Link>
                    <Link href={"/gis"} className={pathname == "/gis" ? "font-bold" : ""}>Interactive Map</Link>
                </nav>
            }
        </div>
    )
}
