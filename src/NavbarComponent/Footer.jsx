import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="">
      <hr className="mb-4" />
      <div className="container my-5">
        <footer className="text-center text-lg-start text-color">
          <div className="container-fluid p-4 pb-0">
            <section className="">
              <div className="row">
                <div className="col-lg col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase text-main">Esps Careers</h5>

                  <p>
                    Welcome to Esps Careers, where career dreams come to life.
                    Our user-friendly platform simplifies job searching,
                    offering a seamless experience for both job seekers and
                    employers.
                  </p>
                </div>

                <div className="col-lg-2 col-md-6 col-4 mb-4 mb-md-0">
                  <ul className="nav flex-column list-unstyled mb-0">
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Careers
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Employer Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Sitemap
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-2 col-md-6 col-4 mb-4 mb-md-0">
                  <ul className="nav flex-column list-unstyled mb-0">
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Help center
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Notices
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Grienvance
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Report issue
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <ul className="nav flex-column list-unstyled mb-0">
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Privacy policy
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Terms & conditions
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Fraud alert
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#!" className="text-color nav-link">
                        Trust & safety
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <hr className="mb-4" />

            <section className="">
              <p className="d-flex justify-content-center align-items-center">
                <span className="me-3 text-color">Login from here</span>
                <Link to="/user/login" className="active">
                  <button type="button" className="btn-main">
                    Log in
                  </button>
                </Link>
              </p>
            </section>

            <hr className="mb-4" />
          </div>

          <div className="text-center">
            © 2022-{new Date().getFullYear()} Copyright:
            <a
              className="text-color-3"
              href="https://spsolutions.org.nz"
              target="_blank"
              rel="noreferrer"
            >
              spsolutions.org.nz
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
