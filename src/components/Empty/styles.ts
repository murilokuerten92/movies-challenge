import styled from 'styled-components';

export const Container = styled.header`
padding: ${({ theme }) => theme.spacings.xsmall};
 text-align: center;

 h1 {
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: ${({ theme }) => theme.font.sizes.medium};
 }
`

