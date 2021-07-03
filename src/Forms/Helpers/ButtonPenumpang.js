import { Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import React from "react";
import "../Forms.css";

export default function JumlahPenumpang({ n, jumlahPenumpang }) {
  return (
    <Form.Group className="p-2" controlId="JumlahPenumpang">
      {Object.keys(n).map((ns) => {
        let title = "";
        let angka = "";
        switch (ns) {
          case "numAdults":
            title = <label>Dewasa</label>;
            angka = <label>{n[ns]}</label>;
            break;
          case "numChildren":
            title = <label>Anak</label>;
            angka = <label>{n[ns]}</label>;
            break;
          case "numInfants":
            title = <label>Bayi</label>;
            angka = <label>{n[ns]}</label>;
        }
        return (
          <span>
            <Button variant="outline-danger" className="btnPenumpang" onClick={(e) => jumlahPenumpang(ns, "-")}>
              -
            </Button>
            <label>
              {angka} {title}
            </label>

            <Button variant="outline-success" className="btnPenumpang" onClick={(e) => jumlahPenumpang(ns, "+")}>
              +
            </Button>
          </span>
        );
      })}
    </Form.Group>
  );
}
