import { useState } from 'react'

export default function Search(props) {
    const [search, setSearch] = useState("")

    const handleSearchChange = async (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault()
      console.log("hello")
        props.searchingstuff(search)
    }

  return (
    <form onSubmit={handleSearch}>
        <input onChange={handleSearchChange} value={search} placeholder="Enter search" required type="text" name="search" id="search"/>
        <label htmlFor="search"></label>
        <button type="submit">Search</button>
    </form>
  )
}
