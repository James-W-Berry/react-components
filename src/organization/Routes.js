import React, { useState } from "react";
import Gauge from "../components/Gauge";
import Slider from "@material-ui/core/Slider";

function ControlledGauge() {
  const [value, setValue] = useState(50);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "80vw",
        height: "80vh",
      }}
    >
      <div
        style={{
          color: "#8b8ba7",
          marginTop: "0.6em",
          fontSize: "3em",
          lightHeight: "1.3em",
          fontWeight: "900",
          flex: 1,
          alignSelf: "center",
        }}
      >
        Gauge
      </div>

      <div
        style={{
          marginTop: "15%",
          display: "flex",
          flexDirection: "row",
          width: "80vw",
          height: "80vh",
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              color: "#8b8ba7",
              marginTop: "0.6em",
              fontSize: "1.3em",
              lightHeight: "1.3em",
              fontWeight: "700",
            }}
          >
            Change value
          </div>
          <Slider
            value={value}
            onChange={(event, newValue) => setValue(newValue)}
            aria-labelledby="continuous-slider"
          />
          <div
            style={{
              color: "#8b8ba7",
              marginTop: "0.6em",
              fontSize: "1.3em",
              lightHeight: "1.3em",
              fontWeight: "700",
            }}
          >
            Change min
          </div>
          <Slider
            value={min}
            onChange={(event, newValue) => setMin(newValue)}
            aria-labelledby="continuous-slider"
          />
          <div
            style={{
              color: "#8b8ba7",
              marginTop: "0.6em",
              fontSize: "1.3em",
              lightHeight: "1.3em",
              fontWeight: "700",
            }}
          >
            Change max
          </div>
          <Slider
            value={max}
            onChange={(event, newValue) => setMax(newValue)}
            aria-labelledby="continuous-slider"
          />
        </div>

        <div style={{ flex: 1 }}>
          <Gauge value={value} min={min} max={max} />
        </div>
      </div>
    </div>
  );
}

const Routes = [
  {
    path: "/gauge",
    sidebarName: "Gauge",
    component: ControlledGauge,
  },
];

export default Routes;
