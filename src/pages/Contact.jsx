import React from "react";
import { Link } from "react-router-dom";
import StyleGuild from "../components/StyleGuild";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div>
      {/* <StyleGuild activeButton="Contact Us" /> */}
      <div className="container mx-auto p-6 my-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2 p-4 bg-[#FFF8F5] mt-6">
            <p className="text-2xl font-bold text-custom-orange mb-2">
              Informasi Kontak
            </p>
            <p className="mb-4">
              Jika Anda memiliki pertanyaan atau membutuhkan bantuan, jangan
              ragu untuk menghubungi kami. Kami siap membantu Anda.
            </p>
            <div className="flex items-center space-x-2 mb-4">
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
                <p
                  className="text-md font-semibold"
                  style={{ color: "#FF7517" }}
                >
                  Lokasi
                </p>
                <p className="text-gray-500 text-sm">
                  Jalan Lintas Sipirok-Tarutung, Desa Purbatua, Kecamatan
                  Sipirok, Kabupaten Tapanuli Selatan, Sumatera Utara
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <div
                className="bg-custom-orange p-3 flex items-center justify-center rounded-full"
                style={{ width: "3rem", height: "3rem" }}
              >
                <FontAwesomeIcon
                  icon={faClock}
                  className="text-white text-lg"
                />
              </div>
              <div>
                <p
                  className="text-md font-semibold"
                  style={{ color: "#FF7517" }}
                >
                  Jam Operasional
                </p>
                <p className="text-gray-500 text-sm">
                  Senin - Minggu 9:00 AM - 9:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-4">
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
                <p
                  className="text-md font-semibold"
                  style={{ color: "#FF7517" }}
                >
                  Reservasi
                </p>
                <p className="text-gray-500 text-sm">0821-6772-9018</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link
                to="/twitter"
                className="bg-gray-400 rounded-full flex items-center justify-center"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <FontAwesomeIcon
                  icon={faTwitter}
                  className="text-custom-orange text-lg"
                />
              </Link>
              <Link
                to="/whatsapp"
                className="bg-gray-400 rounded-full flex items-center justify-center"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className="text-custom-orange text-lg"
                />
              </Link>
              <Link
                to="/facebook"
                className="bg-gray-400 rounded-full flex items-center justify-center"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-custom-orange text-lg"
                />
              </Link>
              <Link
                to="/instagram"
                className="bg-gray-400 rounded-full flex items-center justify-center"
                style={{ width: "2.5rem", height: "2.5rem" }}
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-custom-orange text-lg"
                />
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 p-4">
            {/* <p className="mb-2 text-custom-orange" style={{ borderBottom: '1px solid #3E3939', borderTop: '1px solid #3E3939', display: 'inline-block', fontSize: '15px' }}>Hubungi Kami</p> */}
            <p className="mb-4 text-2xl text-custom-orange">Ada pertanyaan ?</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Nama"
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                placeholder="Email"
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Keterangan"
              />
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="tel"
                placeholder="Nomor HP"
              />
              <textarea
                className="w-full md:col-span-2 p-2 border border-gray-300 rounded h-32"
                placeholder="Pesan"
              ></textarea>
            </form>
            <Link to="" className="text-center">
              <button
                className="border border-black w-40 h-10 text-custom-orange py-2 px-4 mt-4"
                onClick={() => console.log("Subscribe clicked")}
              >
                Kirim
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
