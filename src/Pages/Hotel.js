import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCookies } from "react-cookie";
import BandaraAsal from "../Forms/Helpers/BandaraAsal";
import BandaraTujuan from "../Forms/Helpers/BandaraTujuan";
import JumlahPenumpang from "../Forms/Helpers/JumlahPenumpang";
import Class from "../Forms/Helpers/Class";
import "./Pages.css";
import TanggalPergi from "../Forms/Helpers/TanggalPergi";
import TanggalPulang from "../Forms/Helpers/TanggalPulang";
import TanggalPergiDobel from "../Forms/Helpers/TanggalPergiDobel";
import ButtonPenumpang from "../Forms/Helpers/ButtonPenumpang";
import Template from "../Components/Template";

const apicall = axios.create({ withCredentials: true });

export default function Hotel() {
  const [cekPP, setCekPP] = useState(false);
  const [satuMulti, setSatuMulti] = useState("satu");
  const [asal, setAsal] = useState(false);
  const [tujuan, setTujuan] = useState(false);
  const [flightDate, setFlightDate] = useState(false);
  // const [dates, setDates] = useState(false);
  const [numSeats, setNumSeats] = useState({ numAdults: 1, numChildren: 0, numInfants: 0 });
  const [kelas, setkelas] = useState(false);

  const setSource = (e) => {
    setAsal(e);
  };
  const setDesti = (e) => {
    setTujuan(e);
  };
  const setClass = (e) => {
    setkelas(e);
  };

  const setTglPergi = (e) => {
    let tanggal = { year: e.getFullYear(), month: e.getMonth(), day: e.getDate() };
    setFlightDate(tanggal);
  };

  const jumlahPenumpang = (params, opr) => {
    let data = JSON.parse(JSON.stringify(numSeats));
    let error = "";
    if (opr === "+") {
      data[params] = data[params] + 1;
    }
    if (opr === "-" && params === "numAdults" && data.numAdults === 1) {
      data[params] = data[params] - 0;
    } else if (opr === "-" && data[params] > 0) {
      data[params] = data[params] - 1;
    }
    if (data.numInfants > 4) {
      error = "Hanya empat (4) penumpang bayi diizinkan dalam setiap pesanan";
    } else if (data.numAdults + data.numChildren > 7) {
      error = "Maksimum 7 penumpang (dewasa dan anak)";
    }
    if (error) {
      toast("😩" + error + "😩", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setNumSeats(data);
    }
  };

  useEffect(() => {
    // console.log("asal", asal);
    // console.log("tujuan", tujuan);
    // console.log("kelas", kelas);
    // console.log("jumlah", numSeats);
    console.log("tanggal", flightDate);
  });

  const API_URL = process.env.REACT_APP_API_URL;
  const axiosPost = async (e) => {
    e.preventDefault();
    const headers = {
      // authority: "www.traveloka.com",
      // method: "POST",
      // secure: false,
      // path: "/api/v2/flight/search/oneway",
      // scheme: "https",
      // withCredentials: true,
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
      sourceAirportOrArea: asal,
      destinationAirportOrArea: tujuan,
      numSeats: numSeats,
      flightDate: flightDate,
      seatPublishedClass: kelas,
      currency: "IDR",
      isReschedule: false,
      locale: "id_ID",
      flexibleTicket: false,
      newResult: true,
      seqNo: null,
      searchId: "4e5404a3-c1b5-4f25-8b42-b9880f27a57f",
      visitId: "1ed8dd60-64ff-4689-9a65-53717fb4bb39",
      utmId: null,
      utmSource: null,
      funnelId: "null",
      funnelSource: "null",
    };
    // const response = await fetch("https://www.traveloka.com/api/v2/flight/search/oneway", {
    //   method: "POST",
    //   credentials: "include",
    //   headers,
    //   mode: "same-origin",
    //   body: JSON.stringify(body),
    // });
    const response = await axios.post("http://localhost:4000", body);
    // const test = response.json();
    console.log(response);
  };
  return (
    <Template>
      <Container>
        <h1>
          HALAMAN <b>HOTEL</b> INI BELOM AKTIF
        </h1>
        <ToastContainer />
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
            // ///// Satu Kota //////////////////////////
            <div>
              <Row>
                <BandaraAsal set={setSource} />
                <BandaraTujuan set={setDesti} />
                <JumlahPenumpang n={numSeats} jumlahPenumpang={jumlahPenumpang} />
              </Row>
              <Row>
                <ButtonPenumpang n={numSeats} jumlahPenumpang={jumlahPenumpang}></ButtonPenumpang>
              </Row>
              <Row>
                <TanggalPergi set={setTglPergi} />

                <Form.Group className="p-2" controlId="cekPP">
                  <Form.Check type="checkbox" label="Tanggal Pulang" name="cekPP" onChange={(e) => setCekPP(e.target.checked)} />
                </Form.Group>
                {cekPP && (
                  <Form.Group className="p-2" controlId="TanggalPulang">
                    <Form.Label>Tanggal Pulang</Form.Label>
                    <TanggalPulang />
                  </Form.Group>
                )}
                <Class set={setClass}></Class>
              </Row>
            </div>
          ) : (
            // ///// Multi Kota //////////////////////////
            <div>
              <Row>
                <BandaraAsal set={setSource} />
                <BandaraTujuan set={setDesti} />
                <TanggalPergi set={setTglPergi} />
              </Row>
              <Row>
                <BandaraAsal set={setSource} />
                <BandaraTujuan set={setDesti} />
                <Form.Group className="p-2" controlId="TanggalPergiDobel">
                  <Form.Label>Tanggal Pergi</Form.Label>
                  <TanggalPergiDobel />
                </Form.Group>
              </Row>
              <Row>
                <JumlahPenumpang n={numSeats} jumlahPenumpang={jumlahPenumpang} />
                <Class set={setClass}></Class>
              </Row>
            </div>
          )}
          <Button variant="primary" /* onClick={(e) => axiosPost(e)} */ type="submit" className="mb-4">
            Cari Tiket
          </Button>
        </Form>
      </Container>
    </Template>
  );
}
