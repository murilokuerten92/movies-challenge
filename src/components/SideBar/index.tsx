import { NavLink } from "react-router-dom"
import { Container } from "./styles"

const linkNavigates = [{
    name: 'Dashboard',
    navigate: '/dashboard',
}, {
    name: 'List',
    navigate: '/movies-list',
}]

export const Aside = () => {

    return (
        <Container>
            <ul>
                {linkNavigates.map(navigate => (
                    <li>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? 'blue' : 'black',
                            fontWeight: isActive ? 'regular' : 'normal'
                        })} to={navigate.navigate}><span>{navigate.name}</span></NavLink>
                    </li>
                ))}
            </ul>
        </Container>
    )
}