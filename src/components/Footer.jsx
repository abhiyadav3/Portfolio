import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Font Awesome icons

const Footer = () => {
    return (
        <div className="bg-transparent text-white py-8 border-t border-gray-700">
            <div className="container mx-auto px-4">
                <div className="flex justify-center flex-row">
                    <div className="w-1/3 flex justify-center mb-0">
                        <div className="flex flex-row space-x-4">
                            <a 
                                href="mailto:ayabhishek777@gmail.com" 
                                className="flex items-center text-gray-400 hover:text-white transition-transform transform hover:scale-110 mb-2 lg:mb-0"
                            >
                                <FaEnvelope className="text-2xl" />
                            </a>
                            <a 
                                href="https://linkedin.com/in/abhishekyadav76" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 mb-2 lg:mb-0"
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a 
                                href="https://github.com/abhiyadav3" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 mb-2 lg:mb-0"
                            >
                                <FaGithub className="text-2xl" />
                            </a>
                            <a 
                                href="https://x.com/abhiyadav076" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-400 hover:text-white transition-transform transform hover:scale-110 mb-2 lg:mb-0"
                            >
                                <FaTwitter className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm animate-fadeIn">
                        &copy; {new Date().getFullYear()} Abhishek Yadav. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
