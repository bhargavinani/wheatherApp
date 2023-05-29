import "./index.css";

const Navbar = () => {
  return (
    <nav className=" navbar-position navbar navbar-expand-lg navbar-light bg-light position-sticky">
      <a className=" logo navbar-brand font-weight-bold " href="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
          width="30"
          height="30"
          className="d-inline-block align-top mr-3"
          alt="wheather logo"
        />
        Weather App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbarNav"
      >
        <ul className="navbar-nav ">
          <li className="nav-item active">
            <a className="nav-link font-weight-bold" href="/">
              Home
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link font-weight-bold" href="/location">
              Location
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
