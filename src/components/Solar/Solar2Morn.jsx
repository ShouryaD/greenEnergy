import React from "react";
import { useNavigate } from "react-router-dom";

export default function Solar2Morn() {

  let nav = useNavigate()
  function handle1(){
    localStorage.setItem("less",JSON.stringify("$50"))
    nav('/solar1/business/medium/morn/threehund')
  }
  function handle2(){
    localStorage.setItem("Medium",JSON.stringify("$10"))
    nav('/solar1/business/medium/morn/threehund')
  }
  function handle3(){
    localStorage.setItem("more",JSON.stringify("$20"))
    nav('/solar1/business/medium/morn/threehund')

  }
  function handle4(){
    localStorage.setItem("too much",JSON.stringify("$20"))
    nav('/solar1/business/medium/morn/threehund')
  }
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div>
          <h1 className="flex items-center justify-center pt-10 text-xl font-bold">
          Bi-monthly Bill
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <div className="flex justify-center items-center " onClick={handle1}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/coins.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">{"<"}$300</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle2}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/coin-stack.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">{"<"}$400</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle3}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/coins%20(1).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">{"<"}$500</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle4}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/coins%20(1).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">{"<"}$600</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
