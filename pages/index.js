import Intro from "./intro/index.js";
import Register from "./register/index.js";
// import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter();
  return (
    <main>
      <Register/>
      {/* <Intro/> */}
      {/* <button onClick={()=>router.push("/login")}>Login</button> */}
    </main>
  );
}
