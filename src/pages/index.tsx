import Image, { StaticImageData } from "next/image";
import DP from "../../public/assets/me.jpg"
import Dashboard from "../../public/assets/bloodbank/dashboardPage.png"
import Signup from "../../public/assets/bloodbank/signupPage.png"
import Profile from "../../public/assets/bloodbank/myProfile.png"
import LeftArrow from "../../public/icons/left-arrow.svg";
import RightArrow from "../../public/icons/right-arrow.svg";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {

  const intro = `Full stack developer with 3 years of experience specializing in JavaScript and its latest advancements. Proven track record in prominent product-based companies, demonstrating expertise in front-end development using technologies such as React, Next, and Nest. Extensive background in the fintech, AI, and telephony sectors. Eager to contribute technical proficiency and collaborate in challenging environments. Possesses strong communication skills and is certified in effective communication.`;

  const projectContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.`.substring(0, 160) + "...";

  const blogContent = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker.`.substring(0, 390) + "...";

  return (
    <div>
      <main>
        <div className="md:py-16 lg:p-0 lg:pt-16 lg:pb-9">
          <div className="flex justify-center items-center mt-5 flex-col md:flex-row-reverse md:items-start lg:px-32 md:px-16">
            <div className="md:w-[40%] md:h-[40%] mb-5 flex justify-center md:justify-end md:pr-0">
              <Image src={DP} alt={"Profile picture"} className="rounded-full h-48 w-48 md:h-64 md:w-64" />
            </div>
            <div className="p-5 flex flex-col max-md:items-center md:items-start md:pl-0 md:w-[60%] md:h-[60%] mb-5">
              <p className="text-xl font-bold mb-5 max-md:text-center md:text-2xl lg:text-3xl">Hi, I am Syed Haider, a software engineer with 3+ years of experience</p>
              <p className="mb-5 max-md:text-center">{intro}</p>
              <a className="bg-[coral] py-1 px-3 text-white mb-5 cursor-pointer" href="files/resume.pdf" download="Syed_Haider_Resume.pdf">Download Resume</a>
            </div>
          </div>
          <section>
            <div className="bg-[#edf7fa] px-5 pb-5 lg:px-0 md:px-0">
              <div className="lg:px-32 md:px-16 md:flex md:flex-wrap md:justify-between">
                <p className="flex justify-center font-semibold text-lg p-3 md:w-[50%] md:justify-start">Blogs</p>
                <p className="flex justify-center font-semibold text-lg p-3 max-md:hidden md:w-[50%] md:justify-end"><Link className="cursor-pointer" href={"/blogs"}>View all</Link></p>
                <div className="bg-white px-4 py-3 mb-4 md:w-[48%]">
                  <h1 className="text-xl font-bold mb-2">Making a design system from scratch</h1>
                  <p className="mb-4">12th Feb 2020 &nbsp;&nbsp; | &nbsp;&nbsp; Design, Pattern</p>
                  <p className="h-[240]">{blogContent}</p>
                </div>
                <div className="bg-white px-4 py-3 mb-4 md:w-[48%]">
                  <h1 className="text-xl font-bold mb-2">Making a design system from scratch</h1>
                  <p className="mb-4">12th Feb 2020 &nbsp;&nbsp; | &nbsp;&nbsp; Design, Pattern</p>
                  <p className="h-[240]">{blogContent}</p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="px-5 pb-9 md:p-0 lg:px-32 md:px-16 sm:flex sm:flex-wrap">
              <p className="flex justify-center font-semibold text-lg p-3 w-full sm:justify-start sm:px-0">Featured work</p>
              {
                [1, 2, 3].map(_ => <Link href={"/works"}>
                  <div className="bg-white py-3 md:p-0 sm:flex sm:items-center">
                    <div className="sm:1/4">
                      <ImageCarousel images={[Dashboard, Signup, Profile]} showArrows={false} />
                    </div>
                    <div className="sm:3/4 sm:px-5">
                      <h1 className="text-xl font-bold">Blood donation application</h1>
                      <p className="text-lg">Next.js Node.js MySQL Tailwind</p>
                      <p className="md:mb-4">12th Feb 2020</p>
                      <p className="h-[240]">{projectContent}</p>
                    </div>
                  </div>
                  <hr className="my-7 border-gray-300 w-full" />
                </Link>)
              }
            </div>
          </section>
          {/* Add a section of job experiences and find related resources for the job  */}
        </div>
      </main>
    </div>
  );
}

export const ImageCarousel = ({ images, showArrows }: { images: StaticImageData[], showArrows: boolean }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    console.log({ currentImageIndex })
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };

  return (
    <section>
      <div className="flex overflow-hidden relative">
        {
          images.map((image: StaticImageData, index: number) => <Image
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`mb-3 flex border-2 border-black w-full ${index === currentImageIndex ? '' : 'hidden'}`}
          />
          )
        }
        {showArrows &&
          <>
            <Image src={RightArrow} alt={"right arrow"} onClick={nextImage} className="absolute right-0 top-1/2 bg-white text-black border-gray-300 border hover:bg-gray-200 focus:outline-none rounded-full mr-2 w-[5%] sm:w-7 sm:h-7" />
            <Image src={LeftArrow} alt={"left arrow"} onClick={prevImage} className="absolute left-0 top-1/2 bg-white text-black border-gray-300 border hover:bg-gray-200 focus:outline-none rounded-full ml-2 w-[5%] sm:w-7 sm:h-7" />
          </>
        }
      </div>
    </section>
  );
};