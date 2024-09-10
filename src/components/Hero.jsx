import React from "react";
import { motion } from "framer-motion"
import cursor from "../assets/icon1.png"
import lighting from "../assets/icon2.png"
const Heroo = () => {
    return (
        <div id="home" className="w-full mt-10 h-full  flex items-center justify-center lg:h-screen lg:mt-0">
            <div className="flex flex-col items-center text-center max-w-screen-xl mx-auto">
                <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
                    <h1 className="text-[#98B4CE]">Hi, I am</h1>
                    <h1 className="text-[#E48A57]">Abhishek Yadav</h1>
                </div>
                <motion.div 
                    className="hidden md:block absolute left-[180px] top-[100px]"
                    drag>
                        <img src={cursor}
                        height={190}
                        width={190}
                        alt="cursor"
                        className=""
                        draggable="false"/>

                </motion.div>
                <motion.div 
                    className="hidden md:block absolute right-[220px] top-[100px]"
                    drag>
                        <img src={lighting}
                        height={120}
                        width={120}
                        alt="lighting"
                        className=""
                        draggable="false"/>

                </motion.div>
                <p className="text-base md:text-lg lg:text-lg max-w-[90%] md:max-w-[80%] lg:max-w-[500px] mx-auto mt-4 md:mt-8 text-white">
                    I am a full-stack developer focused on creating websites that provide the best experience for users.
                </p>
            </div>
        </div>
    );
};

export default Heroo;
