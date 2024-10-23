import React from 'react'
import Images from "next/image"

const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b7540c83ce918b6dea8db8049c728d69`);
    return await res.json();
}

const page = async ({ params }) => {
    const id = params.id;
    const movieDetail = await getMovie(id);

    return (
        <div className='relative p-7 min-h-screen '>
            <Images
                style={{ objectFit: 'cover' }}
                fill
                src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}
                alt={movieDetail?.title || 'Movie Image'}
            />

            <div className='absolute'>
                <div className='text-4xl font-bold my-3'>{movieDetail?.title}</div>
                <div className='w-1/2'>{movieDetail?.overview}</div>
                <div className='my-3'>{movieDetail?.release_date} - {movieDetail?.vote_average}</div>
                <div className='border w-32 my-5 p-2 rounded-md text-center text-lg cursor-pointer hover:bg-white hover:text-black'>Trail</div>
            </div>
        </div>
    )
}

export default page;
