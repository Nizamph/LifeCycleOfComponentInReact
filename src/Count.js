import React, { useEffect, useState } from "react";

const Count = () => {
  const [count, SetCount] = useState(0);
  useEffect(() => {
    console.log("component mounted successfully");

    return () => {
      alert("component unmounding");
      console.log("component unloading");
    };
  }, []);

  useEffect(() => {
    console.log("component got updated successfully");
  });
  const countHandler = () => {
    SetCount(count + 1);
  };
  return (
    <div>
      {console.log("count component rendering")}
      count: {count}
      <button onClick={countHandler}>count</button>
    </div>
  );
};

export default Count;
