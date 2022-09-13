import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { store } from "../app/store";
import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import { Layout } from "../components/index";

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<Provider store={store}>
			<Layout>
				<AnimatePresence initial={false} mode="wait">
					<Component {...pageProps} key={router.route} />
				</AnimatePresence>
			</Layout>
		</Provider>
	);
}

export default MyApp;
