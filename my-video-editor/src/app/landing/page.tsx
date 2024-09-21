import SignIn from "../components/SignInButton";
import Image from "next/image";
import greyfinger from "@/app/assets/greyfinger.svg";
import inkpen from "@/app/assets/inkpen.svg";

export default function Home() {
  return (
    <div className="relative flex flex-row h-screen overflow-y-hidden">
      <div
        className=" w-[30%] flex flex-col bg-[#262626] h-full items-center"
        style={{
          backgroundImage: `url('/Group 1236.svg')`,
          backgroundRepeat: "repeat-y",
          backgroundPosition: "centre",
          backgroundSize: " 700px",
        }}
      >
        <Image
          src={inkpen}
          alt="ink pen"
          className="h-[20%] absolute top-[0%] left-[3%]"
        />
        <Image
          src={greyfinger}
          alt="grey finger"
          className="h-[80%] absolute bottom-[-10%]"
        />
      </div>

      <div className="w-[70%] flex flex-col h-full justify-center items-center bg-[#EB5939] shadow-lg">
        <span className="text-7xl font-bold text-[#262626]">Good Morning</span>
        <span className="text-[#262626] font-semibold text-xl">Login</span>
        <form action="" className="flex flex-col items-centre ">
          <input
            type="text"
            className="p-2 my-3 bg-transparent rounded border-2 w-96 border-dashed border-black placeholder-black outline-none"
            placeholder="Email-ID"
          />

          <input
            type="text"
            className="p-2 my-3 bg-transparent rounded border-2 w-96 border-dashed border-black placeholder-black outline-none"
            placeholder="Password"
          />
          <button className="p-2 my-3 bg-[#262626] rounded border w-96 border-[#262626] text-[#EB5939]">
            Login
          </button>
        </form>
        <SignIn />
      </div>
    </div>
  );
}
