import React, { useState } from "react";
import Image from "../assets/image/resto2.jpg";
import StyleGuild from "../components/StyleGuild";

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    tgl_kunjungan: "",
    time: "",
    jumlah_orang: "",
    keterangan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        width: "100%",
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // You can change this color and opacity
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      ></div>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto p-6 border shadow-lg bg-white"
        style={{
          width: "600px",
          height: "370px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div className="text-center mb-8">
          <p style={{ fontSize: "30px", color: "#FF7517" }}>
            Book Your Table Now
          </p>
        </div>

        <div className="flex mb-6">
          <div className="mr-2 w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nama"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ width: "220px", color: "#FF7517" }}
            />
          </div>
          <div className="ml-2 w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ width: "220px", color: "#FF7517" }}
            />
          </div>
        </div>
        <div className="flex mb-6">
          <div className="mr-2 w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nomor Hp"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ width: "220px", color: "#FF7517" }}
            />
          </div>
          <div className="ml-2 w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Keterangan"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ width: "220px", color: "#FF7517" }}
            />
          </div>
        </div>
        <div className="flex mb-2">
          <div className="mr-1 w-1/2">
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-2 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            />
          </div>
          <div className="ml-1 w-1/2">
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="mt-2 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            />
          </div>
          <div className="ml-1 w-1/2">
            <input
              type="number"
              id="numberOfGuests"
              name="numberOfGuests"
              placeholder="Jumlah Orang"
              value={formData.numberOfGuests}
              onChange={handleChange}
              className="mt-2 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-2 py-2 px-4 text-white font-semibold focus:outline-none focus:ring-0 focus:border-none"
          style={{
            background: "#FF7517",
          }}
        >
          Booking
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
