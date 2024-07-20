import React from "react";
import { useNavigate } from "react-router-dom";

export default function Solar2Business() {

  let nav = useNavigate()
  function handle1(){
    localStorage.setItem("Small",JSON.stringify("$50"))
    nav('/solar1/business/small')
  }
  function handle2(){
    localStorage.setItem("Medium",JSON.stringify("$10"))
    nav('/solar1/business/small')
  }
  function handle3(){
    localStorage.setItem("Large",JSON.stringify("$20"))
    nav('/solar1/business/small')
  }
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div className="flex justify-center pt-10 font-bold text-center">
          <h1 className="text-xl text-bold">
            We will get you a Solar PV estimate in seconds. Let's start by
            telling us where you would like to have <br />
            Solar PV installed?
          </h1>
        </div>
        <div>
          <h1 className="flex items-center justify-center pt-10">
            A warm welcome to Green Energy Home , Ireland's highest rated Solar
            PV installer.
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <div className="flex justify-center items-center " onClick={handle1}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/business%20(1).png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Small Electricity</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle2}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/working-factory.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Medium Electricity</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle3}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img src="https://getyourquote.greenenergyhomes.ie/unique-image/factory.png" alt="" className="h-[10vh]" />
              </div>
              <div>
                <h1 className="text-3xl p-10">Large</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
