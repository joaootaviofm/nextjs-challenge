import Image from "next/image"
import Link from "next/link"

export default function Navbar() {

    const navList = [
        { title: "About", path: "#about" },
        { title: "Home", path: "#home" },
        { title: "Challenges", path: "#challenges" }
    ]

    return (
        <nav className="bg-[#2B2A27] text-white font-bold flex items-center justify-between p-7 drop-shadow-2xl">
            <div>
                <Image
                    src='/logo/logo.webp'
                    width={70}
                    height={70}
                    alt="Logo"
                    className="hover:scale-110 cursor-pointer transition duration-300"
                />
            </div>
            <ul className="flex gap-25">
                {navList.map((item, index) => (
                    <li
                        className="cursor-pointer border-b-3 text-lg border-transparent hover:border-green-500 duration-300"
                        key={index}>
                        {item.title}
                    </li>
                ))}
            </ul>
            <div>
                <span className="text-lg cursor-pointer border-b-3 border-transparent hover:border-green-500 transition duration-300">
                    Skills
                </span>
            </div>
        </nav>
    )
}