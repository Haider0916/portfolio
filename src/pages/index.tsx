import Image from "next/image";
import HamBurger from "../../public/icons/hamburger.svg"
import DP from "../../public/assets/me.jpg"
import Dashboard from "../../public/assets/bloodbank/dashboardPage.png"
import Signup from "../../public/assets/bloodbank/signupPage.png"
import Profile from "../../public/assets/bloodbank/myProfile.png"
import Linkedin from "../../public/icons/linkedin.svg"
import Facebook from "../../public/icons/facebook.svg"
import Email from "../../public/icons/email.svg"
import Github from "../../public/icons/github.svg"
import Link from "next/link";

export default function Home() {

  const intro = `Full stack developer with 3 years of experience specializing in JavaScript and its latest advancements. Proven track record in prominent product-based companies, demonstrating expertise in front-end development using technologies such as React, Next, and Nest. Extensive background in the fintech, AI, and telephony sectors. Eager to contribute technical proficiency and collaborate in challenging environments. Possesses strong communication skills and is certified in effective communication.`

  const content = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.`.substring(0, 390) + "...";

  return (
    <div>
      <header>
        <nav>
          <div className="flex">
            <div className="flex-1"></div>
            <Image src={HamBurger} alt={"Hamburger icon"} height={50} width={50} className="sm:hidden" />
            <ul className="max-sm:hidden flex p-3">
              <Link className=" font-semibold mr-3 cursor-pointer" href={"/"}>Works</Link>
              <Link className=" font-semibold mr-3 cursor-pointer" href={"/"}>Blog</Link>
              <Link className=" font-semibold mr-3 cursor-pointer" href={"/"}>Contact</Link>
            </ul>
          </div>
        </nav>
      </header>
      <main>
        <div className="md:p-16 lg:px-32 lg:py-16 lg:pb-9">
          <div className="flex justify-center items-center mt-5 flex-col md:flex-row-reverse md:items-start">
            <div className="md:w-[40%] md:h-[40%] mb-5 flex justify-center">
              <Image src={DP} alt={"Profile picture"} className="rounded-full h-48 w-48 md:h-64 md:w-64" />
            </div>
            <div className="p-5 flex flex-col items-center md:w-[60%] md:h-[60%] mb-5">
              <p className="text-xl font-bold mb-5 text-center">Hi, I am Syed Haider, a software engineer with 3+ years of experience</p>
              <p className="mb-5 text-center break-words">{intro}</p>
              <a className="bg-[coral] py-1 px-3 text-white mb-5 cursor-pointer">Download Resume</a>
            </div>
          </div>
          <section>
            <div className="bg-[#edf7fa] px-5 pb-9">
              <p className="flex justify-center font-semibold text-lg p-3">Blogs</p>
              <div className="bg-white px-4 py-3 mb-4">
                <h1 className="text-xl font-bold mb-2">Making a design system from scratch</h1>
                <p className="mb-4">12th Feb 2020 &nbsp;&nbsp; | &nbsp;&nbsp; Design, Pattern</p>
                <p className="h-[240]">{content}</p>
              </div>
              <div className="bg-white px-4 py-3">
                <h1 className="text-xl font-bold mb-2">Making a design system from scratch</h1>
                <p className="mb-4">12th Feb 2020 &nbsp;&nbsp; | &nbsp;&nbsp; Design, Pattern</p>
                <p className="h-[240]">{content}</p>
              </div>
            </div>
          </section>
          <section>
            <div className="px-5 pb-9 md:p-0">
              <p className="flex justify-center font-semibold text-lg p-3">Featured work</p>
              <div className="bg-white px-4 py-3 md:p-0">
                <Image src={Profile} alt={"blood donation sample images"} className="mb-3 border-2 border-black" />
                <h1 className="text-xl font-bold">Blood donation application</h1>
                <p className="text-lg">Next.js Node.js MySQL Tailwind</p>
                <p className="mb-4">12th Feb 2020</p>
                <p className="h-[240]">{content}</p>
                <hr className="mt-7" />
              </div>
              <div className="bg-white px-4 py-3 md:p-0">
                <Image src={Dashboard} alt={"blogging application sample images"} className="mb-3 border-2 border-black" />
                <h1 className="text-xl font-bold">Blogging application</h1>
                <p className="text-lg">Next.js Node.js MySQL Tailwind</p>
                <p className="mb-4">12th Feb 2020</p>
                <p className="h-[240]">{content}</p>
              </div>
            </div>
          </section>
          {/* Add a section of job experiences and find related resources for the job  */}
        </div>
      </main>
      <footer>
        <div className="flex justify-center items-center flex-col mb-9">
          <div className="w-[80%] flex flex-col items-center">
            <div className="flex flex-nowrap items-center justify-between w-full max-w-52">
              <Image height={35} width={35} src={Linkedin} alt={"Linkedin logo"} />
              <Image height={30} width={30} src={Github} alt={"Github logo"} />
              <Image height={30} width={30} src={Email} alt={"Email logo"} />
              <Image height={30} width={30} src={Facebook} alt={"Facebook logo"} />
            </div>
            <div className="mt-5 flex items-center text-xs">Copyright &copy; 2020 All rights reserved</div>
          </div>
        </div>
      </footer >
    </div >
  );
}
