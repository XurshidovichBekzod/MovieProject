import { Input, Spin } from 'antd'
import { useState } from 'react'
import { useSearch } from '../service/useSearch'
import MovieView from '../../movies/components/movie-view/MovieView'
import useDebounce from '../../../shared/hooks/useDebounce'

const Search = () => {
  const [value, setValue] = useState("")
  const debouncedValue = useDebounce(value, 1000)

  const { getMoviesBySearch } = useSearch()
  const { data, isLoading } = getMoviesBySearch({ query: debouncedValue })

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
        {debouncedValue.trim() === "" ? (
          <h1 className='text-[#677282] mt-[30px] text-[17px] mb-[160px]'>
            Start typing to search...
          </h1>
        ) : isLoading ? (
          <div className='mb-[183px]'>
            <Spin size="large" className="mt-[50px]" />
          </div>
        ) : data?.results?.length === 0 ? (
          <h1 className='text-[#677282] mt-[30px] text-[17px] mb-[160px]'>
            Nothing found for “{debouncedValue}”
          </h1>
        ) : (
          <MovieView data={data?.results} />
        )}
      </div>
    </div>
  )
}

export default Search

