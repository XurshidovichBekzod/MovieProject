import { Input } from 'antd'
import { useState } from 'react'
import { useSearch } from '../service/useSearch'
import MovieView from '../../movies/components/movie-view/MovieView'

const Search = () => {
  const [value, setValue] = useState("")
  const { getMoviesBySearch } = useSearch()
  const { data } = getMoviesBySearch({ query: value })

  return (
    <div className='container'>
      <div className='flex justify-center pt-[40px] pb-[40px]'>
        <Input
          size="large"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
          className="w-[400px]"
        />
      </div>

      <div className="flex justify-center">
        {value.trim() === "" ? (
          // agar input bo‘sh bo‘lsa rasm chiqadi
          <h1 className='text-white'>🔍 Start typing to search...</h1>
        ) : (
          // agar qidiruv bo‘lsa MovieView chiqadi
          <MovieView data={data?.results} />
        )}
      </div>
    </div>
  )
}

export default Search
