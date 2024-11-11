import { Outlet } from "react-router-dom"
import { Container, MainContent } from "./styles"
import { Header } from "../../components/Header"
import { Aside } from "../../components/SideBar"

export const Home = () => {

    return (
        <Container>
            <Header />
            <MainContent>
                <Aside />
                <main>
                    <Outlet />
                </main>
            </MainContent>
        </Container>
    )
}