import { useState } from "react";
import Dropdown from "./Dropdown";

const SearchBar = ({ handleSearch, filterCategory, setFilterCategory }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleButtonClick = () => {
    handleSearch(searchTerm);
  };

  return (
    <div className="my-4 flex flex-col">
      <label className="my-2">Cari negara</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          className="bg-white w-1/2 text-slate-800 px-4 py-2 capitalize rounded-md"
        />
        <Dropdown
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
      </div>

      <button
        onClick={handleButtonClick}
        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 w-1/6 rounded-lg py-2 px-2 my-4"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
