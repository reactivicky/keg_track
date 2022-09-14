import { ReactNode, FC } from "react";
import { AnimatePresence } from "framer-motion";
import { ChildrenContainer, Container } from "./styled";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
	children?: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Container>
				<Navbar />
				<ChildrenContainer>
					<Sidebar />
					<AnimatePresence mode="wait">
						{children}
					</AnimatePresence>
				</ChildrenContainer>
			</Container>
		</>
	);
};

export default Layout;
