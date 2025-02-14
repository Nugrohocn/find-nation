import { useState } from "react";
import Modal from "./Modal";
import Map from "./Map";

const CountryCard = ({ countries }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const getCurrency = (country) => {
    if (!country.currencies) return { name: "Tidak ada", symbol: "" };

    const currencyKey = Object.keys(country.currencies)[0];
    return {
      name: country.currencies[currencyKey]?.name,
      symbol: country.currencies[currencyKey]?.symbol,
    };
  };

  const getLanguage = (country) => {
    if (!country.languages) return "Tidak Ada";

    const languageKey = Object.keys(country.languages)[0];
    return country.languages[languageKey];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {countries.length > 0 ? (
        countries.map((country, index) => {
          const { name, symbol } = getCurrency(country);

          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-md p-6 bg-black cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => {
                setIsModalOpen(true);
                setSelectedItem(country);
              }}
            >
              <h1 className="text-2xl font-bold text-center mb-4">
                {country.name.common}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="flex justify-center">
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    className="w-40 h-24 object-cover rounded-lg shadow-md border"
                  />
                </div>

                {/* Informasi Negara */}
                <div className="space-y-2">
                  <h2 className="text-lg font-bold">
                    Ibukota:{" "}
                    <span className="font-normal">{country.capital}</span>
                  </h2>
                  <h2 className="text-lg font-bold">
                    Mata Uang:{" "}
                    <span className="font-normal text-md">{`${name} (${symbol}) `}</span>
                  </h2>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="flex justify-center mt-10 col-span-2 text-center">
          Data negara yang kamu cari tidak ditemukan 😢
        </p>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        {selectedItem && (
          <div className="text-white p-4 md:p-6 rounded-lg w-full max-w-screen-md mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6">
              {selectedItem.name.common}
            </h1>

            {/* Peta */}
            <div className="mb-4 md:mb-6 h-48 md:h-64">
              <Map
                latitude={selectedItem.capitalInfo.latlng[0]}
                longitude={selectedItem.capitalInfo.latlng[1]}
              />
            </div>

            {/* Informasi Negara */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2 md:space-y-3">
                <p className="text-base md:text-lg">
                  <strong>Ibukota:</strong> {selectedItem.capital}
                </p>
                <p className="text-base md:text-lg">
                  <strong>Mata Uang:</strong>{" "}
                  {`${getCurrency(selectedItem).name} (${
                    getCurrency(selectedItem).symbol
                  })`}
                </p>
                <p className="text-base md:text-lg">
                  <strong>Bahasa:</strong> {getLanguage(selectedItem)}
                </p>
              </div>
              <div className="space-y-2 md:space-y-3">
                <p className="text-base md:text-lg">
                  <strong>Benua:</strong> {selectedItem.continents}
                </p>
                <p className="text-base md:text-lg">
                  <strong>Populasi:</strong>{" "}
                  {selectedItem.population.toLocaleString()} Jiwa
                </p>
                <p className="text-base md:text-lg">
                  <strong>Region:</strong> {selectedItem.region}
                </p>
                <p className="text-base md:text-lg">
                  <strong>Subregion:</strong> {selectedItem.subregion}
                </p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default CountryCard;
