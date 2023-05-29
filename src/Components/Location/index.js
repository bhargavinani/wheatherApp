import React from "react";
import { ThreeDots } from "react-loader-spinner";
import Success from "../Success/index";

import "./index.css";

const apiStatusConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  inProgress: "IN_PROGRESS",
};

class Location extends React.Component {
  state = {
    apiStatus: apiStatusConstants.progess,
    location: "Bengaluru",
    wheatherData: "",
    showMore: false,
  };

  componentDidMount() {
    console.log("component did mount");
    this.fetchWheather();
  }

  fetchWheather = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    });

    const options = {
      method: "GET",
    };

    const { location } = this.state;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=302d893616634376bcb104102232705&q=${location}&aqi=yes`;
    const response = await fetch(apiUrl, options);

    if (response.ok) {
      const fetchedData = await response.json();
      console.log(fetchedData);

      const updatedData = {
        name: fetchedData.location.name,
        country: fetchedData.location.country,
        temperature: fetchedData.current.temp_c,
        farenhiet: fetchedData.current.temp_f,
        condition: fetchedData.current.condition.text,
        icon: `https:${fetchedData.current.condition.icon}`,
        humidity: fetchedData.current.humidity,
        windSpeed: fetchedData.current.wind_mph,
        feelsLike: fetchedData.current.feelslike_c,
        airQuality: parseInt(fetchedData.current.air_quality.co, 10),
        pressure: fetchedData.current.pressure_in,
      };

      console.log(updatedData);
      this.setState({
        wheatherData: updatedData,
        apiStatus: apiStatusConstants.success,
        location: "",
      });
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
        location: "",
      });
    }
  };

  onEnterSearchInput = (event) => {
    if (this.state.location !== "" && event.key === "Enter") {
      this.fetchWheather();
    }
  };

  onClickSearchIcon = () => {
    if (this.state.location !== "") {
      this.fetchWheather();
    }
  };

  onChangeSearchInput = (event) => {
    this.setState({ location: event.target.value });
  };

  renderLoadingView = () => (
    <>
      {this.renderSearch()}
      <div className="loading-container">
        <ThreeDots type="ThreeDots" color="white" height="50" width="50" />
      </div>
    </>
  );

  renderFailureView = () => (
    <>
      {this.renderSearch()}
      <div className=" failure-container">
        <h1 className="failure-text">Please enter the correct location </h1>
      </div>
    </>
  );

  renderSearch = () => {
    const { location } = this.state;
    return (
      <div className="input-container">
        <input
          value={location}
          type="text"
          className="input-element"
          placeholder="Enter the location"
          onChange={this.onChangeSearchInput}
          onKeyDown={this.onEnterSearchInput}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi bi-search search"
          viewBox="0 0 16 16"
          onClick={this.onClickSearchIcon}
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
    );
  };

  renderSuccessView = () => {
    const { wheatherData } = this.state;
    return (
      <Success wheatherData={wheatherData} renderSearch={this.renderSearch} />
    );
  };

  renderFetchDetails = () => {
    const { apiStatus } = this.state;
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView();
      case apiStatusConstants.failure:
        return this.renderFailureView();
      case apiStatusConstants.inProgress:
        return this.renderLoadingView();
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="outer-container">
        <div className="inner-container">{this.renderFetchDetails()}</div>
      </div>
    );
  }
}

export default Location;
