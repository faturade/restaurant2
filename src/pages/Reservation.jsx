import React, { useEffect, useState } from "react";
import Image from "../assets/image/resto2.jpg";
import { showErrorAlert, showSuccessAlert } from "../utils/alertutils";
import dayjs from "dayjs";
import AsyncSelect from "react-select/async";
import { currencyFormat } from "../utils/currency";
import Swal from "sweetalert2";
import CountdownTimer from "../components/CountdownTimer";

let url = `https://dt6rn7p5-3000.asse.devtunnels.ms/`;
const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nama: "",
    nomor_hp: "",
    tgl_kunjungan: "",
    jumlah_orang: "",
    keterangan: "",
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
    console.log("submit booking");

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
      showSuccessAlert("Berhasil", data.message);
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

    getDefaultOptions();
    getMetodePembayaran();
  }, []);

  return (
    <>
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
              <CountdownTimer expiresAt={"2024-07-04T02:40:41.865"} />
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
              type="datetime-local"
              id="tgl_kunjungan"
              name="tgl_kunjungan"
              disabled={idPenjualan}
              value={formData.tgl_kunjungan}
              onChange={handleChange}
              className="mt-1 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            />
            <input
              type="number"
              id="jumlah_orang"
              name="jumlah_orang"
              disabled={idPenjualan}
              placeholder="Jumlah Orang"
              value={formData.jumlah_orang}
              onChange={handleChange}
              className="mt-4 md:mt-1 md:ml-4 p-2 block w-full border shadow-sm focus:outline-none focus:ring-custom-orange placeholder-custom-orange"
              style={{ color: "#FF7517" }}
            />
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
            className="p-1 w-28 rounded-sm flex justify-center text-white font-semibold focus:outline-none focus:ring-0 focus:border-none bg-orange-500"
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
                    className="p-1 w-28 rounded-sm text-sm text-white"
                    style={{
                      background: "#FF7517",
                    }}
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
                    className="bg-orange-500 text-white p-1 w-28 rounded-sm hover:shadow-md"
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
                      type="button"
                      className="bg-orange-500 text-white p-1 w-full rounded-sm hover:shadow-md mt-4"
                      onClick={() => fetchBayarBooking()}
                    >
                      Bayar Sekarang
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
