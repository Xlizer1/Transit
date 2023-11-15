import "./App.css";
import React from "react";

const App = () => {
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

    { id: 41, name: "التاجي" },
    { id: 41, name: "المشاهدة" },
    { id: 41, name: "الدجيل" },
    { id: 41, name: "بلد" },
    { id: 41, name: "الاسحاقي" },
    { id: 41, name: "سامراء" },
    { id: 41, name: "العباسي" },
    { id: 41, name: "امام دور" },
    { id: 41, name: "تكريت" },
    { id: 41, name: "الرياش" },
    { id: 41, name: "بيجي" },
    { id: 41, name: "حليوان" },
    { id: 41, name: "عين الدبس" },
    { id: 41, name: "تلول البق" },
    { id: 41, name: "الجوناف" },
    { id: 41, name: "وادي المر" },
    { id: 41, name: "القيارة" },
    { id: 41, name: "الشورة" },
    { id: 41, name: "حمام العليل" },
    { id: 41, name: "الموصل" },
    { id: 41, name: "صابونية" },
    { id: 41, name: "وائلية" },
    { id: 41, name: "عوينات" },
    { id: 41, name: "ربيعة" },
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

  return (
    <div className="App">
      <div
        style={{
          width: "14740px",
          height: "15px",
          backgroundColor: "#ccc",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          gap: "30px",
          borderRadius: "15px",
        }}
      >
        {southToNorth.map((station, index) => {
          return (
            <React.Fragment key={index}>
              <div
                style={{
                  // left: `calc(${progress}% - 5px)`,
                  position: "relative",
                  marginRight: "180px",
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#7a316f",
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
                    backgroundColor: "#7a316f",
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
      </div>
      <div
        style={{
          width: "700px",
          height: "15px",
          backgroundColor: "#ccc",
          position: "absolute",
          top: "57%",
          left: "14.34%",
          display: "flex",
          gap: "30px",
          borderRadius: "15px",
          transform: "translate(-50%, -50%) rotate(90deg)",
          zIndex: -1,
        }}
      >
        {startVertical.map((station, index) => {
          return (
            <React.Fragment key={index}>
              <div
                style={{
                  // left: `calc(${progress}% - 5px)`,
                  position: "relative",
                  marginLeft: "194px",
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#7a316f",
                }}
              >
                <span
                  style={{
                    left: `-103px`,
                    position: "absolute",
                    display: "block",
                    top: index % 2 === 0 ? "130px" : "-220px",
                    fontSize: "42px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // height: "20px",
                    minWidth: "230px",
                    backgroundColor: "#7a316f",
                    borderRadius: "15px",
                    color: "white",
                    transform: "rotate(-90deg)",
                    padding: "15px",
                  }}
                >
                  {station.name}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div
        style={{
          width: "4800px",
          height: "15px",
          backgroundColor: "#ccc",
          position: "absolute",
          top: "2%",
          left: "59.195%",
          display: "flex",
          gap: "30px",
          borderRadius: "15px",
          transform: "translate(-50%, -50%) rotate(-90deg)",
          zIndex: -1,
        }}
      >
        {west.map((station, index) => {
          return (
            <React.Fragment key={index}>
              <div
                style={{
                  // left: `calc(${progress}% - 5px)`,
                  position: "relative",
                  marginLeft: "160px",
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#7a316f",
                }}
              >
                <span
                  style={{
                    left: `-103px`,
                    position: "absolute",
                    display: "block",
                    top: index % 2 === 0 ? "130px" : "-220px",
                    fontSize: "42px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // height: "20px",
                    minWidth: "230px",
                    backgroundColor: "#7a316f",
                    borderRadius: "15px",
                    color: "white",
                    transform: "rotate(90deg)",
                    padding: "15px",
                  }}
                >
                  {station.name}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
      <div
        style={{
          width: "4190px",
          height: "15px",
          backgroundColor: "#ccc",
          position: "absolute",
          top: "16.8%",
          left: "65.55%",
          display: "flex",
          gap: "30px",
          borderRadius: "15px",
          transform: "translate(-50%, -50%) rotate(-127.3deg)",
          zIndex: -2,
        }}
      >
        {angle.map((station, index) => {
          return (
            <React.Fragment key={index}>
              <div
                style={{
                  // left: `calc(${progress}% - 5px)`,
                  position: "relative",
                  marginRight: "330px",
                  marginLeft: "300px",
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#7a316f",
                }}
              >
                <span
                  style={{
                    left: `-220px`,
                    top: "120px",
                    position: "relative",
                    display: "block",
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "#7a316f",
                    borderRadius: "15px",
                    color: "white",
                    transform: "rotate(125deg)",
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
      </div>
      <div
        style={{
          width: "3970px",
          height: "15px",
          backgroundColor: "#ccc",
          position: "absolute",
          top: "-41.7%",
          left: "51%",
          display: "flex",
          gap: "30px",
          borderRadius: "15px",
          transform: "translate(-50%, -50%) ",
          zIndex: -2,
        }}
      >
        {horizontalWest.map((station, index) => {
          return (
            <React.Fragment key={index}>
              <div
                style={{
                  // left: `calc(${progress}% - 5px)`,
                  position: "relative",
                  marginRight: "740px",
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#7a316f",
                }}
              >
                <span
                  style={{
                    left: `-100px`,
                    position: "relative",
                    display: "block",
                    top: index % 2 === 0 ? "60px" : "-120px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "#7a316f",
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
      </div>
      <div
        style={{
          width: "1400px",
          height: "15px",
          backgroundColor: "#ccc",
          position: "absolute",
          top: "64%",
          left: "71.85%",
          display: "flex",
          gap: "30px",
          borderRadius: "15px",
          transform: "translate(-50%, -50%) rotate(-90deg)",
          zIndex: -1,
        }}
      >
        {est.map((station, index) => {
          return (
            <React.Fragment key={index}>
              <div
                style={{
                  // left: `calc(${progress}% - 5px)`,
                  position: "relative",
                  marginRight: "180px",
                  height: "20px",
                  width: "20px",
                  borderRadius: "50%",
                  backgroundColor: "#7a316f",
                }}
              >
                <span
                  style={{
                    left: `-105px`,
                    position: "absolute",
                    display: "block",
                    top: index % 2 === 0 ? "120px" : "-210px",
                    fontSize: "42px",
                    fontWeight: "bold",
                    textAlign: "center",
                    // height: "20px",
                    minWidth: "230px",
                    backgroundColor: "#7a316f",
                    borderRadius: "15px",
                    color: "white",
                    transform: "rotate(90deg)",
                    padding: "15px",
                  }}
                >
                  {station.name}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default App;
