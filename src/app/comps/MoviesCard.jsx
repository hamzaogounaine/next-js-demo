import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const MoviesCard = ({ props }) => {
    return (
        <div>
            <div className='grid grid-cols-4 gap-3'>

                {props.map((show) => (
                    <Card key={show.id} className="overflow-hidden h-fit">
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                            alt={`${show.name || show.title} poster`}
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                        <CardContent className="p-4 z-10">
                            <h3 className="font-semibold text-lg mb-2 line-clamp-1">{show.name || show.title}</h3>
                            <p className="text-sm text-gray-600 line-clamp-3">{show.overview}</p>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex justify-between items-center">
                            <Badge variant="secondary">
                                Rating: {show.vote_average.toFixed(1)}
                            </Badge>
                            <button className="text-sm font-medium text-primary hover:underline">
                                More Info
                            </button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default MoviesCard