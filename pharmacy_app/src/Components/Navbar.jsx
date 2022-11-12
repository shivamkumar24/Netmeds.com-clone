import Wellness from "./Wellness";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-info">
        <div className="container-fluid">
          <a className="navbar-brand fst-italic fw-bolder" href="#">
            lifepharmacy.com
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
              <li className="nav-item">
                <a
                  className="nav-link active fw-bold"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Medicine
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      All Medicines
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Previously Ordered Medicines
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                {/* <a class="nav-link fw-bold">Wellness</a> */}
                <Link
                  to="/Wellness"
                  style={{
                    margin: "10px",
                    fontWeight: "bold",
                    opacity: "0.7",
                    color: "whitesmoke",
                    textDecoration: "none",
                  }}
                >
                  Wellness
                </Link>
              </li>

              <li className="nav-item">
                {/* <a className="nav-link fw-bold" href="#">
                  Lab Tests
                </a> */}
                <Link
                  to="/LabTest"
                  style={{
                    margin: "10px",
                    fontWeight: "bold",
                    opacity: "0.7",
                    color: "whitesmoke",
                    textDecoration: "none",
                  }}
                >
                  LabTest
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Beauty
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Personal care
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Makeup
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Hair
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Skin Care
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Tools & Appliances
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Mom & Baby
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Fragrances
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Men's Grooming
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-bold"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Health Care
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Health Library
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      PatientsAlike
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item fw-bold" href="#">
                      Cancer Awareness
                    </a>
                  </li>
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active fw-bold" aria-current="page" href="#">
                  COVID Essentials
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">
                  Diabetes
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">
                  Eyewear
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">
                  Ayurvedic
                </a>
              </li>
              <li class="nav-item fw-bold">
                <a class="nav-link" href="#">
                  Homeopathy
                </a>
              </li>
              <li class="nav-item fw-bold">
                <a class="nav-link" href="#">
                  Fitness
                </a>
              </li>
              <li class="nav-item fw-bold">
                <a class="nav-link" href="#">
                  Mom & Baby
                </a>
              </li>
              <li class="nav-item fw-bold">
                <a class="nav-link" href="#">
                  Surgicals
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">
                  Sexual Wellness
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link fw-bold" href="#">
                  Treatments
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
