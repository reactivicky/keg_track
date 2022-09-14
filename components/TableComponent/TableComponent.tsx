import { useMemo } from "react";
import { useTable } from "react-table";
import Data from "../../Data/Data";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import * as S from "./styled";

const colors = [
	"#f58ae8",
	"#f1b725",
	"#64efa6",
	"#fd686c",
	"#168bef",
	"#ae1ed6",
	"#f98c3d",
];

const TableComponent = () => {
	const selectedInventory = useSelector(
		(state: RootState) => state.inventoryState.selectedInventory
	);
	const dataWithColors = Data.map((obj) => {
		let color = "";
		switch (obj.Type) {
			case "Pale Ale":
				color = "#f58ae8";
				return { ...obj, color };
			case "India Pale Ale":
				color = "#f1b725";
				return { ...obj, color };
			case "Red Ale":
				color = "#64efa6";
				return { ...obj, color };
			case "Sour":
				color = "#fd686c";
				return { ...obj, color };
			case "Lager":
				color = "#168bef";
				return { ...obj, color };
			case "Stout":
				color = "#ae1ed6";
				return { ...obj, color };
			case "Session Pale Ale":
				color = "#f98c3d";
				return { ...obj, color };
		}
		return obj
	});
	const filterData = useMemo(() => {
		if (selectedInventory) {
			return dataWithColors.filter((obj) => obj.Type === selectedInventory);
		}
		return dataWithColors;
	}, [dataWithColors, selectedInventory]);
	const data = useMemo(() => filterData, [filterData]);
	const columns = useMemo(
		() => [
			{
				Header: "Type Color",
				accessor: "color",
				Cell: (props: any) => {
					return <S.ColoredCircle color={props.value} />;
				},
			},
			{
				Header: "Type",
				accessor: "Type",
			},
			{
				Header: "Batch ID",
				accessor: "BatchNumber",
			},
			{
				Header: "Current Location",
				accessor: "placename",
			},
			{
				Header: "Product",
				accessor: "Product",
			},
			{
				Header: "Status",
				accessor: "volume",
				Cell: ({ cell: { value } }: any) => {
					if (value <= 100 && value > 90) {
						return "Full";
					} else if (value <= 90 && value > 10) {
						return "In Use";
					}
					return "Empty";
				},
			},
		],
		[]
	);
	//@ts-ignore
	const tableInstance = useTable({ columns, data });

	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		tableInstance;
	return (
		<S.Table {...getTableProps()}>
			<thead>
				{headerGroups.map((headerGroup) => {
					const { key, ...restHeaderGroupProps } =
						headerGroup.getHeaderGroupProps();
					return (
						<tr key={key} {...restHeaderGroupProps}>
							{headerGroup.headers.map((column) => {
								const { key, ...restColumnProps } = column.getHeaderProps();
								return (
									<th key={key} {...restColumnProps}>
										{column.render("Header")}
									</th>
								);
							})}
						</tr>
					);
				})}
			</thead>
			<tbody {...getTableBodyProps()}>
				{rows.map((row) => {
					prepareRow(row);
					const { key, ...restRowProps } = row.getRowProps();
					return (
						<tr key={key} {...restRowProps}>
							{row.cells.map((cell) => {
								const { key, ...restCellProps } = cell.getCellProps();
								return (
									<td key={key} {...restCellProps}>
										{cell.render("Cell")}
									</td>
								);
							})}
						</tr>
					);
				})}
			</tbody>
		</S.Table>
	);
};

export default TableComponent;
