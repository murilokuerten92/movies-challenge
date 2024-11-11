import styled from 'styled-components';

export const Table = styled.table`
 width: 100%; 
 table-layout: fixed;
 border-collapse: collapse;
 border: 1px solid ${({ theme }) => theme.colors.mediumGray};
 font-size: ${({ theme }) => theme.font.sizes.xsmall};

 tr{
   border: 1px solid ${({ theme }) => theme.colors.mediumGray};
 }
 th {
    text-align: left;
    border: 1px solid ${({ theme }) => theme.colors.mediumGray};
 }
 td {
   border: 1px solid ${({ theme }) => theme.colors.mediumGray};
 }
`

export const TableHeader = styled.th`
  padding:10px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const TableRow = styled.tr<{ background: boolean }>`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  background-color: ${({ background, theme }) => (background ? theme.colors.lightestGray : theme.colors.whiteFull)};
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
`;