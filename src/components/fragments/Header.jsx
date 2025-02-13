const Header = () => {
  return (
    <div className="container mt-10">
      <h1 className="text-2xl font-bold my-4">
        Hai, Welcome to FindNation <span className="">👋</span>
      </h1>
      <p>
        FindNation adalah Single Page Application (SPA) berbasis ReactJS yang
        menampilkan informasi lengkap tentang berbagai negara di dunia. Aplikasi
        ini menggunakan Rest Countries API untuk mengambil data negara, seperti
        nama, bendera, ibu kota, mata uang, bahasa yang digunakan, dan benua.
      </p>
    </div>
  );
};

export default Header;
