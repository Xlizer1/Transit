import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import "./App.css";
import React, { useEffect, useState } from "react";
import irr from "./assets/irr.gif";
import Station from "./components/Station";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Autocomplete, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const App = () => {
  const Controls = () => {
    const { zoomIn, zoomOut, resetTransform, setTransform } = useControls();
    return (
      <div
        style={{
          position: "absolute",
          top: windowSize.height - 160,
          right: 30,
          zIndex: 1000,
          display: "flex",
          flexDirection: "column",
          border: "2px solid #d3d3d3",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <button
          onClick={() => {
            // setTransform(1, -7250, -2850, 200);
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
        </button>
        <button
          onClick={() => resetTransform()}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <RestartAltIcon />
        </button>
      </div>
    );
  };

  const [selectedType, setSelectedType] = useState(null);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  const [trains, setTrains] = useState([
    { id: 0, station_id: 23, type: 1 },
    { id: 1, station_id: 42, type: 2 },
    { id: 2, station_id: 101, type: 3 },
    { id: 3, station_id: 12, type: 1 },
    { id: 4, station_id: 87, type: 2 },
    { id: 5, station_id: 64, type: 3 },
    { id: 6, station_id: 39, type: 1 },
    { id: 7, station_id: 87, type: 2 },
    { id: 8, station_id: 52, type: 3 },
    { id: 9, station_id: 85, type: 1 },
    { id: 10, station_id: 10, type: 2 },
    { id: 11, station_id: 28, type: 3 },
    { id: 12, station_id: 14, type: 1 },
    { id: 13, station_id: 104, type: 3 },
    { id: 14, station_id: 6, type: 3 },
    { id: 15, station_id: 47, type: 1 },
    { id: 16, station_id: 32, type: 2 },
    { id: 17, station_id: 109, type: 3 },
    { id: 18, station_id: 15, type: 1 },
    { id: 19, station_id: 9, type: 2 },
    { id: 20, station_id: 54, type: 3 },
    { id: 21, station_id: 42, type: 1 },
    { id: 22, station_id: 2, type: 2 },
    { id: 23, station_id: 25, type: 3 },
    { id: 24, station_id: 18, type: 1 },
    { id: 25, station_id: 40, type: 2 },
    { id: 26, station_id: 26, type: 3 },
    { id: 27, station_id: 95, type: 1 },
    { id: 28, station_id: 7, type: 2 },
    { id: 29, station_id: 99, type: 3 },
    { id: 30, station_id: 22, type: 1 },
    { id: 31, station_id: 19, type: 2 },
    { id: 32, station_id: 83, type: 3 },
    { id: 33, station_id: 91, type: 1 },
    { id: 34, station_id: 57, type: 2 },
    { id: 35, station_id: 106, type: 3 },
    { id: 36, station_id: 84, type: 1 },
    { id: 37, station_id: 68, type: 2 },
    { id: 38, station_id: 93, type: 3 },
    { id: 39, station_id: 46, type: 1 },
    { id: 40, station_id: 97, type: 2 },
    { id: 41, station_id: 36, type: 3 },
    { id: 42, station_id: 105, type: 1 },
    { id: 43, station_id: 81, type: 2 },
    { id: 44, station_id: 5, type: 3 },
    { id: 45, station_id: 21, type: 1 },
    { id: 46, station_id: 37, type: 2 },
    { id: 47, station_id: 70, type: 3 },
    { id: 48, station_id: 16, type: 1 },
    { id: 49, station_id: 91, type: 2 },
    { id: 50, station_id: 44, type: 3 },
    { id: 51, station_id: 77, type: 3 },
    { id: 52, station_id: 8, type: 2 },
    { id: 53, station_id: 56, type: 3 },
    { id: 54, station_id: 23, type: 1 },
    { id: 55, station_id: 3, type: 2 },
    { id: 56, station_id: 20, type: 3 },
    { id: 57, station_id: 24, type: 1 },
    { id: 58, station_id: 51, type: 2 },
    { id: 59, station_id: 101, type: 1 },
    { id: 60, station_id: 45, type: 1 },
    { id: 61, station_id: 98, type: 2 },
    { id: 62, station_id: 71, type: 3 },
    { id: 63, station_id: 61, type: 1 },
    { id: 64, station_id: 69, type: 2 },
    { id: 65, station_id: 37, type: 3 },
    { id: 66, station_id: 78, type: 1 },
    { id: 67, station_id: 15, type: 1 },
    { id: 68, station_id: 82, type: 2 },
    { id: 69, station_id: 96, type: 3 },
    { id: 70, station_id: 3, type: 1 },
    { id: 71, station_id: 91, type: 2 },
    { id: 72, station_id: 44, type: 3 },
    { id: 73, station_id: 77, type: 1 },
    { id: 74, station_id: 8, type: 2 },
    { id: 75, station_id: 56, type: 3 },
    { id: 76, station_id: 23, type: 1 },
    { id: 77, station_id: 3, type: 2 },
    { id: 78, station_id: 20, type: 3 },
    { id: 79, station_id: 24, type: 1 },
    { id: 80, station_id: 51, type: 2 },
    { id: 81, station_id: 101, type: 3 },
    { id: 82, station_id: 45, type: 1 },
    { id: 83, station_id: 98, type: 2 },
    { id: 84, station_id: 71, type: 3 },
    { id: 85, station_id: 61, type: 1 },
    { id: 86, station_id: 69, type: 2 },
    { id: 87, station_id: 37, type: 3 },
    { id: 88, station_id: 78, type: 1 },
    { id: 89, station_id: 82, type: 2 },
    { id: 90, station_id: 96, type: 3 },
    { id: 91, station_id: 3, type: 1 },
    { id: 92, station_id: 91, type: 2 },
    { id: 93, station_id: 44, type: 3 },
    { id: 94, station_id: 77, type: 1 },
    { id: 95, station_id: 8, type: 2 },
    { id: 96, station_id: 56, type: 3 },
    { id: 97, station_id: 23, type: 1 },
    { id: 98, station_id: 3, type: 2 },
    { id: 99, station_id: 20, type: 3 },
    { id: 100, station_id: 24, type: 1 },
    { id: 101, station_id: 51, type: 2 },
    { id: 102, station_id: 101, type: 3 },
    { id: 103, station_id: 45, type: 1 },
    { id: 104, station_id: 98, type: 3 },
    { id: 105, station_id: 71, type: 3 },
    { id: 106, station_id: 61, type: 1 },
    { id: 107, station_id: 33, type: 2 },
    { id: 108, station_id: 37, type: 3 },
    { id: 109, station_id: 78, type: 1 },
    { id: 110, station_id: 82, type: 2 },
    { id: 111, station_id: 96, type: 3 },
    { id: 112, station_id: 3, type: 1 },
    { id: 113, station_id: 91, type: 2 },
    { id: 114, station_id: 44, type: 3 },
    { id: 115, station_id: 77, type: 1 },
    { id: 116, station_id: 8, type: 2 },
    { id: 117, station_id: 56, type: 3 },
    { id: 118, station_id: 23, type: 1 },
    { id: 119, station_id: 3, type: 2 },
    { id: 120, station_id: 20, type: 3 },
    { id: 121, station_id: 24, type: 1 },
    { id: 122, station_id: 51, type: 2 },
    { id: 123, station_id: 101, type: 3 },
    { id: 124, station_id: 45, type: 1 },
    { id: 125, station_id: 98, type: 2 },
    { id: 126, station_id: 71, type: 3 },
    { id: 127, station_id: 61, type: 1 },
    { id: 128, station_id: 33, type: 2 },
    { id: 129, station_id: 37, type: 3 },
    { id: 130, station_id: 78, type: 1 },
    { id: 131, station_id: 82, type: 2 },
    { id: 132, station_id: 96, type: 3 },
    { id: 133, station_id: 3, type: 1 },
    { id: 134, station_id: 91, type: 2 },
    { id: 135, station_id: 44, type: 3 },
    { id: 136, station_id: 77, type: 1 },
    { id: 137, station_id: 8, type: 2 },
    { id: 138, station_id: 56, type: 3 },
    { id: 139, station_id: 23, type: 1 },
    { id: 140, station_id: 3, type: 2 },
    { id: 141, station_id: 20, type: 3 },
    { id: 142, station_id: 24, type: 1 },
    { id: 143, station_id: 51, type: 2 },
    { id: 144, station_id: 101, type: 3 },
    { id: 145, station_id: 45, type: 1 },
    { id: 146, station_id: 98, type: 2 },
    { id: 147, station_id: 71, type: 3 },
    { id: 148, station_id: 61, type: 1 },
    { id: 149, station_id: 33, type: 2 },
    { id: 150, station_id: 8, type: 1 },
  ]);

  const [filteredTrains, setFilteredTrains] = useState([]);

  useEffect(() => {
    setFilteredTrains(() => {
      if (selectedType && selectedType.id !== undefined) {
        return trains.filter((train) => train.type === selectedType.id);
      } else {
        return [...trains];
      }
    });
  }, [selectedType]);

  const startVertical = [
    { id: 1, name: "الزبير" },
    { id: 2, name: "المربد" },
    { id: 3, name: "ام قصر" },
  ];

  const southToNorth = [
    { id: 4, name: "المعقل" },
    { id: 5, name: "الشعبية" },
    { id: 6, name: "الطوبة" },
    { id: 7, name: "الرملية" },
    { id: 8, name: "ارطاوي" },
    { id: 9, name: "الغبيشة" },
    { id: 10, name: "لقيط" },
    { id: 11, name: "الشويعرية" },
    { id: 12, name: "الكرماشية" },
    { id: 13, name: "سوق الشيوخ" },
    { id: 14, name: "الخندق" },
    { id: 15, name: "الناصرية" },
    { id: 16, name: "القوزية" },
    { id: 17, name: "البطحة" },
    { id: 18, name: "الدراجي" },
    { id: 19, name: "الخضر" },
    { id: 20, name: "الخافورة" },
    { id: 21, name: "السماوة" },
    { id: 22, name: "ساوة" },
    { id: 23, name: "الحجامة" },
    { id: 24, name: "الرمثية" },
    { id: 25, name: "ابو طبيخ" },
    { id: 26, name: "الحمزة" },
    { id: 27, name: "نبي مدين" },
    { id: 28, name: "الديوانية" },
    { id: 29, name: "السينية" },
    { id: 30, name: "الشريفية" },
    { id: 31, name: "قوجان" },
    { id: 32, name: "الهاشمية" },
    { id: 33, name: "حديد" },
    { id: 34, name: "الحلة" },
    { id: 35, name: "المحاويل" },
    { id: 36, name: "المسيب" },
    { id: 37, name: "الاسكندرية" },
    { id: 38, name: "المحمودية" },
    { id: 39, name: "اليوسفية" },
    { id: 40, name: "الدورة" },
    { id: 41, name: "المنصور" },
    { id: 42, name: "المحطة المركزية" },
    { id: 43, name: "ساحة الرصف" },
    { id: 44, name: "الكاظمية" },
    { id: 45, name: "التاجي" },
    { id: 46, name: "المشاهدة" },
    { id: 47, name: "الدجيل" },
    { id: 48, name: "بلد" },
    { id: 49, name: "الاسحاقي" },
    { id: 50, name: "سامراء" },
    { id: 51, name: "العباسي" },
    { id: 52, name: "امام دور" },
    { id: 53, name: "تكريت" },
    { id: 54, name: "الرياش" },
    { id: 55, name: "بيجي" },
    { id: 56, name: "حليوان" },
    { id: 57, name: "عين الدبس" },
    { id: 58, name: "تلول البق" },
    { id: 59, name: "الجوناف" },
    { id: 60, name: "وادي المر" },
    { id: 61, name: "القيارة" },
    { id: 62, name: "الشورة" },
    { id: 63, name: "حمام العليل" },
    { id: 64, name: "الموصل" },
    { id: 65, name: "صابونية" },
    { id: 66, name: "وائلية" },
    { id: 67, name: "عوينات" },
    { id: 68, name: "ربيعة" },
  ];

  const west = [
    { id: 69, name: "ابو غريب" },
    { id: 70, name: "شيخ ضاري" },
    { id: 71, name: "الكوفة" },
    { id: 72, name: "الفلوجة" },
    { id: 73, name: "الحبانية" },
    { id: 74, name: "الخالدية" },
    { id: 75, name: "رمادي شرق" },
    { id: 76, name: "رمادي غرب" },
    { id: 77, name: "الرطبة" },
    { id: 78, name: "المحمدي" },
    { id: 79, name: "هيث" },
    { id: 80, name: "المرج" },
    { id: 81, name: "البيادر" },
    { id: 82, name: "البغدادي" },
    { id: 83, name: "حوران" },
    { id: 84, name: "المقلانية" },
    { id: 85, name: "حديثه" },
    { id: 86, name: "الفحيمي" },
    { id: 87, name: "عنه" },
    { id: 88, name: "جباب" },
    { id: 89, name: "ميثاق" },
    { id: 90, name: "القائم" },
    { id: 91, name: "حصيبة" },
  ];

  const horizontalWest = [
    { id: 92, name: "عكاشات" },
    { id: 93, name: "الرتقة" },
    { id: 94, name: "الواحة" },
    { id: 95, name: "العنقاء" },
    { id: 96, name: "المجمع" },
    { id: 97, name: "الاسمدة" },
  ];

  const angle = [
    { id: 98, name: "الصينية" },
    { id: 99, name: "الثرثار" },
    { id: 100, name: "الصفاء" },
    { id: 101, name: "الوادي" },
    { id: 102, name: "الهضاب" },
    { id: 103, name: "العطاء" },
  ];

  const est = [
    { id: 104, name: "الفتحة" },
    { id: 105, name: "المراعي" },
    { id: 106, name: "الرياض" },
    { id: 107, name: "الثورة" },
    { id: 108, name: "كركوك البضائع" },
    { id: 109, name: "كركوك المسافرين" },
  ];

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
            <h2>Iraqi Republic Railways</h2>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "300px",
            border: "1px solid #b5b5b5",
            borderRadius: "10px",
            right: 20,
            top: 90,
            cursor: "default",
            zIndex: 100,
            padding: "5px",
          }}
        >
          <Autocomplete
            value={selectedType?.id ? selectedType : null}
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
            sx={{
              bgcolor: "#fff",
            }}
          />
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
                {southToNorth.map((station, index) => {
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
                  {startVertical.map((station, index) => {
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
                  {west.map((station, index) => {
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
                  {angle.map((station, index) => {
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
                  {horizontalWest.map((station, index) => {
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
                  {est.map((station, index) => {
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
