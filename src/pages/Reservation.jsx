import React, { useEffect, useState } from "react";
import Image from "../assets/image/resto2.jpg";
import { showErrorAlert, showSuccessAlert } from "../utils/alertutils";
import dayjs from "dayjs";
import AsyncSelect from "react-select/async";
import { currencyFormat } from "../utils/currency";
import Swal from "sweetalert2";
import CountdownTimer from "../components/CountdownTimer";
import Modal from "../components/Modal";
import Loading from "../components/Loading";
import QRCode from "react-qr-code";

let url = `https://dt6rn7p5-3000.asse.devtunnels.ms/`;
const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nomor_hp: "",
    tgl_kunjungan: "",
    jumlah_orang: "",
    keterangan: "",
    email: "",
    jam: "",
    ada_menu: false,
  });

  const [showMenu, setShowMenu] = useState(false);
  const [idKunjungan, setIdKunjungan] = useState(null);
  const [idPenjualan, setIdPenjualan] = useState(null);
  const [idPenjualanMenu, setIdPenjualanMenu] = useState(null);
  const [loadingMenu, setLoadingMenu] = useState(false);
  const [listMenu, setListMenu] = useState([
    {
      id_menu: "",
      qty: 0,
      harga: 0,
    },
  ]);
  const [listMetodePembayaran, setListMetodePembayaran] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [defaultOptions, setDefaultOptions] = useState([]);
  const [selectedMethodPembayaran, setSelectedMethodPembayaran] = useState("");
  const [totalMenu, setTotalMenu] = useState(0);
  const [virtualAccount, setVirtualAccount] = useState(null);
  const [detailPayment, setDetailPayment] = useState(null);
  const [showRinciPembayaran, setShowRinciPembayaran] = useState(false);
  const [loadingBackdrop, setLoadingBackdrop] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const loadOptions = async (inputValue, callback) => {
    try {
      const res = await fetch(
        `${url}client/menu/resource${
          inputValue ? "?search_key=" + inputValue : ""
        }`
      );
      const data = await res.json();
      const options = data.data.list.map((item) => ({
        value: item.id,
        label: item.label,
        harga: item.harga,
      }));
      callback(options);
    } catch (err) {
      callback([]);
    }
  };

  const handleAddMenu = () => {
    setListMenu((prevListMenu) => [
      ...prevListMenu,
      {
        id_menu: "",
        qty: 0,
        harga: 0,
      },
    ]);
  };

  const simpanMenu = async () => {
    setLoadingMenu(true);
    try {
      const res = await fetch(`${url}client/pelanggan/tambah-menu`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id_penjualan: idPenjualan || "",
          menu: listMenu.map((menu) => ({
            id_menu: menu.id_menu,
            qty: menu.qty,
          })),
        }),
      });
      const data = await res.json();
      if (!(data.meta_data?.status <= 400)) {
        throw new Error(data.meta_data?.message);
      }
      const total = listMenu.reduce((acc, curr) => {
        return acc + curr.qty * curr.harga;
      }, 0);
      setTotalMenu(total);
      setIdPenjualanMenu(data.data);
      showSuccessAlert("Berhasil", data.meta_data.message);
    } catch (err) {
      showErrorAlert("Gagal", err.message);
    } finally {
      setLoadingMenu(false);
    }
  };

  const handleSimpanPesanan = () => {
    Swal.fire({
      title: "Peringatan!",
      text: "Apakah Anda yakin ingin menyimpan perubahan pada menu ini? Harap periksa kembali untuk memastikan semuanya sudah benar sebelum melanjutkan",
      icon: "warning",
      showDenyButton: true,
      denyButtonText: "Tidak",
      confirmButtonText: "Iya",
    }).then((res) => {
      if (res.isConfirmed) {
        simpanMenu();
      }
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const combinedData = {
      ...formData,
      tgl_kunjungan: dayjs(e.tgl_kunjungan).format("YYYY-MM-DD HH:mm"),
    };

    try {
      const response = await fetch(`${url}client/pelanggan/reservasi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(combinedData),
      });

      const data = await response.json();
      if (!(data.meta_data.status <= 400)) {
        throw new Error(data.meta_data.message);
      }
      setIdKunjungan(data.data.id_kunjungan);
      setIdPenjualan(data.data.id_penjualan);

      if (!formData.ada_menu) {
        showSuccessAlert("Berhasil", data.meta_data.message);
        setFormData({
          nama: "",
          nomor_hp: "",
          tgl_kunjungan: "",
          jumlah_orang: "",
          keterangan: "",
          ada_menu: false,
        });
      } else {
        setShowMenu(true);
      }

      // console.log("Reservation submitted successfully:", data);

      // setPopupMessage({
      //   status: response.status,
      //   message: "Reservasi berhasil disubmit!",
      // });
    } catch (error) {
      showErrorAlert("Gagal", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDefaultOptions = async () => {
    try {
      const response = await fetch(`${url}client/menu/resource`);
      const data = await response.json();
      return data.data.list.map((item) => ({
        value: item.id,
        label: item.label,
        harga: item.harga,
      }));
    } catch (error) {
      console.error("Error fetching default options:", error);
      return [];
    }
  };

  const fetchMetodePembayaran = async () => {
    try {
      const res = await fetch(
        `${url}client/pelanggan/metode-pembayaran/resource`
      );
      const data = await res.json();
      if (!(data.meta_data.status <= 400)) {
        throw new Error(data.meta_data.message);
      }
      return data.data.list;
    } catch (err) {
      showErrorAlert("Error", err.message);
    }
  };

  const fetchBayarBooking = async () => {
    setIsLoading(true);
    const bayarNominal =
      totalMenu + selectedMethodPembayaran.biaya_admin + (totalMenu * 12) / 100;

    const requestBody = {
      id_kunjungan: idKunjungan,
      bayar_nominal: bayarNominal,
      id_metode_pembayaran: selectedMethodPembayaran.id,
    };
    try {
      const res = await fetch(`${url}client/pelanggan/bayar-reservasi`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      const data = await res.json();
      if (!(data.meta_data.status <= 400)) {
        throw new Error(data.meta_data.message);
      }
      if (selectedMethodPembayaran?.jenis !== "TUNAI") {
        const payment = Object.assign({
          id_payment: data.data.xendit_response.id,
          virtual_account:
            data.data.xendit_response.paymentMethod.virtualAccount
              .channelProperties.virtualAccountNumber || null,
          qr_code:
            data.data.xendit_response.paymentMethod.qrCode.channelProperties
              .qrString || null,
          expired:
            selectedMethodPembayaran?.jenis === "QR"
              ? data.data.xendit_response.paymentMethod.qrCode.channelProperties
                  .expiresAt
              : data.data.xendit_response.paymentMethod.virtualAccount
                  .channelProperties.expiresAt,
          channel:
            selectedMethodPembayaran?.jenis === "QR"
              ? data.data.xendit_response.paymentMethod.qrCode.channelCode
              : data.data.xendit_response.paymentMethod.virtualAccount
                  .channelCode,
          amount: data.data.xendit_response.amount,
          type: data.xendit_response.paymentMethod.type,
        });
        localStorage.setItem("payment", JSON.stringify(payment));
        setDetailPayment(payment);
      }
      showSuccessAlert("Berhasil", data.message);
    } catch (err) {
      showErrorAlert("Error", err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchCekStatus = async () => {
    setLoadingBackdrop(true);
    try {
      const res = await fetch(
        `${url}client/pelanggan/cek-status-pembayaran?id_pr=${detailPayment.id_payment}`
      );
      const data = await res.json();
      if (data.data.status === "PENDING") {
        const nowDate = new Date();
        const expDate = new Date(detailPayment?.expired);
        if (expDate > nowDate) {
          showErrorAlert(
            "Peringatan",
            "Pembayaran anda belum dilunasi. Mohon untuk segera dilunasi"
          );
        } else {
          showErrorAlert("Peringatan", "Pembayaran anda telah expired.");
          localStorage.removeItem("payment");
          setDetailPayment(null);
        }
        if (detailPayment.type === "VIRTUAL_ACCOUNT") {
          setShowRinciPembayaran(true);
        } else if (detailPayment.type === "QR_CODE") setShowQr(true);
      } else {
        setShowRinciPembayaran(false);
        setShowQr(false);
        Swal.fire({
          icon: "success",
          title: "Berhasil",
          text: "Pembayaran anda telah selesai. Terima kasih telah berkunjung",
        }).then(() => {
          localStorage.removeItem("payment");
          setDetailPayment(null);
          downloadBuktiBooking("bukti_booking.png");
        });
      }
    } catch (err) {
      showErrorAlert("Error", err.message);
    } finally {
      set;
    }
  };

  const downloadBuktiBooking = async (filename) => {
    setLoadingBackdrop(true);
    try {
      const res = await fetch(
        `${url}client/pelanggan/cetak-struk?id_kunjungan=${idKunjungan}`
      );
      const blob = await res.json();
      const downloadUrl = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = downloadUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
    } catch (err) {
      showErrorAlert("Error", err.message);
    }
  };

  useEffect(() => {
    const getDefaultOptions = async () => {
      const options = await fetchDefaultOptions();
      setDefaultOptions(options);
    };

    const getMetodePembayaran = async () => {
      const metodePembayaran = await fetchMetodePembayaran();
      setListMetodePembayaran(metodePembayaran);
    };

    const cekStatus = () => {
      const payment = JSON.parse(localStorage.getItem("payment"));
      if (payment) {
        setDetailPayment(payment);
        fetchCekStatus();
      }
    };

    getDefaultOptions();
    getMetodePembayaran();
    cekStatus();
  }, []);

  // useEffect(() => {
  //   if (detailPayment) {
  //     switch (detailPayment.type) {
  //       case "VIRTUAL_ACCOUNT":
  //         setShowRinciPembayaran(true);
  //         break;
  //       case "QR_CODE":
  //         setShowQr(tru);
  //         break;
  //       default:
  //     }
  //   }
  // }, [detailPayment]);

  return (
    <>
      {loadingBackdrop && <Loading color="orange" />}
      <Modal
        isOpen={showQr}
        times={false}
        showFooter={false}
        title={"Pembayaran QR Code"}
      >
        <p>Pemesanan Anda</p>
        <p className="font-bold mb-4">Booking Kunjungan</p>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p>Merchant</p>
            <p>: {detailPayment?.channel}</p>
          </div>
          <div className="flex justify-between">
            <p>Nominal</p>
            <p className="w-[40%]">: {currencyFormat(detailPayment?.amount)}</p>
          </div>
          <div className="flex justify-between">
            <p>Tanggal Kadaluarsa</p>
            <p className="w-[40%]">
              : {dayjs(detailPayment?.expired).format("DD MMM YYYY HH:mm")}
            </p>
          </div>
        </div>
        <div className="py-8 flex justify-center items-center">
          <div className="border-2 border-orange-500 p-8 rounded-md">
            <QRCode value={detailPayment?.qr_code} size={150} />
            <button className="bg-orange-500 py-1 px-4 rounded-sm w-full text-white mt-4 hover:shadow-md">
              Cek Pembayaran
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={showRinciPembayaran}
        times={false}
        showFooter={false}
        title={"Rincian Pembayaran"}
      >
        <p className="mb-4">Detail pembayaran anda adalah demikian :</p>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p>bank</p>
            <p className="w-[40%]">: {detailPayment?.channel}</p>
          </div>
          <div className="flex justify-between">
            <p>No. Virtual Account</p>
            <p className="w-[40%]">: {detailPayment?.virtual_account}</p>
          </div>
          <div className="flex justify-between">
            <p>Nominal</p>
            <p className="w-[40%]">: {currencyFormat(detailPayment?.amount)}</p>
          </div>
          <div className="flex justify-between">
            <p>Tanggal Kadaluarsa</p>
            <p className="w-[40%]">
              : {dayjs(detailPayment?.expired).format("DD MMM YYYY HH:mm")}
            </p>
          </div>
          <div className="flex justify-end">
            <button
              className="w-28 bg-orange-500 rounded-sm hover:shadow-md text-white text-sm px-2 py-1"
              onClick={() => fetchCekStatus()}
            >
              {isLoading ? (
                <svg
                  class="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : (
                "Cek Pembayaran"
              )}
            </button>
          </div>
        </div>
      </Modal>
      <div
        className="relative"
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
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
          }}
        ></div>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="max-w-2xl mx-auto p-6 border shadow-lg bg-white h-[90%] overflow-auto"
          style={{
            width: "1500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div className="text-center mb-8">
            <p style={{ fontSize: "30px", color: "#FF7517" }}>
              Ayo booking sekarang !!
            </p>
          </div>

          <div className="mb-4 w-full md:flex md:justify-between">
            <input
              type="text"
              disabled={idPenjualan}
              id="nama"
              name="nama"
              placeholder="Nama"
              value={formData.nama}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            />
            <input
              type="text"
              id="nomor_hp"
              disabled={idPenjualan}
              name="nomor_hp"
              placeholder="Nomor HP"
              value={formData.nomor_hp}
              onChange={handleChange}
              className="mt-4 md:mt-1 md:ml-4 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            />
          </div>

          <div className="mb-4 w-full md:flex md:justify-between">
            <input
              type="date"
              id="tgl_kunjungan"
              name="tgl_kunjungan"
              disabled={idPenjualan}
              value={formData.tgl_kunjungan}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            />
            <input
              type="time"
              id="jam"
              name="jam"
              disabled={idPenjualan}
              value={formData.jam}
              onChange={handleChange}
              className="mt-4 md:mt-1 md:ml-4 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            />
          </div>

          <div className="mb-4 w-full md:flex md:justify-between">
            <input
              type="number"
              id="jumlah_orang"
              name="jumlah_orang"
              disabled={idPenjualan}
              placeholder="Jumlah Orang"
              value={formData.jumlah_orang}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            />
            <input
              id="email"
              disabled={idPenjualan}
              name="email"
              rows="3"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-4 md:mt-1 md:ml-4 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            ></input>
          </div>

          <div className="mb-4 w-full">
            <textarea
              id="keterangan"
              disabled={idPenjualan}
              name="keterangan"
              rows="3"
              placeholder="Keterangan (opsional)"
              value={formData.keterangan}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            ></textarea>
          </div>

          <div className="mb-4 w-full">
            <label htmlFor="ada_menu" className="flex items-center">
              <input
                type="checkbox"
                disabled={idPenjualan}
                id="ada_menu"
                name="ada_menu"
                checked={formData.ada_menu}
                onChange={handleChange}
                className="mr-2"
              />
              <span>Memesan Menu</span>
            </label>
          </div>

          <button
            type="submit"
            disabled={idPenjualan || isLoading}
            className="p-1 w-28 rounded-sm flex justify-center text-white font-semibold focus:outline-none focus:ring-0 focus:border-none bg-orange-500 disabled:bg-orange-300"
          >
            {isLoading ? (
              <svg
                class="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
            ) : (
              "Booking"
            )}
          </button>
          {showMenu && (
            <div className="w-full mt-4">
              <div className="flex justify-between mb-4 border-b pb-2">
                <h5>Pilihan Menu</h5>
                <div className="flex gap-2">
                  <button
                    disabled={idPenjualanMenu}
                    onClick={() => handleAddMenu()}
                    className="p-1 w-28 rounded-sm text-sm text-white disabled:bg-orange-300 bg-orange-500"
                    type="button"
                  >
                    Tambah
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4 mt-2 text-sm">
                <p className="flex-grow">Nama Menu</p>
                <p className="w-[10%]">Qty</p>
                <p className="w-[20%]">Harga</p>
                <p className="w-[20%]">Total Harga</p>
              </div>
              {listMenu.map((menu, key) => (
                <div className="flex items-center gap-4 mt-2" key={key}>
                  <AsyncSelect
                    disabled={idPenjualanMenu}
                    className="flex-grow p-1"
                    cacheOptions
                    defaultOptions={defaultOptions}
                    loadOptions={loadOptions}
                    menuPortalTarget={document.body}
                    styles={{
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                      placeholder: (base) => ({
                        ...base,
                        color: "#FF7517",
                      }),
                      singleValue: (base) => ({ ...base, color: "#FF7517" }),
                    }}
                    isMulti={false}
                    maxMenuHeight={200}
                    value={listMenu[key].id_menu?.value}
                    onChange={(e) =>
                      setListMenu((prevData) => {
                        const newData = [...prevData];
                        newData[key] = {
                          ...newData[key],
                          id_menu: e.value,
                          harga: e.harga,
                        };
                        return newData;
                      })
                    }
                  />
                  <div className="w-[10%]">
                    <input
                      disabled={idPenjualanMenu}
                      type="number"
                      id="qty-menu"
                      name="qty-menu"
                      placeholder="Qty"
                      className="w-full py-1 px-2 block border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange text-sm"
                      style={{ color: "#FF7517" }}
                      value={listMenu[key].qty}
                      onChange={(e) =>
                        setListMenu((prevData) => {
                          const newData = [...prevData];
                          newData[key] = {
                            ...newData[key],
                            qty: e.target.value,
                          };
                          return newData;
                        })
                      }
                    />
                  </div>
                  <div className="w-[20%] text-sm">
                    {currencyFormat(menu.harga)}
                  </div>
                  <div className="w-[20%] text-sm">
                    {currencyFormat(menu.harga * menu.qty)}
                  </div>
                </div>
              ))}
              <div className="flex justify-between items-center w-[93%] mt-2 text-sm me-auto">
                <p>Total Menu</p>
                <p>
                  {currencyFormat(
                    listMenu.reduce((acc, curr) => {
                      return acc + curr.qty * curr.harga;
                    }, 0)
                  )}
                </p>
              </div>

              <div className="w-full border-t mt-2 flex justify-between py-4 text-sm">
                <div></div>
                <div>
                  <button
                    type="button"
                    disabled={loadingMenu || idPenjualanMenu}
                    className="bg-orange-500 disabled:bg-orange-300 text-white p-1 w-28 rounded-sm hover:shadow-md"
                    onClick={() => handleSimpanPesanan()}
                  >
                    {loadingMenu ? (
                      <svg
                        class="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          class="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          class="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                      </svg>
                    ) : (
                      "Simpan Pesanan"
                    )}
                  </button>
                </div>
              </div>
              {idPenjualanMenu && (
                <div className="w-full rounded-md overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="w-full p-2 border border-orange-500 rounded-md">
                    <p>Virtual Account</p>
                    <div className="w-full flex gap-2 mt-2 flex-wrap">
                      {listMetodePembayaran
                        ?.filter((val) => val.jenis === "VA")
                        .map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedMethodPembayaran(item)}
                            className={`h-12 w-24 border p-2 rounded-sm ${
                              selectedMethodPembayaran?.label === item.label
                                ? "border-orange-500"
                                : ""
                            }`}
                          >
                            <img
                              className="h-full w-full"
                              src={`${url}${item.logo}`}
                              alt=""
                            />
                          </button>
                        ))}
                    </div>
                  </div>
                  <div className="w-full p-2 border border-orange-500 rounded-md mt-2">
                    <p>QR Code</p>
                    <div className="w-full flex gap-2 mt-2 flex-wrap">
                      {listMetodePembayaran
                        ?.filter((val) => val.jenis === "QR")
                        .map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedMethodPembayaran(item)}
                            className={`h-12 w-24 border p-2 rounded-sm ${
                              selectedMethodPembayaran?.label === item.label
                                ? "border-orange-500"
                                : ""
                            }`}
                          >
                            <img
                              className="h-full w-full"
                              src={`${url}${item.logo}`}
                              alt=""
                            />
                          </button>
                        ))}
                    </div>
                  </div>
                  <div className="w-full p-2 border border-orange-500 rounded-md mt-2">
                    <p>Lainnya</p>
                    <div className="w-full flex gap-2 mt-2 flex-wrap">
                      {listMetodePembayaran
                        ?.filter((val) => val.jenis === "TUNAI")
                        .map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedMethodPembayaran(item)}
                            className={`h-12 w-24 border p-2 rounded-sm text-[.7rem] text-nowrap ${
                              selectedMethodPembayaran?.label === item.label
                                ? "border-orange-500"
                                : ""
                            }`}
                          >
                            Bayar ditempat
                          </button>
                        ))}
                    </div>
                  </div>
                  <div className="text-sm mt-4">
                    <div className="flex justify-between">
                      <div>Pajak(12%)</div>
                      <div>{currencyFormat((totalMenu * 12) / 100)}</div>
                    </div>
                    <div className="flex justify-between">
                      <div>Biaya Admin</div>
                      <div>
                        {currencyFormat(
                          selectedMethodPembayaran.biaya_admin || 0
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div>Total Tagihan</div>
                      <div>
                        {currencyFormat(
                          totalMenu +
                            (totalMenu * 12) / 100 +
                            selectedMethodPembayaran.biaya_admin
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2  float-right">
                    <button
                      disabled={isLoading}
                      type="button"
                      className="bg-orange-500 disabled:bg-orange-300 text-white p-1 w-full rounded-sm hover:shadow-md mt-4 flex justify-center"
                      onClick={() => fetchBayarBooking()}
                    >
                      {isLoading ? (
                        <svg
                          class="animate-spin h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                          ></path>
                        </svg>
                      ) : (
                        "Bayar Sekarang"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default ReservationForm;
