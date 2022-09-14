import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  flex-grow: 1;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;

export const ChartContainer = styled.div`
  padding: 0 2rem;
`

export const TableContainer = styled.div`
  padding: 0 2rem;
  overflow: auto;
`
