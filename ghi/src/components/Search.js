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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative flex items-center p-8">
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleSearchChange}
          className="w-full py-2 px-3 leading-5 placeholder-gray-500 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Search Movies by Title"
        />
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-r-md shadow-sm text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 3a5 5 0 017.57 6.43l3.85 3.84a1 1 0 11-1.42 1.42l-3.84-3.85A5 5 0 118 3zm0 2a3 3 0 100 6 3 3 0 000-6z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>
    </div>
  );
}
