
type MultipleWinner = {
    year: number;
    winnerCount: number;
}

export interface MultipleWinners {
    years: MultipleWinner[]
}

type Studio = {
    name: string;
    winCount: number;
}

export interface Studios {
    studios: Studio[]
}

export type MovieByYear = {
    id: number;
    year: number;
    title: string;
    studios?: string[];
    producers?: string[];
    winner: boolean;
}

type Gift = {
    producer: string;
    interval: number;
    previousWin: number;
    followingWin: number;
}

export interface Gifts {
    min: Gift[];
    max: Gift[];
}
