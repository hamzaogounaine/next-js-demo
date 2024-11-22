'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from './redux/slices/moviesSlice'
import { useMovies } from './context/context'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import MoviesCard from './comps/moviesCard'

const Page = () => {
    const dispatch = useDispatch()
    const { status } = useSelector(state => state.movies)
    const [tvShows, setTvShows] = useState([])
    const {getTvShows} = useMovies()
    useEffect(() => {
        const fetchAll = async () => {
            const shows = await getTvShows()
            setTvShows(shows)
        }
        fetchAll()
        dispatch(fetchMovies())

    }, [dispatch, getTvShows])

  return (
    <div>
        {status === 'loading' && <h1>Loading...</h1>}
        {status === 'failed' && <h1>Error...</h1>}
        <MoviesCard props={tvShows} />
       
    </div>
  )
}

export default Page