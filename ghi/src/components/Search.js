import { useState } from 'react'

export default function Search() {
    const [search, setSearch] = useState("")

    const handleSearchChange = async (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    // const handleSearchChange = async (e) => {
    //     setSearch(e.target.value)
    //     console.log(e.target.value)
    // }



  return (
    <form onSubmit={handleSearch}>
        <input onChange={handleSearchChange} value={search} placeholder="Enter search" required type="text" name="search" id="search"/>
        <label htmlFor="search"></label>
        <button>Search</button>
    </form>
  )
}
