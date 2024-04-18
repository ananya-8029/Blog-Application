import HomePage from "./home/index.js";
import Register from "./register/index.js";
// import { useRouter } from "next/router";

export default function Home() {
  // const router = useRouter();
  return (
    <main>
      {/* <Register/> */}
      <HomePage/>
      {/* <button onClick={()=>router.push("/login")}>Login</button> */}
    </main>
  );
}
