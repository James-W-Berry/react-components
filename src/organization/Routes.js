import React, { useState } from "react";
import Gauge from "../components/Gauge";
import Slider from "@material-ui/core/Slider";

function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        color: "#8b8ba7",
        fontSize: "3em",
        fontWeight: "900",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Enjoy this library of reusable React components
    </div>
  );
}

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
        width: "100vw",
        height: "100vh",
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
          color: "#8b8ba7",
          marginTop: "0.6em",
          fontSize: "1em",
          lightHeight: "1.3em",
          fontWeight: "600",
          flex: 1,
          alignSelf: "center",
        }}
      >
        <a
          style={{ textDecoration: "none" }}
          href=" https://github.com/James-W-Berry/react-components/blob/master/src/components/Gauge.js
"
        >
          source on Github
        </a>
      </div>

      <div
        style={{
          marginTop: "15%",
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "100vh",
        }}
      >
        <div style={{ flex: 1, marginLeft: "15%" }}>
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
            max={max}
            min={min}
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

        <div style={{ flex: 1, marginRight: "15%" }}>
          <Gauge value={value} min={min} max={max} />
        </div>
      </div>
    </div>
  );
}

const Routes = [
  {
    path: "/",
    sidebarName: "Home",
    component: Home,
  },
  {
    path: "/gauge",
    sidebarName: "Gauge",
    component: ControlledGauge,
  },
];

export default Routes;
