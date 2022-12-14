import type { NextPage } from "next";
import Head from "next/head";
import { Battery, Temperature, Volume, Location } from "../components";
import * as S from "../styles/Home.styled";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Keg Tracker</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<S.Container
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<Temperature />
				<Volume />
				<Battery />
				<Location />
			</S.Container>
		</>
	);
};

export default Home;
