import React from "react";
import Heroo from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="relative h-full overflow-y antialiased">
            <div className="fixed inset-0 bg-fixed bg-cover bg-img"></div>
            <div className="relative z-10 flex flex-col items-center p-4 space-x-8 container mx-auto sm: pt-10">
                <Heroo />
                <Navbar />
                <AboutMe />
                <Skills />
                <Project />
                <ContactForm />
                <Footer />
            </div>
        </div>
    );
}

export default App;
