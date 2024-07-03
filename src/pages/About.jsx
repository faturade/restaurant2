import React from "react";
import aboutImage from "../assets/image/resto2.jpg";
import cardImage from "../assets/image/Food2.jpg";
import Button from "../components/Button";
import StyleGuild from "../components/StyleGuild";
import TestimonialSlider from "../components/Testimonial";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMortarPestle,
  faCarrot,
  faSmile,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      {/* <StyleGuild activeButton="About" /> */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 min-h-screen p-6">
        <div className="content md:w-1/2 p-8" style={{ marginLeft: "4rem" }}>
          <h4
            className="mb-4"
            style={{
              borderBottom: "1px solid #3E3939",
              borderTop: "1px solid #3E3939",
              display: "inline-block",
              fontSize: "20px",
              color: "#FF7517",
            }}
          >
            About Us
          </h4>
          <h1
            style={{
              fontSize: "2rem",
              color: "#FF7517",
              fontStyle: "italic",
              fontWeight: "600",
            }}
          >
            Kualitas & Tradisi
          </h1>
          <p className="mb-2">
            Selamat datang di Restoran Ikan Mas Sinyarnyar, di mana kami
            berkomitmen menyajikan pengalaman bersantap yang luar biasa melalui
            kualitas dan tradisi. Kami menggunakan bahan-bahan segar lokal dan
            rempah-rempah khas Batak untuk menciptakan hidangan yang autentik
            dan inovatif. Di Restoran Ikan Mas Sinyarnyar, kami percaya bahwa
            makanan enak dimulai dari bahan berkualitas. Chef kami menggabungkan
            teknik tradisional dengan praktik kuliner modern untuk menciptakan
            menu yang beragam dan lezat. Kami berusaha menyediakan suasana yang
            hangat dan ramah, serta layanan yang prima untuk memastikan
            pengalaman bersantap Anda berkesan. Bergabunglah dengan kami dan
            nikmati cita rasa sejati dari kualitas dan tradisi.
          </p>
          {/* <Button text="Learn More" onClick={handleButtonClick} /> */}
        </div>
        <div className="flex flex-1 justify-center p-6 relative md:ml-4">
          {" "}
          {/* Add margin-left for space between text and image */}
          <img
            src={aboutImage}
            alt="About Us"
            style={{
              width: "330px",
              height: "400px",
              borderTopRightRadius: "30%",
            }}
          />{" "}
          {/* Adjusted size */}
          <div
            className="absolute transform translate-x-10 translate-y-10 bg-white p-4 shadow-lg w-3/4 max-w-xs text-center flex flex-col items-center"
            style={{ bottom: "-2rem", right: "20rem" }}
          >
            {" "}
            {/* Adjusted bottom and right */}
            <img
              src={cardImage}
              alt="Card"
              className="w-16 h-16 rounded-full mb-4"
            />
            <h2 className="text-xl font-bold mb-2" style={{ color: "#FF7517" }}>
              Misi
            </h2>
            <p>
              Menghadirkan Cita Rasa Autentik Tapanuli Selatan di Setiap Suapan
            </p>
          </div>
        </div>
      </div>

      <div
        className="bg-cover bg-center w-full max-h-96 p-8"
        style={{
          backgroundImage: `url(${aboutImage})`,
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <div className="flex justify-around items-center p-4">
          <div className="text-white mx-4 flex flex-col items-center border-r-2 border-white">
            <FontAwesomeIcon icon={faCarrot} className="text-4xl mb-2" />
            <h4 className="text-xl font-bold mb-2">Bahan Segar</h4>
            <p className="text-center">
              Kami hanya menggunakan bahan-bahan segar yang dipilih dengan
              cermat untuk menjamin kualitas setiap hidangan yang kami sajikan.
            </p>
          </div>
          <div className="text-white mx-4 flex flex-col items-center border-r-2 border-white">
            <FontAwesomeIcon icon={faMortarPestle} className="text-4xl mb-2" />
            <h4 className="text-xl font-bold mb-2">Rempah Tradisional</h4>
            <p className="text-center">
              Kami menggunakan rempah-rempah khas Batak yang autentik untuk
              menciptakan cita rasa yang kaya dan unik di setiap hidangan.
            </p>
          </div>
          <div className="text-white mx-4 flex flex-col items-center border-r-2 border-white">
            <FontAwesomeIcon icon={faSmile} className="text-4xl mb-2" />
            <h4 className="text-xl font-bold mb-2">Pelayanan Ramah</h4>
            <p className="text-center">
              Tim kami berkomitmen untuk memberikan pelayanan yang ramah dan
              profesional, memastikan setiap kunjungan Anda menjadi pengalaman
              yang menyenangkan.
            </p>
          </div>
          <div className="text-white mx-4 flex flex-col items-center">
            <FontAwesomeIcon icon={faHome} className="text-4xl mb-2" />
            <h4 className="text-xl font-bold mb-2">Suasana Nyaman</h4>
            <p className="text-center">
              Nikmati suasana nyaman dan hangat yang kami tawarkan, dirancang
              untuk membuat Anda merasa seperti di rumah sendiri.
            </p>
          </div>
        </div>
      </div>

      <TestimonialSlider />

      <div class="flex flex-col items-center p-8 my-20">
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold">Galeri</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="flex justify-center items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-14_xOcATTOthwDaCHXnsG1iVnefm_U4RyQ&s"
              alt="Dish 1"
              class="m-1 h-80 md:h-96 object-cover rounded-lg"
            />
          </div>
          <div class="flex justify-center items-center">
            <img
              src="https://cdn.idntimes.com/content-images/community/2020/12/fromandroid-f62c36b7cd9b3fd1905595cfd161869b.jpg"
              alt="Dish 5"
              class="m-1 h-80 md:h-96 object-cover rounded-lg"
            />
          </div>
          <div class="flex justify-center items-center">
            <img
              src="https://seringjalan.com/wp-content/uploads/2020/04/Ikan-Bakar-Sinyarnyar.jpg"
              alt="Dish 2"
              class="m-1 h-80 md:h-96 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
