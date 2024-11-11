import styled from 'styled-components';

export const Container = styled.header`
 background-color: ${({ theme }) => theme.colors.black};   
 padding: ${({ theme }) => theme.spacings.xsmall};
 text-align: left;

 h1 {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.font.sizes.medium};
 }
`

