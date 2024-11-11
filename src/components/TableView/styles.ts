import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const ContainerLoad = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  table-layout: fixed;
 
`;

export const TableHeader = styled.th`
  padding: 5px 10px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const ContainerHeader = styled.th`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const TableCellEmpty = styled.td`
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  background-color: ${({ theme }) => theme.colors.lightestGray};

`;

export const TableCell = styled.td<{ background?: boolean }>`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.mediumGray};
  background-color: ${({ background, theme }) => (background ? theme.colors.lightestGray : theme.colors.whiteFull)};
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PageButton = styled.button<{ active?: boolean; disabled?: boolean }>`
  padding: 5px 10px;
  background-color: ${({ active, theme }) => (active ? theme.colors.blue : theme.colors.lightGray)};
  color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.darkGray)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;
  &:hover {
    background-color: ${({ disabled, theme }) => (disabled ? theme.colors.lightGray : theme.colors.gray)};
 }
`;

export const PaginationFooter = styled.tfoot`
  tr td {
    text-align: center;
  }
  background-color: ${({ theme }) => theme.colors.lightGray};
`;

export const InputFilter = styled.input`
  padding: 5px;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`;

export const SelectFilter = styled.select`
  padding: 5px;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`;