import { useState } from "react";

const Dropdown = ({ filterCategory, setFilterCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Filter");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeFilter = (category, title) => {
    setTitle(title);
    setIsOpen(false);
    setFilterCategory(category); // Ubah kategori filter
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => changeFilter("nama", "Nama Negara")}
            >
              Nama Negara
            </button>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => changeFilter("benua", "Benua")}
            >
              Benua
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
