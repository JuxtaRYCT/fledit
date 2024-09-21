import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();

  return <>{session ? <div>Welcome</div> : <div>Yahan kya krra h lode</div>}</>;
}
