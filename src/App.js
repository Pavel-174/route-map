import React, {useState} from "react";
import "./App.scss";
import { Container } from "@material-ui/core";
import Map from "./map/Map";
import "leaflet/dist/leaflet.css";

export default function App() {

  
  return (
    <>
      <Container disableGutters maxWidth="sm">
        <input type="radio" name="radAnswer"/> <span>Route №1</span>
        <input type="radio" name="radAnswer"/> <span>Route №2</span>
        <input type="radio" name="radAnswer"/> <span>Route №3</span>
      </Container>
      <Container disableGutters maxWidth="sm">
       <Map />
      </Container>
    </>
  );
}
