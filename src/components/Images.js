import React, { useState } from "react";
import "./images.css";
import "./imageAnime.css";
import images from "./ImageData";
import Matter from "./Matter";

export default function Images() {
  const [class1, setClass1] = useState("imgContainer1 ");
  const [class2, setClass2] = useState("imgContainer2 ");
  const [class3, setClass3] = useState("imgContainer3 ");
  const [class4, setClass4] = useState("imgContainer4 ");
  const [class5, setClass5] = useState("imgContainer5 ");

  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(true);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);

  let box1 = "";
  let box2 = "";
  let box3 = "";
  let box4 = "";
  let box5 = "";
  // const [box3, setBox3] = useState("");
  // const [box4, setBox4] = useState("");
  // const [box5, setBox5] = useState("");

  const [concClass, setConcClass] = useState(0);

  const curosr = {
    cursor: "pointer",
  };

  function handleClick() {
    if (click2) {
      setConcClass(1);
      setClick2(false);
      setClick3(true);
      setTimeout(() => {
        setClass2(class1);
        setClass1(class2);
        setConcClass(0);
      }, 450);
    }
  }

  console.log(concClass);

  function handleClick1() {
    if (click3) {
      setConcClass(2);
      setTimeout(() => {
        setClass3(class2);
        setClass2(class1);
        setClass1(class3);
        setConcClass(0);
      }, 450);
      setClick4(true);
      setClick3(false);
    }
  }

  function handleClick2() {
    if (click4) {
      setConcClass(3);
      setTimeout(() => {
        setClass4(class3);
        setClass3(class2);
        setClass2(class1);
        setClass1(class4);
        setConcClass(0);
      }, 450);
      setClick5(true);
      setClick4(false);
    }
  }

  function handleClick3() {
    if (click5) {
      setConcClass(4);
      setTimeout(() => {
        setClass5(class4);
        setClass4(class3);
        setClass3(class2);
        setClass2(class1);
        setClass1(class5);
        setConcClass(0);
      }, 450);
      setClick1(true);
      setClick5(false);
    }
  }

  function handleClick4() {
    if (click1) {
      setConcClass(5);
      setTimeout(() => {
        setClass5(class1);
        setClass4(class2);
        setClass3(class3);
        setClass2(class4);
        setClass1(class5);
        setConcClass(0);
      }, 450);
      setClick2(true);
      setClick1(false);
    }
  }

  if (concClass === 1) {
    box1 = "firstAnimeB1";
    box2 = "firstAnimeB2";
  } else if (concClass === 2) {
    box1 = "secondAnimeB1";
    box2 = "secondAnimeB2";
    box3 = "secondAnimeB3";
  } else if (concClass === 3) {
    box1 = "thirdAnimeB1";
    box2 = "thirdAnimeB2";
    box3 = "thirdAnimeB3";
    box4 = "thirdAnimeB4";
  } else if (concClass === 4) {
    box1 = "fourAnimeB1";
    box2 = "fourAnimeB2";
    box3 = "fourAnimeB3";
    box4 = "fourAnimeB4";
    box5 = "fourAnimeB5";
  } else if (concClass === 5) {
    box1 = "fiveAnimeB1";
    box2 = "fiveAnimeB2";
    box4 = "fiveAnimeB4";
    box5 = "fiveAnimeB5";
  }

  console.log(box1);
  console.log(box2);

  return (
    <div className="mainbox col-lg-6 col-md-6 col-sm-12 ">
      <div className="subMain">
        <div className={class1} id={box1}>
          <img
            src={images[0].image1}
            alt="grid-item1"
            onClick={handleClick4}
            style={click1 ? curosr : { cursor: "default" }}
          ></img>
        </div>
        <div className={class2} id={box2}>
          <img
            src="images/projectImg2.jpg"
            alt="grid-item1"
            onClick={handleClick}
            style={click2 ? curosr : { cursor: "default" }}
          ></img>
        </div>
        <div className={class3} id={box3}>
          <img
            src="images/projectImg3.jpg"
            alt="grid-item1"
            onClick={handleClick1}
            style={click3 ? curosr : { cursor: "default" }}
          ></img>
        </div>
        <div className={class4} id={box4}>
          <img
            src="images/projectImg4.jpg"
            alt="grid-item1"
            onClick={handleClick2}
            style={click4 ? curosr : { cursor: "default" }}
          ></img>
        </div>
        <div className={class5} id={box5}>
          <img
            src="images/projectImg5.jpg"
            alt="grid-item1"
            onClick={handleClick3}
            style={click5 ? curosr : { cursor: "default" }}
          ></img>
        </div>
      </div>
      <div className="subMain2">
        <Matter />
      </div>
    </div>
  );
}
