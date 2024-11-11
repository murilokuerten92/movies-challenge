import axiosInstance from './api';
import { Gifts, MovieByYear, MultipleWinners, Studios } from '../types/movies-api';

const moviesApi = {
    getMultipleWinners: async (): Promise<MultipleWinners> => {
        const response = await axiosInstance.get('?projection=years-with-multiple-winners');
        return response.data;
    },

    getStudios: async (): Promise<Studios> => {
        const response = await axiosInstance.get(`?projection=studios-with-win-count`);
        return response.data;
    },

    getIntervalByGifts: async (): Promise<Gifts> => {
        const response = await axiosInstance.get(`?projection=max-min-win-interval-for-producers`);
        return response.data;
    },

    getMoviesByYear: async (year?: number): Promise<MovieByYear[]> => {
        const response = await axiosInstance.get(`?winner=true&year=${year}`);
        return response.data;
    },
};

export default moviesApi;