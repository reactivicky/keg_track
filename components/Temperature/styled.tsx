import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ThermometerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-content: center;
`

export const TemperatureReading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  p {
    text-align: right;
    width: 100%;
  }
`

export const Temperature = styled.h3`
  font-size: 3rem;
  color: #31c4de;
`

export const Logo = styled.div`
  position: relative;
  width: 100px;
  height: 300px;
  display: flex;
  justify-content: center;
`

export const Bar = styled.div`
  z-index: 1;
  height: 150px;
  width: 40px;
  border: 5px solid #c6c5c5;
  border-bottom-color: white;
  background-color: white;
  border-radius: 25px 25px 0 0;
  position: relative;
  top: 60px;
`

export const InnerBar = styled(motion.div)`
  display: block;
  width: 20px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -22px;
  border-radius: 10px 10px 0 0;
  background-color: #31c4de;
`

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #c6c5c5;
  position: absolute;
  bottom: 0;
`

export const InnerCircle = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #31c4de;
`

