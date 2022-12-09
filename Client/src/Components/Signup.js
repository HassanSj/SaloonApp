import { useState } from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/signup-cover.png";
import "../assets/css/nucleo-icons.css";
import "../assets/css/nucleo-svg.css";
import "../assets/css/argon-dashboard.css?v=2.0.4";
function Signup() {
  const history = useNavigate();
  const Navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function registerUser(event) {
    event.preventDefault();

    const response = await fetch("http://localhost:1337/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      alert("Thanks for Joining Us");
      window.location.href = "/login";
    }
  }
  function redirect() {
    Navigate("/");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100 shadow-none my-3 navbar-transparent mt-4">
        <div className="container">
          <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 text-white">
            Programmin Studio
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
                  href="https://www.programinstudio.com"
                  className="btn btn-sm mb-0 me-1 bg-gradient-light"
                >
                  Get Quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End Navbar */}
      <main className="main-content  mt-0">
        <div
          className="page-header align-items-start min-vh-50 pt-5 pb-11 m-3 border-radius-lg"
          style={{ backgroundImage: `url(${img})`, backgroundPosition: "top" }}
        >
          <span className="mask bg-gradient-dark opacity-6" />
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 text-center mx-auto">
                <h1 className="text-white mb-2 mt-5">Welcome to BrabieMe</h1>
                <p className="text-lead text-white">Join Us Today</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
            <div className="col-xl-4 col-lg-5 col-md-7 mx-auto">
              <div className="card z-index-0">
                <div className="card-header text-center pt-4">
                  <h5>Register with</h5>
                </div>
                <div className="card-body">
                  <form onSubmit={registerUser}>
                    <div className="mb-3">
                      <input
                        value={name}
                        className="form-control"
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Name"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        value={email}
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        value={password}
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                      />
                    </div>

                    <div className="text-center">
                      <input
                        className="btn bg-gradient-dark w-100 my-4 mb-2"
                        type="submit"
                        value="Register"
                      />
                    </div>
                    <p className="text-sm mt-3 mb-0">
                      Already have an account?{" "}
                      <a
                        style={{ cursor: "pointer" }}
                        onClick={redirect}
                        className="text-dark font-weight-bolder"
                      >
                        Sign in
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center mb-4 mt-2">
              <a target="_blank" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-dribbble" />
              </a>
              <a target="_blank" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-twitter" />
              </a>
              <a target="_blank" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-instagram" />
              </a>
              <a target="_blank" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-pinterest" />
              </a>
              <a target="_blank" className="text-secondary me-xl-4 me-4">
                <span className="text-lg fab fa-github" />
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-8 mx-auto text-center mt-1">
              <p className="mb-0 text-secondary">
                Copyright © BrabieMe by ProgramminStudio
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Signup;
