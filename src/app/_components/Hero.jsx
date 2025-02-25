import Image from "next/image"


function Hero() {
    return (
        <div>
            <div className="flex justify-center">
                <Image
                    className="hover:scale-105 duration-500"
                    src={"/logo/logo.webp"}
                    height={300}
                    width={300}
                    alt="me with macbook"
                />
                <h1 className="text-[#171717] font-bold text-4xl flex flex-col justify-center leading-10">
                    <span>Hey!</span>
                    <span>My name is</span>
                    <span>João</span>
                </h1>
            </div>
            <div className="mt-10 flex justify-center items-center ">
                <h1 className="text-white text-4xl font-bold">
                    This project will have three challenges:
                </h1>
            </div>
        </div>
    )
}

export default Hero