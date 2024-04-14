import React from "react";
import Image from "next/image";
import Linkedin from "../../../public/icons/linkedin.svg"
import Facebook from "../../../public/icons/facebook.svg"
import Email from "../../../public/icons/email.svg"
import Github from "../../../public/icons/github.svg"

export default function Footer() {
    return <footer>
        <div className="flex justify-center items-center flex-col mb-9">
            <div className="w-[80%] flex flex-col items-center">
                <div className="flex flex-nowrap items-center justify-between w-full max-w-52">
                    <a href="https://www.linkedin.com/in/haider-abidi-426178175/" target="_blank">
                        <Image height={35} width={35} src={Linkedin} alt={"Linkedin logo"} />
                    </a>
                    <a href="https://github.com/Haider0916/" target="_blank">
                        <Image height={30} width={30} src={Github} alt={"Github logo"} />
                    </a>
                    <a href="mailto:syedhaider0916@gmail.com" target="_blank">
                        <Image height={30} width={30} src={Email} alt={"Email logo"} />
                    </a>
                    <a href="https://www.facebook.com/SyedHaider0916/" target="_blank">
                        <Image height={30} width={30} src={Facebook} alt={"Facebook logo"} />
                    </a>
                </div>
                <div className="mt-5 flex items-center text-xs">Copyright &copy; 2020 All rights reserved</div>
            </div>
        </div>
    </footer>;
}