import React, { useState, useEffect } from 'react'

export default function SearchResult({ name, filmsIndex, data }) {
  const [filmIndex, setFilmIndex] = useState(-1)

  useEffect(() => {
    if (name) { 
      searchFilm()
    } else {
      setFilmIndex(-1)
      filmsIndex(-1)
    }
  }, [name, data])

  const searchFilm = () => {
    const foundIndex = data.findIndex((item) => item.title.toLowerCase() === name.toLowerCase());
    if (foundIndex !== -1) {
      setFilmIndex(foundIndex)
      filmsIndex(foundIndex)
    } else {
      setFilmIndex(-1)
      filmsIndex(-1)
    }
  }

  // if (filmIndex === -1) return null;

  return (
    <div className='absolute top-[70px] bg-[rgb(45,13,55)] w-full  pt-[50px] pb-[20px] pl-[20px]'>
      {filmIndex === -1 ? ( <p className='text-white'>not found</p>) : (
        <div>
          <div className='flex items-center gap-[20px]'>
            <img src={data[filmIndex].cover_image} className='w-[200px]' />
            <p className='text-white max-w-[150px]'>{data[filmIndex].description}</p>
          </div>
          <div className='flex gap-[10px] max-w-[190px]'>
            <p className='text-white'>{data[filmIndex].title}</p>
            <p className='text-white'>{data[filmIndex].author}</p>

          </div>
        </div>
      )}
    </div>
  )
}
