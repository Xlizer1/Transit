import {
  TransformComponent,
  TransformWrapper,
  useControls,
} from "react-zoom-pan-pinch";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Slide } from "react-toastify";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import irr from "./assets/irr.gif";
import Station from "./components/Station";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Autocomplete, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router-dom";
import $ from "jquery";
import axios from "axios";
import { toast } from "react-toastify";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const transformComponentRef = useRef(null);
  const params = new URLSearchParams(location.search);
  const updatedSidRef = useRef(params.get("sid"));
  const [selectedType, setSelectedType] = useState(null);
  const [stationsData, setStationsData] = useState({
    startVertical: [
      { id: 617, name: "الزبير" },
      { id: 659, name: "المربد" },
      { id: 618, name: "ام قصر" },
    ],
    southToNorth: [
      { id: 580, name: "المعقل" },
      { id: 615, name: "الشعبية" },
      { id: 614, name: "الطوبة" },
      { id: 613, name: "الرملية" },
      { id: 612, name: "ارطاوي" },
      { id: 611, name: "الغبيشة" },
      { id: 610, name: "لقيط" },
      { id: 609, name: "الشويعرية" },
      { id: 607, name: "الكرماشية" },
      { id: 606, name: "سوق الشيوخ" },
      { id: 605, name: "الخندق" },
      { id: 604, name: "الناصرية" },
      { id: 603, name: "القوزية" },
      { id: 602, name: "البطحاء" },
      { id: 601, name: "الدراجي" },
      { id: 600, name: "الخضر" },
      { id: 599, name: "الخافورة" },
      { id: 598, name: "السماوة" },
      { id: 597, name: "ساوة" },
      { id: 41, name: "الحجامة" },
      { id: 5, name: "الرمثية" },
      { id: 594, name: "ابو طبيخ" },
      { id: 593, name: "الحمزة" },
      { id: 592, name: "نبي مدين" },
      { id: 591, name: "الديوانية" },
      { id: 590, name: "السينية" },
      { id: 589, name: "الشريفية" },
      { id: 588, name: "قوجان" },
      { id: 587, name: "الهاشمية" },
      { id: 29, name: "حديد" },
      { id: 585, name: "الحلة" },
      { id: 584, name: "المحاويل" },
      { id: 581, name: "المسيب" },
      { id: 679, name: "الاسكندرية" },
      { id: 579, name: "المحمودية" },
      { id: 578, name: "اليوسفية" },
      { id: 577, name: "الدورة" },
      { id: 575, name: "المنصور" },
      { id: 572, name: "المحطة المركزية" },
      { id: 1, name: "ساحة الرصف" },
      { id: 663, name: "الكاظمية" },
      { id: 689, name: "التاجي" },
      { id: 691, name: "المشاهدة" },
      { id: 694, name: "الدجيل" },
      { id: 696, name: "بلد" },
      { id: 699, name: "الاسحاقي" },
      { id: 698, name: "سامراء" },
      { id: 702, name: "العباسية" },
      { id: 705, name: "امام دور" },
      { id: 707, name: "تكريت" },
      { id: 709, name: "قلعة رياش" },
      { id: 711, name: "بيجي" },
      { id: 713, name: "حليوات" },
      { id: 715, name: "عين الدبس" },
      { id: 717, name: "تلول البق" },
      { id: 719, name: "الجرناف" },
      { id: 721, name: "وادي المر" },
      { id: 723, name: "القيارة" },
      { id: 725, name: "الشورة" },
      { id: 727, name: "حمام العليل" },
      { id: 729, name: "الموصل" },
      { id: 732, name: "الصابونية" },
      { id: 734, name: "الوائلية" },
      { id: 737, name: "تل عوينات" },
      { id: 739, name: "ربيعة" },
    ],
    west: [
      { id: 664, name: "ابو غريب" },
      { id: 666, name: "شيخ ضاري" },
      { id: 668, name: "الكرمة" },
      { id: 662, name: "الفلوجة" },
      { id: 742, name: "الحبانية" },
      { id: 744, name: "الخالدية" },
      { id: 746, name: "رمادي شرق" },
      { id: 748, name: "رمادي غرب" },
      { id: 750, name: "الرطبة" },
      { id: 752, name: "المحمدي" },
      { id: 754, name: "هيث" },
      { id: 758, name: "المرج" },
      { id: 760, name: "البيادر" },
      { id: 762, name: "البغدادي" },
      { id: 764, name: "حوران" },
      { id: 84, name: "المقلانية" },
      { id: 769, name: "حديثه" },
      { id: 771, name: "الفحيمي" },
      { id: 773, name: "عنه" },
      { id: 779, name: "جباب" },
      { id: 775, name: "ميثاق" },
      { id: 782, name: "القائم" },
      { id: 586, name: "حصيبة" },
    ],
    horizontalWest: [
      { id: 801, name: "عكاشات" },
      { id: 798, name: "الرتقة" },
      { id: 795, name: "الواحة" },
      { id: 793, name: "العنقاء" },
      { id: 790, name: "المجمع" },
      { id: 97, name: "الاسمدة" },
    ],
    angle: [
      { id: 816, name: "الصينية" },
      { id: 814, name: "الثرثار" },
      { id: 812, name: "الصفاء" },
      { id: 810, name: "الوادي" },
      { id: 808, name: "الهضاب" },
      { id: 806, name: "العطاء" },
    ],
    est: [
      { id: 818, name: "الفتحة" },
      { id: 820, name: "المراعي" },
      { id: 822, name: "الرياض" },
      { id: 824, name: "الثورة" },
      { id: 828, name: "كركوك البضائع" },
      { id: 830, name: "كركوك المسافرين" },
    ],
    trains: [],
  });

  const [queryParams, setQueryParams] = useState({});
  const [firstTimeLoaded, setFirstTimeLoaded] = useState(true);
  const [units, setUnits] = useState([]);
  const [filteredTrains, setFilteredTrains] = useState([]);
  const [errorOccored, setErrorOccored] = useState(false);

  useEffect(() => {
    if (firstTimeLoaded) {
      const queryParamsObject = {
        sid: params.get("sid"),
        user: params.get("user"),
        baseUrl: params.get("baseUrl"),
        hostUrl: params.get("hostUrl"),
        b: params.get("b"),
        v: params.get("v"),
      };
      setFirstTimeLoaded(false);
      setQueryParams(queryParamsObject);
    }
  }, [location, firstTimeLoaded]);

  const renewSession = useCallback(() => {
    if (queryParams.baseUrl) {
      const targetUrl = `${queryParams.baseUrl}/wialon/ajax.html?svc=core/duplicate&params={"operateAs":""}&sid=${updatedSidRef.current}`;
      $.ajax({
        type: "GET",
        url: targetUrl,
        dataType: "jsonp",
        success: function (response) {
          if (response && response.eid) {
            updatedSidRef.current = response.eid;
            const newParams = new URLSearchParams(location.search);
            newParams.set("sid", response.eid);
            navigate(`${location.pathname}?${newParams.toString()}`, {
              replace: true,
            });
          } else {
            console.error("Failed to renew session ID", response);
            setErrorOccored(true);
          }
        },
        error: function (error) {
          console.error("Error renewing session ID:", error);
          setErrorOccored(true);
        },
      });
    }
  }, [queryParams.baseUrl]);

  const getUnits = async () => {
    const sid = updatedSidRef.current;
    const baseUrl = params.get("baseUrl");

    if (baseUrl && sid) {
      const url = `${baseUrl}/wialon/ajax.html?svc=core/search_items&params={"spec":{"itemsType":"avl_unit","propName":"sys_name","propValueMask":"*","sortType":"sys_last_message"},"force":1,"flags":1025,"from":0,"to":0}&sid=${sid}`;

      try {
        const response = await $.ajax({
          type: "GET",
          url: url,
          dataType: "jsonp",
        });
        if (response && response.items && response.items.length) {
          let trains = [];
          const unitsRes = response.items;
          unitsRes.map((unit) => {
            const obj = {
              id: unit?.id,
              name: unit.nm,
              lon: unit.pos?.x,
              lat: unit.pos?.y,
              lmsgt: unit.lmsg?.t,
              type: (() => {
                const currentTime = Math.floor(Date.now() / 1000);
                const timeDiffMinutes = (currentTime - unit.lmsg?.t) / 60;

                if (timeDiffMinutes < 10) return 1;
                if (timeDiffMinutes <= 30) return 2;
                return 3;
              })(),
              color: (() => {
                const currentTime = Math.floor(Date.now() / 1000);
                const timeDiffMinutes = (currentTime - unit.lmsg?.t) / 60;

                if (timeDiffMinutes < 10) return "#0f0";
                if (timeDiffMinutes <= 30) return "#ff0";
                return "#f00";
              })(),
            };
            trains.push(obj);
          });
          setUnits(trains);
        }
      } catch (error) {
        console.log("Error fetching units:", error);
        setErrorOccored(true);
      }
    }
  };

  const getStations = async () => {
    const sid = updatedSidRef.current;
    const newTrainsArr = [];
    if (units?.length && sid) {
      const paramsArray = [];

      const stationsArray = [
        1, 2, 5, 7, 11, 12, 18, 29, 35, 41, 572, 575, 577, 578, 579, 580, 581,
        582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 596,
        597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 609, 610, 611,
        612, 613, 614, 615, 617, 618, 620, 659, 662, 663, 664, 666, 668, 673,
        675, 679, 680, 681, 687, 689, 691, 694, 696, 698, 699, 702, 705, 707,
        709, 711, 713, 715, 717, 719, 721, 723, 725, 727, 729, 732, 734, 737,
        739, 742, 744, 746, 748, 750, 752, 754, 758, 760, 762, 764, 769, 771,
        773, 775, 779, 782, 790, 793, 795, 798, 801, 806, 808, 810, 812, 814,
        816, 818, 820, 822, 824, 828, 830, 1492,
      ];

      units.slice(0, 32).map((train) => {
        if (train.lat && train.lon && updatedSidRef.current) {
          paramsArray.push(
            `{"svc":"resource/get_zones_by_point","params":{"spec":{"zoneId":{"18636489":[${stationsArray}]}, "lat":${train.lat},"lon":${train.lon}}}}`
          );
        }
      });

      const mainURL2 = `https://hst-api.wialon.com/wialon/ajax.html?svc=core/batch&params={"params":[${paramsArray}],"flags":0}&sid=${sid}`;

      if (paramsArray?.length) {
        try {
          const res = await $.ajax({
            method: "POST",
            url: mainURL2,
            dataType: "jsonp",
          });
          const stations = res?.map((item) => item["18636489"] || 0).flat();
          newTrainsArr.splice(0, newTrainsArr.length);
          units.map((unit, index) => {
            const newUnitObj = {
              ...unit,
              station_id: stations[index],
            };
            newTrainsArr.push(newUnitObj);
          });
          setStationsData((prevState) => ({
            ...prevState,
            trains: newTrainsArr,
          }));
          console.log("Updated Trains Locations!");
          toast.success("yes");
        } catch (error) {
          console.log("Couldn't update trains locations!", error);
        }
      } else {
        console.log("Trains params array is empty!");
      }
    } else {
      console.log("There are no units!");
    }
  };

  useEffect(() => {
    const renewSessionIntervalId = setInterval(renewSession, 60000);
    renewSession();

    const getUnitsIntervalId = setInterval(getUnits, 5000);
    getUnits();

    return () => {
      clearInterval(renewSessionIntervalId);
      clearInterval(getUnitsIntervalId);
    };
  }, [renewSession]);

  useEffect(() => {
    getStations();
  }, [units]);

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    getUnits();
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

  const trainTypes = useMemo(
    () => [
      { id: 1, name: "Active train", color: "#0f0" },
      { id: 2, name: "In the process of launching", color: "#ff0" },
      { id: 3, name: "Inactive train", color: "#f00" },
    ],
    []
  );

  useEffect(() => {
    if (stationsData?.trains?.length && selectedType?.id) {
      setFilteredTrains(() => {
        return stationsData?.trains?.filter(
          (train) => train?.type === selectedType?.id
        );
      });
    } else {
      setFilteredTrains(() => {
        return stationsData?.trains;
      });
    }
  }, [selectedType, units]);

  useEffect(() => {
    if (errorOccored) {
      alert(
        "خطأ اثناء استرجاع البيانات, الرجاء اعاده فتح الموقع من لوحة التحكم."
      );
    }
  }, [errorOccored]);

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
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
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
                      trains={filteredTrains?.filter(
                        (tr) => tr?.station_id === station?.id
                      )}
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
                        trains={filteredTrains?.filter(
                          (tr) => tr?.station_id === station?.id
                        )}
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
                        trains={filteredTrains?.filter(
                          (tr) => tr?.station_id === station?.id
                        )}
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
                        trains={filteredTrains?.filter(
                          (tr) => tr?.station_id === station?.id
                        )}
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
                        trains={filteredTrains?.filter(
                          (tr) => tr?.station_id === station?.id
                        )}
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
                        trains={filteredTrains?.filter(
                          (tr) => tr?.station_id === station?.id
                        )}
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
