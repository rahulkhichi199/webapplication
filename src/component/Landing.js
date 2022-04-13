import React, { useEffect } from "react";
import "../index.css";
import Land1 from "./land1.png";
import nft1 from './1nft.jpg';
import nft2 from './2nft.jpg';
import nft3 from './3nft.png';
import nft4 from './4nft.png';
import nft5 from './5nft.png';
import nft6 from './6nft.png';
import nft7 from './7nft.png';
import nft8 from './8nft.jpg';
import Aos from "aos";
import "aos/dist/aos.css";

export default function Landing() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });
  return (
    <>
      <div id="land" className="container-fluid">
        <div className="container-fluid row">
          <div className=" col-md-6 col-sm-1 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title  col-md-12 col-sm-1">ABOUT US</h5>
                <p className="card-text container-fuild col-md-12 col-sm-1">
                Immerse yourself in a virtual world where creators and fans are brought together in one new reality...
                <p>Where fans can build and display their own scrolling collections of any creator’s content; saved & bought items; NFT collections; Merch and much more. With the option to share their favorites with other fans and creators. Fans can also engage with their favorite creators in a more intimate environment where creators can share their content, events and collections, 
                    as well as offer; Streams, TV Screens, Live Corners, 1 on 1 engagement, and much more!</p>

                </p>
                <button variant="outline-light" className="bt col-md-6 col-sm-3" >
                  CONNECT WALLET
                </button>
              </div>
            </div>
          </div>
          <div className=" col-md-6 col-sm-1 ">
                <img src={Land1} alt=''  />
          </div>
        </div>
      </div>

      <div  className="container-fluid boxes" >
        <div className="container-fluid row">
          <div className="col-md-3 col-sm-1"> 
            <div className="card">
              <div className="card-body">
              <img src={nft1} alt=''  />
                <button variant="outline-light" className="bt" >
                    BUY &nbsp; SELL
                </button>
               </div> 
            </div>
          </div>
          <div className="col-md-3 col-sm-1"> 
            <div className="card">
              <div className="card-body">
              <img src={nft2} alt=''  />
                <button variant="outline-light" className="bt" >
                  BUY &nbsp; SELL
                </button>
               </div> 
            </div>
          </div>
          <div className="col-md-3 col-sm-1"> 
            <div className="card">
              <div className="card-body">
              <img src={nft3} alt=''  />
                <button variant="outline-light" className="bt" >
                  BUY &nbsp; SELL
                </button>
               </div> 
            </div>
          </div>
          <div className="col-md-3 col-sm-1"> 
            <div className="card">
              <div className="card-body">
              <img src={nft4} alt=''  />
                <button variant="outline-light" className="bt" >
                  BUY &nbsp; SELL 
                </button>
               </div> 
            </div>
          </div>
        </div>
        </div>

        <div  className="container-fluid boxes" data-aos='fade-up'>
        <div className="container-fluid row">
          <div className="col-md-3 col-sm-1"> 
            <div className="card">
              <div className="card-body">
              <img src={nft5} alt=''  />
                <button variant="outline-light" className="bt" >
                    BUY &nbsp; SELL
                </button>
               </div> 
            </div>
          </div>
          <div className="col-md-3 col-sm-1"> 
            <div className="card">
              <div className="card-body">
              <img src={nft6} alt=''  />
                <button variant="outline-light" className="bt" >
                  BUY &nbsp; SELL
                </button>
               </div> 
            </div>
          </div>
          <div className="col-md-3 col-sm-1"> 
            <div className="card">
              <div className="card-body">
              <img src={nft7} alt=''  />
                <button variant="outline-light" className="bt" >
                  BUY &nbsp; SELL
                </button>
               </div> 
            </div>
          </div>
          <div className="col-md-3 col-sm-1"> 
            <div className="card">
              <div className="card-body">
              <img src={nft8} alt=''  />
                <button variant="outline-light" className="bt" >
                  BUY &nbsp; SELL 
                </button>
               </div> 
            </div>
          </div>
        </div>
        </div>

    </>
  );
}
