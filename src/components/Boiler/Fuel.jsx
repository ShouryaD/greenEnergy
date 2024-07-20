import React from "react";
import business from "../../assets/business.png";
import { useNavigate } from "react-router-dom";


export default function Fuel() {
  let nav = useNavigate();

  function handle1() {
    let data = localStorage.getItem("solar");
    let newData = JSON.parse(data);
    let newData1 = {...newData,NaturalGas:'$50'}
    localStorage.setItem("Natural Gas", JSON.stringify(newData1));
    nav("/solar1/business/medium/morn/threehund");
  }
  function handle2() {
    localStorage.setItem("Oil", JSON.stringify("$10"));
    nav("/solar1/business/medium/morn/threehund");
  }
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10">
          What fuel do your currently use to heat your property?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <div className="flex justify-center items-center " onClick={handle1}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/flame.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Natural Gas</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center" onClick={handle2}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/oil.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Oil</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
