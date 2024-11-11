import TableView from "../../../components/TableView"
import { Container } from "./styles"

const columns = [{
    key: 'id',
    label: 'ID',
}, {
    key: 'year',
    label: 'Year',
    filterable: true
}, {
    key: 'title',
    label: 'Title',
}, {
    key: 'winner',
    label: 'Winner?',
    filterable: true
}]

export const MoviesList = () => {

    return (
        <Container>
            <h1>List Movies</h1>
            <TableView columns={columns} />
        </Container>
    )
}