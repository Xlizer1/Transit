import "./App.css";
import React, { useEffect, useState } from "react";
import TrainLine from "./components/TrainLine";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

const App = () => {
  const stations = [
    { id: 1, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 2, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 3, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 4, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 5, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 6, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 7, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 8, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 9, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 10, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 11, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 12, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 13, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 14, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 15, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 16, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 17, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 18, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 19, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 20, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 21, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 22, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 23, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 24, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 25, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 26, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 27, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 28, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 29, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 30, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 31, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 32, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 33, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 34, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 35, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 36, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 37, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 38, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 39, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 40, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 41, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 42, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 43, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 44, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 45, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 46, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 47, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 48, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 49, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 50, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 51, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 52, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 53, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 54, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 55, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 56, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 57, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 58, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 59, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 60, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 61, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 62, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 63, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 64, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 65, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 66, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 67, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 68, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 69, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 70, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 71, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 72, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 73, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 74, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 75, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 76, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 77, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 78, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 79, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 80, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 81, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 82, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 83, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 84, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 85, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 86, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 87, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 88, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 89, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 90, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 91, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 92, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 93, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 94, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 95, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 96, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 97, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 98, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 99, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 90, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 101, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 102, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 103, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 104, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 105, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
    { id: 106, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 107, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 108, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 109, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 110, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TrainLine stations={stations} trains={trains} />
      </div>
    </ThemeProvider>
  );
};

export default App;
