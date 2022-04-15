import React, { useEffect } from "react";
import "../index.css";

export default function Landing() {
  return (
    <>
      <div id="land" className="container-fluid">
        <div className="row1">
          <div className="col">
            <p id="first">WITH</p>
          </div>
        </div>
        <div className="row2 pb-4">
          <div className="col1 col-1">
            <p id="second">NOISY</p>
            <p id="subwhite">BUY THE NFT </p>
            <p id="subwhite">AND OWN THE</p>
            <p id="subwhite">PHYSICAL ART</p>
          </div>
          <div className="col2 col-2">
            <pre id="black"> PANDA...</pre>
            <p id="subwhite">BUY THE NFT </p>
            <p id="subwhite">AND OWN THE</p>
            <p id="subwhite">PHYSICAL ART</p>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            <p id="second">NOISY</p>
          </div>
          <div className="col">
            <p id="black">PANDA...</p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p id="subwhite">BUY THE NFT </p>
            <p id="subwhite">AND OWN THE</p>
            <p id="subwhite">PHYSICAL ART</p>
          </div>
          <div className="col">
            <p id="subblack">BUY THE PHYSICAL </p>
            <p id="subblack">ART AND OWN</p>
            <p id="subblack"> THE NFT</p>
          </div>
  </div>*/}
      </div>
    </>
  );
}
