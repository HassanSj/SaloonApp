import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";
import $ from "jquery";
import "../assets/css/textanimate.css";
import { Button } from "reactstrap";
import "../assets/css/argon-dashboard.css?v=2.0.4";
function Transactions() {
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

  const [getbooking, setBooking] = useState([]);
  const [getmembership, setMembership] = useState([]);
  const [getwallet, setWallet] = useState([]);
  const [getwithdraw, setWithdraw] = useState([]);

  const Navigate = useNavigate();

  const booking = async () => {
    const res = await fetch("http://localhost:1337/transactions/booking", {
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
      setBooking(data);
      console.log("get data");
    }
  };

  const membership = async () => {
    const res = await fetch("http://localhost:1337/transactions/membership", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data1 = await res.json();
    console.log(data1);

    if (res.status === 422 || !data1) {
      console.log("error ");
    } else {
      setMembership(data1);
      console.log("get data");
    }
  };

  const wallet = async () => {
    const res = await fetch("http://localhost:1337/transactions/wallet", {
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
      setWallet(data);
      console.log("get data");
    }
  };

  const withdraw = async () => {
    const res = await fetch("http://localhost:1337/transactions/withdraw", {
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
      setWithdraw(data);
      console.log("get data");
    }
  };

  function redirect() {
    Navigate("/");
  }
  const styles = {
    btn_group_button: {
      color: "white",
      padding: "10px 24px",
      cursor: "pointer",
      float: "left",
      marginLeft: "452px",
    },
    btn_group_after: {
      content: '""',
      clear: "both",
      display: "table",
    },
    btn_group_button_not__last_child: {
      borderRight: "none",
    },
    btn_group_button_hover: {
      backgroundColor: "#3e8e41",
    },
  };
  $(function () {
    $("body").on("click", ".btn", function () {
      $("#content div").hide();

      var target = "#" + $(this).data("target");
      $(target).show();
    });
  });
  useEffect(() => {
    booking();
    membership();
    wallet();
    withdraw();
  }, []);

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
              <a className="nav-link ">
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
              <a className="nav-link">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="/saloons">Saloons Management</NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                  <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <NavLink to="/services">Services</NavLink>
              </a>
            </li>{" "}
            <li className="nav-item">
              <a className="nav-link active">
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
                <NavLink to="/transfers"> Transfers</NavLink>
              </a>
            </li>
            <li className="nav-item mt-3">
              <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">
                Account pages
              </h6>
            </li>
            <li className="nav-item">
              <a className="nav-link ">
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
        <div className="container position-sticky z-index-sticky top-0">
          <div className="row">
            <div className="col-12">
              <nav
                className="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4"
                style={{ marginTop: "-18px !important" }}
              >
                <div className="container-fluid">
                  <a
                    className="navbar-brand font-weight-bolder ms-lg-0 ms-3 "
                    href="/Dashboard"
                  >
                    ProgramminStudio
                  </a>
                  <button
                    className="navbar-toggler shadow-none ms-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navigation"
                    aria-controls="navigation"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon mt-2">
                      <span className="navbar-toggler-bar bar1" />
                      <span className="navbar-toggler-bar bar2" />
                      <span className="navbar-toggler-bar bar3" />
                    </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navigation">
                    <ul className="navbar-nav mx-auto"></ul>
                    <ul className="navbar-nav d-lg-block d-none">
                      <li className="nav-item">
                        <a
                          style={{ color: "white" }}
                          href="/"
                          className="btn btn-sm mb-0 me-1 btn-primary"
                        >
                          LogOut
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              {/* End Navbar */}
            </div>
          </div>
        </div>

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
                  <h5 className="mb-1">Transactions List</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-4">
          <div className="row">
            <div className="col-md-8">
              <div className="btn-group" style={styles.btn_group_button}>
                <Button
                  color="primary"
                  outline
                  type="button"
                  className="btn"
                  data-target="table1"
                >
                  Booking Transactions
                </Button>

                <Button
                  color="info"
                  outline
                  type="button"
                  className="btn"
                  data-target="table2"
                >
                  Membership Transactions
                </Button>
                <Button
                  color="success"
                  outline
                  type="button"
                  className="btn"
                  data-target="table3"
                >
                  Deposit
                </Button>

                <Button
                  color="warning"
                  outline
                  type="button"
                  className="btn"
                  data-target="table4"
                >
                  WithDraw
                </Button>
              </div>
              <div
                id="content"
                className="card"
                style={{
                  width: "148%",
                  marginLeft: "24px",
                  fontSize: "larger",
                  backgroundColor: "#e3e3e3 !important",
                }}
              >
                <div className="card-header pb-0" id="table1">
                  <div className="d-flex align-items-center">
                    <table className="table">
                      <thead>
                        <tr className="table-dark">
                          <th>Id</th>
                          <th>BookingId</th>
                          <th>Saloon Id</th>
                          <th>Customer Id</th>
                          <th>Saloon Name</th>
                          <th>Customer Name</th>
                          <th>Amount</th>
                          <th>Refund</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getbooking.map((element, id) => {
                          return (
                            <>
                              <tr>
                                <th>{element.id}</th>
                                <th>{element.bid}</th>
                                <th>{element.saloon_id}</th>
                                <th>{element.customer_id}</th>
                                <th>{element.sname}</th>
                                <th>
                                  {element.first_name + element.last_name}
                                </th>
                                <th>{element.amount}</th>
                                <th>{element.refund}</th>
                                <th>{element.created_at}</th>
                                <th>{element.status}</th>

                                <td className="align-middle  text-sm">
                                  <button
                                    style={{
                                      padding: "0",
                                      border: "none",
                                      background: "none",
                                    }}
                                  >
                                    <span className="badge badge-sm bg-gradient-danger">
                                      Delete
                                    </span>
                                  </button>
                                  <NavLink to={`edit/${element._id}`}>
                                    <button
                                      style={{
                                        padding: "0",
                                        border: "none",
                                        background: "none",
                                      }}
                                    >
                                      <span className="badge badge-sm bg-gradient-success">
                                        Edit
                                      </span>
                                    </button>
                                  </NavLink>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-header pb-0" id="table2">
                  <div className="d-flex align-items-center">
                    <table className="table">
                      <thead>
                        <tr className="table-dark">
                          <th>Id</th>
                          <th>MemberShipId</th>
                          <th>Saloon Id</th>
                          <th>Saloon Name</th>
                          <th>Type</th>
                          <th>Package id</th>
                          <th>Amount</th>
                          <th>Refund</th>
                          <th>Date</th>
                          <th>status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getmembership.map((element, id) => {
                          return (
                            <>
                              <tr>
                                <th></th>
                                <th>{element.id}</th>
                                <th>{element.saloon_id}</th>
                                <th>{element.SaloonName}</th>
                                <th>{element.business_type_id}</th>
                                <th>{element.package_id}</th>
                                <th>{element.price}</th>
                                <th></th>
                                <th>{element.created_at}</th>

                                <td className="align-middle  text-sm">
                                  {/* <img src={element.image}/> */}
                                  <button
                                    style={{
                                      padding: "0",
                                      border: "none",
                                      background: "none",
                                    }}
                                  >
                                    <span className="badge badge-sm bg-gradient-danger">
                                      Delete
                                    </span>
                                  </button>
                                  <NavLink to={`edit/${element._id}`}>
                                    {" "}
                                    <button
                                      style={{
                                        padding: "0",
                                        border: "none",
                                        background: "none",
                                      }}
                                    >
                                      <span className="badge badge-sm bg-gradient-success">
                                        Edit
                                      </span>
                                    </button>
                                  </NavLink>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-header pb-0" id="table3">
                  <div className="d-flex align-items-center">
                    <table className="table">
                      <thead>
                        <tr className="table-dark">
                          <th>Id</th>
                          <th>BookingId</th>
                          <th>Customer Id</th>
                          <th>Customer Name</th>

                          <th>Saloon Id</th>
                          <th>Saloon Name</th>

                          <th>Wallet Id</th>
                          <th>Amount</th>
                          <th>Refund</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getwallet.map((element, id) => {
                          return (
                            <>
                              <tr>
                                <th>{element.id}</th>
                                <th>{element.bid}</th>

                                <th>{element.customer_id}</th>
                                <th>{element.cname}</th>
                                <th>{element.saloon_id}</th>
                                <th>{element.sname}</th>
                                <th>{element.wallet_id}</th>
                                <th>{element.amount}</th>
                                <th>{element.refund}</th>
                                <th>{element.created_at}</th>
                                <th>{element.status}</th>

                                <td className="align-middle  text-sm">
                                  {/* <img src={element.image}/> */}
                                  <button
                                    style={{
                                      padding: "0",
                                      border: "none",
                                      background: "none",
                                    }}
                                  >
                                    <span className="badge badge-sm bg-gradient-danger">
                                      Delete
                                    </span>
                                  </button>
                                  <NavLink to={`edit/${element._id}`}>
                                    {" "}
                                    <button
                                      style={{
                                        padding: "0",
                                        border: "none",
                                        background: "none",
                                      }}
                                    >
                                      <span className="badge badge-sm bg-gradient-success">
                                        Edit
                                      </span>
                                    </button>
                                  </NavLink>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="card-header pb-0" id="table4">
                  <div className="d-flex align-items-center">
                    <table className="table">
                      <thead>
                        <tr className="table-dark">
                          <th>Id</th>
                          <th>Saloon Id</th>
                          <th>Saloon Name</th>
                          <th>Business Type</th>
                          <th>Wallet Id</th>
                          <th>Amount</th>
                          <th>Refund</th>
                          <th>Date</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {getwithdraw.map((element, id) => {
                          return (
                            <>
                              <tr>
                                <th>{element.id}</th>
                                <th>{element.saloonid}</th>
                                <th>{element.SaloonName}</th>
                                <th>{element.business_type_id}</th>
                                <th>{element.wallet_id}</th>
                                <th>{element.amount}</th>
                                <th>{element.refund}</th>
                                <th>{element.created_at}</th>
                                <th>{element.status}</th>

                                <td className="align-middle  text-sm">
                                  {/* <img src={element.image}/> */}
                                  <button
                                    style={{
                                      padding: "0",
                                      border: "none",
                                      background: "none",
                                    }}
                                  >
                                    <span className="badge badge-sm bg-gradient-danger">
                                      Delete
                                    </span>
                                  </button>
                                  <NavLink to={`edit/${element._id}`}>
                                    {" "}
                                    <button
                                      style={{
                                        padding: "0",
                                        border: "none",
                                        background: "none",
                                      }}
                                    >
                                      <span className="badge badge-sm bg-gradient-success">
                                        Edit
                                      </span>
                                    </button>
                                  </NavLink>
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
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

export default Transactions;
