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
  // const [ifData, setiFData] = useState(0);

  // console.log('Data being passed to chart:', props.senddata);
  // console.log(props.senddata[0].PostgradPlaced);
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
            <ResponsiveContainer height={350} className="responsive-chart">
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
                <Bar dataKey="UndergradTotal" stackId="a" fill="#ffa94f" />
                <Bar dataKey="UndergradPlaced" stackId="a" fill="#766fff" />
              </BarChart>
            </ResponsiveContainer>

            {/* Bar Chart to display the placement records of Post graduate students  */}
            {
              (<ResponsiveContainer height={350} className="responsive-chart">
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
                  {/* <XAxis dataKey="Department" textAnchor="end" /> */}
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="PostgradTotal" stackId="b" fill="#259B9A" />
                  <Bar dataKey="PostgradPlaced" stackId="b" fill="#a7e937" />
                </BarChart>
              </ResponsiveContainer>)
            }
          </div>
        </div>
      </div>
    </>
  );
}
