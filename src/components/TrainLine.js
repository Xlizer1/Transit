import React from "react";
import "../App.css";
import { Tooltip } from "@mui/material";

const TrainLine = ({ stations, trains }) => {
  const thresholdDistance = 0.1;

  const getDistance = (lon1, lat1, lon2, lat2) => {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
  };

  const calculateProgress = (longitude, latitude) => {
    const totalDistance = getDistance(
      stations[0].longitude,
      stations[0].latitude,
      stations[stations.length - 1].longitude,
      stations[stations.length - 1].latitude
    );

    const distanceFromStart = getDistance(
      stations[0].longitude,
      stations[0].latitude,
      longitude,
      latitude
    );
    return (distanceFromStart / totalDistance) * 100;
  };

  const groupTrains = () => {
    const groupedTrains = [];
    for (const vehicle of trains) {
      let foundGroup = false;
      for (const group of groupedTrains) {
        const distance = getDistance(
          group.longitude,
          group.latitude,
          vehicle.longitude,
          vehicle.latitude
        );
        if (distance <= thresholdDistance) {
          group.trains.push(vehicle);
          foundGroup = true;
          break;
        }
      }
      if (!foundGroup) {
        groupedTrains.push({
          longitude: vehicle.longitude,
          latitude: vehicle.latitude,
          trains: [vehicle],
        });
      }
    }
    return groupedTrains;
  };

  stations.sort(
    (a, b) =>
      calculateProgress(a.longitude, a.latitude) -
      calculateProgress(b.longitude, b.latitude)
  );

  const groupedTrains = groupTrains();

  groupedTrains.sort(
    (a, b) =>
      calculateProgress(a.longitude, a.latitude) -
      calculateProgress(b.longitude, b.latitude)
  );

  return (
    <div className="lineContainer">
      <div className="line">
        {stations.map((station, index) => {
          const progress = calculateProgress(
            station.longitude,
            station.latitude
          );
          const trainsAtStation = trains.filter(
            (vehicle) =>
              calculateProgress(vehicle.longitude, vehicle.latitude) ===
              progress
          );

          return (
            <React.Fragment key={index}>
              <div
                className="stationCircle"
                style={{ left: `calc(${progress}% - 5px)` }}
              />
              <Tooltip
                title={trainsAtStation
                  .map((vehicle) => `Vehicle ${vehicle.id}`)
                  .join(", ")}
                arrow
              >
                <span
                  className="stationLabel"
                  style={{ left: `calc(${progress}% - 30px)` }}
                >
                  {station.name}
                </span>
              </Tooltip>
            </React.Fragment>
          );
        })}

        {groupedTrains.map((group, index) => {
          const groupProgress = calculateProgress(
            group.longitude,
            group.latitude
          );

          let groupLabel;
          if (group.trains.length === 1) {
            // If only one vehicle, display its name
            groupLabel = `Vehicle ${group.trains[0].id}`;
          } else if (group.trains.length === 2) {
            // If two trains, display their names separated by a comma
            groupLabel = `Vehicle ${group.trains[0].id}, Vehicle ${group.trains[1].id}`;
          } else {
            // If more than two trains, display "Multiple Trains"
            groupLabel = `Multiple Vehicles`;
          }

          return (
            <React.Fragment key={index}>
              <Tooltip
                title={group.trains
                  .map((vehicle) => `Vehicle ${vehicle.id}`)
                  .join(", ")}
                arrow
              >
                <div
                  className="vehicle"
                  style={{ left: `calc(${groupProgress}% - 5px)` }}
                />
              </Tooltip>
              <Tooltip
                title={group.trains
                  .map((vehicle) => `Vehicle ${vehicle.id}`)
                  .join(", ")}
                arrow
              >
                <span
                  className="trainLabel"
                  style={{
                    left: `calc(${groupProgress}% - 25px)`,
                    height: group.trains.length > 2 ? "35px" : "20px",
                    top: group.trains.length > 2 ? "-50px" : "-40px",
                    backgroundColor: "#1D5D9B",
                  }}
                >
                  {groupLabel}
                </span>
              </Tooltip>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TrainLine;
