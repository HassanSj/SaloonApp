import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/textanimate.css";
import { withSwalInstance } from "sweetalert2-react";
import swal from "sweetalert2";
import "../assets/css/argon-dashboard.css?v=2.0.4";

import withReactContent from "sweetalert2-react-content";
function SetupRewardPoint() {
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
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const Navigate = useNavigate();
  const [earning, setEarning] = useState("");
  const [spending, setSpending] = useState("");

  async function addRecord(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/reward", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        earning,
        spending,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (data.status === "ok") {
      window.location.href = "/reward";
    }
  }

  const getdata = async () => {
    const res = await fetch("http://localhost:1337/reward/getdata", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const styles = {
    form: {
      display: "block",
      width: "85%",
      padding: "0.5rem 0.75rem",
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.4rem",
      color: "#495057",
      backgroundColor: "#fff",
      backgroundClip: "padding - box",
      border: "1px solid #d2d6da",
      appearance: "none",
      borderRadius: "0.5rem",
      transition: " box-shadow 0.15s ease, border-color 0.15s ease",
      marginTop: "15px",
      marginLeft: "18px",
    },
    table: {
      marginLeft: "-11px",
    },
    card: {
      width: "115%",
    },
    label: {
      fontSize: "14px",
      marginLeft: "22px",
    },
  };

  return (
    <div>
      <div
        className="position-absolute w-100 min-height-300 top-0"
        style={{
          backgroundImage: "url(" + images["profile-layout-header.jpg"] + ")",
          backgroundPositionY: "50%",
        }}
      >
        <span className="mask bg-primary opacity-6" />
      </div>
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
              <a className="nav-link">
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
              <a className="nav-link">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card grid-58 text-success text-sm opacity-10" />
                </div>
                <NavLink to="/managecategory">Manage Category </NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link ">
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
              <a className="nav-link active">
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
              <a className="nav-link">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="/customers">Customer Management </NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-world-2 grid-58 text-success text-sm opacity-10" />
                </div>
                <NavLink to="/clinics">Clinics Management </NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="/saloons">Saloons Management </NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-credit-card grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="/transactions">Transactions</NavLink>
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
          <a
            style={{
              btn: {
                display: "flex",
                flex: "1",
                justifyContent: "center",
                alignItems: "center",
                width: "50px",
                height: "50px",
                transition: "all 0.2s",
                borderLeft: "solid 1px #cccccc",

                "&:hover": {
                  background: "#efefef",
                },
                "&:last-child": {
                  borderRight: "solid 1px #cccccc",
                },
              },
            }}
            href="www.programinstudio.com"
            className="btn btn-dark btn-sm w-100 mb-3"
          >
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
              <h6 className="font-weight-bolder text-white mb-0">Users</h6>
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
                    <button
                      style={{
                        color: "white",
                        padding: "0",
                        border: "none",
                        background: "none",
                      }}
                    >
                      <span className="d-sm-inline d-none">Log Out</span>
                    </button>
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
        <div className="card shadow-lg mx-4 card-profile-bottom">
          <div className="card-body p-3">
            <div className="row gx-4">
              <div className="col-auto">
                <div className="avatar avatar-xl position-relative">
                  <img
                    src={images["db.jpg"]}
                    alt="profile_image"
                    className="w-100 border-radius-lg shadow-sm"
                  />
                </div>
              </div>
              <div className="col-auto my-auto">
                <div className="h-100">
                  <h5 className="mb-1">Setup Reward Point</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-4">
          <div className="row">
            <div
              style={{ width: "34%", marginLeft: "14px", marginTtop: "19px" }}
              className="col-md-4"
            >
              <div className="card card-profile">
                <h1 style={{ fontFamily: "revert", fontSize: "xx-large" }}>
                  Setup Reward Point
                </h1>

                <div className="box p-3 mb-3 mt-5">
                  <form style={{ marginTop: "-45px" }} onSubmit={addRecord}>
                    <div class="form-group">
                      <label style={styles.label}>Earning (1 AED = RP)</label>
                      <input
                        type="text"
                        class="form  mb-4"
                        name="name"
                        required
                        value={earning}
                        onChange={(e) => setEarning(e.target.value)}
                        style={styles.form}
                      />
                      <label style={styles.label}>Spending (1 RP = AED)</label>
                      <input
                        type="text"
                        class="form  mb-4"
                        name="name"
                        required
                        value={spending}
                        style={styles.form}
                        onChange={(e) => setSpending(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      class="btn btn-primary btn-block mt-4"
                    >
                      Insert Record
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer pt-3  ">
            <div className="container-fluid">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col-lg-6 mb-lg-0 mb-4">
                  <div className="copyright text-center text-sm text-muted text-lg-start">
                    CopyRight @ 2022{" "}
                    <a style={{ color: "#5e72e4" }} href="https://mui.com/">
                      <strong>All Rights Reserved</strong>
                    </a>{" "}
                    by
                    <a
                      href="https://www.creative-tim.com"
                      className="font-weight-bold"
                      target="_blank"
                    >
                      {" "}
                      Programmin Studio
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        {/* Github buttons */}
        {/* Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc */}
      </main>
    </div>
  );
}
export default SetupRewardPoint;
