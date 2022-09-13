import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const Circle = styled.div`
  width: 150px;
  height: 150px;
  background-color: #453d6f;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: white;
  overflow: hidden;
  position: relative;

  p {
    z-index: 1;
  }
`;

export const InnerCircle = styled(motion.div)`
  width: 200px;
  position: absolute;
  bottom: 0;
  background-color: #dca927;
`;


