// Context apis
import React, { useState, useContext } from "react";
import { AdminContext } from "../../../App";
import { useEffect } from "react";
import { Container } from "react-bootstrap";

import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import {ResponsiveContainer} from "recharts";
// const data = [
//   {
//     "year": "AY 14/15",
//     "Under Graduate": 336,
//     "Post Graduate": 19,
//     "Total": 355,
//   },
//   {
//     "year": "AY 15/16",
//     "Under Graduate": 377,
//     "Post Graduate": 12,
//     "Total": 389,
//   },
//   {
//     "year": "AY 16/17",
//     "Under Graduate": 255,
//     "Post Graduate": 19,
//     "Total": 274,
//   },
//   {
//     "year": "AY 17/18",
//     "Under Graduate": 211,
//     "Post Graduate": 14,
//     "Total": 225,
//   },
//   {
//     "year": "AY 18/19",
//     "Under Graduate": 235,
//     "Post Graduate": 19,
//     "Total": 254,
//   },
//   {
//     "year": "AY 19/20",
//     "Under Graduate": 239,
//     "Post Graduate": 12,
//     "Total": 251,
//   },
//   {
//     "year": "AY 20/21",
//     "Under Graduate": 306,
//     "Post Graduate": 29,
//     "Total": 335,
//   },
//   {
//     "year": "AY 21/22",
//     "Under Graduate": 412,
//     "Post Graduate": 19,
//     "Total": 431,
//   },
//   {
//     "year": "AY 22/23",
//     "Under Graduate": 417,
//     "Post Graduate": 0,
//     "Total": 417,
//   },
//   {
//     "year": "AY 23/24",
//     "Under Graduate": 28,
//     "Post Graduate": 0,
//     "Total": 28,
//   }
// ];


function BarChartGraph(props) {
  const chartSetting = {
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-10px, 0)',
      },
    },
  };

  const  tickPlacement = 'middle', tickLabelPlacement = 'middle'
  const valueFormatter = (value) => `${value}`;
  return (
    <BarChart
      dataset={props.data}
      xAxis={[
        {
          id: 'barCategories',
          dataKey: 'year',
          scaleType: 'band',
          categoryGapRatio: 0.2,
          barGapRatio: 0.1,
          label: 'Placement Years',
          tickPlacement,
          tickLabelPlacement
        },
      ]}

      yAxis={[
        {
          label: 'Number Of Students Placed',
        },
      ]}

      series={[
        { dataKey: 'Post Graduate', label: 'Post Graduate', valueFormatter, },
        { dataKey: 'Under Graduate', label: 'Under Graduate', valueFormatter },
        { dataKey: 'Total', label: 'Total', valueFormatter },
        // { dataKey: 'TotalOffers', label: 'Total Offers', valueFormatter },
      ]}
      // width={1200}
      // height={500}
      // layout="horizontal"
      grid={{ vertical: true }}

      {...chartSetting}
    />
  );
}


export default function PGraph() {

  // using context api to save all the states & use it all over the app
  const graphContext = useContext(AdminContext);
  const [graphTempData, setTempGraphData] = useState([]);

  const { getGraphAlldetails } = graphContext;

  // useEffect(() => {
  //   getGraphAlldetails().then((data) => {
  //     let info = [];
  //     let k=0;
  //     for(let i=data.length-1;i>=(data.length-7);i--){
  //       info.push(data[data.length-7+k]);
  //       k++;
  //     }
  //     setTempGraphData(info);
  //   });
  // }, []);
  useEffect(() => {
  getGraphAlldetails().then((data) => {
    if (!data || data.length === 0) {
      setTempGraphData([]);
      return;
    }

    const lastSeven = data.slice(-7); // safely get last 7 entries
    setTempGraphData(lastSeven);
  });
}, []);




  return (
    <>
      <Container style={{ textAlign: "center" }} className="pl-graph" fluid>
        <div className="p-graph-container">
          <ResponsiveContainer width="100%" height={550}>
            {/* <LineChart width={500} height={300} data={data}> */}
            {/* <LineChart width={500} height={300} data={graphTempData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="linear" dataKey="Under Graduate" stroke="#8884d8" />
              <Line type="linear" dataKey="Post Graduate" stroke="#82ca9d" />
              <Line type="linear" dataKey="Total" stroke="#f29961" />
            </LineChart> */}

            {/* <BarChartGraph data={graphTempData} /> */}
            {graphTempData.length > 0 ? (
  <BarChartGraph data={graphTempData} />
) : (
  <p>No placement data available</p>
)}

          </ResponsiveContainer>
        </div>
      </Container>
    </>
  );
}


