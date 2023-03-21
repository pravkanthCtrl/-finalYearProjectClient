import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";



const Graph2 = () => {
    const data = [
        { name: "Cow A", value: 2400,max:3000 },
        { name: "Cow B", value: 1000 },
        { name: "Cow C", value: 1500 },
        { name: "Cow D", value: 2000 },
      ];
      
      const colors = [
        "#70B0FA",
        "#3D6BD4",
        "#3D36B2",
        "#7DEBD9",
      ];
      
  return (
    <BarChart width={600} height={300} data={data} barCategoryGap="30%">
    <CartesianGrid strokeDasharray="3" stroke="#FFFFFF" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="value">
      {data.map((entry, index) => (
        <Cell fill={colors[index]} />
      ))}
    </Bar>
  </BarChart>
  )
}

export default Graph2

