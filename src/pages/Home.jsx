import React from "react";
import Button from "../components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import Resto from "../../src/assets/image/resto2.jpg";
import MenuImage from "../../src/assets/image/Food1.jpg";
import MenuThumbnail from "../../src/assets/image/Food2.jpg";
import SignatureImage from "../assets/image/td.webp";
import Testimonial from "../components/Testimonial";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Bagian atas */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 pt-20 mt-auto bg-custom-orange">
        <div
          className="md:w-1/2 w-full mb-8 md:mb-8 px-8 relative"
          style={{ right: "-5rem", marginLeft: "3.5rem" }}
        >
          <h1 className="text-2xl text-white mb-4">Selamat Datang di</h1>
          <h1 className="text-4xl text-white mb-4">
            Restoran Ikan Mas Sinyarnyar
          </h1>
          <p
            className="text-white mb-6"
            style={{
              position: "relative",
              marginTop: "10px",
              fontWeight: "200",
            }}
          >
            Nikmati cita rasa autentik ikan mas segar yang menggugah selera.
            Hidangan lezat dengan bumbu khas Nusantara, suasana hangat, dan
            pelayanan ramah menanti Anda. Kunjungi kami dan rasakan kelezatan
            sejati!
          </p>
          {/* <Link to="/reservation">
            <Button text="Reservation" onClick={() => console.log('Reservation clicked')} />
          </Link> */}
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center relative">
          <img
            src={Resto}
            alt="Restaurant"
            className="object-cover rounded-t-full"
            style={{
              height: "400px",
              position: "absolute",
              marginLeft: "5rem",
              marginTop: "4rem",
              boxShadow: "0px 0px 15px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </div>

      <div className="mb-8">
        {/* Bagian Informasi */}
        <div
          className="p-12 flex justify-evenly items-center"
          style={{ paddingTop: "6rem", background: "#F6F4F4" }}
        >
          <div className="flex items-center space-x-2">
            <div
              className="bg-custom-orange p-3 flex items-center justify-center rounded-full"
              style={{ width: "3rem", height: "3rem" }}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-white text-lg"
              />
            </div>
            <div>
              <p className="text-md font-semibold" style={{ color: "#FF7517" }}>
                Lokasi
              </p>
              <p className="text-gray-500 text-sm">
                Jalan Lintas Sipirok-Tarutung, Desa Purbatua, Kecamatan Sipirok
              </p>
              <p className="text-gray-500 text-sm">
                Kabupaten Tapanuli Selatan, Sumatera Utara
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="bg-custom-orange p-3 flex items-center justify-center rounded-full"
              style={{ width: "3rem", height: "3rem" }}
            >
              <FontAwesomeIcon icon={faClock} className="text-white text-lg" />
            </div>
            <div>
              <p className="text-md font-semibold" style={{ color: "#FF7517" }}>
                Open
              </p>
              <p className="text-gray-500 text-sm">
                Senin - Minggu 09:00 - 21:00
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div
              className="bg-custom-orange p-3 flex items-center justify-center rounded-full"
              style={{ width: "3rem", height: "3rem" }}
            >
              <FontAwesomeIcon
                icon={faFilePen}
                className="text-white text-lg"
              />
            </div>
            <div>
              <p className="text-md font-semibold" style={{ color: "#FF7517" }}>
                Reservasi
              </p>
              <p className="text-gray-500 text-sm">0821-6772-9018</p>
            </div>
          </div>
        </div>

        {/* Bagian Cerita */}
        <div
          className="flex flex-col md:flex-row justify-between items-center p-8 mt-auto"
          style={{ background: "#F6F4F4" }}
        >
          <div className="md:w-1/2 w-full flex justify-center items-center relative">
            <img
              src={Resto}
              alt="Restaurant"
              style={{
                height: "350px",
                width: "320px",
                marginLeft: "5rem",
              }}
            />
          </div>
          <div className="hidden md:block h-96 w-px bg-gray-400 mx-4"></div>
          <div
            className="md:w-1/2 w-full mb-8 md:mb-8 px-8 relative"
            style={{ marginRight: "6rem" }}
          >
            <h4 className="text-4xl font-bold text-custom-orange mb-2">
              Visi Kami
            </h4>
            <p
              className="text-dark mb-6"
              style={{
                position: "relative",
                marginTop: "10px",
                fontWeight: "200",
              }}
            >
              Menyajikan Hidangan Berkualitas Tinggi dengan Bahan Segar dan
              Rempah Khas Batak
            </p>
            <div className="flex justify-between">
              <div className="flex flex-col space-y-4">
                <h4 className="text-4xl font-bold text-custom-orange mb-2">
                  Misi Kami
                </h4>
                <p
                  className="text-dark mb-6"
                  style={{
                    position: "relative",
                    marginTop: "10px",
                    fontWeight: "200",
                  }}
                >
                  Memberikan Pelayanan Prima yang Ramah dan Berkesan
                </p>
              </div>
              <div className="flex flex-col space-y-4">
                <h4 className="text-4xl font-bold text-custom-orange mb-2">
                  Komitmen Kami
                </h4>
                <p
                  className="text-dark mb-6"
                  style={{
                    position: "relative",
                    marginTop: "10px",
                    fontWeight: "200",
                  }}
                >
                  Melestarikan Budaya Kuliner Lokal melalui Hidangan dan Suasana
                  Tradisional
                </p>
              </div>
            </div>
            <div className="flex justify-start flex-col mt-8">
              <h2 className="mb-4 text-xl text-custom-orange">Signature</h2>
              <img src={SignatureImage} alt="Signature" className="h-12 w-24" />
            </div>
          </div>
        </div>
      </div>

      {/* <Testimonial /> */}
    </div>
  );
};

export default Home;
