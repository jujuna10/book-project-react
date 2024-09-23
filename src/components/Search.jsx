import React, { useState, useEffect } from 'react'
import search from '../assets/search.png'
import SearchResult from './SearchResult'

function Search() {
  const [clickSearch, setClickSearch] = useState(false)
  const [filmName, setFilmName] = useState("")
  const [fromChild, setFromChild] = useState(-1)
  const [data, setData] = useState([])

  const api = 'https://freetestapi.com/api/v1/books'
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(api);
      const result = await response.json();
      setData(result);
    };
    fetchData();
  }, []);

  const handleClick = () => {
    setClickSearch(!clickSearch)
  }

  const handleChange = (e) => {
    e.preventDefault()
    setFilmName(e.target.value)
  }

  const dataFromChild = (number) => {
    setFromChild(number)
  }

  console.log(data)

  return (
    <div>
      <img src={search} className='absolute left-[90%] m-[12px] w-[59px] z-20 drop-shadow-[0px_0px_17px_rgb(255_255_255)] rounded-[20%] hover:cursor-pointer' onClick={handleClick}/>
      <div>
        <input type="text" name="search" className={`absolute bg-[rgb(66_59_59)] p-[20px] drop-shadow-[0px_0px_20px_rgb(255_255_255)] w-full z-10 ${clickSearch ? "h-[70px] shadow-[0_10px_10px_-5px_rgba(0,0,0,0.5)] duration-700" : "translate-y-[-100px] duration-700"}`} placeholder='Search...' onChange={handleChange} value={filmName} />
      </div>

      <div>
        {clickSearch && <SearchResult name={filmName} filmsIndex={dataFromChild} data={data}/>}
        
      </div>
    </div>
  )
}

export default Search
