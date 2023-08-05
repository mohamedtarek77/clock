"use client";

import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hr = document.querySelector("#hrs");
    const mn = document.querySelector("#min");
    const sc = document.querySelector("#sec");

    const hour = document.getElementById("hour");
    const minute = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");

    const ampm = document.getElementById("ampm");

    const updateClock = () => {
      const day = new Date();
      const hh = day.getHours() * 30;
      const mm = day.getMinutes() * 6;
      const ss = day.getSeconds() * 6;
      let h = day.getHours();
      let m = day.getMinutes();
      let s = day.getSeconds();
      const am = h >= 12 ? "PM" : "AM";
      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;

      // convert 24hours to 12hours
     if(h>12){
      h=h-12;
     }

     //add Zero before single digit 

     h= (h<10) ?"0"+h : h;
     m= (m<10) ?"0"+m : m;
     s= (s<10) ?"0"+s : s;

      hour.innerHTML = h;
      minute.innerHTML = m;
      seconds.innerHTML = s;
      ampm.innerHTML = am;
    };

    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="clock">
        <div className="numbers">
          <div className="circle" id="sec" style={{ "--clr": "#04fc43",}}>
            <i></i>
          </div>
          <div className="circle" id="min" style={{ "--clr": "#fee800" }}>
            <i></i>
          </div>
          <div className="circle" id="hrs" style={{ "--clr": "#ff2972" }}>
            <i></i>
          </div>

          <span className="font-bold" style={{ "--i": 0 }}>
            <b>12</b>
          </span>
          <span className="font-bold" style={{ "--i": 1 }}>
            <b>1</b>
          </span>
          <span className="font-bold" style={{ "--i": 2 }}>
            <b>2</b>
          </span>
          <span className="font-bold" style={{ "--i": 3 }}>
            <b>3</b>
          </span>
          <span className="font-bold" style={{ "--i": 4 }}>
            <b>4</b>
          </span>
          <span className="font-bold" style={{ "--i": 5 }}>
            <b>5</b>
          </span>
          <span className="font-bold" style={{ "--i": 6 }}>
            <b>6</b>
          </span>
          <span className="font-bold" style={{ "--i": 7 }}>
            <b>7</b>
          </span>
          <span className="font-bold" style={{ "--i": 8 }}>
            <b>8</b>
          </span>
          <span className="font-bold" style={{ "--i": 9 }}>
            <b>9</b>
          </span>
          <span className="font-bold" style={{ "--i": 10 }}>
            <b>10</b>
          </span>
          <span className="font-bold" style={{ "--i": 11 }}>
            <b>11</b>
          </span>
        </div>
        {/* Digital Clock */}
        <div id="time">
          <div id="hour" style={{ "--clr": "#04fc43" }}>
            00
          </div>
          <div id="minutes" style={{ "--clr": "#fee800" }}>
            00
          </div>
          <div id="seconds" style={{ "--clr": "#ff2972" }}>
            00
          </div>
          <div id="ampm" style={{ "--clr": "#fff" }}>
            AM
          </div>
        </div>
      </div>
    </main>
  );
}
