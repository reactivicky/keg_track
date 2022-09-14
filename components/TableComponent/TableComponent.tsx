import { useMemo } from "react";
import { useTable } from "react-table";
import Data from "../../Data/Data";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import * as S from "./styled";

const TableComponent = () => {
	const selectedKeg = useSelector(
		(state: RootState) => state.kegState.selectedKeg
	);
	const filterData = useMemo(() => {
		return Data.filter(obj => obj.Type === selectedKeg.Type)
	}, [selectedKeg])
	const data = useMemo(() => filterData, [filterData]);
	const columns = useMemo(
		() => [
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
