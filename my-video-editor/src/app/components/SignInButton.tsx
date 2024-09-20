import { signIn } from "@/auth";

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server";
                await signIn("google");
            }}
        >
            <button
                type="submit"
                className="text-white bg-[#FF4500] hover:bg-[#e03e00] active:bg-[#cc3800] p-3 rounded-xl transition-all duration-300 ease-in-out shadow-lg text-lg font-bold"
            >
                Sign in with Google
            </button>
        </form>
    );
}
