import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
	padding-top: 2rem;
	display: grid;
	gap: 2rem;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 2fr;
	flex-grow: 1;
	overflow: auto;
`;
