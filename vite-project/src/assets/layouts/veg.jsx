// import React from "react";
// import '../styles/veg.css'
// import rice from "../images/rice.jpg";
// import panner from "../images/panner.jpg";
// import rotipaner from "../images/rotipaner.jpg";
// import dahi from "../images/dahi.jpg";
// import bhaja1 from '../images/bhaja1.jpg'

// const Veg = () => {
//   return (
//     <div className="bgimage">
//       <div className="mmenu">
//         <div className="lmenu">
//           <h4> FOOD MENU </h4>
//         </div>

//         <div className="rmenu">
//           <ul>
//             <li id="firstlist">Home</li>
//             <li>About Us</li>
//             <li>Contact</li>
//           </ul>
//         </div>
//       </div>
//       <div class="menu">
//         <div class="container">
//           <div class="section-header">
//             <h2>Delicious Food Menu</h2>
//           </div>
//           <div class="menu-tab">
//             <ul class="nav nav-pills justify-content-center">
//               <li class="nav-item">
//                 <a class="nav-link active" data-toggle="pill" href="#burgers">
//                   VEG RECIPIES
//                 </a>
//               </li>
//             </ul>
//             <div class="tab-content">
//               <div id="burgers" class="container tab-pane active">
//                 <div class="row">
//                   <div class="col-lg-7 col-md-12">
//                     <div class="menu-item">
//                       <div class="menu-img">
//                         <img src={rice} alt="rice" />
//                       </div>
//                       <div class="menu-text">
//                         <h3>
//                           <span>VEG THALI</span>{" "}
//                           <button className="btn"> rs-40</button>
//                         </h3>
//                         <p>Rice,Dal,Sabji</p>
//                       </div>
//                     </div>
//                     <div class="menu-item">
//                       <div class="menu-img">
//                         <img src={panner} alt="panner" />
//                       </div>
//                       <div class="menu-text">
//                         <h3>
//                           <span>PANNER</span>{" "}
//                           <button className="btn"> rs-35</button>
//                         </h3>
//                         <p>Panner sabji</p>
//                       </div>
//                     </div>
//                     <div class="menu-item">
//                       <div class="menu-img">
//                         <img src={rotipaner} alt="rotipaner" />
//                       </div>
//                       <div class="menu-text">
//                         <h3>
//                           <span>ROTI & PANNER</span>{" "}
//                           <button className="btn"> rs-60</button>
//                         </h3>
//                         <p>3 piece roti with panner sabji</p>
//                       </div>
//                     </div>
//                     <div class="menu-item">
//                       <div class="menu-img">
//                         <img src={dahi} alt="dahi" />
//                       </div>
//                       <div class="menu-text">
//                         <h3>
//                           <span>DAHI</span>{" "}
//                           <button className="btn"> rs-15</button>
//                         </h3>
//                         <p>Dahi</p>
//                       </div>
//                     </div>
//                     <div class="menu-item">
//                       <div class="menu-img">
//                         <img src={bhaja1} alt="bhaja" />
//                       </div>
//                       <div class="menu-text">
//                         <h3>
//                           <span>BHAJA</span>{" "}
//                           <button className="btn"> rs-10</button>
//                         </h3>
//                         <p>Vaja</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Veg;

import React, { useState } from "react";
import Cart from "./cart.jsx";
import "../styles/veg.css";
import rice from "../images/rice.jpg";
import panner from "../images/panner.jpg";
import rotipaner from "../images/rotipaner.jpg";
import dahi from "../images/dahi.jpg";
import bhaja1 from '../images/bhaja1.jpg'

const Veg = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  return (
    <div className="bgimage">
      <div className="mmenu">
        <div className="lmenu">
          {" "}
          <h4> FOOD MENU </h4>
        </div>{" "}
        <div className="rmenu">
          <ul>
            <li id="firstlist">Home</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="menu">
        <div className="container">
          <div className="section-header">
            <h2>Delicious Food Menu</h2>
          </div>
          <div className="menu-tab">
            <ul className="nav nav-pills justify-content-center">
              <li className="nav-item">
                <a className="nav-link active" data-toggle="pill" href="#burgers">
                  VEG RECIPIES
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="burgers" className="container tab-pane active">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    //{" "}
                    <div className="menu-img">
                      <img src={rice} alt="rice" />
                    </div>
                    <div className="menu-text">
                      <h3>
                        <span>VEG THALI</span>{" "}
                        <button className="btn"> rs-40</button>
                      </h3>
                      <p>Rice,Dal,Sabji</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    {" "}
                    <div className="menu-img">
                      <img src={panner} alt="panner" />
                    </div>
                    <div className="menu-text">
                      <h3>
                        <span>VEG THALI</span>{" "}
                        <button
                          className="btn"
                          onClick={() =>
                            addToCart({ name: "Veg Thali", price: 40 })
                          }
                        >
                          rs-40
                        </button>
                      </h3>
                      <p>Rice, Dal, Sabji</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-img">
                      <img src={panner} alt="panner" />
                    </div>
                    <div className="menu-text">
                      <h3>
                        <span>PANNER</span>{" "}
                        <button className="btn"> rs-35</button>
                      </h3>
                      <p>Panner sabji</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-img">
                      <img src={rotipaner} alt="rotipaner" />
                    </div>{" "}
                    <div className="menu-text">
                      <h3>
                        <span>ROTI & PANNER</span>{" "}
                        <button className="btn"> rs-60</button>
                      </h3>
                      <p>3 piece roti with panner sabji</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-img">
                      <img src={dahi} alt="dahi" />
                    </div>
                    <div className="menu-text">
                      <h3>
                        <span>DAHI</span>{" "}
                        <button className="btn"> rs-15</button>
                      </h3>
                      <p>Dahi</p>
                    </div>
                  </div>
                  <div className="menu-item">
                    <div className="menu-img">
                      <img src={bhaja1} alt="bhaja" />
                    </div>
                    <div className="menu-text">
                      {" "}
                      <h3>
                        <span>BHAJA</span>{" "}
                        <button className="btn"> rs-10</button>
                      </h3>
                      <p>Vaja</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />/
    </div>
  );
};

export default Veg;
