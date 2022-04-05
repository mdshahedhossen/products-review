import React, { useEffect, useState } from "react";
import './Deshboard.css'
import {
    Area,
    AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Deshboard = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("rechartdata.json")
      .then((res) => res.json())
      .then((data) => setCharts(data));
  }, []);


  return (
    <div className="chart-container">
      <div className="line-chart">
        <LineChart width={600} height={350} data={charts}>
          <Line type="monotone" dataKey={"revenue"}></Line>
          <Line type="monotone" dataKey={"investment"}></Line>
          <Line type="monotone" dataKey={"sell"}></Line>
          <XAxis dataKey={"month"}></XAxis>
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
      </div>
      <div className="bar-chart">
        <BarChart width={600} height={350} data={charts}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#DE3163" />
          <Bar dataKey="revenue" fill="#FA8072" />
          <Bar dataKey="sell" fill="#FF7F50" />
        </BarChart>
      </div>

      <div className="readar-chart">
        <RadarChart outerRadius={120} width={730} height={350} data={charts}>
          <PolarGrid />
          <PolarAngleAxis dataKey="month" />
          <PolarRadiusAxis angle={80} domain={[0, 150]} />
          <Radar
            name="sell"
            dataKey="sell"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
          <Radar
            name="investment"
            dataKey="investment"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>

      <div className="area-chart">
        <AreaChart
          width={600}
          height={350}
          data={charts}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default Deshboard;
