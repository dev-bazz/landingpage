import React, { useState } from "react";
import { data } from "./data";

export default function Slider() {
  const [imgData, setData] = useState(data);
  const [index, setIndex] = useState(0);

  return (
    <div>
      {data.map((data) => (
        <div>
          {data.name}

          <img src={data.img} alt="" srcset="" />
        </div>
      ))}
    </div>
  );
}
