import { useEffect, useState } from "react";
import { getDataCountries } from "../services/country.service";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";

const CountryListPage = () => {
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");
  const [filteredCountry, setFilteredCountry] = useState([]);

  useEffect(() => {
    getDataCountries((data) => {
      setCountries(data);
      setFilteredCountry(data); // Misal Tampilan awal ingin datanya tampil
    });
  }, []);

  const handleSearch = (search) => {
    setSearchCountry(search);

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredCountry(filtered);
  };

  // Pantau perubahan state filteredCountry
  useEffect(() => {
    console.log("Filtered Data:", filteredCountry);
  }, [filteredCountry]);

  return (
    <div>
      <SearchBar handleSearch={handleSearch} />
      <CountryCard countries={filteredCountry} />
    </div>
  );
};

export default CountryListPage;
