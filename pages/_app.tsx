import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Layout } from "../components/index";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
    <Layout>
      <AnimatePresence initial={false} mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
	);
}

export default MyApp;
