import "@/styles/globals.css";

import "@/components/card/styles.css";
import "@/components/home/styles.css";
import "@/components/grid/styles.css";
//import "@/components/drawer/styles.css";


import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { getSession } from "next-auth/react";
import GlobalLayout from "@/layout/globalLayout";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <GlobalLayout>
          <Component key={router.asPath} {...pageProps} />
        </GlobalLayout>
      </SessionProvider>
    </Provider>
  );
}
