import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Forms.css";
import id from "date-fns/locale/id";
setDefaultLocale("id");
registerLocale("id", id);

export default function TanggalPergiDobel() {
  const [today, setToday] = useState(new Date());
  const pilih = console.log(today);
  return (
    <>
      <br />
      <DatePicker className="dateForm" dateFormat="dd-MM-yyyy" minDate={new Date()} selected={today} onChange={(date) => setToday(date)} />
    </>
  );
}
