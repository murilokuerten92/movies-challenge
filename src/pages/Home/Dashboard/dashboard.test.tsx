import { screen, fireEvent } from "@testing-library/react";
import { Dashboard } from "../Dashboard";
import moviesApi from "../../../service/moviesApi";
import { render } from "../../../utils/test-utils";
import '@testing-library/jest-dom';

jest.mock("../../../service/moviesApi");

describe("Dashboard", () => {
    const mockMultipleWinners = [{ year: 2020, winnerCount: 2 }];
    const mockGiftsMax = [{ producer: "Producer A", interval: 10 }];
    const mockGiftsMin = [{ producer: "Producer B", interval: 2 }];
    const mockStudios = [{ name: "Studio A", winCount: 5 }];
    const mockMoviesByYear = [{ title: "Yearly Movie", year: 2020, winner: true }];

    beforeEach(() => {
        jest.clearAllMocks();
        (moviesApi.getMultipleWinners as jest.Mock).mockResolvedValue({ years: mockMultipleWinners });
        (moviesApi.getIntervalByGifts as jest.Mock).mockResolvedValue({ max: mockGiftsMax, min: mockGiftsMin });
        (moviesApi.getStudios as jest.Mock).mockResolvedValue({ studios: mockStudios });
        (moviesApi.getMoviesByYear as jest.Mock).mockResolvedValue(mockMoviesByYear);
    });

    it("fetches and displays multiple winners list after loading", async () => {
        render(
            <Dashboard />
        );

        await screen.findByText("List years multiple winners");

        expect(await screen.findByText(/2020/i)).toBeInTheDocument()
    });

    it("fetches and displays gifts after loading", async () => {
        render(
            <Dashboard />
        );

        await screen.findByText("Producers with longest and shortest interval between wins");

        expect(await screen.findByText(/Producer A/i)).toBeInTheDocument()
    });

    it("fetches and displays studios with top 3 winners after loading", async () => {
        render(
            <Dashboard />
        );

        await screen.findByText("Top 3 studios with winners");

        expect(screen.getByText("Studio A")).toBeInTheDocument();
        expect(screen.getByText("5")).toBeInTheDocument();
    });

    it("handles search by year and displays movie winners by year", async () => {

        render(
            <Dashboard />
        );

        const input = screen.getByPlaceholderText("Search by year");
        fireEvent.change(input, { target: { value: "2020" } });
        fireEvent.click(screen.getByRole("button"));

        await screen.findByText("List movie winners by year");

        expect(await screen.findByText(/Yearly Movie/i)).toBeInTheDocument()
    });
});