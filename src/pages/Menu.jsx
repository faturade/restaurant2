import React, { useEffect, useState } from "react";
import MenuImage from "../assets/image/resto2.jpg";
import { fetchData } from "../api/api";

const url_gambar = "https://dt6rn7p5-3000.asse.devtunnels.ms";
const Menu = () => {
  const [listMenu, setListMenu] = useState([]);
  const [paramMenu, setParamMenu] = useState({
    kategori: "",
    nama_menu: "",
  });

  const getListMenu = async () => {
    const res = await fetchData("client/menu/list-menu", paramMenu);
    setListMenu(res.data.list);
  };

  useEffect(() => {
    getListMenu();
  }, []);

  return (
    <div>
      <div className="p-8 my-20 bg-white">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center">
            <img
              src={MenuImage}
              alt="Menu"
              className="w-full h-auto md:w-3/4"
              style={{ height: "auto" }}
            />
          </div>

          <div className="flex flex-col w-full md:w-1/2">
            <div className="mb-8">
              <h2
                className="font-bold mb-4"
                style={{ color: "#FF7517", fontSize: "40px" }}
              >
                Makanan
              </h2>
              {listMenu
                .filter((item) => item.kategori === "makanan")
                .map((item) => (
                  <div key={item.id_menu} className="flex items-center mb-4">
                    <img
                      src={`${url_gambar}${item.gambar}`}
                      alt="Dish"
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div className="flex justify-between items-center w-full">
                      <p className="text-lg font-semibold text-custom-orange">
                        {item.nama_menu}
                      </p>
                      <div className="flex-1 mx-4 border-b border-gray-300"></div>
                      <p className="text-gray-500">Rp {item.harga}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center p-8"
        style={{
          backgroundImage: `url(${MenuImage})`,
          height: "300px",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="p-8 my-20 bg-white">
        <div className="flex flex-col md:flex-row mb-8 w-full max-w-4xl mx-auto">
          <div className="flex flex-col w-full md:w-1/2 mb-8 md:mb-0">
            <h2
              className="font-bold mb-4"
              style={{ color: "#FF7517", fontSize: "40px" }}
            >
              Minuman
            </h2>
            {listMenu
              .filter((item) => item.kategori === "minuman")
              .map((item) => (
                <div key={item.id_menu} className="flex items-center mb-4">
                  <img
                    src={`${url_gambar}${item.gambar}`}
                    alt="Dish"
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className="flex justify-between items-center w-full">
                    <p className="text-lg font-semibold text-custom-orange">
                      {item.nama_menu}
                    </p>
                    <div className="flex-1 mx-4 border-b border-gray-300"></div>
                    <p className="text-gray-500">Rp {item.harga}</p>
                  </div>
                </div>
              ))}
          </div>
          <div className="md:w-1/2 w-full flex flex-col items-center">
            <img
              src={MenuImage}
              alt="Menu"
              className="w-full h-auto md:w-3/4"
              style={{ height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center p-8"
        style={{
          backgroundImage: `url(${MenuImage})`,
          height: "300px",
          backgroundPosition: "center",
        }}
      ></div>
    </div>
  );
};

export default Menu;
