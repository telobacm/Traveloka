import React from "react";
import { Col, Form } from "react-bootstrap";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import "../Forms.css";

const classes = [
  { label: "Economy", value: "ECONOMY" },
  { label: "Premium Economy", value: "PREMIUM_ECONOMY" },
  { label: "Business", value: "BUSINESS" },
  { label: "First Class", value: "FIRST" },
];

export default function Class({ set }) {
  return (
    <>
      <Form.Group className="p-2" controlId="KelasPenerbangan">
        <Form.Label>Kelas Penerbangan</Form.Label>
        <Select options={classes} className="selects likeForm" onChange={(e) => set(e.value)} defaultValue={[classes[0]]}></Select>
      </Form.Group>
    </>
  );
}
