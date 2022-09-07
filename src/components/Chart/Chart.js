import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const totalMax = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );
  const chartBars = props.dataPoints.map((dataPoint) => (
    <ChartBar
      key={dataPoint.label}
      value={dataPoint.value}
      maxValue={totalMax}
      label={dataPoint.label}
    />
  ));

  return <div className="chart">{chartBars}</div>;
};

export default Chart;
