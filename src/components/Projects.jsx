import React from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import { motion } from "framer-motion";
import { MdArrowOutward } from 'react-icons/md';
const Projects = [
    {
        id:1,
        title:"Prime Blog",
        description: "PrimeBlog is a versatile blogging platform that allows users to create accounts, write, edit, format, delete, and publish blog posts with image uploads using a built-in text editor. Powered by Appwrite, it ensures secure authentication, reliable data storage, and efficient content management.",
        devStack: "React.js, TailwindCSS, Appwrite Services(Backend)",
        gitLink:"https://github.com/abhiyadav3/PrimeBlog",
        liveLink:"https://prime-blog-nu.vercel.app/",
        src: project1,
    },
    {
        id:2,
        title:"Personal Portfolio",
        description: "A personal portfolio website built using React and Tailwind CSS, enhanced with smooth animations through Framer Motion. The portfolio showcases projects, skills and contact information with a modern, interactive design.",
        devStack: "React.js, Tailwind CSS, Framer Motion",
        gitLink:"https://github.com/abhiyadav3/PrimeBlog",
        liveLink:"https://prime-blog-nu.vercel.app/",
        src: project2,
    },
    {
        id:3,
        title:"AI-Powered Diabetes Prediction Web App",
        description: "A web application that integrates a machine learning model to predict diabetes. Users can input health data and receive real-time predictions. Flask handles backend requests and application logic.",
        devStack: "Python, scikit-learn, Pandas, NumPy, HTML/CSS, Flask",
        gitLink:"https://github.com/abhiyadav3/Diabetes-Prediction-System",
        liveLink:"https://diabetes-prediction-system-f79j.onrender.com/",
        src: project3,
    }
]

const Project = () => {
    return(
        <div className=" py-18 mt-30" id="project">
            <h2 className="mb-8 text-center text-4xl text-[#E48A57] font-bold lg:text-5xl">Projects</h2>

            <div className="max-w-[1000px] mx-auto mt-35 space-y-24">
                {Projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 75}}
                        whileInView={{ opacity:1, y: 0}}
                        viewport={{ once: true}}
                        transition={{ duration: 0.5, dekay: 0.25}}
                        className={`mt-12 flex ${index % 2 ===1 ? "flex-col  md:flex-row-reverse gap:12" : "flex-col md:flex-row"}`}
                    >
                        <div className="space-y-2 max-w-[550px]">
                            <h2 className="text-4xl pr-4 pl-4">{project.title}</h2>
                            <p className="text-lg text-white opacity-70 break-words pr-4 pl-4">{project.description}</p>
                            <p className="text-xl text-orange-500 font-semibold pl-4">{project.devStack}</p>
                            <div className="flex flex-row w-64  my-4 ">
                                <a href={project.gitLink} className="mr-6 pl-4 hover:text-blue-700">
                                    <div className="flex items-center">
                                        <span>GitHub</span>
                                        <MdArrowOutward />
                                    </div>
                                </a>
                                <a href={project.liveLink} className="mr-6 hover:text-blue-700">
                                    <div className="flex items-center">
                                        <span>Live</span>
                                        <MdArrowOutward />
                                    </div>
                                </a>
                            </div>

                        </div>

                        <div className="flex justify-center items-center pl-4 mt-4 md:mt-0">
                            <img src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border rounded border-gray-700 " />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
export default Project;