// import { response } from "express";
import axios from "axios";
import React from "react";
import Template from "../Components/Template";

const API_URL = process.env.REACT_APP_API_URL;

// const response = axios.get(API_URL + "/tiket-pesawat").then(console.log(response));

export default function ResPesawat() {
  return (
    <Template>
      <p>Harga Tiket: </p>
    </Template>
  );
}
