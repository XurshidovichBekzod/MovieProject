import { useMutation, useQuery } from "@tanstack/react-query"
import { api } from "../../../shared/api"

export const useMovie = () => {

    useQuery({
        queryKey: ["movie-key"],
        queryFn: () => api.get("/discover/movie").then(res => res.data),
    });

    const getMovies = () => useQuery({
        queryKey: ["movie-key"],
        queryFn: () => api.get("/discover/movie").then(res => res.data)
    })

    const createMovie = useMutation({
        mutationFn: (data: any) => api.post("/discover/movie", data)
    })


    return { getMovies, createMovie }
}