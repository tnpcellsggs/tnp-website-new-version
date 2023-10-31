import React, { useState, useRef } from "react";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

export default function YearData(props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentdiv = useRef();
  // console.log('Data being passed to chart:', props.senddata);
  console.log(props.label);
  return (
    <>
      <div className="p-collapsible">
        <button style={{ textAlign: "center" }} onClick={() => setIsOpen(!isOpen)}>{props.label}</button>
        <div
          className="p-content"
          ref={contentdiv}
          style={
            isOpen
              ? { height: contentdiv.current.scrollHeight + "px" }
              : { height: "0px" }
          }
        >
          <div className="p-parent">

            {/* Bar Chart to display the placement records of Under graduate students  */}
            <ResponsiveContainer height={300} width="100%">
              <BarChart
                data={props.senddata}
                margin={{
                  top: 50,
                  right: 30,
                  left: 20,
                  bottom: 50,
                }}
              >
                <XAxis dataKey="Department" interval={0} tick={{ fontSize: 8 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="UndergradTotal" stackId="a" fill="#a7e937" />
                <Bar dataKey="UndergradPlaced" stackId="a" fill="#aaa6fa" />
              </BarChart>
            </ResponsiveContainer>

            {/* Bar Chart to display the placement records of Post graduate students  */}
            <ResponsiveContainer height={300} width="100%">
              <BarChart
                data={props.senddata}
                margin={{
                  top: 50,
                  right: 30,
                  left: 20,
                  bottom: 50,
                }}
              >
                <XAxis dataKey="Department" interval={0} tick={{ fontSize: 8 }}/>
                {/* <XAxis dataKey="Department" textAnchor="end" /> */}
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="PostgradTotal" stackId="b" fill="#259B9A" />
                <Bar dataKey="PostgradPlaced" stackId="b" fill="#a7e937" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
