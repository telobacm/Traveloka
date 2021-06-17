import { Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import React from "react";
import "../Forms.css";

export default function JumlahPenumpang({ n, jumlahPenumpang }) {
  return (
    <>
      <Form.Group className="p-2" controlId="JumlahPenumpang">
        <Form.Label>Jumlah Penumpang</Form.Label>
        <Dropdown>
          <Dropdown.Toggle className="likeForm" id="dropdown-basic">
            {n.numAdults} Dewasa, {n.numChildren} Anak, {n.numInfants} Bayi{" "}
          </Dropdown.Toggle>
          <Dropdown.Menu className="display-2 likeForm">
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
                <Dropdown.Item onClick={() => null}>
                  <Row className="menuItem">
                    <Col xs={5}>
                      <label>{title}</label>
                    </Col>
                    <Col xs={4}>
                      <Button variant="outline-danger" className="btnPenumpang" onClick={(e) => jumlahPenumpang(ns, "-")}>
                        -
                      </Button>
                      {angka}
                      <Button variant="outline-success" className="btnPenumpang" onClick={(e) => jumlahPenumpang(ns, "+")}>
                        +
                      </Button>
                    </Col>
                  </Row>
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </Form.Group>
    </>
  );
}
