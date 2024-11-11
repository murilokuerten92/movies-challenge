
import { useEffect, useState, useRef } from "react";
import { CardTable, Container, ContainerLoad, ResearchContainer } from "./styles"
import moviesApi from "../../../service/moviesApi";
import Table from "../../../components/Table";
import { MultipleWinner, Gift, Studio, MovieByYear } from "../../../types/movies-api";
import { columns, columnsByYear, columnsGift, columnsStudios } from "./columns";
import Load from "../../../components/Load";

export const Dashboard = () => {

    const [loading, setLoading] = useState<boolean>(true);
    const [loadingByYear, setLoadingByYear] = useState<boolean>(false);

    const [multiplesMovies, setMultiplesMovies] = useState<MultipleWinner[]>([])
    const [giftsMax, setGiftsMax] = useState<Gift[]>([])
    const [giftsMin, setGiftsMin] = useState<Gift[]>([])
    const [studios, setStudios] = useState<Studio[]>([])
    const [moviesByYear, setMoviesByYear] = useState<MovieByYear[]>([])

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const [multiplesMoviesResponse, giftsResponse, studiosResponse] = await Promise.all([moviesApi.getMultipleWinners(), moviesApi.getIntervalByGifts(), moviesApi.getStudios()])
                setMultiplesMovies(multiplesMoviesResponse.years)
                setGiftsMax(giftsResponse.max)
                setGiftsMin(giftsResponse.min)

                const studiosWithBiggestCount = studiosResponse.studios.slice()
                    .sort(function (a, b) { return b.winCount - a.winCount; })
                    .slice(0, 3)

                setStudios(studiosWithBiggestCount)
            } catch (error) {
                alert('error')
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    const handleSearchMovieByYear = async () => {
        setLoadingByYear(true)
        const inputYearValue = inputRef.current?.valueAsNumber;
        try {
            const moviesByYearResponse = await moviesApi.getMoviesByYear(inputYearValue)
            setMoviesByYear(moviesByYearResponse)
        } catch (error) {
            alert('error')
        } finally {
            setLoadingByYear(false)
        }
    }

    return (
        <Container>
            <CardTable>
                <h1>List years multiple winners</h1>
                {loading ? <ContainerLoad data-testid="loading"><Load data-testid="loading" /></ContainerLoad> : <Table columns={columns} data={multiplesMovies} />}
            </CardTable>
            <CardTable>
                <h1>Top 3 studios with winners</h1>
                {loading ? <ContainerLoad data-testid="loading"><Load data-testid="loading" /></ContainerLoad> : <Table columns={columnsStudios} data={studios} />}
            </CardTable>
            <CardTable>
                <h1>Producers with longest and shortest interval between wins</h1>
                <div className="min-text">
                    <span>Maximun</span>
                </div>
                {loading ? <ContainerLoad data-testid="loading"><Load data-testid="loading" /></ContainerLoad> : <Table columns={columnsGift} data={giftsMax} />}
                <div className="min-text">
                    <span>Minimun</span>
                </div>
                {loading ? <ContainerLoad data-testid="loading"><Load data-testid="loading" /></ContainerLoad> : <Table columns={columnsGift} data={giftsMin} />}
            </CardTable>
            <CardTable>
                <h1>List movie winners by year</h1>
                <ResearchContainer>
                    <input placeholder="Search by year" type="number" ref={inputRef} />
                    <button
                        onClick={() => handleSearchMovieByYear()}
                        disabled={loadingByYear}
                    >
                        <i className="fa fa-search"></i>
                    </button>
                </ResearchContainer>
                {loadingByYear ? <ContainerLoad data-testid="loading"><Load data-testid="loading" /></ContainerLoad> : <Table columns={columnsByYear} data={moviesByYear} />}
            </CardTable>
        </Container>
    )
}