import { useState } from "react";
import img from "../assets/img/mern.jpg";
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/textanimate.css";
import "../assets/css/argon-dashboard.css?v=2.0.4";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  async function loginUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/dashboard";
    } else {
      alert("Please check your username and password");
    }
  }
  function redirect() {
    Navigate("/register");
  }
  return (
    <>
      <div className="container position-sticky z-index-sticky top-0">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4">
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
                        onClick={redirect}
                        className="btn btn-sm mb-0 me-1 btn-primary"
                      >
                        Get Started
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
      <main className="main-content  mt-0">
        <section>
          <div className="page-header min-vh-100">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div className="card card-plain">
                    <div className="card-header pb-0 text-start">
                      <h4 className="font-weight-bolder">Sign In</h4>
                      <p className="mb-0">
                        Enter your email and password to sign in
                      </p>
                    </div>
                    <div className="card-body">
                      <form onSubmit={loginUser}>
                        <div className="mb-3">
                          <input
                            value={email}
                            className="form-control form-control-lg"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="Email"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            value={password}
                            className="form-control form-control-lg"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                          />
                        </div>
                        <div className="text-center">
                          <input
                            type="submit"
                            className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0"
                            value="Login"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Don't have an account?
                        <a
                          style={{ cursor: "pointer" }}
                          onClick={redirect}
                          className="text-primary text-gradient font-weight-bold"
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                  <div
                    className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden"
                    style={{ backgroundImage: `url(${img})` }}
                  >
                    <h5
                      style={{
                        color: "white",
                        marginTop: "182px",
                        whiteSpace: "break-spaces",
                        marginLeft: "31px;",
                      }}
                    >
                      <span>There </span>
                      <span>are </span>
                      <span>no </span>
                      <span>limits </span>
                      <span>to </span>
                      <span>what </span>
                      <span>you </span>
                      <span>can </span>
                      <span>accomplish, </span>
                      <span>except </span>
                      <span>the </span>
                      <span>limits </span>
                      <span>you </span>
                      <span>place </span>
                      <span>on </span>
                      <span>your </span>
                      <span>own </span>
                      <span>thinking. </span>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Login;
