import React from "react";
import { useNavigate } from "react-router-dom";

export default function Solar2Small() {

  let nav = useNavigate()
  function handle1(){
    localStorage.setItem("Morning",JSON.stringify("$50"))
    nav('/solar1/business/medium/morn')
  }
  function handle2(){
    localStorage.setItem("Afternoon",JSON.stringify("$10"))
    nav('/solar1/business/medium/morn')
  }
  function handle3(){
    localStorage.setItem("Evening",JSON.stringify("$20"))
    nav('/solar1/business/medium/morn')
  }
  function handle4(){
    localStorage.setItem("All Day",JSON.stringify("$20"))
    nav('/solar1/business/medium/morn')
  }
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
            When do you use your home the most?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <div className="flex justify-center items-center " onClick={handle1}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/morning.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Morning</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle2}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/noon.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Afternoon</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle3}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/moon.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Evening</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle4}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/24-hours.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">All Day</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
