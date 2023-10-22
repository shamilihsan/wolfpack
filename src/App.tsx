import "./App.css";

import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
// const data = [
//   { name: "01-09 06", uv: 400, pv: 2400, amt: 2400 },
//   { name: "01-09 08", uv: 300, pv: 2400, amt: 2400 },
//   { name: "01-09 10", uv: 50, pv: 2400, amt: 2400 },
//   { name: "01-09 12", uv: 200, pv: 2400, amt: 2400 },
//   { name: "01-09 14", uv: 200, pv: 2400, amt: 2400 },
//   { name: "01-09 16", uv: 200, pv: 2400, amt: 2400 },
//   { name: "01-09 18", uv: 200, pv: 2400, amt: 2400 },
// ];

import data from "./dataset";

// const data = [
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.025433,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.025433,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.025433,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.025433,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.025433,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.025433,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.025433,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.025433,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.025433,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.025433,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.02548,
//   },
//   {
//     name: "01/09/2023 06:00",
//     MW: -0.02548,
//   },
// ];

function App() {
  return (
    <>
      <LineChart
        width={1400}
        height={700}
        data={data}
        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="MW" stroke="#8884d8" dot={false} />

        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </>
  );
}

export default App;
