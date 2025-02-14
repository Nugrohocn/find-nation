const Header = () => {
  return (
    <div className="container mt-10 justify-center items-center mx-auto ">
      <h1 className="text-4xl font-bold my-4 text-center">
        Hai, Welcome to FindNation <span className="">👋</span>
      </h1>
      <p className="text-center max-w-xl mx-auto ">
        Menampilkan informasi lengkap tentang berbagai negara di dunia.
        Menggunakan Rest Countries API untuk mengambil data negara, seperti
        nama, bendera, ibu kota, mata uang, bahasa yang digunakan, dan benua.
      </p>
    </div>
  );
};

export default Header;
