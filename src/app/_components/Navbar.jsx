"use client"
import Image from "next/image"
import { motion } from "motion/react"

export default function Navbar() {

    const navList = [
        { title: "About", path: "#about" },
        { title: "Home", path: "#home" },
        { title: "Challenges", path: "#challenges" }
    ]

    return (
        <nav className="bg-[#2B2A27] text-white font-bold flex items-center justify-between p-7 drop-shadow-2xl">
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: .6 }}
            >
                <Image
                    src='/logo/logo.webp'
                    width={70}
                    height={70}
                    alt="Logo"
                    className="hover:scale-110 cursor-pointer transition duration-300"
                />
            </motion.div>

            {/* start of the list*/}
            <motion.ul className="hidden gap-25 lg:flex">
                {navList.map((item, index) => (
                    <motion.li
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        className="cursor-pointer border-b-3 text-lg border-transparent hover:border-white/70 duration-300"
                        key={index}>
                        {item.title}
                    </motion.li>
                ))}
            </motion.ul>
            <div>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    className="text-lg cursor-pointer border-b-3 border-transparent hover:border-white/70 transition duration-300 hidden lg:flex">
                    Skills
                </motion.div>
            </div>
            {/* end of the list*/}
            <div className="lg:hidden flex">
                ---
            </div>
        </nav>
    )
}