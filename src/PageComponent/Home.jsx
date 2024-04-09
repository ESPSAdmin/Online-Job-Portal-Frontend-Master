import React from "react";
import header_img from "../images/happy-successful-businessman (1).jpg";
import { companies } from "../content/CardsData";
import { CategoryCard } from "../CategoryComponent";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="container-fluid">
        <div className="container-sm py-4">
          <div className="row align-items-center py-2 rounded">
            <div className="col-lg-8">
              <h1 className="display-2 px-3 text-primary fw-bold">
                Let’s build your career from here
              </h1>
              <ul className="d-lg-flex flex-column">
                <li className="h5">Discover exciting opportunities.</li>
                <li className="h5">Build your future.</li>
                <li className="h5">Find your dream job.</li>
              </ul>
              <div className="col d-lg-flex gap-3 px-3">
                <button className="btn btn-primary rounded-pill px-4 h5 ms-2">Hire Staff</button>
                <button onClick={() => navigate('/jobs')} className="btn btn-outline-secondary rounded-pill px-4 h5">Find Job</button>
              </div>
            </div>
            <div className="col-lg d-none d-lg-block">
              <img src={header_img} className="img-fluid rounded" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-sm py-4">
          <p className='py-2'><h2 className='text-primary hr-bar'>Top companies are hiring</h2></p>
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
          
        </div>
      </div>
      <CategoryCard />
      {/* <HomePage /> */}
    </>
  );
};

export default Home;
