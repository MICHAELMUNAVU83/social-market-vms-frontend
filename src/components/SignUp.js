import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdMarkEmailUnread } from "react-icons/md";

function SignUp({ setStoredToken }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/api/v1/users", {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          email,
          password,
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        console.log(data);
        setStoredToken(data.token);
      });

    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container vh-100">
        <div className="row d-flex justify-content-center align-items-center vh-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label fw-bold"
                            for="form3Example3c"
                          >
                            Name
                          </label>
                          <div className="d-flex ">
                            <FaUserAlt size={40} />
                            <input
                              type="text"
                              name="email"
                              className="form-control mx-2"
                              placeholder="Enter your name"
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label fw-bold"
                            for="form3Example3c"
                          >
                            Email address
                          </label>
                          <div className="d-flex ">
                            <MdMarkEmailUnread size={40} />
                            <input
                              type="text"
                              name="email"
                              className="form-control mx-2"
                              value={email}
                              placeholder="Enter a valid email address"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <label
                            className="form-label fw-bold"
                            for="form3Example3c"
                          >
                            Password
                          </label>
                          <div className="d-flex ">
                            <RiLockPasswordFill size={40} />
                            <input
                              type="password"
                              name="email"
                              className="form-control mx-2"
                              value={password}
                              placeholder="Enter a valid password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Sign up
                        </button>
                      </div>

                      <div className="form-check d-flex justify-content-center mb-5">
                        Already have an account ?
                        <Link className="mx-2" to="/login">
                          Login
                        </Link>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
