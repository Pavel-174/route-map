import React from "react";
import "./App.scss";
import { Container } from "@material-ui/core";
import Map from "./map/Map";

export default function App() {
  return (
    <Container disableGutters>
      <Map />
    </Container>
  );
}
