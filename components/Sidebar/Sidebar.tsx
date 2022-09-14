import { useState } from "react";
import * as S from "./styled";
import { LayoutGroup } from "framer-motion";
import { useRouter } from "next/router";

const Sidebar = () => {
	const router = useRouter();
	const links = [
		{ name: "Home", link: "/" },
		{ name: "Inventory", link: "/inventory" },
		{ name: "Retailer Full Product", link: "/" },
		{ name: "Keg Availability", link: "/" },
		{ name: "Product Availability", link: "/" },
	];
	const [selectedPage, setSelectedPage] = useState(
		() =>
			links.find((link) => link.link === router.pathname) || {
				name: "Home",
				link: "/",
			}
	);

	const spring = {
		type: "spring",
		stiffness: 500,
		damping: 30,
	};
	const handleLinkClick = (link: { name: string; link: string }) => {
		setSelectedPage(link);
		router.push(link.link);
	};
	return (
		<S.Container id="sidebar">
			<LayoutGroup>
				<S.Links>
					{links.map((link) => (
						<S.Link
							selected={selectedPage.name === link.name}
							key={link.name}
							whileHover={{ scale: 1.01 }}
							onClick={() => handleLinkClick(link)}
							transition={spring}
						>
							{link.name}
							{selectedPage.name === link.name && (
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
