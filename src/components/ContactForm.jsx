import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { FaUser, FaEnvelope, FaRegEdit, FaPaperPlane } from 'react-icons/fa'; // Font Awesome icons

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Invalid Email";
        }
        if (!formData.message) errors.message = "Message is required";
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            setIsSending(true);

            emailjs
                .send(
                    "service_14iyw6h",
                    "template_omenjwg",
                    formData,
                    "F4WdXCQ7Eq4unoGS9"
                )
                .then((response) => {
                    toast.success("Message sent successfully");
                    setFormData({ name: "", email: "", message: "" });
                })
                .catch((error) => {
                    console.log("FAILED....", error);
                    toast.error("Failed to send message. Please try again later.");
                })
                .finally(() => {
                    setIsSending(false);
                });
        }
    };

    return (
        <div className="p-4 flex justify-center mb-0" id="contact"> {/* Add mb-0 */}
            <Toaster />
            <div className="w-full max-w-4xl bg-transparent p-8 rounded-lg shadow-lg overflow-auto">
                <h2 className="text-center text-[#E48A57] text-3xl font-bold mb-6">Let's Connect</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                        <div className="relative lg:w-1/2">
                            <FaUser className="absolute top-3 left-3 text-gray-500" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                placeholder="Name"
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 bg-transparent text-sm focus:border-blue-500 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105"
                            />
                            {errors.name && (
                                <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                            )}
                        </div>
                        <div className="relative lg:w-1/2">
                            <FaEnvelope className="absolute top-3 left-3 text-gray-500" />
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                placeholder="Email"
                                onChange={handleChange}
                                className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 bg-transparent text-sm focus:border-blue-500 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105"
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
                            )}
                        </div>
                    </div>
                    <div className="relative">
                        <FaRegEdit className="absolute top-3 left-3 text-gray-500" />
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            placeholder="Message"
                            onChange={handleChange}
                            className="w-full pl-10 pr-3 py-3 rounded-lg border border-gray-300 bg-transparent text-sm focus:border-blue-500 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105"
                            rows="7"
                        />
                        {errors.message && (
                            <p className="text-sm text-red-600 mt-1">{errors.message}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className={`w-full rounded-lg border border-gray-300 bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-600 transition-transform duration-300 ease-in-out ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
                        disabled={isSending}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <FaPaperPlane className="text-lg" />
                            {isSending ? "Sending..." : "Send"}
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;
