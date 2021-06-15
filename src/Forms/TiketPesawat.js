import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import axios from "axios";
import { useCookies } from "react-cookie";
import BandaraAsal from "./BandaraAsal";
import BandaraTujuan from "./BandaraTujuan";
import JumlahPenumpang from "./JumlahPenumpang";
import Class from "./Class";
import "./Forms.css";
import Tanggal from "./Tanggal";

const apicall = axios.create({ withCredentials: true });
const arrbulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"];
const tanggal = new Date().getDate();
const bulan = new Date().getMonth();
const tahun = new Date().getFullYear();
const hariIni = tanggal + " " + arrbulan[bulan] + " " + tahun;

export default function TiketPesawat() {
  const [cekTanggalPulang, setCekTanggalPulang] = useState(false);
  const [satuMulti, setSatuMulti] = useState("satu");
  const [numSeats, setNumSeats] = useState({ numAdults: 1, numChildren: 0, numInfants: 0 });
  const [seatPublishedClass, setSeatPublishedClass] = useState(false);

  const jumlahPenumpang = (params, opr) => {
    let data = JSON.parse(JSON.stringify(numSeats));
    let error = "";
    if (opr == "+") {
      data[params] = data[params] + 1;
    }
    if (opr == "-" && params == "numAdults" && data.numAdults == 1) {
      data[params] = data[params] - 0;
    } else if (opr == "-" && data[params] > 0) {
      data[params] = data[params] - 1;
    }
    if (data.numInfants > 4) {
      error = "Hanya empat (4) penumpang bayi diizinkan dalam setiap pesanan";
    } else if (data.numAdults + data.numChildren > 7) {
      error = "Maksimum 7 penumpang (dewasa dan anak)";
    }
    if (error) {
      alert(error);
    } else {
      setNumSeats(data);
    }
  };

  const setClass = (e) => {
    setSeatPublishedClass(e);
  };

  useEffect(() => {
    console.log(numSeats);
    console.log(seatPublishedClass);
    //console.log(satuMulti);
  });

  const API_URL = process.env.REACT_APP_API_URL;
  const axiosPost = async (e) => {
    e.preventDefault();
    const headers = {
      // authority: "www.traveloka.com",
      //   method: "POST",
      // secure: false,
      // path: "/api/v2/flight/search/oneway",
      // scheme: "https",
      //   withCredentials: true,
      accept: "application/json",
      "accept-encoding": "gzip, deflate, br",
      "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
      "content-length": "524",
      "content-type": "application/json",
      // cookie: cookie,
      // dnt: "1",
      origin: "https://www.traveloka.com",
      // referer: "https://www.traveloka.com/id-id/flight/fullsearch?ap=JKTA.KNO&dt=12-06-2021.NA&ps=1.0.0&sc=ECONOMY",
      // "sec-ch-ua-mobile": "?0",
      // "sec-fetch-dest": "empty",
      // "sec-fetch-mode": "cors",
      // "sec-fetch-site": "same-origin",
      "x-domain": "flight",
      // "x-nonce": "6801451e-0cc9-493e-8acf-a0a76aeb6bbc",
      // "x-route-prefix": "id-id",
    };
    const body = {
      currency: "IDR",
      isReschedule: false,
      locale: "id_ID",
      numSeats: { numAdults: 1, numChildren: 0, numInfants: 0 },
      seatPublishedClass: "ECONOMY",
      destinationAirportOrArea: "KNO",
      flexibleTicket: false,
      flightDate: { year: 2021, month: 6, day: 12 },
      sourceAirportOrArea: "JKTA",
      newResult: true,
      seqNo: null,
      searchId: "4e5404a3-c1b5-4f25-8b42-b9880f27a57f",
      visitId: "1ed8dd60-64ff-4689-9a65-53717fb4bb39",
      utmId: null,
      utmSource: null,
      funnelId: "null",
      funnelSource: "null",
    };
    const response = await fetch(
      "https://www.traveloka.com/api/v2/flight/search/oneway",
      {
        method: "POST",
        credentials: "include",
        headers,
        mode: "same-origin",
        body: JSON.stringify(body),
        // mode: "same-origin",
      } // could also try 'same-origin'
    );
    const test = response.json();
    console.log(test);
    // setCookie(
    //   "tvs",
    //   "qgdHX7GvehrD9XH5a3S4PXWKx93/3Xi103f/kPpnhg1IQez7AjqOPow88qqCMiL7CqvJjpn5Z2svD8QZzAmUN8I7bk86ki9gpnRvB7n1SMjhMHk0wYC5w9bMEWU8F2qJt0q47TyT+ecCF4TDzdkuTfxF8K4SW0j97BROT2akHhRMVeoaxEQheXCzmm0cEa6sp2KXmLqrTbbEYoNpODTP44yfTQRTSwh6RA+Q0ed0iTtuW5s1cyMXNBtRpjH1fQPzNlGtbPZyqKblsg9pin8MSkADHAoygkRvE2pz3Z7qUlFP5lUUeZvqwg8Za/5sXO3LZP+wb33mpHnKyxjbfd5ZlTN3hMzImFcyzvIC2wefxfo=; Path=/; Domain=traveloka.com; Secure; HttpOnly;"
    // );
    // setCookie(
    //   "bm_sz",
    //   "4C223376DF7BCAC4859583226A64AFB6~YAAQpV1idpF3Lsd5AQAAoSSe+ww1KG+Qb+z+CzeYnDnGMcYBcELa3RMLgpD3bebkeT/dJq5mFvUWhFO94uJiyUR3F6c2axURc/lptiuG1MMkYDga8nnykCzUeph//3q4kNepCiLYY4r1mxjet0rmeMTwxwXeGPr6ULAoW5XkISliWEkjZIbYHUd507qUX4T0Ns+K; Path=/; Domain=traveloka.com; HttpOnly; Expires=Fri, 11 Jun 2021 19:08:35 GMT;"
    // );
    // setCookie(
    //   "bm_sv",
    //   "8A4BA533A20E19898072836E7C80687C~28dTstwEZCtYv94rkSkaF2g8J8eRdCsiioxScfXL+9k8ZafWATlIDpRvpw2y5MVwtUGaDLyVgmVPLphYKj/mjC+Hl1zuCLOsQJY79Fl5aFJhvzewGFKUI7ByaleyxPEG1PfC7ZNU36y6EAgUoZIvl6MCrwvaEjpQpmVqrBd0wdA=; Path=/; Domain=traveloka.com; HttpOnly; Expires=Fri, 11 Jun 2021 16:50:28 GMT;"
    // );
    // setCookie(
    //   "_abck",
    //   "26343DC088898E167C8BC7A6B123CB14~-1~YAAQHNxZJJC93cd5AQAAv6nf+wYXbmMM7iGLzXEOFLK1QtmxuM8jj5kRfzrMT2IF19jybusYU1Vwg5RqJQcfbsQyOpDGXupQKY/mcN9oDuIosu4wHlaxtKTTC6JG6VZmd8zGihs0Fe92KCVYTW4y5pKlZkqlmc3Bzhb/gc3bx6tlpi6oG0OCPMorbK4Qx0jcKRV6Bdq3mw9F0yiKXLrWTQ3qWGhN8qSICEfynkQsygLtXX9cJzmz7nF86ij4jPzz67ZiEpvAojldhYFaeiKCg0Y+N6aE9Rjo+5A06iilETIQ1dmjdjSlR1riM8BF43SwVxY6h7P45RXYuWO6COU5LEDwBNDeRRI+3SrBYPNv4Fz2fdvAtKsLJYUrInGYo5Uee0u5uq7EYYP8TTadqGiJmbRASmEYoaLoeH8=~0~-1~-1; Path=/; Domain=traveloka.com; Secure; Expires=Sat, 11 Jun 2022 16:20:09 GMT;"
    // );
    // const result = await apicall({
    //   method: "POST",
    //   url: "https://www.traveloka.com/api/v2/flight/search/oneway",
    //   data: {
    //     clientInterface: "desktop",
    //     data: body,
    //     fields: [],
    //   },
    //   headers,
    // })
  };
  return (
    <Container>
      <Form>
        <Form.Group className="p-2" controlId="Satu/Multi">
          <Row className="mt-3 flek">
            <Col xs={3}>
              <Form.Check type="radio" name="satuMulti" id="1" value="satu" label="Sekali Jalan / Pulang Pergi" onChange={(e) => setSatuMulti(e.target.value)} defaultChecked />
            </Col>
            <Col xs={2}>
              <Form.Check type="radio" name="satuMulti" id="2" value="multi" label="Multi-Kota" onChange={(e) => setSatuMulti(e.target.value)} />
            </Col>
          </Row>
        </Form.Group>
        {satuMulti === "satu" ? (
          <>
            <Row>
              <BandaraAsal />
              <BandaraTujuan />
            </Row>
            <Row>
              <JumlahPenumpang n={numSeats} jumlahPenumpang={jumlahPenumpang} />
              {/* //bakalan dihapus jika dropdown dah bisa nggak langsung nutup ///////////////////////// */}
              {Object.keys(numSeats).map((ns) => {
                let title = "";
                let angka = "";
                switch (ns) {
                  case "numAdults":
                    title = <label>Dewasa</label>;
                    angka = <label>{numSeats[ns]}</label>;
                    break;
                  case "numChildren":
                    title = <label>Anak</label>;
                    angka = <label>{numSeats[ns]}</label>;
                    break;
                  case "numInfants":
                    title = <label>Bayi</label>;
                    angka = <label>{numSeats[ns]}</label>;
                }
                return (
                  <Col xs={2}>
                    <Button variant="outline-danger" onClick={(e) => jumlahPenumpang(ns, "-")}>
                      -
                    </Button>
                    {angka} {title}
                    <Button variant="outline-success" onClick={(e) => jumlahPenumpang(ns, "+")}>
                      +
                    </Button>
                  </Col>
                );
              })}
              {/* //bakalan dihapus///////////////////////// */}
            </Row>
            <Row>
              <Form.Group className="p-2" controlId="TanggalPergi">
                <Form.Label>Tanggal Pergi</Form.Label>
                <Tanggal />
              </Form.Group>
              <Form.Group className="p-2" controlId="cekTanggalPulang">
                <Form.Check type="checkbox" label="Tanggal Pulang" name="cekTanggalPulang" onChange={(e) => setCekTanggalPulang(e.target.checked)} />
              </Form.Group>
              {cekTanggalPulang && (
                <Form.Group className="p-2" controlId="TanggalPulang">
                  <Form.Label>Tanggal Pulang</Form.Label>
                  <Tanggal />
                </Form.Group>
              )}
              <Class set={setClass}></Class>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <BandaraAsal />
              <BandaraTujuan />
              <Form.Group className="p-2" controlId="TanggalPergi">
                <Form.Label>Tanggal Pergi</Form.Label>
                <Tanggal />
              </Form.Group>
            </Row>
            <Row>
              <BandaraAsal />
              <BandaraTujuan />
              <Form.Group className="p-2" controlId="TanggalPergi">
                <Form.Label>Tanggal Pergi</Form.Label>
                <Tanggal />
              </Form.Group>
            </Row>
            <Row>
              <JumlahPenumpang n={numSeats} jumlahPenumpang={jumlahPenumpang} />
              <Class set={setClass}></Class>
            </Row>
          </>
        )}
        <Button variant="primary" onClick={(e) => axiosPost(e)} type="submit" className="mb-4">
          Cari Tiket
        </Button>
      </Form>
    </Container>
  );
}
