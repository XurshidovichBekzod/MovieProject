import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const useMovie = () => {
    const getMovies = () => useQuery({
        queryKey: ["movie-key"],
        queryFn: () => api.get("/discover/movie").then(res => res.data)
    })

    const createMovie = useMutation({
        mutationFn: (data: any) => api.post("/discover/movie", data)
    })

    const getMovieById = (id?: number) => useQuery({
        queryKey: ["movie", id],
        queryFn: () => api.get(`/movie/${id}`).then(res => res.data),
    });

    const getMovieItems = (id?: number, path?: string) => useQuery({
        queryKey: ["movie", id , path],
        queryFn: () => api.get(`/movie/${id}/${path}`).then(res => res.data),
    });

    return { getMovies, createMovie, getMovieById, getMovieItems };
}