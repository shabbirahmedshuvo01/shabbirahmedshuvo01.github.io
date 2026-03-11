"use client";

import React from 'react'
import { motion } from 'framer-motion'
import {
    FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt,
    FaBootstrap, FaFigma
} from 'react-icons/fa'
import {
    SiJavascript, SiTailwindcss, SiMongodb, SiFirebase,
    SiExpress, SiTypescript, SiElectron
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

export default function Highlight() {
    const skillCategories = [
        {
            category: "Core Technologies",
            skills: [
                { name: "HTML5", icon: <FaHtml5 className="text-4xl text-orange-500" /> },
                { name: "CSS3", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
                { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-400" /> },
                { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-600" /> },
            ]
        },
        {
            category: "Frontend Development",
            skills: [
                { name: "React.js", icon: <FaReact className="text-4xl text-cyan-400" /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-teal-500" /> },
                { name: "Bootstrap", icon: <FaBootstrap className="text-4xl text-purple-600" /> },
                { name: "ElectronJS", icon: <SiElectron className="text-4xl text-blue-400" /> },
            ]
        },
        {
            category: "Backend & Database",
            skills: [
                { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
                { name: "Express.js", icon: <SiExpress className="text-4xl text-gray-600" /> },
                { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" /> },
                { name: "REST API", icon: <TbApi className="text-4xl text-blue-500" /> },
            ]
        },
        {
            category: "Tools & Platforms",
            skills: [
                { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-600" /> },
                { name: "Firebase", icon: <SiFirebase className="text-4xl text-yellow-500" /> },
                { name: "Figma", icon: <FaFigma className="text-4xl text-purple-500" /> },
            ]
        }
    ]

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-12"
                >
                    <div className="text-center">
                        <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            A comprehensive set of technologies I work with to build modern web applications
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {skillCategories.map((category, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-lg"
                            >
                                <h3 className="text-xl font-semibold mb-6 text-gray-800">
                                    {category.category}
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skillIndex}
                                            whileHover={{ scale: 1.05 }}
                                            className="flex flex-col items-center gap-2"
                                        >
                                            {skill.icon}
                                            <span className="text-gray-600">{skill.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}