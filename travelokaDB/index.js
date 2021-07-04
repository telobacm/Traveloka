const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const db = require("./db");
const router = express.Router();

const app = express();

app.use(bodyparser());
app.use(cors());

app.get("/", (req, res) => {
  res.send(JSON.stringify(db));
});

// console.log(db);

app.use("/tiket-pesawat", (req, res) => {
  const indexAsal = db.bandara.findIndex((item) => item.value == req.body.sourceAirportOrArea);
  const indexTujuan = db.bandara.findIndex((item) => item.value == req.body.destinationAirportOrArea);
  const angkaBesar = Math.max(indexAsal, indexTujuan);
  const angkaKecil = Math.min(indexAsal, indexTujuan);
  const jarak = angkaBesar - angkaKecil;
  const harga1 = 20000 * jarak;
  const asal = req.body.sourceAirportOrArea;
  const tujuan = req.body.destinationAirportOrArea;
  const penumpang = req.body.numSeats;
  const tanggal = req.body.flightDate;
  const kelas = req.body.seatPublishedClass;
  const Garuda = { maskapai: "Garuda Putih", harga: harga1, asal: asal, tujuan: tujuan, penumpang: penumpang, tanggal: tanggal, kelas: kelas };
  res.send(Garuda);
});

app.listen(4000, () => console.log("Server berjalan di port 4000"));
