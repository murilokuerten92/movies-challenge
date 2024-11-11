import styled from 'styled-components';

export const Container = styled.aside`
   display: flex;
    flex: 0.6;
    background-color: ${({ theme }) => theme.colors.lightGray};   
    flex-direction: column;
    padding: ${({ theme }) => theme.spacings.xsmall};
ul{
        list-style-type: none;       
}
a{
    text-decoration: none;
}
`

