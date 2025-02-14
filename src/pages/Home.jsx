import Header from "../components/fragments/Header";
import CountryListPage from "../layouts/CountryListPage";
import DialogDefault from "../components/Modal";

const Home = () => {
  return (
    <div className="container mx-auto max-w-4xl p-6 bg-black border-x border-gray-500 mt-10">
      <Header />
      <CountryListPage />
      <DialogDefault />
    </div>
  );
};

export default Home;
