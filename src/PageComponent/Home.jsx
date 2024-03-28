import React from "react";
import header_img from "../images/happy-successful-businessman (1).jpg";
import { companies } from "../content/CardsData";
import HomePage from "./HomePage";
const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container-sm py-4">
          <div className="row align-items-center bg-bright py-2 rounded">
            <div className="col-lg-8">
              <h1 className="display-2 px-3 text-main fw-bold">
                Let’s build your career from here
              </h1>
              <ul className="d-lg-flex align-items justify-content-around">
                <li className="h5">Discover exciting opportunities.</li>
                <li className="h5">Build your future.</li>
                <li className="h5">Find your dream job.</li>
              </ul>
              <div className="col d-lg-flex gap-3 px-3">
                <button className="btn-main py-3 h5 ms-2">Hire Employee</button>
                <button className="btn-second py-3 h5">Find Job</button>
              </div>
            </div>
            <div className="col-lg d-none d-lg-block">
              <img src={header_img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-sm py-4">
          <h1 className="text-center display-4 fw-bold text-main">
            Top companies are hiring
            <div className="row align-items-center justify-content-center py-4">
              {companies.map((item, idx) => (
                <div key={idx} className="col-lg-3 mb-3">
                  <img
                    src={item.image}
                    alt=""
                    className="img-fluid"
                    height={20}
                    width={200}
                  />
                </div>
              ))}
            </div>
          </h1>
        </div>
      </div>
      <HomePage />
    </>
  );
};

export default Home;
