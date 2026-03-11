"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import myImage from "@/assets/profile-pic.png"

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center"
            >
                <div className="relative w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden">
                    <Image
                        src={myImage}
                        alt="Profile Picture"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    <span className="text-gray-800">Hi, I&apos;m </span>
                    <span className="text-blue-600">Your Name</span>
                </h1>

                <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
                    Full Stack Developer
                </h2>

                <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                    I craft responsive websites and web applications that deliver exceptional user experiences.
                    Specialized in React, Next.js, and modern web technologies.
                </p>

                <div className="flex gap-4 justify-center">
                    <Link
                        href="/projects"
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        View Projects
                    </Link>
                    <Link
                        href="/contact"
                        className="bg-gray-100 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                        Contact Me
                    </Link>
                </div>
            </motion.div>
        </section>
    )
}