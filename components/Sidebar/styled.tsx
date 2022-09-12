import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.div`
	width: 300px;
	outline: 1px solid red;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Links = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	align-items: center;
	list-style: none;
`;

export const Link = styled(motion.li)<{ selected: boolean }>`
	cursor: pointer;
  padding: 1.5rem 2rem;
	font-weight: ${({ selected }) => (selected ? 500 : 400)};
  position: relative;
`;

export const Circle = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50%;
`
