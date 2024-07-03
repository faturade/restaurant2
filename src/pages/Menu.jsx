import React, { useEffect, useState } from "react";
import StyleGuild from "../components/StyleGuild";
import MenuImage from "../assets/image/resto2.jpg";
import MenuThumbnail from "../assets/image/Food2.jpg";
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
      {/* <StyleGuild activeButton="Our Menu" /> */}
      <div className="item-center p-8 my-20 bg-white">
        <div className="flex flex-col md:flex-row mb-8">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center">
            <img
              src={MenuImage}
              alt="Menu"
              className="w-1/2 h-auto"
              style={{
                height: "500px",
                width: "330px",
                marginLeft: "4rem",
              }}
            />
          </div>

          <div className="flex flex-col space-y-4">
            <div className="w-full flex flex-col space-y-4">
              <h2
                className="font-bold mb-4"
                style={{ color: "#FF7517", fontSize: "40px" }}
              >
                Makanan
              </h2>
              {listMenu
                .filter((item) => item.kategori === "makanan")
                .map((item) => (
                  <div key={item.id_menu} className="flex items-center">
                    <img
                      src={`${url_gambar}${item.gambar}`}
                      alt="Dish"
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div className="flex justify-between items-center w-full">
                      <p className="text-lg font-semibold text-custom-orange">
                        {item.nama_menu}
                      </p>
                      <p className="text-gray-500">
                        +-------------------------+
                      </p>
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

      <div className="flex justify-center p-8 my-20 bg-white">
        <div className="flex flex-col md:flex-row mb-8 w-full max-w-4xl">
          <div className="flex flex-col space-y-4 md:w-1/2">
            <div className="w-full flex flex-col space-y-4">
              <h2
                className="font-bold mb-4"
                style={{ color: "#FF7517", fontSize: "40px" }}
              >
                Minuman
              </h2>
              {listMenu
                .filter((item) => item.kategori === "minuman")
                .map((item) => (
                  <div key={item.id_menu} className="flex items-center">
                    <img
                      src={`${url_gambar}${item.gambar}`}
                      alt="Dish"
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div className="flex justify-between items-center w-full">
                      <p className="text-lg font-semibold text-custom-orange">
                        {item.nama_menu}
                      </p>
                      <p className="text-gray-500">
                        +-------------------------+
                      </p>
                      <p className="text-gray-500">Rp {item.harga}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="md:w-1/2 w-full mb-8 md:mb-0 flex flex-col items-center">
            <img
              src={MenuImage}
              alt="Menu"
              className="w-1/2 h-auto"
              style={{
                height: "500px",
                width: "330px",
              }}
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
