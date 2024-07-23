import React, { useState, useRef } from "react";
import { PieChart,pieArcLabelClasses } from '@mui/x-charts/PieChart';
// import { isMobile } from 'react-device-detect';


export default function Demo(props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentdiv = useRef();
  console.log(props.senddata)
  return (
    // {
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
          {

            props.senddata.map((item, index) => {
              return (
                <>
                  <div className="m-2">

                    <PieChart
                      key={item.Year + item._id}
                      colors={['red', 'blue', 'green']} // Use palette
                      dataset={props.senddata}
                      series={[
                        {

                          data: [
                            { id: 0, value: item.UndergradPlaced, color: '#fdba74' , class: 'UG'}, // orange
                            { id: 1, value: item.UndergradTotal, color: '#ff0b0bbd' , class: 'UG Ttl' },   // red
                            { id: 2, value: item.PostgradPlaced, color: '#2a2affc9' , class: 'PG' },   // blue
                            { id: 4, value: item.PostgradTotal, color: '#00bf00f5'  , class: 'PG Ttl'},     // green
                          ],
                          // innerRadius: 30,
                          // outerRadius: 100,
                          // paddingAngle: 5,
                          // cornerRadius: 5,
                          // startAngle: -90,
                          // endAngle: 180,
                          // cx: 150,
                          // cy: 150,

                          arcLabel: (item) => `${item.class} (${item.value})`,
                          arcLabelMinAngle: 45,
                        },
                      ]}

                      sx={{
                        [`& .${pieArcLabelClasses.root}`]: {
                          fill: 'white',
                          fontWeight: 'bold',
                          fontSize: '12px'
                        },
                      }}

                      // width={isMobile ? 300 : 350}
                      // height={isMobile ? 200 : 250}
                      width = {350}
                      height = {250}
                    />
                  </div>
                </>

              )
            })
          }
        </div>
      </div>
    </div>
    // }
  );
}
