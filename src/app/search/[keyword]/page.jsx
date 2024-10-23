import Movies from '@/components/Movies';
import React from 'react'

const Page = async (params) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themovie.org/3/search/movie?api_key=b7540c83ce918b6dea8db8049c728d69&query=${keyword}&language=en-US&include_adult=false`)

    const data = await res.json();
    return (
        <div>
            {
                !data?.results ?
                    <div>Found!</div> :
                    <div className='flex items-center flex-wrap gap-2'>
                        {
                            data?.results?.map((dt, i) => (
                                <Movies key={i} dt={dt} />
                            ))
                        }
                    </div>
            }
        </div>
    )
}

export default Page