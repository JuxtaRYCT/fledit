import { signIn } from "@/auth";
import Image from "next/image";
import googlelogo from "@/app/assets/Vector.svg";

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button type="submit" className="bg-[#262626] p-2 rounded-full my-2">
        <Image src={googlelogo} alt="google" className="h-[80%]" />
      </button>
    </form>
  );
}
