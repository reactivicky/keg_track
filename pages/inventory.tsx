import * as S from "../styles/Inventory.styled";
import { HorStackChart, TableComponent } from "../components";

const InventoryPage = () => {
	return (
		<S.Container
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<HorStackChart />
			<S.TableContainer>
				<TableComponent />
			</S.TableContainer>
		</S.Container>
	);
};

export default InventoryPage;
