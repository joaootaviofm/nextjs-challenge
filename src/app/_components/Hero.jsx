"use client"
import Image from "next/image"
import { motion } from "motion/react"

const projectList = [
    { projectName: "Password generator", path: "#passowordgen" },
    { projectName: "Roman conversor", path: "#conversor" },
    { projectName: "Elevator system", path: "#elevator" }
]


function Hero() {
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .6 }}
                className="flex justify-center">
                <Image
                    className="hover:scale-105 duration-500"
                    src={"/logo/logo.webp"}
                    height={300}
                    width={300}
                    alt="me with macbook"
                />
                <h1
                    className="mt-15 text-[#171717] font-bold text-4xl flex flex-col justify-center leading-10">
                    <span
                        className="hover:scale-110 duration-500 cursor-default">Hey!
                    </span>
                    <span

                        className="hover:scale-110 duration-500 cursor-default">
                        My name is
                    </span>
                    <span
                        className="hover:scale-110 duration-500 cursor-default">
                        João
                    </span>
                </h1>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: .6 }}
                className="mt-10 flex justify-center items-center">
                <h1 className="cursor-default text-center text-white text-4xl font-bold hover:scale-110 duration-500">
                    This project will have three challenges:
                </h1>
            </motion.div>
            <div className="mt-15 flex flex-col md:flex-row gap-31 items-center justify-center">
                {projectList.map((challenge, index) => (
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6 }}
                        key={index}
                        className="border-transparent border-2 hover:border-white flex flex-col items-center px-3 pt-5 w-[350px] h-[250px] bg-[#2B2A27] rounded-2xl hover:drop-shadow-2xl hover:scale-110 duration-300">
                        <h1 className="font-bold text-xl text-white">
                            {challenge.projectName}
                        </h1>
                        <p className="text-white mt-2">
                            {index == 0 && (
                                "User must have 3 options: Use symbols, Use Numbers, Use Lower or UpperCase only."
                            )}
                            {index == 1 && (

                                "User have to input an roman symbol and the system outputs a decimal number."
                            )}
                            {index == 2 && (
                                "Elevator system where the user can call the elevator and every single floor he needs."
                            )}
                        </p>
                        <div className="flex gap-5 mt-10 items-center">
                            <a href="#"
                                className="bg-white p-2 rounded-2xl">
                                View Code
                            </a>
                            <a href="#"
                                className="bg-white p-2 rounded-2xl">
                                Go to Page
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Hero