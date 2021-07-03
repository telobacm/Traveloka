import React, { useState } from "react";
import { Form, Col  } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Forms.css";
import id from "date-fns/locale/id";
setDefaultLocale("id");
registerLocale("id", id);

export default function TanggalPergi({ set }) {
  const [today, setToday] = useState(new Date());
  return (
    <Col>
      <Form.Group className="p-2" controlId="TanggalPergi">
        <Form.Label>Tanggal Pergi</Form.Label>
        <DatePicker className="dateForm" dateFormat="dd-MM-yyyy" minDate={new Date()} selected={today} onChange={(e) => set(e)} />
      </Form.Group>
    </Col>
  );
}
