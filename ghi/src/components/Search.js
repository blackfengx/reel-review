import { useEffect, useState } from 'react'

export default function Search(props) {
    const [search, setSearch] = useState("")

    const handleSearchChange = async (e) => {
      const value = e.target.value
      setSearch(value)
    }

    const handleSearch = async (e) => {
        // e.preventDefault()
        props.searchingstuff(search)
    }

      useEffect(() => {
    handleSearch();
    console.log("hello")
  }, [search]);

  return (
    <form onSubmit={handleSearch}>
        <input onChange={handleSearchChange} value={search} placeholder="Enter search" type="text" name="search" id="search"/>
        <label htmlFor="search">Search Movies</label>
    </form>
  )
}
