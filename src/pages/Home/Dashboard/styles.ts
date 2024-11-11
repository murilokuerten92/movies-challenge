import styled from 'styled-components';

export const Container = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr;
 row-gap: 1rem;
 column-gap: 3rem;
 padding: 20px;
`

export const CardTable = styled.div`
    padding: 20px;
    box-shadow: 
    rgba(0, 0, 0, 0.1) 0px 5px 15px;
    border-radius:${({ theme }) => theme.border.radius};
    h1 {
        font-size: ${({ theme }) => theme.font.sizes.medium};
        margin-bottom: 1rem;
    }
    span {
        font-size: ${({ theme }) => theme.font.sizes.medium};
        font-weight: ${({ theme }) => theme.font.normal};  
    }
    .min-text{
        margin: 8px 0 4px;
    }
`

export const ResearchContainer = styled.div`
    width: 100%;
    display: flex; 
    column-gap: 6px;
    margin-bottom: 1rem;
    input {
        height: 32px;
        border-radius:${({ theme }) => theme.border.radius};
        border: 1px solid ${({ theme }) => theme.colors.lightGray};
        padding: 10px;
        width: 100%;
    }
    button {
        padding: 6px 10px;
        background-color:   ${({ theme }) => theme.colors.blue};
        border-radius:${({ theme }) => theme.border.radius};
        border: none;
        cursor: pointer;
        &:hover{
            background-color:   ${({ theme }) => theme.colors.lightBlue};
            transition: ${({ theme }) => theme.transition.default};
        }

        .fa-search {
            font-size:  ${({ theme }) => theme.font.sizes.small};
            color: ${({ theme }) => theme.colors.white};
        }
    }
`

export const ContainerLoad = styled.div`
display: flex;
align-items: center;
justify-content: center;
`