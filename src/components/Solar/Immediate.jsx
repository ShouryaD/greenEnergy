import React from "react";
import { useNavigate } from "react-router-dom";

export default function Immediate() {

  let nav = useNavigate()
  function handle1(){
    localStorage.setItem("Immediate",JSON.stringify("$50"))
    nav('')
  }
  function handle2(){
    localStorage.setItem("1 month",JSON.stringify("$10"))
    nav('')
  }
  function handle3(){
    localStorage.setItem("3-6 Months",JSON.stringify("$20"))
    nav('')
  }
  function handle4(){
    localStorage.setItem("6 Months+",JSON.stringify("$20"))
    nav('')
  }
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
          What is your expected time frame to switch to solar
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <div className="flex justify-center items-center " onClick={handle1}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/stopwatch.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Immediate</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle2}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/calendar.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">1 Month</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle3}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/calendar%20(1).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">3-6 Months</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle4}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/calendar%20(2).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">6 Months+</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
