import { Link } from "react-router-dom";
import WheatherImage from "../../Assests";

import "./index.css";

const Home = () => {
  return (
    <div className="   outer-Home-contianer">
      <div className=" shadow-lg inner-Home-contianer">
        <div className="home-content-container">
          <h1 className="Home-heading">Weather App</h1>
          <p className="home-para">
            {" "}
            Get accurate weather instantly with our user-friendly weather app.
            Enter your location and stay informed about temperature, humidity,
            wind speed, and more. Plan your day with confidence using our
            reliable and easy-to-use app.
          </p>
          <Link to={"/location"}>
            <button className="home-button">Get Started</button>
          </Link>
        </div>
        <div className="home-image-container">
          <img className="home-image" src={WheatherImage} alt="wheather" />
        </div>
      </div>
    </div>
  );
};

export default Home;
