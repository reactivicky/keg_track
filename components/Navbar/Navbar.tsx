import * as S from "./styled";
import Select from "react-select";
import Data from "../../Data/Data";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { update } from "../../app/KegSlice";
import { useRouter } from "next/router";

const options = Data.map((dataObj) => {
	return {
		...dataObj,
		value: dataObj.kegtrackerId,
		label: dataObj.kegtrackerId,
	};
});

const Navbar = () => {
	const router = useRouter();
	const isInventoryPage = router.pathname === "/inventory";
	const isRetailerPage = router.pathname === "/retailer";
	const selectedKeg = useSelector(
		(state: RootState) => state.kegState.selectedKeg
	);
	const dispatch = useDispatch();
	return (
		<S.Container>
			<S.TextContainer>
				<h1>KegTracker</h1>
				{isInventoryPage && <h2>Inventory</h2>}
				{isRetailerPage && <h2>Retailer Full Product</h2>}
			</S.TextContainer>
			{router.pathname === "/" && (
				<Select
					defaultValue={selectedKeg}
					onChange={(val) => dispatch(update(val))}
					options={options}
				/>
			)}
		</S.Container>
	);
};

export default Navbar;
