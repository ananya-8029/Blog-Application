import Intro from "./intro/index.js";
// import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter();
  return (
    <main>
      <Intro/>
      {/* <button onClick={()=>router.push("/login")}>Login</button> */}
    </main>
  );
}
