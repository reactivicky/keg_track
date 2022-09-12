import { useState } from "react";
import * as S from "./styled";
import { LayoutGroup } from "framer-motion";

const Sidebar = () => {
	const [selectedPage, setSelectedPage] = useState("Home");
	const links = [
		"Home",
		"Inventory",
		"Retailer Full Product",
		"Keg Availability",
		"Product Availability",
	];
	const spring = {
		type: "spring",
		stiffness: 500,
		damping: 30,
	};
	return (
		<S.Container>
			<LayoutGroup>
				<S.Links>
					{links.map((link) => (
						<S.Link
							selected={selectedPage === link}
							key={link}
							whileHover={{ scale: 1.01 }}
							onClick={() => setSelectedPage(link)}
							transition={spring}
						>
							{link}
							{selectedPage === link && (
								<S.Circle
									layoutId="outline"
									className="outline"
									initial={false}
									animate={{ border: "1px solid black" }}
									transition={spring}
								/>
							)}
						</S.Link>
					))}
				</S.Links>
			</LayoutGroup>
		</S.Container>
	);
};

export default Sidebar;
