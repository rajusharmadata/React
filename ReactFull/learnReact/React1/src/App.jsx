import React, { useState } from "react";
import Card from "./components/Card";
import Songs from "./components/Songs";
import Counter from "./components/Counter";
import { Newobj } from "./components/Newobj";
import { Array } from "./components/Array";
import Card2 from "./components/Card2";
import Button from "./components/Button";
import Card3 from "./components/Card3";

export default function App() {
  // let data = [
  //   { name: "Raju", country: "india", state: "bihar" },
  //   { name: "Ravi", country: "UK", state: "uk any state" },
  //   { name: "manish", country: "india", state: "newDelhi" },
  //   { name: "Ravi", country: "UK", state: "uk any state" },
  //   { name: "manish", country: "india", state: "newDelhi" },
  // ];
  const data = [
    {
      name: "Rajusharma",
      profestion: "Fronted Developer",
      charge: "$200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s",
      frinds: false,
    },
    {
      name: "Ranjan",
      profestion: "Backend Developer",
      charge: "$200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s",
      frinds: false,
    },
    {
      name: "Rajusharma",
      profestion: "Fronted Developer",
      charge: "$200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s",
      frinds: false,
    },
    {
      name: "Rajusharma",
      profestion: "Fronted Developer",
      charge: "$200",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvqzyx_zoi6q2c0Gd1XnE7wysD9PGOLe3-A&s",
      frinds: false,
    },
  ];

  const [realdata, SetRealdata] = useState(data);
  const buttonHandler = (cardindex) => {
    return realdata.map((item, index) => {
      if (index === cardindex) {
        return { ...item, frinds: !item.frinds };
      }
    });
  };

  return (
    <>
      {/* <div className="h-screen w-screen m-0 bg-amber-200 flex ">
        {data.map((e) => {
          return (
            <div className="h-80 w-80 rounded-2xl m-1.5  bg-blue-400">
              <h1 className="text-3xl text-center  mt-2.5 justify-center text-amber-100 font-bold">
                {e.name}
               </h1>
              <p className="text-center pt-2 mt-2.5 ">{e.country}</p>
              <p className="text-center pt-2 ">{e.state}</p>
            </div>
          );
        })}
      </div> */}
      {/* <Card/> */}
      {/* <Songs/> */}
      {/* <Counter/> */}
      {/* <Newobj/>
       */}
      {/* <Array/> */}
      {/* <Card2/> */}

      {/* <Button text = "Submit"  color = "bg-blue-400"/>
       <Button text = "Delete" color = "bg-green-500"/>
       <Button text = "Danger" color = "bg-red-700"/> */}

      <div className=" flex items-center justify-center">
        {realdata.map((items, index) => (
          <Card3
            value={items}
            buttonHandler={buttonHandler}
            key={index}
            // cardindex={}
          />
        ))}
      </div>
    </>
  );
}
