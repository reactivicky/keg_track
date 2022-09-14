import styled from "@emotion/styled";

export const Table = styled.table`
	width: 100%;
	text-align: left;

	td,
	th {
		outline: 1px solid #d7d7d7;
		padding: 1rem;
	}
`;

export const ColoredCircle = styled.div<{ color: string }>`
	height: 20px;
	width: 20px;
	background-color: ${({ color }) => color};
	border-radius: 50%;
`;
