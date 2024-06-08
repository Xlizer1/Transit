import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import irr from "./assets/irr.gif";
import Station from "./components/Station";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Autocomplete, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
// import NavigationIcon from "@mui/icons-material/Navigation";
import stationsData from "./assets/StationsData.json";
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();
  const transformComponentRef = useRef(null);
  const [selectedType, setSelectedType] = useState(null);
  // const [selectedStation, setSelectedStation] = useState(null);
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParamsObject = {
      sid: params.get('sid'),
      user: params.get('user'),
      baseUrl: params.get('baseUrl'),
      hostUrl: params.get('hostUrl'),
      b: params.get('b'),
      v: params.get('v'),
    };
    setQueryParams(queryParamsObject);
  }, [location]);

  useEffect(() => {
    const renewSession = async () => {
      if (queryParams.baseUrl && queryParams.sid) {
        try {
          const response = await fetch(`${queryParams.hostUrl}/wialon/ajax.html?svc=core/duplicate&params={"operateAs":""}&sid=${queryParams.sid}`);
          const data = await response.json();
          if (data && data.sid) {
            setQueryParams((prevParams) => ({
              ...prevParams,
              sid: data.sid,
            }));
            console.log("Session ID renewed:", data.sid);
          } else {
            console.error("Failed to renew session ID", data);
          }
        } catch (error) {
          console.error("Error renewing session ID:", error);
        }
      }
    };

    const intervalId = setInterval(renewSession, 60000); // 60000 ms = 1 minute
    renewSession(); // Call it immediately to renew session on mount

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [queryParams.baseUrl, queryParams.sid]);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const Controls = () => {
    const { resetTransform } = useControls();
    return (
      <div
        style={{
          position: "absolute",
          top: windowSize.height - 160,
          right: 30,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          padding: "5px",
          backgroundColor: "#fff",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "5px",
        }}
      >
        {/* <button
          onClick={() => {
            zoomIn();
          }}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <ZoomInIcon />
        </button>
        <button
          onClick={() => zoomOut()}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <ZoomOutIcon />
        </button> */}
        <button
          onClick={() => resetTransform()}
          style={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <RestartAltIcon />
          <Typography sx={{ width: "120px" }}>
            Reset To Initial Position
          </Typography>
        </button>
      </div>
    );
  };

  const trainTypes = [
    {
      id: 1,
      name: "Inactive train",
      color: "#f00",
    },
    {
      id: 2,
      name: "In the process of launching",
      color: "#ff0",
    },
    {
      id: 3,
      name: "Active train",
      color: "#0f0",
    },
  ];

  const [filteredTrains, setFilteredTrains] = useState([]);

  useEffect(() => {
    setFilteredTrains(() => {
      if (selectedType && selectedType.id !== undefined) {
        return stationsData.trains.filter(
          (train) => train.type === selectedType.id
        );
      } else {
        return [...stationsData.trains];
      }
    });
  }, [selectedType]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="App">
      <div
        style={{
          width: "100vw",
          height: "50px",
          paddingRight: "20px",
          paddingLeft: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderBottom: "2px solid #b5b5b5",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              zIndex: 100,
            }}
          >
            <img src={irr} alt="#" width="30px" height="30px" />
            <h2 style={{ fontFamily: "Roboto" }}>Iraqi Republic Railways</h2>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "300px",
            right: 20,
            top: 60,
            cursor: "default",
            zIndex: 100,
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            gap: 5,
            backgroundColor: "#fff",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
        >
          <Autocomplete
            value={selectedType ? selectedType : null}
            options={trainTypes}
            getOptionLabel={(option) =>
              typeof option === "object" && option.name ? option.name : ""
            }
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(e, newValue) => setSelectedType(newValue)}
            clearIcon={
              <CloseIcon
                sx={{ fontSize: "20px", color: "#d3d3d3" }}
                onClick={() => setSelectedType(null)}
              />
            }
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Train status"
                variant="filled"
                sx={{
                  bgcolor: "#fff",
                }}
              />
            )}
            style={{
              bgcolor: "#fff",
            }}
          />
          {/* <Autocomplete
            value={selectedStation ? selectedStation : null}
            options={stations}
            getOptionLabel={(option) =>
              typeof option === "object" && option.name ? option.name : ""
            }
            isOptionEqualToValue={(option, value) => option.id === value.id}
            onChange={(e, newValue) => setSelectedStation(newValue)}
            clearIcon={
              <CloseIcon
                sx={{ fontSize: "20px", color: "#d3d3d3" }}
                onClick={() => setSelectedType(null)}
              />
            }
            renderInput={(params) => (
              <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                <TextField
                  {...params}
                  label="Select Station"
                  variant="filled"
                  sx={{
                    bgcolor: "#fff",
                    fontFamily: "cairo",
                  }}
                />
                <Box
                  sx={{
                    // bgcolor: "grey",
                    width: "30px",
                    height: "30px",
                    marginLeft: "-10px",
                    marginRight: "10px",
                    boxShadow:
                      "0 0 0px #000, 0 0 0px #000, 0 0 0px #000, 0 0 0px #000",
                  }}
                >
                  <NavigationIcon
                    sx={{
                      fontSize: "30px",
                      color: "#2770cf",
                      cursor: "pointer",
                    }}
                  />
                </Box>
              </div>
            )}
            style={{
              bgcolor: "#fff",
            }}
          /> */}
        </div>
      </div>
      <div
        className="zoom"
        style={{
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <TransformWrapper
          initialPositionX={-7250}
          initialPositionY={-2850}
          limitToBounds={false}
          ref={transformComponentRef}
        >
          <Controls />
          <TransformComponent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: `6500px`,
                width: `15300px`,
                position: "relative",
                zIndex: "-10",
                scale: "0.15",
              }}
            >
              <div
                style={{
                  width: "15000px",
                  height: "20px",
                  backgroundColor: "#ccc",
                  position: "relative",
                  display: "flex",
                  gap: "30px",
                  borderRadius: "15px",
                  bottom: "-1700px",
                }}
              >
                {stationsData.southToNorth.map((station, index) => {
                  return (
                    <Station
                      key={index}
                      index={index}
                      station={station}
                      marginLeft={index === 0 ? 0 : "184px"}
                      left="-100px"
                      top={index % 2 === 0 ? "85px" : "-150px"}
                      trains={filteredTrains}
                      trainTypes={trainTypes}
                    />
                  );
                })}
                <div
                  style={{
                    width: "900px",
                    height: "20px",
                    backgroundColor: "#ccc",
                    position: "absolute",
                    top: "450px",
                    left: "243px",
                    display: "flex",
                    gap: "30px",
                    borderRadius: "15px",
                    transform: "translate(-50%, -50%) rotate(90deg)",
                    zIndex: -1,
                  }}
                >
                  {stationsData.startVertical.map((station, index) => {
                    return (
                      <Station
                        key={index}
                        index={index}
                        station={station}
                        marginLeft="260px"
                        left="-103px"
                        top={index % 2 === 0 ? "130px" : "-220px"}
                        transform="rotate(-90deg)"
                        trains={filteredTrains}
                        trainTypes={trainTypes}
                      />
                    );
                  })}
                </div>
                <div
                  style={{
                    width: "4800px",
                    height: "20px",
                    backgroundColor: "#ccc",
                    position: "absolute",
                    bottom: "2390px",
                    left: "9368px",
                    display: "flex",
                    gap: "30px",
                    borderRadius: "15px",
                    transform: "translate(-50%, -50%) rotate(-90deg)",
                    zIndex: -1,
                  }}
                >
                  {stationsData.west.map((station, index) => {
                    return (
                      <Station
                        key={index}
                        index={index}
                        station={station}
                        marginLeft="160px"
                        left="-103px"
                        top={index % 2 === 0 ? "130px" : "-220px"}
                        transform="rotate(90deg)"
                        trains={filteredTrains}
                        trainTypes={trainTypes}
                      />
                    );
                  })}
                </div>
                <div
                  style={{
                    width: "4200px",
                    height: "20px",
                    backgroundColor: "#ccc",
                    position: "absolute",
                    bottom: "1650px",
                    left: "10655px",
                    display: "flex",
                    gap: "30px",
                    borderRadius: "15px",
                    transform: "translate(-50%, -50%) rotate(-127.8deg)",
                    zIndex: -2,
                  }}
                >
                  {stationsData.angle.map((station, index) => {
                    return (
                      <Station
                        key={index}
                        index={index}
                        station={station}
                        marginRight="330px"
                        marginLeft="300px"
                        left="-220px"
                        top="120px"
                        transform="rotate(127.3deg)"
                        trains={filteredTrains}
                        trainTypes={trainTypes}
                      />
                    );
                  })}
                </div>
                <div
                  style={{
                    width: "3970px",
                    height: "20px",
                    backgroundColor: "#ccc",
                    position: "absolute",
                    bottom: "4780px",
                    left: "7800px",
                    display: "flex",
                    gap: "30px",
                    borderRadius: "15px",
                    transform: "translate(-50%, -50%)",
                    zIndex: -2,
                  }}
                >
                  {stationsData.horizontalWest.map((station, index) => {
                    return (
                      <Station
                        key={index}
                        index={index}
                        station={station}
                        marginRight="740px"
                        left="-100px"
                        top={index % 2 === 0 ? "90px" : "-150px"}
                        trains={filteredTrains}
                        trainTypes={trainTypes}
                      />
                    );
                  })}
                </div>
                <div
                  style={{
                    width: "1400px",
                    height: "20px",
                    backgroundColor: "#ccc",
                    position: "absolute",
                    bottom: "-700px",
                    left: "11944px",
                    display: "flex",
                    gap: "30px",
                    borderRadius: "15px",
                    transform: "translate(-50%, -50%) rotate(-90deg)",
                    zIndex: -1,
                  }}
                >
                  {stationsData.est.map((station, index) => {
                    return (
                      <Station
                        key={index}
                        index={index}
                        station={station}
                        marginRight="180px"
                        left="-105px"
                        top={index % 2 === 0 ? "120px" : "-210px"}
                        transform="rotate(90deg)"
                        trains={filteredTrains}
                        trainTypes={trainTypes}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </div>
    </div>
  );
};

export default App;
