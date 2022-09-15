import styled from "@emotion/styled";

export const ToolTipContainer = styled.div<{color: string}>`
	background-color: white;
  padding: 1rem;
  color: ${({color}) => color};
`;

