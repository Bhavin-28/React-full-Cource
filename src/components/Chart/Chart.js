import React from "react";
import ChartBar from "./ChartBar";
import ",/Chart.css";

function Chart(props) {
  return (
    <div>
      return (
      <div className="chart">
        {props.dataPoint.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={null}
            label={dataPoint.label}
          />
        ))}
      </div>
      )
    </div>
  );
}

export default Chart;
