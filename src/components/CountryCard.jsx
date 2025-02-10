const CountryCard = ({ countries }) => {
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
    <>
      {countries.length > 0 ? (
        countries.map((country, index) => {
          const { name, symbol } = getCurrency(country);

          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-md p-6 my-4 w-full max-w-xl mx-auto bg-dark"
            >
              <h1 className="text-2xl font-bold text-center mb-4">
                {country.name.common}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
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
                  <h2 className="text-lg font-semibold">
                    Bahasa:{" "}
                    <span className="font-normal">{getLanguage(country)}</span>
                  </h2>
                  <h2 className="text-lg font-semibold">
                    Benua:{" "}
                    <span className="font-normal">{country.continents}</span>
                  </h2>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p className="flex justify-center mt-10">
          Data negara yang kamu cari tidak ditemukan 😢
        </p>
      )}
    </>
  );
};

export default CountryCard;
