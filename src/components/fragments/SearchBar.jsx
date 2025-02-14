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

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div className="my-4 flex flex-col ">
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Cari Negara / Benua"
          className="bg-white w-1/2 text-slate-800 px-4 py-2 capitalize rounded-md"
        />
        <Dropdown
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
        />
      </div>

      <button
        onClick={handleButtonClick}
        className="bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 w-[100px] rounded-lg py-2 px-2 my-4 mx-auto"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
