import React, { useState, useEffect } from "react";
import image from "../assets/image/Food2.jpg";

const testimonials = [
  {
    name: "Ari Sandi",
    text: "Saya sangat menikmati hidangan autentik dari Restoran Ikan Mas Sinyarnyar. Rasa makanannya begitu lezat dan khas. Pasti akan kembali lagi!",
    image: "https://i.ytimg.com/vi/0-5cxLDK7NE/sddefault.jpg",
  },
  {
    name: "Putri Mulyani",
    text: "Saya sangat terkesan dengan desain interior yang nyaman dan pelayanan yang ramah di Restoran Ikan Mas Sinyarnyar. Pengalaman makan malam yang menyenangkan!",
    image: "https://marhatahata.com/wp-content/uploads/2019/12/WhatsApp-Image-2019-12-14-at-20.34.31-645x862.jpeg"
  },
  {
    name: "Sopiah",
    text: "Sebagai seorang manajer proyek, saya menghargai kecepatan dan keakuratan pelayanan di Restoran Ikan Mas Sinyarnyar. Makanan mereka selalu segar dan enak.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMkIiZiDGDsOKg2-UPt5X_J4LjGtUOB7kSyg&s"
  },
  {
    name: "Bunga Sari",
    text: "Kualitas makanan di Restoran Ikan Mas Sinyarnyar sungguh luar biasa. Saya merekomendasikan tempat ini kepada siapa pun yang mencari pengalaman kuliner yang istimewa.",
    image: "https://i.ytimg.com/vi/2eeTE9tdhq0/sddefault.jpg"
  },
  {
    name: "Mypa Dea",
    text: "Sebagai seorang pemasar, saya menilai Restoran Ikan Mas Sinyarnyar dengan sangat tinggi. Mereka tidak hanya menawarkan makanan yang lezat, tetapi juga atmosfer yang sangat menyenangkan.",
    image:
      "https://lensakini.com/wp-content/uploads/2021/03/Sinyar-Nyar-1-300x172.jpg",
  },
  {
    name: "Uma Ikki",
    text: "Saya seorang kreator konten dan selalu mencari tempat yang dapat memberi saya inspirasi. Restoran Ikan Mas Sinyarnyar tidak hanya memberikan makanan lezat tetapi juga suasana yang kreatif dan hangat.",
    image:
      "https://64.media.tumblr.com/702171a5016d67df3a9b06a1b6454326/tumblr_o5epg86UaK1r2xy31o1_500.jpg",
  },
];

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-500">
      <div className="max-w-6xl p-4 overflow-hidden">
        <h2
          className="mb-8 "
          style={{
            borderBottom: "1px solid #3E3939",
            borderTop: "1px solid #3E3939",
            display: "inline-block",
            fontSize: "20px",
            color: "#ffffff",
          }}
        >
          Testimoni
        </h2>
        <p className="text-white text-center mb-2 font-extralight">
          Lihat, apa kata pelanggan kami? 
        </p>
        <p className="text-white text-center mb-8 font-extralight">
        Testimoni dari pelanggan kami memberikan pandangan langsung tentang pengalaman mereka dengan produk atau layanan kami. Dari ulasan yang antusias hingga cerita penggunaan yang inspiratif, setiap testimoni memperkuat komitmen kami untuk menyediakan pengalaman terbaik bagi pelanggan. Mereka adalah cerminan dari kepuasan dan kepercayaan yang dibangun dengan hati-hati selama perjalanan kami
        </p>
        <div className="relative w-full max-w-6xl p-4 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-1/3 flex-shrink-0 p-4">
                <div className="flex flex-col items-center bg-black p-6 shadow-lg h-full">
                  <img
                    src={testimonial.image}
                    alt="Foto Profil"
                    className="rounded-full w-24 h-24 mb-4 object-cover"
                  />
                  <h4 className="text-white text-lg mb-2">
                    {testimonial.name}
                  </h4>
                  <p className="text-white text-sm text-center">
                    {testimonial.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
