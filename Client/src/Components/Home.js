import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Home() {
  const Navigate = useNavigate();
  const images = importAll(
    require.context("../assets/img/", false, /\.(png|jpe?g|svg)$/)
  );

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace("./", "")] = r(item);
    });
    return images;
  }

  function redirect() {
    Navigate("/");
  }
  return (
    <div>
      <div className="min-height-300 bg-primary position-absolute w-100" />
      <aside
        className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 "
        id="sidenav-main"
      >
        <div className="sidenav-header">
          <i
            className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          />
          <a
            className="navbar-brand m-0"
            href="https://programinstudio.com/"
            target="_blank"
          >
            <img
              src={
                "http://barbieme.programinstudio.com/public/admin/img/logo.svg"
              }
              className="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span className="ms-1 font-weight-bold">BarbieMe</span>
          </a>
        </div>
        <hr className="horizontal dark mt-0" />
        <div
          className="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                </div>
                <NavLink to="/Dashboard">Dashboard</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="/businesstype">Business Type</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card grid-58 text-success text-sm opacity-10" />
                </div>
                <NavLink to="/managecategory">Manage Category </NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-app grid-58 text-info text-sm opacity-10" />
                </div>
                <NavLink to="/setuppackage">Setup Package</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-world-2 grid-58 text-success text-sm opacity-10" />
                </div>
                <NavLink to="/teamsize">Setup Team Size</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="/setuppayment">Setup Payment Method</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-app grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="/reward">Setup Reward Point</NavLink>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-world-2 grid-58 text-success text-sm opacity-10" />
                </div>
                <NavLink to="/bookingmanagement">Booking Management </NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="/customers">Customer Management </NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="">Vendor Management </NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="">Finance</NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="">Transactions</NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to=""> Transfers</NavLink>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                Account pages
              </h6>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="./pages/profile.html">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-single-02 text-dark text-sm opacity-10" />
                </div>
                <NavLink to="/Profile">Profile</NavLink>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidenav-footer mx-3 ">
          <div className="card card-plain shadow-none" id="sidenavCard">
            <img
              className="w-50 mx-auto"
              src={images["icon-documentation.svg"]}
              alt="sidebar_illustration"
            />
            <div className="card-body text-center p-3 w-100 pt-0">
              <div className="docs-info">
                <h6 className="mb-0">Need help?</h6>
                <p className="text-xs font-weight-bold mb-0">
                  Please Visit{" "}
                  <a
                    style={{ color: "#5e72e4" }}
                    href="www.programinstudio.com"
                  >
                    Programmin Studio
                  </a>
                </p>
              </div>
            </div>
          </div>
          <a href target="_blank" className="btn btn-dark btn-sm w-100 mb-3">
            Documentation
          </a>
        </div>
      </aside>
      <main className="main-content position-relative border-radius-lg ">
        {/* Navbar */}
        <nav
          className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl "
          id="navbarBlur"
          data-scroll="false"
        >
          <div className="container-fluid py-1 px-3">
            <nav aria-label="breadcrumb">
              <h6 className="font-weight-bolder text-white mb-0">Dashboard</h6>
            </nav>
            <div
              className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
              id="navbar"
            >
              <div className="ms-md-auto pe-md-3 d-flex align-items-center"></div>
              <ul className="navbar-nav  justify-content-end">
                <li className="nav-item d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-white font-weight-bold px-0"
                  >
                    <i className="fa fa-user me-sm-1" />
                    <span onClick={redirect} className="d-sm-inline d-none">
                      Log Out
                    </span>
                  </a>
                </li>
                <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                  <a
                    href="javascript:;"
                    className="nav-link text-white p-0"
                    id="iconNavbarSidenav"
                  >
                    <div className="sidenav-toggler-inner">
                      <i className="sidenav-toggler-line bg-white" />
                      <i className="sidenav-toggler-line bg-white" />
                      <i className="sidenav-toggler-line bg-white" />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Navbar */}
        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                          Saloons
                        </p>
                        <h5 className="font-weight-bolder">2</h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                        <i
                          className="ni ni-world text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                          Clinics
                        </p>
                        <h5 className="font-weight-bolder">34</h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                        <i
                          className="ni ni-paper-diploma text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                          Customers
                        </p>
                        <h5 className="font-weight-bolder">20</h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                        <i
                          className="ni ni-cart text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6">
              <div className="card">
                <div className="card-body p-3">
                  <div className="row">
                    <div className="col-8">
                      <div className="numbers">
                        <p className="text-sm mb-0 text-uppercase font-weight-bold">
                          Earnings
                        </p>
                        <h5 className="font-weight-bolder">$1906.6</h5>
                      </div>
                    </div>
                    <div className="col-4 text-end">
                      <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                        <i
                          className="ni ni-cart text-lg opacity-10"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-5">
              <div className="container">
                <div id="demo" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="carousel-caption">
                        <p>
                          If Shai Reznik's TDD videos don't convince you to add
                          automated testing your code, I don't know what
                          will.This was the very best explanation of frameworks
                          for brginners that I've ever seen.
                        </p>
                        <img src="https://i.imgur.com/lE89Aey.jpg" />
                        <div id="image-caption">Nick Doe</div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-caption">
                        <p>
                          If Shai Reznik's TDD videos don't convince you to add
                          automated testing your code, I don't know what
                          will.This was the very best explanation of frameworks
                          for brginners that I've ever seen.
                        </p>
                        <img
                          src="https://i.imgur.com/QptVdsp.jpg"
                          className="img-fluid"
                        />
                        <div id="image-caption">Cromption Greves</div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="carousel-caption">
                        <p>
                          If Shai Reznik's TDD videos don't convince you to add
                          automated testing your code, I don't know what
                          will.This was the very best explanation of frameworks
                          for brginners that I've ever seen.
                        </p>
                        <img
                          src="https://i.imgur.com/jQWThIn.jpg"
                          className="img-fluid"
                        />
                        <div id="image-caption">Harry Mon</div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#demo"
                    data-slide="prev"
                  >
                    <i className="fas fa-arrow-left" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#demo"
                    data-slide="next"
                  >
                    <i className="fas fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Home;
