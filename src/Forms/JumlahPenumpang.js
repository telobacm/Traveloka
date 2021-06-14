import { Row, Form, Dropdown, Button } from "react-bootstrap";
import React from "react";

function JumlahPenumpang({ numAdults, numChildren, numInfants }) {
  return (
    // <Form.Control as="select">
    //   <option>
    //     Dewasa
    //     <Button>-</Button>
    //     {numAdults}
    //     <Button>+</Button>
    //   </option>
    //   <option>
    //     Anak
    //     <Button>-</Button>
    //     {numChildren}
    //     <Button>+</Button>
    //   </option>
    //   <option>
    //     Bayi
    //     <Button>-</Button>
    //     {numInfants}
    //     <Button>+</Button>
    //   </option>
    // </Form.Control>

    <Dropdown>
      <Dropdown.Toggle variant="primary" id="dropdown-basic">
        Jumlah Penumpang
      </Dropdown.Toggle>

      <Dropdown.Menu className="display-2">
        <Dropdown.Item>
          Dewasa
          <Button>-</Button>
          {numAdults}
          <Button>+</Button>
        </Dropdown.Item>
        <Dropdown.Item>
          Anak
          <Button>-</Button>
          {numChildren}
          <Button>+</Button>
        </Dropdown.Item>
        <Dropdown.Item>
          Bayi
          <Button>-</Button>
          {numInfants}
          <Button>+</Button>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    // <Row>
    //   <Form.Group className="px-3 py-1">
    //     <Form.Label>Dewasa</Form.Label>
    //     <Form.Control as="select">
    //       <option value="1" selected>
    //         1
    //       </option>
    //       <option value="2">2</option>
    //       <option value="3">3</option>
    //       <option value="4">4</option>
    //       <option value="5">5</option>
    //       <option value="6">6</option>
    //       <option value="7">7</option>
    //     </Form.Control>
    //   </Form.Group>
    //   <Form.Group className="px-3 py-1">
    //     <Form.Label>Anak</Form.Label>
    //     <Form.Control as="select">
    //       <option value="0" selected>
    //         0
    //       </option>
    //       <option value="1">1</option>
    //       <option value="2">2</option>
    //       <option value="3">3</option>
    //       <option value="4">4</option>
    //       <option value="5">5</option>
    //       <option value="6">6</option>
    //     </Form.Control>
    //   </Form.Group>
    //   <Form.Group className="px-3 py-1">
    //     <Form.Label>Bayi</Form.Label>
    //     <Form.Control as="select">
    //       <option value="0" selected>
    //         0
    //       </option>
    //       <option value="1">1</option>
    //       <option value="2">2</option>
    //       <option value="3">3</option>
    //       <option value="4">4</option>
    //     </Form.Control>
    //   </Form.Group>
    // </Row>

    //Masih gagal. Tag Button hanya terbaca sebagai[object Object]
    // <Form.Control as="select">
    //   <option>
    //     Dewasa
    //     <Button>-</Button>
    //     {numAdults}
    //     <Button>+</Button>
    //   </option>
    //   <option>
    //     Anak
    //     <Button>-</Button>
    //     {numChildren}
    //     <Button>+</Button>
    //   </option>
    //   <option>
    //     Bayi
    //     <Button>-</Button>
    //     {numInfants}
    //     <Button>+</Button>
    //   </option>
    // </Form.Control>
  );
}

export default JumlahPenumpang;
