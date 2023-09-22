import "./App.css";
import React, { useEffect, useState } from "react";
import TrainLine from "./components/TrainLine";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";

const theme = createTheme();

const App = () => {
  // const [data, setData] = useState(null);
  const [fact, setFact] = useState("");

  async function getData() {
    try {
      const res = await axios.get(
        "http://api.ipstack.com/check?access_key=2d08535f87d6ef4b19439f69ceb7ce44"
      );
      // setData(res.data.fact);
      // console.log(res.data.longitude, res.data.latitude);
    } catch (error) {
      console.log(error);
    }
  }

  async function getFacts() {
    try {
      const res = await axios.get("https://catfact.ninja/fact");
      setFact(res.data.fact);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
    getFacts();
  }, []);

  const stations = [
    { id: 1, name: "Station A", longitude: -122.4194, latitude: 37.7749 },
    { id: 2, name: "Station B", longitude: -122.0868, latitude: 37.3297 },
    { id: 3, name: "Station C", longitude: -121.8863, latitude: 37.3541 },
    { id: 4, name: "Station D", longitude: -122.0308, latitude: 36.9741 },
    { id: 5, name: "Station E", longitude: -122.4194, latitude: 36.7783 },
  ];

  const trains = [
    { id: 1, longitude: -122.1007, latitude: 37.6549 },
    { id: 2, longitude: -122.0308, latitude: 36.9741 },
    { id: 3, longitude: -122.1944, latitude: 37.4297 },
    { id: 4, longitude: -121.9863, latitude: 37.3541 },
    { id: 5, longitude: -121.9863, latitude: 37.3541 },
    { id: 6, longitude: -121.9863, latitude: 37.3541 },
    { id: 7, longitude: -121.9863, latitude: 37.5741 },
    { id: 8, longitude: -121.8863, latitude: 37.3541 },
    { id: 9, longitude: -121.8863, latitude: 37.3541 },
    { id: 10, longitude: -121.8863, latitude: 37.3541 },
    { id: 11, longitude: -121.8863, latitude: 37.3541 },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <h1>Vehicle Locations</h1>
        <TrainLine stations={stations} trains={trains} />
        <h1>Cats Facts</h1>
        <h2>{fact}</h2>
      </div>
    </ThemeProvider>
  );
};

export default App;
