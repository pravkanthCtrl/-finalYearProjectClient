import React from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const Graph = () => {
    const data = [
        {name: 'Cow id A', uv: 400, pv: 500, amt: 600},
        {name: 'Cow id B', uv: 100, pv: 700, amt: 200},
        {name: 'Cow id C', uv: 500, pv: 400, amt: 100},
        {name: 'Cow id D', uv: 200, pv: 500, amt: 200},
        {name: 'Cow id E', uv: 300, pv: 900, amt: 500},
];

  return (
    <div className='graph'>
          <LineChart  width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="black" />
    <Line type="monotone" dataKey="pv" stroke="black" />
    <Line type="monotone" dataKey="amt" stroke="black" />
    <CartesianGrid stroke="#FFFFFF" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
  </LineChart>
    </div>
  )
}

export default Graph