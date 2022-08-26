import React from "react";
import a from "../../Styles/Home/Demo.module.css";
const Demo = () => {
  return (
    <div className={a.demo_container}>
      <div className={a.container_inner}>
        <div className={a.inner1_div}>
          <h1 style={{ display: "inline-block" }}  className={a.tracktext}>Want to track time in your team ?</h1>
          <h3>
            <a href="#">
              <h1 className={a.demotext}>Book a Demo{"> "}</h1>
            </a>
          </h3>
        </div>
  
        <div className={a.container_heading}>

          <h2 className={a.textheading}>Try an automatic, easy-to-use time tracker for the entire organization!</h2>
        </div>









      </div>
    </div>
  );
};

export default Demo;
