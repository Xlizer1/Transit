import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "@fontsource/cairo/400.css";
import "../App.css";

function Station({
  index,
  station,
  marginRight,
  marginLeft,
  left,
  top,
  transform,
  trains,
  trainTypes,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const stationTrains = trains?.filter(
    (train) => train?.station_id === station?.id
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment key={index}>
      <div
        style={{
          position: "relative",
          marginRight: marginRight ? marginRight : 0,
          marginLeft: marginLeft ? marginLeft : 0,
          height: "20px",
          width: "20px",
          borderRadius: "50%",
          backgroundColor: "#1c1c1c",
        }}
      >
        <span
          style={{
            left: left ? left : 0,
            position: "relative",
            display: "block",
            top: top ? top : 0,
            fontSize: "42px",
            fontWeight: "bold",
            textAlign: "center",
            fontFamily: "cairo",
            lineHeight: "50px",
            minWidth: "230px",
            backgroundColor: "#1c1c1c",
            borderRadius: "15px",
            color: "white",
            transform: transform ? transform : "none",
            padding: "15px",
          }}
        >
          {station?.name}
          <div
            style={{
              position: "absolute",
              bottom: index % 2 === 1 ? -60 : "unset",
              top: index % 2 === 0 ? -60 : "unset",
              left: 0,
              display: "flex",
              flexWrap: "wrap-reverse",
              gap: 5,
              width: "230px",
            }}
          >
            {stationTrains?.slice(0, 3)?.map((train, index) => {
              const trainType = trainTypes?.find(
                (type) => type?.id === train?.type
              );
              return (
                <React.Fragment key={index}>
                  <div
                    style={{
                      width: "53px",
                      height: "53px",
                      backgroundColor: trainType.color,
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      animation:
                        trainType.color === "#0f0"
                          ? "glow 0.7s infinite"
                          : "none",
                    }}
                  >
                    <span style={{ fontSize: "26px" }}>{train?.id}</span>
                  </div>
                </React.Fragment>
              );
            })}
            {stationTrains?.length && stationTrains?.length > 3 ? (
              <div>
                <button
                  style={{
                    width: "53px",
                    height: "53px",
                    backgroundColor: "grey",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    border: "none",
                    cursor: "pointer",
                    // position: "relative",
                  }}
                >
                  <span
                    onClick={handleClick}
                    style={{
                      fontSize: "60px",
                      color: "#fff",
                      top: "50%",
                      left: "50%",
                      transform: "translate(0%, -35%)",
                    }}
                  >
                    ...
                  </span>
                </button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {stationTrains?.map((train, index) => {
                    const trainType = trainTypes?.find(
                      (type) => type?.id === train?.type
                    );
                    return (
                      <MenuItem onClick={handleClose} key={index}>
                        <div
                          style={{
                            // borderBottom:
                            //   stationTrains?.length - 1 !== index
                            //     ? "1px solid #ababab"
                            //     : "none",
                            borderLeft: `10px solid ${trainType?.color}`,
                            paddingLeft: "10px",
                            paddingBottom: "5px",
                            width: "100%",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 5,
                              }}
                            >
                              Train ID.
                              <span
                                style={{
                                  fontSize: "22px",
                                }}
                              >
                                {train?.id}
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 5,
                              }}
                            >
                              Train Status:
                              <span
                                style={{
                                  fontSize: "22px",
                                }}
                              >
                                {
                                  trainTypes?.find((type) => {
                                    if (type?.id === train?.type) return type;
                                  }).name
                                }
                              </span>
                            </div>
                          </div>
                        </div>
                      </MenuItem>
                    );
                  })}
                </Menu>
              </div>
            ) : null}
          </div>
        </span>
      </div>
    </React.Fragment>
  );
}

export default Station;
