import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
`

export const Aside = styled.aside`
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

export const MainContent = styled.div`
display: flex;
height: 100vh;


main {
    flex: 3;
    background-color: ${({ theme }) => theme.colors.white};
}
`