import React from "react";
import business from "../../assets/business.png";
import { useNavigate } from "react-router-dom";


export default function Mount() {
  let nav = useNavigate();

  function handle1() {
    let data = localStorage.getItem("solar");
    let newData = JSON.parse(data);
    let newData1 = {...newData,Business:'$50'}
    localStorage.setItem("Roof", JSON.stringify(newData1));
    nav("/solar1/farm/mount/phase");
  }
  function handle2() {
    localStorage.setItem("Ground", JSON.stringify("$10"));
    nav("/solar1/farm/mount/phase");
  }
  return (
    <div>
      <div className="h-[90vh] w-full bg-slate-100">
        <div className="flex justify-center pt-10 font-bold text-center">
          <h1 className="text-xl text-bold">
            Which one do you prefer?
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center">
          <div className="flex justify-center items-center " onClick={handle1}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/roof.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Roof Mounted</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center" onClick={handle2}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/technology.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">Grounded</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
