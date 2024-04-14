import React from "react";
import Image from "next/image";
import Link from "next/link";
import HamBurger from "../../../public/icons/hamburger.svg"

export default function Header() {
    return <header>
        <nav>
            <div className="flex">
                <div className="flex-1"></div>
                <Image src={HamBurger} alt={"Hamburger icon"} height={50} width={50} className="sm:hidden" />
                <ul className="max-sm:hidden flex p-3">
                    <Link className=" font-semibold mr-3 cursor-pointer" href={"/"}>Home</Link>
                    <Link className=" font-semibold mr-3 cursor-pointer" href={"/works"}>Works</Link>
                    <Link className=" font-semibold mr-3 cursor-pointer" href={"/blogs"}>Blogs</Link>
                    <Link className=" font-semibold mr-3 cursor-pointer" href={"/contact"}>Contact</Link>
                </ul>
            </div>
        </nav>
    </header>;
}