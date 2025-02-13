import { useEffect, useState } from "react";
import { getDataCountries } from "../services/country.service";
import SearchBar from "../components/fragments/SearchBar";
import CountryCard from "../components/CountryCard";

const CountryListPage = ({ nama }) => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [filterCategory, setFilterCategory] = useState("nama");

  useEffect(() => {
    getDataCountries((data) => {
      setCountries(data);
      setFilteredCountry(data); // Misal Tampilan awal ingin datanya tampil
    });
  }, []);

  const handleSearch = (search) => {
    setSearchCountry(search);

    const filtered = countries.filter((country) => {
      if (filterCategory === "nama") {
        return country.name.common.toLowerCase().includes(search.toLowerCase());
      } else if (filterCategory === "benua") {
        return country.continents[0]
          .toLowerCase()
          .includes(search.toLowerCase());
      }

      return false;
    });

    setFilteredCountry(filtered);
  };

  return (
    <div>
      <SearchBar
        handleSearch={handleSearch}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <CountryCard countries={filteredCountry} />
    </div>
  );
};

export default CountryListPage;
