import { useState } from "react";

const SearchBar = ({ searchCountry, handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleButtonClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="my-4 flex flex-col">
      <label htmlFor="" className="my-2">
        Cari negara
      </label>
      <input
        type="text"
        value={searchCountry}
        onChange={handleInputChange}
        className="bg-white w-1/2 text-slate-800 px-4 py-2 capitalize rounded-md"
      />
      <button
        type="submit"
        onClick={handleButtonClick}
        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 w-1/6 rounded-lg py-2 my-4 "
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
