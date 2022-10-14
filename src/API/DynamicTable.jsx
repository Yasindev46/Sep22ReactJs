import React, { useEffect, useState } from "react";

export const DynamicTable = (props) => {
  console.log(props);
  const [tablehead, setTablehead] = useState([]);

  
  useEffect(() => {
    if (props.data.length > 0) {
        alert("hello")
        var headers=(Object.keys(props.data[0]));
      setTablehead(headers)
    }
  }, []);

  return (
    <div>
      <table>
        <tr>
          {tablehead.map((item) => {
            return( <th>{item}</th>);
          })}
        </tr>
        {props.data.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.year}</td>
              <td>{item.color}</td>
              <td>{item.pantone_value}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
