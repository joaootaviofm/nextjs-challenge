import Image from "next/image"

const projectList = [
    { projectName: "Password generator"},
    { projectName: "Roman conversor" },
    { projectName: "Elevator system" }
]


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
                <h1 className="mt-15 text-[#171717] font-bold text-4xl flex flex-col justify-center leading-10">
                    <span className="hover:scale-110 duration-500 cursor-default">Hey!</span>
                    <span className="hover:scale-110 duration-500 cursor-default">My name is</span>
                    <span className="hover:scale-110 duration-500 cursor-default">João</span>
                </h1>
            </div>
            <div className="mt-10 flex justify-center items-center">
                <h1 className="text-white text-4xl font-bold">
                    This project will have three challenges:
                </h1>
            </div>
            <div className="mt-15 flex flex-col md:flex-row gap-31 items-center justify-center">
                {projectList.map((challenge, index) => (
                    <div className="flex justify-center px-15 pt-5 w-[350px] h-[250px] bg-[#2B2A27] rounded-2xl hover:drop-shadow-2xl hover:scale-110 duration-300">
                        <div key={index}>
                            <h1 className="font-bold text-xl text-white">
                                {challenge.projectName}
                            </h1>
                            <p>
                                {index == 0 && (
                                    "salve"
                                )}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero