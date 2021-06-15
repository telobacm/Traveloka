import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Forms.css";
import id from "date-fns/locale/id";
registerLocale("id", id);

export default function Tanggal() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <br />
      <DatePicker className="dateForm" selected={startDate} onChange={(date) => setStartDate(date)} />
    </>
  );
}
