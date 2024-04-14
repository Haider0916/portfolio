import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HamBurger from "../../../public/icons/hamburger.svg"

export default function Header() {

    const [openDrawer, toggleDrawer] = useState(false);


    const handleDrawer = () => {
        toggleDrawer(true)
    }

    const handleClose = () => {
        toggleDrawer(false)
    }

    if (openDrawer) {
        return <>
            <div className="w-[100vw] h-[100vh]">
                <div className="flex">
                    <div className="flex-1 w-[90%]"></div>
                    <p onClick={handleClose} className="w-[10%] flex justify-center text-3xl">x</p>
                </div>
            </div>
        </>
    }

    return <header>
        <nav>
            <div className="flex">
                <div className="flex-1"></div>
                <Image onClick={handleDrawer} src={HamBurger} alt={"Hamburger icon"} height={50} width={50} className="sm:hidden" />
                <ul className="max-sm:hidden flex p-3">
                    <Link className=" font-semibold mr-3 cursor-pointer" href={"/"}>Home</Link>
                    <Link className=" font-semibold mr-3 cursor-pointer" href={"/works"}>Works</Link>
                    <Link className=" font-semibold mr-3 cursor-pointer" href={"/blogs"}>Blogs</Link>
                </ul>
            </div>
        </nav>
    </header>;
}