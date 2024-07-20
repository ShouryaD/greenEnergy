import React from "react";
import business from "../../assets/business.png";
import { useNavigate } from "react-router-dom";


export default function Solar1() {
  let nav = useNavigate();

  function handle1() {
    let data = localStorage.getItem("solar");
    let newData = JSON.parse(data);
    let newData1 = {...newData,Business:'$50'}
    localStorage.setItem("solar", JSON.stringify(newData1));
    nav("/solar1/business");
  }
  function handle2() {
    localStorage.setItem("Home", JSON.stringify("$10"));
    nav("/solar1/homepart");
  }
  function handle3() {
    localStorage.setItem("Farm", JSON.stringify("$20"));
    nav("/solar1/farm");
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
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/business.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Business</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center" onClick={handle2}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/home-page%20(1).png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Home</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center" onClick={handle3}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/house.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Farm</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
