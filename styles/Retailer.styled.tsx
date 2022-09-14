import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
	flex-grow: 1;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	place-items: center;
`;

export const DonutContainer = styled.div`
	padding: 5rem;
`;

export const Legend = styled.div`
	> div:first-of-type {
		border-top: 1px solid black;
	}
`;

export const ProductName = styled.div`
	display: flex;
	justify-content: space-between;
	border: none;
	gap: 2rem;
	border-bottom: 1px solid black;
	padding: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const ColorCircle = styled.span<{ color: string }>`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background-color: ${({ color }) => color};
`;

export const Total = styled.h2``
