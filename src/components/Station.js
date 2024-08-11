import React, { useEffect, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "@fontsource/cairo/400.css";
import "../App.css";
import { Tooltip } from "@mui/material";

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
              width: "240px",
            }}
          >
            {trains?.slice(0, 3)?.map((train, index) => {
              return (
                <Tooltip title={train?.name} key={index}>
                  <div
                    style={{
                      width: "55px",
                      height: "55px",
                      backgroundColor: train?.color,
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      animation:
                        train?.color === "#0f0" ? "glow 0.7s infinite" : "none",
                    }}
                  >
                    <span style={{ fontSize: "26px" }}>
                      {
                        train?.name
                          ?.split("- ")
                          [train?.name?.split(" - ").length - 1].split(" ")[0]
                      }
                    </span>
                  </div>
                </Tooltip>
              );
            })}
            {trains?.length && trains?.length > 3 ? (
              <div>
                <button
                  style={{
                    width: "53px",
                    height: "53px",
                    backgroundColor: "grey",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <span
                    onClick={handleClick}
                    style={{
                      fontSize: "23px",
                      fontWeight: "bold",
                      color: "#fff",
                      marginTop: "3px",
                    }}
                  >
                    + {trains?.length - 3}
                  </span>
                </button>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  {trains?.map((train, index) => {
                    return (
                      <MenuItem onClick={handleClose} key={index}>
                        <div
                          style={{
                            // borderBottom:
                            //   trains?.length - 1 !== index
                            //     ? "1px solid #ababab"
                            //     : "none",
                            borderLeft: `10px solid ${train?.color}`,
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
                              Train
                              <span
                                style={{
                                  fontSize: "22px",
                                }}
                              >
                                {train?.name}
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
                                  })?.name
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
