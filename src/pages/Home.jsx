import CountryCard from "../components/CountryCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CountryListPage from "../fragments/CountryListPage";

const Home = () => {
  return (
    <div className="container mx-auto max-w-4xl p-6 bg-black border-x border-gray-500 mt-10">
      <Header />
      <CountryListPage />
    </div>
  );
};

export default Home;
