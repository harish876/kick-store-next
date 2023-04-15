import Main from "@/components/home/main";
import { getSession } from "next-auth/react";
import axios from "axios";

export default function Home(props) {
  return (
    <main className="globalContainer">
      <Main />
    </main>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  let result = { ...session };
  const { user } = session;
  const { status, data } = await axios.post(
    `${process.env.API_URL}/api/getCartItem`,
    { user: user }
  ); //refactor to callApi later
  result = status ? { ...result, data } : result;
  return {
    props: result,
  };
}
