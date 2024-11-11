import styled from 'styled-components';

export const Container = styled.div`
padding: 20px;
  h1 {
        font-size: ${({ theme }) => theme.font.sizes.xlarge};
        margin-bottom: 1rem;
    }
`