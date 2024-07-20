import React from "react";
import business from "../../assets/business.png";
import { useNavigate } from "react-router-dom";


export default function Radiator() {
  let nav = useNavigate();

  function handle1() {
    let data = localStorage.getItem("solar");
    let newData = JSON.parse(data);
    let newData1 = {...newData,Business:'$5'}
    localStorage.setItem("1-4", JSON.stringify(newData1));
    nav("/boiler/year/radiator/fuel");
  }
  function handle2() {
    localStorage.setItem("5-8", JSON.stringify("$10"));
    nav("/boiler/year/radiator/fuel");
  }
  function handle3() {
    localStorage.setItem("9-12", JSON.stringify("$20"));
    nav("/boiler/year/radiator/fuel");
  }
  function handle4() {
    localStorage.setItem("13-16", JSON.stringify("$30"));
    nav("/boiler/year/radiator/fuel");
  }
  function handle5() {
    localStorage.setItem("17-19", JSON.stringify("$40"));
    nav("/boiler/year/radiator/fuel");
  }
  function handle6() {
    localStorage.setItem("19+", JSON.stringify("$50"));
    nav("/boiler/year/radiator/fuel");
  }
  return (
    <div>
      <div className="h-[90vh] w-[100vw] bg-slate-100">
        <div>
          <h1 className="flex justify-center pt-10 text-xl">
          To assist us in determining the suitable boiler size for your home, please specify the total number of radiators you have
          </h1>
        </div>
        <div className="gap-5 flex pt-10 items-center justify-center flex-wrap">
          <div className="flex justify-center items-center " onClick={handle1}>
            <div className="h-[37vh] w-[15vw] bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl border hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/radiator%20(2).png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">1-4</h1>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center" onClick={handle2}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/5-8img.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">5-8</h1>
              </div>
            </div>
          </div>
  
          <div className="flex justify-center items-center" onClick={handle3}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/5-8radiator.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">9-12</h1>
              </div>
            </div>
          </div>
          

          <div className="flex justify-center items-center" onClick={handle4}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/9-12radiator.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">13-16</h1>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center" onClick={handle5}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/13-16radiator.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">17-19</h1>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center" onClick={handle6}>
            <div className="h-[37vh] w-[15vw] border bg-slate-50 rounded-xl flex flex-col justify-center items-center drop-shadow-xl hover:border-green-600">
              <div>
                <img
                  src="https://getyourquote.greenenergyhomes.ie/unique-image/19+radiator.png"
                  alt=""
                  className="h-[10vh]"
                />
              </div>
              <div>
                <h1 className="text-3xl p-10">19+</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
