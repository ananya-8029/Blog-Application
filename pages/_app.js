import { AuthContextProvider } from "@/Context/authContext";
import "@/styles/globals.css";
import { fetchUserData } from "@/userutils";

function App({ Component, pageProps, serverUser }) {
  return (
    <AuthContextProvider serverUser={serverUser}>
      <Component {...pageProps} />
    </AuthContextProvider>
  );
}

App.getInitialProps = async ({ ctx }) => {
  let serverUser = null;
  if (ctx.req && ctx.req.cookies.token) {
    // console.log(ctx.req.cookies.token)
    serverUser = await fetchUserData(ctx.req.cookies.token);
    // console.log(serverUser)
  }
  return { serverUser };
};

export default App;
