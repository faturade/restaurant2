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
    <div className="flex flex-col -z-10">
      {/* Bagian atas */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 pt-20 bg-custom-orange">
        <div className="md:w-1/2 w-full mb-8 md:mb-8 px-8 relative">
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
            className="object-cover rounded-t-full md:absolute md:mt-20"
            style={{
              height: "400px",
              boxShadow: "0px 0px 15px 15px rgba(0, 0, 0, 0.2)",
            }}
          />
        </div>
      </div>

      <div className="">
        {/* Bagian Informasi */}
        <div
          className="p-12 flex justify-evenly md:flex-nowrap flex-wrap items-center gap-4 md:pt-32"
          style={{ background: "#F6F4F4" }}
        >
          <div className="flex items-center gap-4 w-full md:flex-grow">
            <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full w-10 h-10">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-white text-lg"
              />
            </div>
            <div className="flex-grow">
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
          <div className="flex items-center gap-4 w-full md:flex-grow">
            <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full w-10 h-10">
              <FontAwesomeIcon icon={faClock} className="text-white text-lg" />
            </div>
            <div className="flex-grow">
              <p className="text-md font-semibold" style={{ color: "#FF7517" }}>
                Open
              </p>
              <p className="text-gray-500 text-sm">
                Senin - Minggu 09:00 - 21:00
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-full md:flex-grow">
            <div className="bg-custom-orange p-3 flex items-center justify-center rounded-full w-10 h-10">
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
          className="flex justify-between items-center p-8 flex-wrap"
          style={{ background: "#F6F4F4" }}
        >
          <div className="md:w-1/2 w-full flex justify-center items-center relative rounded-t-full flex-grow">
            <img
              src={Resto}
              alt="Restaurant"
              style={{
                height: "350px",
                width: "320px",
              }}
            />
          </div>
          <div className="relative w-full md:w-1/2 mt-8">
            <h4 className="text-4xl font-bold text-custom-orange">Visi Kami</h4>
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
            <div className="md:flex md:justify-between gap-10 mb-4">
              <div className="">
                <h4 className="text-4xl font-bold text-custom-orange mb-2">
                  Misi Kami
                </h4>
                <p
                  className="text-dark"
                  style={{
                    position: "relative",
                    marginTop: "10px",
                    fontWeight: "200",
                  }}
                >
                  Memberikan Pelayanan Prima yang Ramah dan Berkesan
                </p>
              </div>
              <div className="">
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
            <div className="flex justify-start flex-col">
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
