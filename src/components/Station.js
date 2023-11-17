import React from "react";

export function Station({
  index,
  station,
  marginRight,
  marginLeft,
  left,
  top,
  transform,
}) {
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
            minWidth: "230px",
            backgroundColor: "#1c1c1c",
            borderRadius: "15px",
            color: "white",
            transform: transform ? transform : "none",
            padding: "15px",
          }}
        >
          {station.name}
        </span>
      </div>
    </React.Fragment>
  );
}
