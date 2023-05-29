import "./index.css";

const Success = (props) => {
  const { wheatherData, renderSearch } = props;

  return (
    <>
      {renderSearch()}
      <div className="d-flex justify-content-between align-items-center w-100 mt-5 mb-5">
        <div className="d-flex align-items-center  ">
          <h1 className="temperature">{wheatherData.temperature} &deg; C</h1>
          <h1 className="mr-2 ml-2 temperature"> {`|`} </h1>
          <h1 className="temperature place_name">
            {wheatherData.name} , {wheatherData.country}
          </h1>
        </div>
        <div>
          <img
            src={wheatherData.icon}
            alt="weather-icon"
            className="wheather-icon"
          />
          <p className="condition">{wheatherData.condition}</p>
        </div>
      </div>
      <div className=" details-container d-flex justify-content-between w-100">
        <div className="content-container">
          <h1
            className="
            content-heading"
          >
            {wheatherData.feelsLike} &deg; C
          </h1>
          <p className="content-para">Feels like</p>
        </div>

        <div className="content-container">
          <h1
            className="
            content-heading"
          >
            {wheatherData.humidity}%
          </h1>
          <p className="content-para">Humidity</p>
        </div>

        <div className="content-container">
          <h1
            className="
            content-heading"
          >
            {wheatherData.windSpeed} MPH
          </h1>
          <p className="content-para">Wind Speed</p>
        </div>

        <div className="content-container">
          <h1
            className="
            content-heading"
          >
            {wheatherData.farenhiet} &deg; F
          </h1>
          <p className="content-para">Fahrenheit</p>
        </div>
        <div className="content-container">
          <h1
            className="
            content-heading"
          >
            {wheatherData.pressure}
          </h1>
          <p className="content-para">Pressure (mb)</p>
        </div>
        <div className="content-container">
          <h1
            className="
            content-heading"
          >
            {wheatherData.airQuality}
          </h1>
          <p className="content-para">Air Quality (co)</p>
        </div>
      </div>
    </>
  );
};

export default Success;
