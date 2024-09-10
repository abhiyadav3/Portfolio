import React from "react";
import image from "../assets/profilepic.png"
import { FaDownload } from "react-icons/fa";

const BIO = {
    image: image,
    resume: "path/to/your/resume.pdf",
    content: [
      "I am Abhishek Yadav, a computer science undergraduate at Amity University Lucknow with a passion for web development. With a strong foundation in both front-end and back-end development, I thrive on turning ideas into reality.",
      "I possess a deep understanding of modern web technologies and a keen eye for design, enabling me to build robust, scalable, and visually appealing applications. My projects range from simple utilities to intricate web applications, each with a commitment to functionality and user experience.",
      "Continuously learning and staying updated with the latest industry trends. I am always eager to explore new technologies and methodologies to enhance my skills and deliver cutting-edge solutions.",
    ],
  };

const AboutMe = () => {
    return (
        <section className="flex flex-col min-w-full gap-6 pt-20 pr-4 lg:flex-row lg:pr-20" id="aboutme">
            <div className="flex-shrink-0 w-full p-3 lg:w-2/5 mb-6 lg:mb-0 flex justify-center">
                <img
                    src={BIO.image}
                    alt="Abhishek"
                    width={400}
                    height={100}
                    className="rounded-full object-cover"
                />
            </div>
            <div className="flex-1 w-full lg:w-3/5 flex flex-col justify-center">
                <h2 className="text-center text-[#E48A57] text-3xl lg:text-5xl font-bold mb-6 mr-6">About Me</h2>
                <div className="mb-6">
                    {BIO.content.map((bio, index) => (
                        <p key={index} className="mb-4 text-lg lg:text-xl text-justify">
                            {bio}
                        </p>
                    ))}
                </div>
                <div className="text-left">
                    <a
                        href={BIO.resume}
                        download
                        className="inline-flex items-center px-3 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition"
                    >
                        Resume 
                        <FaDownload className="mr-2 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
