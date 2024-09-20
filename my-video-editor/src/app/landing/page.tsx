import SignIn from "../components/SignInButton";

export default function Home() {
    return (
        <div className="flex flex-row h-screen">
            <div className="w-[75%] flex flex-col bg-black text-white h-full justify-center items-center p-10 relative">
                <span className="text-7xl font-bold text-[#FF4500]">
                    FLEDIT
                </span>
                <p className="text-sm mt-2 text-[#ffffffcc]">
                    Sync, Edit, Flow.
                </p>

                <p className="text-2xl mt-10 text-center max-w-2xl leading-relaxed">
                    <span className="text-[#FF4500]">Fledit</span> is a
                    collaborative video editing platform that lets creators work
                    together in
                    <span className="text-[#FF4500]"> real-time</span>, from
                    anywhere. With seamless{" "}
                    <span className="text-[#FF4500]">cloud integration</span>{" "}
                    and intuitive tools, Fledit simplifies workflows, making it
                    easy to sync ideas and craft stunning videos without the
                    hassle.
                    <strong>Create together, without limits.</strong>
                </p>

                <div className="absolute bottom-0 left-0 p-10">
                    <svg
                        className="w-24 h-24 text-[#FF4500]"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="white"
                            strokeWidth="2"
                        />
                    </svg>
                </div>
            </div>

            <div className="w-[25%] flex flex-col h-full justify-center items-center bg-[#2d2d2d] shadow-lg">
                <SignIn />
                <p className="text-center mt-6 text-[#FF4500] text-sm font-semibold max-w-xs">
                    Sign in to get started and invite your team to collaborate
                    effortlessly!
                </p>
            </div>
        </div>
    );
}
