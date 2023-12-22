// import React from "react";
// import {
//   BarChart,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Bar,
//   ResponsiveContainer,
// } from "recharts";
// const data = [
//   {
//     year: "14/15",
//     "No. of students": 355,
//   },
//   {
//     year: "15/16",
//     "No. of students": 389,
//   },
//   {
//     year: "16/17",
//     "No. of students": 274,
//   },
//   {
//     year: "17/18",
//     "No. of students": 225,
//   },
//   {
//     year: "18/19",
//     "No. of students": 254,
//   },
//   {
//     year: "19/20",
//     "No. of students": 285,
//   },
//   {
//     year: "20/21",
//     "No. of students": 335,
//   },
//   {
//     year: "21/22",
//     "No. of students": 425,
//   },
//   {
//     year: "22/23",
//     "No. of students": 431,
//   },
//   {
//     year: "23/24",
//     "No. of students": 17,
//   },
// ];

// export default function Graph() {
//   return (
//     <>
//       <h3 className="graph-header">Students' Placements</h3>
//       <div className="graph-content">
//         <ResponsiveContainer width="100%" height={200}>
//           <BarChart
//             data={data}
//             margin={{ top: 0, right: 20, bottom: 20, left: 0 }}
//           >
//             <XAxis dataKey="year" />
//             <YAxis type="number" domain={[0, 400]} />
//             <Tooltip />
//             <Bar dataKey="No. of students" fill="#8884d8" />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//     </>
//   );
// }
