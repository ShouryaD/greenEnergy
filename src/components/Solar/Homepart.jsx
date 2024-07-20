import React from "react";
import { useNavigate } from "react-router-dom";

export default function Homepart() {

  let nav = useNavigate()
  function handle1(){
    localStorage.setItem("semi",JSON.stringify("$50"))
    nav('/solar1/homepart/semidetached')
  }
  function handle2(){
    localStorage.setItem("detached",JSON.stringify("$10"))
    nav('/solar1/homepart/semidetached')
  }
  function handle3(){
    localStorage.setItem("Terrace",JSON.stringify("$20"))
    nav('/solar1/homepart/semidetached')
  }
  function handle4(){
    localStorage.setItem("Apartment",JSON.stringify("$20"))
    nav('/solar1/business/small')
  }
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
          Which option best describes your property?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <div className="flex justify-center items-center " onClick={handle1}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/semi-detached.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Semi-Detached</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle2}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/detached.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Detached</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle3}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/facade.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Terrace</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle4}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/apartment.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Apartment</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
