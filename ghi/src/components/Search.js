import { useEffect, useState } from "react";

export default function Search(props) {
  const [search, setSearch] = useState("");

  const handleSearchChange = async (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSearch = async (e) => {
    // e.preventDefault()
    props.searchingstuff(search);
  };

  useEffect(() => {
    handleSearch();
    console.log("hello");
  }, [search]);

  return (
    <div className="max-w-sm mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleSearchChange}
          className="block w-full py-2 px-3 leading-5 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search movies"
        />
        {/* <label
          htmlFor="search"
          className="absolute top-0 left-0 px-3 py-2 text-gray-500 pointer-events-none"
        >
          Search movies
        </label> */}
      </form>
    </div>
  );
}
