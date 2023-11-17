import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import "./App.css";
import React, { useEffect } from "react";
import irr from "./assets/irr.gif";
import { Station } from "./components/Station";

const App = () => {
  const trains = [
    {
      id: 1,
      station_id: 1,
    },
    {
      id: 2,
      station_id: 1,
    },
    {
      id: 3,
      station_id: 1,
    },
    {
      id: 4,
      station_id: 1,
    },
    {
      id: 4,
      station_id: 1,
    },
    {
      id: 4,
      station_id: 1,
    },
    {
      id: 4,
      station_id: 1,
    },
  ];

  const startVertical = [
    { id: 1, name: "الزبير" },
    { id: 2, name: "المربد" },
    { id: 3, name: "ام قصر" },
  ];

  const southToNorth = [
    { id: 1, name: "المعقل" },
    { id: 2, name: "الشعبية" },
    { id: 3, name: "الطوبة" },
    { id: 4, name: "الرملية" },
    { id: 5, name: "ارطاوي" },
    { id: 6, name: "الغبيشة" },
    { id: 7, name: "لقيط" },
    { id: 8, name: "الشويعرية" },
    { id: 9, name: "الكرماشية" },
    { id: 10, name: "سوق الشيوخ" },
    { id: 11, name: "الخندق" },
    { id: 12, name: "الناصرية" },
    { id: 13, name: "القوزية" },
    { id: 14, name: "البطحة" },
    { id: 15, name: "الدراجي" },
    { id: 16, name: "الخضر" },
    { id: 17, name: "الخافورة" },
    { id: 18, name: "السماوة" },
    { id: 19, name: "ساوة" },
    { id: 20, name: "الحجامة" },
    { id: 21, name: "الرمثية" },
    { id: 22, name: "ابو طبيخ" },
    { id: 23, name: "الحمزة" },
    { id: 24, name: "نبي مدين" },
    { id: 25, name: "الديوانية" },
    { id: 26, name: "السينية" },
    { id: 27, name: "الشريفية" },
    { id: 28, name: "قوجان" },
    { id: 29, name: "الهاشمية" },
    { id: 30, name: "حديد" },
    { id: 31, name: "الحلة" },
    { id: 32, name: "المحاويل" },
    { id: 33, name: "المسيب" },
    { id: 34, name: "الاسكندرية" },
    { id: 35, name: "المحمودية" },
    { id: 44, name: "اليوسفية" },
    { id: 44, name: "الدورة" },
    { id: 38, name: "المنصور" },
    { id: 39, name: "المحطة المركزية" },
    { id: 40, name: "ساحة الرصف" },
    { id: 41, name: "الكاظمية" },
    { id: 42, name: "التاجي" },
    { id: 43, name: "المشاهدة" },
    { id: 44, name: "الدجيل" },
    { id: 45, name: "بلد" },
    { id: 46, name: "الاسحاقي" },
    { id: 47, name: "سامراء" },
    { id: 48, name: "العباسي" },
    { id: 49, name: "امام دور" },
    { id: 50, name: "تكريت" },
    { id: 51, name: "الرياش" },
    { id: 52, name: "بيجي" },
    { id: 53, name: "حليوان" },
    { id: 54, name: "عين الدبس" },
    { id: 56, name: "تلول البق" },
    { id: 57, name: "الجوناف" },
    { id: 58, name: "وادي المر" },
    { id: 59, name: "القيارة" },
    { id: 60, name: "الشورة" },
    { id: 61, name: "حمام العليل" },
    { id: 62, name: "الموصل" },
    { id: 63, name: "صابونية" },
    { id: 64, name: "وائلية" },
    { id: 65, name: "عوينات" },
    { id: 66, name: "ربيعة" },
  ];

  const angle = [
    { id: 1, name: "الصينية" },
    { id: 2, name: "الثرثار" },
    { id: 3, name: "الصفاء" },
    { id: 4, name: "الوادي" },
    { id: 5, name: "الهضاب" },
    { id: 6, name: "العطاء" },
  ];

  const horizontalWest = [
    { id: 6, name: "عكاشات" },
    { id: 5, name: "الرتقة" },
    { id: 4, name: "الواحة" },
    { id: 3, name: "العنقاء" },
    { id: 2, name: "المجمع" },
    { id: 1, name: "الاسمدة" },
  ];

  const west = [
    { id: 1, name: "ابو غريب" },
    { id: 2, name: "شيخ ضاري" },
    { id: 3, name: "الكوفة" },
    { id: 4, name: "الفلوجة" },
    { id: 5, name: "الحبانية" },
    { id: 6, name: "الخالدية" },
    { id: 7, name: "رمادي شرق" },
    { id: 8, name: "رمادي غرب" },
    { id: 9, name: "الرطبة" },
    { id: 10, name: "المحمدي" },
    { id: 11, name: "هيث" },
    { id: 12, name: "المرج" },
    { id: 13, name: "البيادر" },
    { id: 14, name: "البغدادي" },
    { id: 15, name: "حوران" },
    { id: 16, name: "المقلانية" },
    { id: 17, name: "حديثه" },
    { id: 18, name: "الفحيمي" },
    { id: 19, name: "عنه" },
    { id: 20, name: "جباب" },
    { id: 21, name: "ميثاق" },
    { id: 22, name: "القائم" },
    { id: 23, name: "حصيبة" },
  ];

  const est = [
    { id: 1, name: "الفتحة" },
    { id: 2, name: "المراعي" },
    { id: 3, name: "الرياض" },
    { id: 4, name: "الثورة" },
    { id: 5, name: "كركوك البضائع" },
    { id: 6, name: "كركوك المسافرين" },
  ];

  useEffect(() => {
    const centerHeight = document.body.scrollHeight / 1.547;
    const centerWidth = document.body.scrollWidth / 1.8;
    window.scrollTo(centerWidth, centerHeight);
  }, []);

  const divWidth = 15300;
  const divHeight = 6500;
  const initialPositionX = -7250;
  const initialPositionY = -2850;

  return (
    <div className="App">
      <div
        style={{
          width: "100vw",
          height: "70px",
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
            <img src={irr} alt="#" width="50px" height="50px" />
            <h1>Iraqi Republic Railways</h1>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            width: "240px",
            height: "700px",
            border: "1px solid #b5b5b5",
            borderRadius: "10px",
            right: 20,
            top: 90,
          }}
        ></div>
      </div>
      <div
        className="zoom"
        style={{
          width: "100vw",
          height: "100vh",
          // backgroundColor: "#d3d3d3",
          overflow: "hidden",
        }}
      >
        <TransformWrapper
          initialScale={1}
          initialPositionX={initialPositionX}
          initialPositionY={initialPositionY}
          limitToBounds={false}
        >
          {({ zoomIn, zoomOut, ...rest }) => (
            <div
              style={{
                width: "30px",
                height: "100px",
                backgroundColor: "red",
                position: "absolute",
                zIndex: 100,
                bottom: 0,
                right: 0,
              }}
            >
              <button onClick={zoomIn}>+</button>
              <button onClick={zoomOut}>-</button>
            </div>
          )}
          <TransformComponent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: `${divHeight}px`,
                width: `${divWidth}px`,
                position: "relative",
                // backgroundColor: "blueviolet",
                zIndex: "-10",
                scale: "0.2",
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
                    <React.Fragment key={index}>
                      <div
                        style={{
                          display: "block",
                          marginLeft: index === 0 ? 0 : "184px",
                          height: "20px",
                          width: "20px",
                          borderRadius: "50%",
                          backgroundColor: "#1c1c1c",
                        }}
                      >
                        <span
                          style={{
                            left: `-100px`,
                            position: "relative",
                            display: "block",
                            top: index % 2 === 0 ? "50px" : "-110px",
                            fontWeight: "bold",
                            textAlign: "center",
                            backgroundColor: "#1c1c1c",
                            borderRadius: "15px",
                            color: "white",
                            fontSize: "42px",
                            minWidth: "230px",
                            padding: "15px",
                          }}
                        >
                          {station.name}
                        </span>
                      </div>
                    </React.Fragment>
                  );
                })}
                <div
                  style={{
                    width: "700px",
                    height: "20px",
                    backgroundColor: "#ccc",
                    position: "absolute",
                    top: "360px",
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
                        station={station}
                        marginLeft="194px"
                        left="-103px"
                        top={index % 2 === 0 ? "130px" : "-220px"}
                        transform="rotate(-90deg)"
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
                        station={station}
                        marginLeft="160px"
                        left="-103px"
                        top={index % 2 === 0 ? "130px" : "-220px"}
                        transform="rotate(90deg)"
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
                        station={station}
                        marginRight="330px"
                        marginLeft="300px"
                        left="-220px"
                        top="120px"
                        transform="rotate(127.3deg)"
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
                        station={station}
                        marginRight="740px"
                        left="-100px"
                        top={index % 2 === 0 ? "60px" : "-120px"}
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
                        station={station}
                        marginRight="180px"
                        left="-105px"
                        top={index % 2 === 0 ? "120px" : "-210px"}
                        transform="rotate(90deg)"
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
