import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const items = [
  {
    heading: "Solar PV",
    image: 'https://getyourquote.greenenergyhomes.ie/unique-image/transparentsolarpv.png',
    to:"/solar1"
  },
  {
    heading: "Boiler",
    image:'https://getyourquote.greenenergyhomes.ie/custom-image/bolier(main).webp',
    to:'/boiler'
  },
];


export default function Home() {
  function solar() {
    const solarobj = {
      name: "solar",
    };
    localStorage.setItem("solar", JSON.stringify(solarobj));
  }
  function boiler(){
    const boilerobj = {
      name:"boiler"
    }
    localStorage.setItem('boiler',JSON.stringify(boilerobj))
  }
  return (
    <div>
      <Nav />
      <div className="h-[90vh] w-full flex items-center flex-col bg-slate-100 p-10">
        <h1 className="text-4xl">Choose your service</h1>
        <h1 className="text-xl p-5">
          Get your free online estimate in seconds
        </h1>

        <div className="flex gap-10">
          {items.map((item)=>(
          <div>
            <div className="h-[40vh] w-[20vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center mt-10">
              <div>
                <img src={item.image} alt="" className="h-[15vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">{item.heading}</h1>
              </div>
              <Link
                className="p-3 w-[10vw] text-xl bg-teal-600 rounded-full text-white hover:bg-teal-700 text-center"
                to={item.to}
                onClick={solar}
              >
                Get Estimate
              </Link>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
