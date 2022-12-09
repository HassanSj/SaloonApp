import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/textanimate.css";
import "../assets/css/argon-dashboard.css?v=2.0.4";

const Edit = () => {
  const Navigate = useNavigate;
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

  const { updata, setUPdata } = useContext();

  const history = useNavigate("");

  const [inpval, setINP] = useState({
    name: "",
    email: "",
    city: "",
    course: "",
    university: "",
    instructor: "",
    cellno: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(`http://localhost:1337/add/getuser/${id}`, {
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
      setINP(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const updateuser = async (e) => {
    e.preventDefault();

    const { name, email, city, course, university, instructor } = inpval;

    const res2 = await fetch(
      `http://localhost:1337/add/edit/updateuser/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          city,
          course,
          university,
          instructor,
        }),
      }
    );

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      history.push("/");
      setUPdata(data2);
      window.location.href = "/add";
    }
  };
  function redirect() {
    Navigate("/add");
  }

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
                <NavLink to="/Add">Users</NavLink>
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
              <h6 className="font-weight-bolder text-white mb-0">
                User Management
              </h6>
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
                      onClick={redirect}
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
                    src={images["team-2.jpg"]}
                    alt="profile_image"
                    className="w-100 border-radius-lg shadow-sm"
                  />
                </div>
              </div>
              <div className="col-auto my-auto">
                <div className="h-100">
                  <h5 className="mb-1">Add Record Here</h5>
                  <p className="mb-0 font-weight-bold text-sm">student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
          className="container-fluid "
        >
          <h1>Edit Record</h1>
          <form className="mt-4">
            <div
              style={{
                boxShadow: "0 0 2rem 0 rgb(136 152 170 / 15%)",
                width: "29%",
                marginLeft: "153px",
              }}
              className="row"
            >
              <div className="avatar avatar-xl position-relative">
                <img
                  src={inpval.image}
                  alt="profile_image"
                  onChange={setdata}
                  className="w-100 border-radius-lg shadow-sm"
                />
              </div>

              <div
                style={{ marginLeft: "-73px", marginTop: "72px", width: "83%" }}
                class="mb-3 col-lg-6 col-md-6 col-12"
              >
                <label for="exampleInputEmail1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={inpval.name}
                  onChange={setdata}
                  name="name"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div
                style={{ marginLeft: "1px", width: "83%" }}
                class="mb-3 col-lg-6 col-md-6 col-12"
              >
                <label for="exampleInputPassword1" class="form-label">
                  <strong>Email</strong>
                </label>
                <input
                  type="email"
                  value={inpval.email}
                  onChange={setdata}
                  name="email"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div
                style={{ marginLeft: "1px", width: "83%" }}
                class="mb-3 col-lg-6 col-md-6 col-12"
              >
                <label for="exampleInputPassword1" class="form-label">
                  City
                </label>
                <input
                  type="text"
                  value={inpval.city}
                  onChange={setdata}
                  name="city"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div
                style={{ marginLeft: "1px", width: "83%" }}
                class="mb-3 col-lg-6 col-md-6 col-12"
              >
                <label for="exampleInputPassword1" class="form-label">
                  Course
                </label>
                <input
                  type="text"
                  value={inpval.course}
                  onChange={setdata}
                  name="course"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div
                style={{ marginLeft: "1px", width: "83%" }}
                class="mb-3 col-lg-6 col-md-6 col-12"
              >
                <label for="exampleInputPassword1" class="form-label">
                  University
                </label>
                <input
                  type="text"
                  value={inpval.university}
                  onChange={setdata}
                  name="university"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div
                style={{ marginLeft: "1px", width: "83%" }}
                class="mb-3 col-lg-6 col-md-6 col-12"
              >
                <label for="exampleInputPassword1" class="form-label">
                  Instructor
                </label>
                <input
                  type="text"
                  value={inpval.instructor}
                  onChange={setdata}
                  name="instructor"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div
                style={{ marginLeft: "1px", width: "83%" }}
                class="mb-3 col-lg-6 col-md-6 col-12"
              >
                <label for="exampleInputPassword1" class="form-label">
                  Cell Number
                </label>
                <input
                  type="text"
                  value={inpval.cellno}
                  onChange={setdata}
                  name="cellno"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
            <button
              style={{
                cursor: "pointer",
                width: "9%",
                marginTop: "13px",
                marginLeft: "272px",
              }}
              type="submit"
              onClick={updateuser}
              class="btn btn-primary"
            >
              Submit
            </button>
          </form>

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
      </main>
    </div>
  );
};
export default Edit;
