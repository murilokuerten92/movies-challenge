import { Container } from "./styles"

type EmptyProps = {
    description?: string;
}

export const Empty = ({ description = 'No data returned' }: EmptyProps) => {

    return (
        <Container>
            <h1>{description}</h1>
        </Container>
    )
}